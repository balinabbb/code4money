using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.UI;

namespace code4money.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit https://go.microsoft.com/fwlink/?LinkID=303951
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/WebFormsJs").Include(
                "~/Scripts/WebForms/WebForms.js",
                "~/Scripts/WebForms/WebUIValidation.js",
                "~/Scripts/WebForms/MenuStandards.js",
                "~/Scripts/WebForms/Focus.js",
                "~/Scripts/WebForms/GridView.js",
                "~/Scripts/WebForms/DetailsView.js",
                "~/Scripts/WebForms/TreeView.js",
                "~/Scripts/WebForms/WebParts.js"));

            // Order is very important for these files to work, they have explicit dependencies
            bundles.Add(new ScriptBundle("~/bundles/MsAjaxJs").Include(
                "~/Scripts/WebForms/MsAjax/MicrosoftAjax.js",
                "~/Scripts/WebForms/MsAjax/MicrosoftAjaxApplicationServices.js",
                "~/Scripts/WebForms/MsAjax/MicrosoftAjaxTimer.js",
                "~/Scripts/WebForms/MsAjax/MicrosoftAjaxWebForms.js"));

            // Use the Development version of Modernizr to develop with and learn from. Then, when you’re
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                            "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularMaterial").Include(
                "~/Scripts/angular-ui-router.js",
                "~/Scripts/angular-animate.js",
                "~/Scripts/angular-mocks.js",
                "~/Scripts/angular-aria.min.js",
                "~/Scripts/angular-messages.min.js",
                "~/Scripts/angular-material.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularRoute").Include(
                "~/Scripts/angular-route.min.js",
                "~/Scripts/angular-ui-router.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/code4money").Include(
                // general
                "~/AngularContents/utilities.js",
                "~/AngularContents/app.js",
                "~/AngularContents/routeconfig.js",
                // views
                "~/AngularContents/Views/Browse/BrowseController.js",
                "~/AngularContents/Views/ImageView/ImageViewController.js",
                "~/AngularContents/Views/Login/LoginController.js",
                "~/AngularContents/Views/Manage/ManageController.js",
                "~/AngularContents/Views/Register/RegisterController.js",
                // modules
                "~/AngularContents/Modules/Test/TestController.js",
                "~/AngularContents/Modules/Test/TestDirective.js",
                "~/AngularContents/Modules/Home/HomeController.js"
                ));

            bundles.Add(new StyleBundle("~/bundles/code4moneyCss").Include(
                "~/Content/Site.css"
                ));

            bundles.Add(new StyleBundle("~/bundles/angularMaterialCSS").Include(
                "~/Content/angular-material.min.css",
                "~/Content/angular-material.layouts.min.css",
                "~/Content/angular-material.layout-attributes.min.css"
                ));

            bundles.Add(new StyleBundle("~/bundles/bootstrapCSS").Include(
                "~/Content/bootstrap-theme.min.css",
                "~/Content/bootstrap.min.css"
                ));

            ScriptManager.ScriptResourceMapping.AddDefinition(
                "respond",
                new ScriptResourceDefinition
                {
                    Path = "~/Scripts/respond.min.js",
                    DebugPath = "~/Scripts/respond.js",
                });
        }
    }
}