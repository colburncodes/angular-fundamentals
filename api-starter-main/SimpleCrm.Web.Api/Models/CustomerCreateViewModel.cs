using System.ComponentModel.DataAnnotations;

namespace SimpleCrm.Web.Api.Models
{
    public class CustomerCreateViewModel
    {
        [MaxLength(50)]
        [Required()]
        public string FirstName { get; set; }
        [MinLength(1), MaxLength(50)]
        [Required()]
        public string LastName { get; set; }
        [MinLength(7), MaxLength(12)]
        public string PhoneNumber { get; set; }
        [MaxLength(400)]
        public string EmailAddress { get; set; }
        public InteractionMethod PreferredContactMethod { get; set; }

    }
}
