using code4money.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace code4money.Web.Controllers
{
    public class LoginController: Controller
    {
        [HttpPost]
        public ActionResult LoginUser(SimpleUserVM user)
        {
            if (user.username == "admin" && user.password == "admin")
                return Json(true);
            else
                return Json(false);
        }
    }
}