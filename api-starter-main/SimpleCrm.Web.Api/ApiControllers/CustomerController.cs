using Microsoft.AspNetCore.Mvc;
using SimpleCrm.Web.Api.Models;
using System;
using System.Linq;
using SimpleCrm.WebApi.Filters;
using Microsoft.AspNetCore.Routing;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;

namespace SimpleCrm.Web.Api.ApiControllers
{   
    [Route("api/customers")]
    [Authorize(Policy="ApiUser")]
    public class CustomerController : Controller
    {
        private readonly ICustomerData _customerData;
        private readonly ILogger<CustomerController> _logger;
        private readonly LinkGenerator _linkGenerator;

         public CustomerController(ICustomerData customerData,
             ILogger<CustomerController> logger,
             LinkGenerator linkGenerator
             )
        {
            _customerData = customerData;
            _logger = logger;
            _linkGenerator = linkGenerator;
        }

        [HttpGet("", Name = "GetCustomers")]
        [ResponseCache(Duration = 30, Location = ResponseCacheLocation.Client)]
        public IActionResult GetAll([FromQuery]CustomerListParameters listParameters)
        {
            if (listParameters.Page < 1)
                return UnprocessableEntity(new ValidationFailedResult("Page must be 1 or greater."));
            if (listParameters.Take < 1)
                return UnprocessableEntity(new ValidationFailedResult("Take must be 1 or greater."));
            if (listParameters.Take > 100)
                    {
                _logger.LogError("Get Customers max items exceeded.");
                return UnprocessableEntity(new ValidationFailedResult("Take cannot be larger than 100."));
            }

            var customers = _customerData.GetAll(listParameters);
            var models = customers.Select(c => new CustomerDisplayViewModel(c));

            var pagination = new PaginationModel
            {
                Next = CreateCustomerResourceUri(listParameters, 1),
                Previous = CreateCustomerResourceUri(listParameters, -1)
            };

            Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(pagination));
            Response.Headers.Add("ETag", "\"abc\"");
            return Ok(models);
        }

        private string CreateCustomerResourceUri(CustomerListParameters listParameters, int pageAdjust)
        {
            if (listParameters.Page + pageAdjust <= 0)
                return null;

            return _linkGenerator.GetPathByName(this.HttpContext, "GetCustomers", values: new { 
                page = listParameters.Page + pageAdjust,
                take = listParameters.Take,
                orderBy = listParameters.OrderBy,
                lastName = listParameters.LastName,
                term = listParameters.Term
            });
        }

        [HttpGet("{id}")]
        [ResponseCache(Duration = 30, Location = ResponseCacheLocation.Client)]
        public IActionResult Get(int id) 
        { 
            var customer = _customerData.Get(id);
            if (customer == null)
            {
                _logger.LogWarning("Customer {0} not found", id);
                return NotFound();  
            }

            Response.Headers.Add("ETag", "\"" + customer.LastContactDate.ToString() + "\"");
            var model = new CustomerDisplayViewModel(customer);
            return Ok(model);
        }


      [HttpPost("")]
      public IActionResult Create([FromBody] CustomerCreateViewModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Customer Create failed due to validation");
                return new ValidationFailedResult(ModelState);
            }

            var customer = new Customer
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                EmailAddress = model.EmailAddress,
                PhoneNumber = model.PhoneNumber,
                PreferredContactMethod = model.PreferredContactMethod,
                LastContactDate = DateTime.UtcNow
            };

            _customerData.Add(customer);
            _customerData.Commit();
            return Ok(new CustomerDisplayViewModel(customer));
        }


        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] CustomerUpdateViewModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Customer Update failed due to validation");
                return new ValidationFailedResult(ModelState);
            }

            var customer = _customerData.Get(id);
            if (customer == null)
            {
                _logger.LogWarning("Customer {0} not found", id);
                return NotFound();
            }

            string ifMatch = Request.Headers["If-Match"];
            if (ifMatch != customer.LastContactDate.ToString())
            {
                _logger.LogInformation("Customer update failed due to concurrency issue: {0}", id);
                return StatusCode(422, "Customer has been changed by another user since it was laoded.  Reload and try again.");
            }

            customer.EmailAddress = model.EmailAddress;
            customer.FirstName = model.FirstName;
            customer.LastName = model.LastName;
            customer.PhoneNumber = model.PhoneNumber;
            customer.PreferredContactMethod = model.PreferredContactMethod;
            customer.LastContactDate = DateTime.UtcNow;



            _customerData.Update(customer);
            _customerData.Commit();
            return Ok(new CustomerDisplayViewModel(customer)); 
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id) {
           var customer = _customerData.Get(id);
            if(customer == null)
            {
                _logger.LogWarning("Customer {0} not found", id);
                return NotFound();
            }
            if (!ModelState.IsValid)
            {
                return new ValidationFailedResult(ModelState);
            }

            _logger.LogInformation("Deleting customer: {0}", id);
            _customerData.Delete(customer);
            _customerData.Commit();
            return NoContent();
        }

    }
}
