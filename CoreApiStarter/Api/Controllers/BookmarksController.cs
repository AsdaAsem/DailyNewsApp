using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs.Bookmark;
using API.Extensions;
using API.Models;
using API.Models.Auth;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarksController : ControllerBase
    {
        private readonly DefaultContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;

        public BookmarksController(DefaultContext context, IMapper mapper, UserManager<AppUser> userManager)
        {
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
        }


        [Authorize]
        [HttpPost]
        public async Task<ActionResult> AddBookMark(BookmarkAddDto dto)
        {

            var contains = await _context.Bookmarks.AnyAsync(b => b.Title == dto.Title);

            if (contains) return BadRequest("Already Bookmarked");

            var bookmark = _mapper.Map<BookmarkAddDto, Bookmark>(dto);

            var user = await _userManager.FindByEmailFromClaimsPrincipal(HttpContext.User);

            bookmark.UserId = user.Id;

            await _context.Bookmarks.AddAsync(bookmark);

            var result = await _context.SaveChangesAsync();
            if (result > 0) return Ok();
            return BadRequest("Bookmark Failed");
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<BookmarkReturnDto>>> GetUserBookmarks()
        {
            var user = await _userManager.FindByEmailFromClaimsPrincipal(HttpContext.User);

            if (user == null) return Unauthorized("User Not Found");

            var myBookmarks = await _context.Bookmarks.Where(b => b.UserId == user.Id)
                .Select(b=> new BookmarkReturnDto
                {
                    Content = b.Content,
                    Creator = b.Creator,
                    Description = b.Description,
                    Id = b.Id,
                    Image_Url = b.Image_Url,
                    Link = b.Link,
                    PubDate = b.PubDate,
                    Source_Id = b.Source_Id,
                    Title = b.Title,
                    VideoUrl = b.VideoUrl
                }).ToListAsync();

            return Ok(myBookmarks);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> RemoveBookmark(int id)
        {
            try
            {
                var bookmarkToDelete = await _context.Bookmarks.FirstOrDefaultAsync(b => b.Id == id);

                if (bookmarkToDelete == null)
                {
                    return NotFound($"Bookmark not found");
                }

                _context.Bookmarks.Remove(bookmarkToDelete);
                var result = await _context.SaveChangesAsync();
                if (result > 0) return Ok();
                return BadRequest("Bookmark remove Failed");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error Removing Bookmark");
            }
        }


    }
}
