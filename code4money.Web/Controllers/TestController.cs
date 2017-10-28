using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace code4money.Web.Controllers
{
    public class MyObject
    {
        public int id { get; set; }
    }

    public class TestController: Controller
    {
        [HttpGet]
        public int MyGetMethod(int counter)
        {
            return (counter + 1);
        }

        [HttpPost]
        public ActionResult MyPostMethod(MyObject a)
        {
            a.id = 2;
            return Json(a);
        }
    }
}