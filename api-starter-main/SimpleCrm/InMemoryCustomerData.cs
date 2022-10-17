

namespace SimpleCrm
{
    public class InMemoryCustomerData
    {
        IList<Customer> _customers; //not thread safe - only ok for development, single user

        public InMemoryCustomerData()
        {
            _customers = new List<Customer>
                  {
                      new Customer { Id =1, FirstName ="Bob", LastName = "Jones", PhoneNumber = "555-555-2345" },
                      new Customer { Id =2, FirstName ="Jane", LastName = "Smith", PhoneNumber = "555-555-5256" },
                      new Customer { Id =3, FirstName ="Mike", LastName = "Doe", PhoneNumber = "555-555-8547" },
                      new Customer { Id =4, FirstName ="Karen", LastName = "Jamieson", PhoneNumber = "555-555-9134" },
                      new Customer { Id =5, FirstName ="James", LastName = "Dean", PhoneNumber = "555-555-7245" },
                      new Customer { Id =6, FirstName ="Michelle", LastName = "Leary", PhoneNumber = "555-555-3457" }
                  };
        }

        public Customer Get(int id)
        {
            
           
                
            return _customers.FirstOrDefault(x => x.Id == id);

        }
        public List<Customer> GetAll(CustomerListParameters listparameters)
        {
            return _customers.ToList();
        }
        public List<Customer> GetAll( int pageIndex, int take, string orderBy)
        {
            throw new System.NotImplementedException();
        }
            public void Add(Customer customer)
        {
            customer.Id = _customers.Max(x => x.Id) + 1;
            _customers.Add(customer);
        }
        public void Update(Customer customer)
        {
            _customers = _customers.Select(x =>
            {
                if (x.Id == customer.Id)
                {
                    return customer;
                }
                else
                {
                    return x;
                }
            }).ToList();  
        }
        public void Delete(Customer item)
        {

        }

        public void Commit()
        {

        }
       
    }
}
