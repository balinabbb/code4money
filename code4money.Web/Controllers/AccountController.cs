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
                return Json(true);
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