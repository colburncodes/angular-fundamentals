using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCrm.SqlDbServices
{
    public class CrmIdentityDbContext : IdentityDbContext<CrmUser>
    {
        public CrmIdentityDbContext(DbContextOptions<CrmIdentityDbContext> options)
            : base(options)
        {

        }
    }
}
