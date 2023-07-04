using System.Threading.Tasks;
using API.Models.Auth;

namespace API.Services.Token
{
    public interface ITokenService
    {
        Task<string> CreateToken(AppUser user);
    }
}
