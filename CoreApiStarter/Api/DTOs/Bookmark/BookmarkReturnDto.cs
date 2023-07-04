using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs.Bookmark
{
    public class BookmarkReturnDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Link { get; set; }
        public string VideoUrl { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string PubDate { get; set; }
        public string Image_Url { get; set; }
        public string Source_Id { get; set; }
        public string Creator { get; set; }
    }
}
