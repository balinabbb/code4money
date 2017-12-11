using code4money.Web.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using code4money.Web.ViewModels;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;

namespace code4money.Web.Controllers
{
    public class SignInManager : SignInManager<ApplicationUser, string>
    {
        public SignInManager(UserManager<ApplicationUser, string> userManager, IAuthenticationManager authenticationManager)
            : base(userManager, authenticationManager) { }

        public void SignOut()
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
        }
    }
    public class AccountController : Controller
    {
        public SignInManager SignInManager
        {
            get { return HttpContext.GetOwinContext().Get<SignInManager>(); }
        }
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        [Route("facebook-login")]
        public async Task<ActionResult> ExternalLoginConfirmation(FacebookLoginViewModel model, string returnUrl)
        {
            if (User.Identity.IsAuthenticated)
            {
                return new HttpStatusCodeResult(200);
            }

            if (!ModelState.IsValid)
            {
                return new HttpStatusCodeResult(400);
            }
            var user = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email,
                BirthDate = model.BirthDate,

            };
            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));
            var result = await manager.CreateAsync(user);
            if (result.Succeeded)
            {
                //result = await manager.AddLoginAsync(user.Id, new UserLoginInfo("Facebook", "155273308418309"));
                //if (result.Succeeded)
                //{

                //}
            }
            return Json(new
            {
                id = 1,
                email = "admin",
            });
        }

        [HttpPost]
        public async Task<ActionResult> RegisterUser(SimpleUserVM vm)
        {
            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));
            var user = new ApplicationUser
            {
                Email = vm.email,
                UserName = vm.email
            };
            var result = await manager.CreateAsync(user);
            if (!result.Succeeded)
            {
                return new HttpStatusCodeResult(400, string.Join(", ", result.Errors.ToArray()));
            }
            result = await manager.AddPasswordAsync(user.Id, vm.password);
            if (!result.Succeeded)
            {
                using (var ctx = new ApplicationDbContext())
                {
                    ctx.Users.Remove(user);
                    await ctx.SaveChangesAsync();
                }
                return new HttpStatusCodeResult(400, string.Join(", ", result.Errors.ToArray()));
            }
            return Json(true);
        }

        [HttpPost]
        public async Task<ActionResult> LoginUser(SimpleUserVM vm)
        {
            using (var ctx = new ApplicationDbContext())
            {
                var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(ctx));

                var user = await manager.FindByEmailAsync(vm.email);
                if (user == null)
                {
                    return new HttpStatusCodeResult(400, "No user found with the given credentials");
                }
                try
                {
                    await HttpContext.GetOwinContext().Get<ApplicationSignInManager>().PasswordSignInAsync(vm.email, vm.password, false, false);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return new HttpStatusCodeResult(400);
                }
                return Json(new SimpleUserVM
                {
                    email = user.Email,
                    id = user.Id
                });
            }
        }
    }
}