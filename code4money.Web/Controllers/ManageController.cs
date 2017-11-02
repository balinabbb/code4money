using code4money.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace code4money.Web.Controllers
{
    public class ManageController: Controller
    {
        [HttpPost]
        public ActionResult UploadImages()
        {
            return Json(true);
        }

        [HttpGet]
        public ActionResult GetImageList(int userId)
        {
            return Json(new List<SimpleImageVM>() {
                new SimpleImageVM() { id = 1, name = "t1.jpg", type = "image/jpeg", size = 54332 },
                new SimpleImageVM() { id = 2, name = "t2.jpg", type = "image/jpeg", size = 66446 },
                new SimpleImageVM() { id = 3, name = "t3.jpg", type = "image/jpeg", size = 11245 }
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult DeleteImages(UserPostData<List<SimpleImageVM>> postData)
        {
            if (postData.user == null || postData.data == null)
                return Json(true); // TODO change this later

            for (int i = 0; i < postData.data.Count; i++)
            {
                // delete images
            }
            return Json(true);
        }
    }
}