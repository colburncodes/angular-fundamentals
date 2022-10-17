using System.Threading.Tasks;

namespace SimpleCrm.Web.Api.Models.Auth
{
    public class UserSummaryViewModel
    {
        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public string Id { get; set; }
        public string[] Roles { get; set; }
        public string JwtToken { get; set; }
        public int AccountId { get; set; }

       
    }
}
