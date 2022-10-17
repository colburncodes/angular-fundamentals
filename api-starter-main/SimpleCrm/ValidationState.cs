using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCrm
{
   public class ValidationState
    {
        public List<ValidationError> Errors { get; set; }
        public ValidationState()
        {
            Errors = new List<ValidationError>();
        }
    }
}
