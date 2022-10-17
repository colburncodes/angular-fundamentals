using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCrm
{
    public class CustomerListParameters
    {
        public int Page { get; set; } = 1;
        public int Take { get; set; } = 50;
        public string OrderBy { get; set; }
        public string LastName { get; set; }
        public string Term { get; set; }
    }
}
