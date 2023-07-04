using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Models.Auth;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DefaultContext : IdentityDbContext<AppUser>
    {
        public DefaultContext(DbContextOptions<DefaultContext> options) : base(options)
        {

        }

        public DbSet<Bookmark> Bookmarks { get; set; }  
    }
}
