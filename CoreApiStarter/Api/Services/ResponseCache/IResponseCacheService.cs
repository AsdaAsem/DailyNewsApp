using System;
using System.Threading.Tasks;

namespace API.Services.ResponseCache
{
    public interface IResponseCacheService
    {
         Task CacheResponseAsync(string cacheKey, object response, TimeSpan timeToLive);
         Task<string> GetCacheResponseAsync(string cacheKey);
    }
}