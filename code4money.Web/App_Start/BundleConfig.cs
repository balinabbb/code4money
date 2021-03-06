﻿using System.Web;
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
                "~/Content/angular-material.min.css",
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

            bundles.Add(new ScriptBundle("~/bundles/angularMaterial").Include(
                "~/Scripts/angular-animate.min.js",
                "~/Scripts/angular-aria.min.js",
                "~/Scripts/angular-messages.min.js",
                "~/Scripts/angular-material.min.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/angularModules").Include(
                "~/Scripts/angular-file-upload/dist/angular-file-upload.min.js",
                "~/Scripts/ngStorage/ngStorage.min.js"
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
                "~/AngularContents/ViewControllers/*.js"
                ).IncludeDirectory(
                // modules
                "~/AngularContents/Modules/", "*.js", true
                ));
        }
    }
}
