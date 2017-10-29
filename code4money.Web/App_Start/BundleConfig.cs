using System.Web;
using System.Web.Optimization;

namespace code4money.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.min.css",
                "~/Content/bootstrap-theme.min.css",
                "~/Content/Site.css"
                ));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/jquery-1.9.1.min.js",
                "~/Scripts/bootstrap.min.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular.min.js",
                "~/Scripts/angular-route.min.js",
                "~/Scripts/angular-mocks.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/masonry").Include(
                "~/Scripts/imagesloaded.pknd.min.js",
                "~/Scripts/masonry.pkgd.min.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/code4money").Include(
                // general
                "~/AngularContents/utilities.js",
                "~/AngularContents/app.js",
                "~/AngularContents/routeconfig.js",
                // views
                "~/AngularContents/ViewControllers/HomeController.js",
                "~/AngularContents/ViewControllers/BrowseController.js",
                "~/AngularContents/ViewControllers/ImageViewController.js",
                "~/AngularContents/ViewControllers/LoginController.js",
                "~/AngularContents/ViewControllers/ManageController.js",
                "~/AngularContents/ViewControllers/RegisterController.js",
                // modules
                "~/AngularContents/Modules/Test/TestController.js",
                "~/AngularContents/Modules/Test/TestDirective.js"
                ));
        }
    }
}
