﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace code4money.Web.Models
{
    public class SimpleUserVM
    {
        public int? id { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
}