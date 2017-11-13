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
        public ActionResult GetImageList(string userId)
        {
            return Json(new List<SimpleImageVM>() {
                new SimpleImageVM() { id = 1, name = "001.jpg", type = "image/jpeg", size = 0 },
                new SimpleImageVM() { id = 2, name = "002.jpg", type = "image/jpeg", size = 0 },
                new SimpleImageVM() { id = 3, name = "003.jpg", type = "image/jpeg", size = 0 },
                new SimpleImageVM() { id = 4, name = "004.jpg", type = "image/jpeg", size = 0 },
                new SimpleImageVM() { id = 5, name = "005.jpg", type = "image/jpeg", size = 0 },
                new SimpleImageVM() { id = 6, name = "006.jpg", type = "image/jpeg", size = 0 },
                new SimpleImageVM() { id = 7, name = "007.jpg", type = "image/jpeg", size = 0 },
                new SimpleImageVM() { id = 8, name = "008.png", type = "image/jpeg", size = 0 }
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