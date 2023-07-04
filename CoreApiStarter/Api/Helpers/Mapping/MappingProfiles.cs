using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs.Bookmark;
using API.Models;
using AutoMapper;

namespace API.Helpers.Mapping
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            //add mapping profile here...
            CreateMap<BookmarkAddDto, Bookmark>()
                .ForMember(d => d.Creator, o => o.MapFrom(s => s.Creator[0]));
        }
    }
}
