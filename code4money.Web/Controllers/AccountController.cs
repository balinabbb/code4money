using code4money.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace code4money.Web.Controllers
{
    public class AccountController: Controller
    {
        [HttpPost]
        public ActionResult LoginUser(SimpleUserVM user)
        {
            if (user.email == "admin" && user.password == "admin")
            {
                user.id = 1;
                return Json(user);
            }
            else if (user.email == "asd" && user.password == "asd")
            {
                user.id = 2;
                return Json(user);
            }
            else
                return Json(false);
        }

        [HttpPost]
        public ActionResult RegisterUser(SimpleUserVM user)
        {
            return Json(true);
        }
    }
}