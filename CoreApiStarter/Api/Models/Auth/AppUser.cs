﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace API.Models.Auth
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
    }
}
