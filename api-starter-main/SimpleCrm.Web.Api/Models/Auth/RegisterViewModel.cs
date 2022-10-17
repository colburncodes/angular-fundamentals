using System.ComponentModel.DataAnnotations;

namespace SimpleCrm.Web.Api.Models.Auth
{
    public class RegisterViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string EmailAddress { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
