using code4money.Web.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace code4money.Web.Controllers
{
    public class ManageController : Controller
    {
        [HttpPost]
        public ActionResult UploadImages()
        {
            if (Request.Files.Count > 0)
            {
                var file = Request.Files[0];
                if (file != null && file.ContentLength > 0)
                {
                    var fileName = Path.GetFileName(file.FileName);
                    var path = Path.Combine(Server.MapPath("~/Uploads/"), fileName);
                    file.SaveAs(path);

                    using (var ctx = new ApplicationDbContext())
                    {
                        var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(ctx));

                        var user = manager.FindByEmail(HttpContext.User.Identity.Name);
                        if (user == null)
                        {
                            return new HttpStatusCodeResult(400, "No user found with the given name");
                        }

                        var imageUpload = new ImageUpload()
                        {
                            ApplicationUser = user,
                            ApplicationUserId = user.Id,
                            ImageUrl = fileName,
                            TimeStamp = DateTime.UtcNow
                        };

                        user.ImageUploads.Add(imageUpload);

                        ctx.SaveChanges();
                    }

                    return Json(true);
                }
            }
            return Json(false);
        }

        [HttpGet]
        public ActionResult GetImageList(string userId)
        {
            using (var ctx = new ApplicationDbContext())
            {
                var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(ctx));

                var user = manager.FindById(userId);
                if (user == null)
                {
                    return new HttpStatusCodeResult(400, "No user found with the given name");
                }

                var imageFolder = Server.MapPath("~/Uploads/");

                var images =
                    ctx
                        .ImageUploads
                        .Where(image => image.ApplicationUserId == userId)
                        .ToList()
                        .Select(image =>
                        {
                            var filePath = Path.Combine(imageFolder, image.ImageUrl);
                            var fileInfo = new FileInfo(filePath);

                            return new SimpleImageVM()
                            {
                                id = image.Id,
                                name = image.ImageUrl,
                                type = "image/jpeg",
                                size = (int)fileInfo.Length
                            };
                        })
                        .ToList();

                return Json(images, JsonRequestBehavior.AllowGet);
            }
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