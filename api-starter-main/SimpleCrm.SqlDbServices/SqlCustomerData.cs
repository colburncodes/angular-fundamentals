using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Linq.Dynamic.Core;


namespace SimpleCrm.SqlDbServices
{
    public class SqlCustomerData : ICustomerData
    {
        private SimpleCrmDbContext _context;
        public SqlCustomerData(SimpleCrmDbContext context)
        {
            _context = context;
        }

        public Customer Get(int id)
        {
            return _context.Customers.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Customer> GetAll()
        {
            return _context.Customers.ToList();
        }
        public List<Customer> GetAll(CustomerListParameters listParameters)
        {
            var sortableFields = new List<string>(new string[] { "FIRSTNAME", "LASTNAME", "STATUS", "PHONENUMBER", "LASTCONTACTDATE", "EMAILADDRESS" });
            var orderBy = listParameters.OrderBy;           
            var fields = (orderBy ?? "").Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            foreach (var field in fields)
            {
                var x = field.Trim().ToUpper();
                var parts = x.Split(' ');
                if (parts.Length > 2)
                {
                    throw new ArgumentException("Invalid sort option " + x);
                }
                if(parts.Length > 1 && parts[1].ToUpper() != "DESC" && parts[1].ToUpper() != "ASC")
                {
                    throw new ArgumentException("Invalid sort direction " + x);
                }
                if (!sortableFields.Contains(x))
                    throw new ArgumentException("Invalid sort field " + x);
            } 
            if (string.IsNullOrWhiteSpace(orderBy))
            {
                orderBy = "LastName asc, firstname asc";
            }


            IQueryable<Customer> sortedResults = _context.Customers.OrderBy(orderBy);


            if (!string.IsNullOrWhiteSpace(listParameters.LastName))
            {
                sortedResults = sortedResults
                    .Where(x => x.LastName.ToLowerInvariant() == listParameters.LastName.Trim().ToLowerInvariant());
            } // the query still is not sent to the database after this line.

            if (!string.IsNullOrWhiteSpace(listParameters.Term))
            {
                sortedResults = sortedResults
                    .Where(x => (x.FirstName + " " + x.LastName).Contains(listParameters.Term) 
                    || x.EmailAddress.Contains(listParameters.Term));
            }
            return sortedResults
                .Skip((listParameters.Page - 1) * listParameters.Take)
                .Take(listParameters.Take)
                .ToList();
            // once an IQueryable is converted into an IList/List, the SQL query is finalized and sent to the database

        }

        public void Add(Customer customer)
        {
            _context.Customers.Add(customer);
            
        }
        public void Update(Customer customer)
        {
            _context.Customers.Update(customer);
           
        }
        public void Delete(Customer item)
        {
            _context.Remove(item);
        }
        public void Commit()
        {
            _context.SaveChanges();
        }

    }
}
