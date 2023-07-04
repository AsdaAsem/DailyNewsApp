using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Models.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class UserManagerExtension
    {
        
        public static async Task<AppUser> FindByEmailFromClaimsPrincipal(this UserManager<AppUser> input, ClaimsPrincipal user){
            var email = user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            return await input.Users.SingleOrDefaultAsync(x => x.Email == email);
        }
    }
}