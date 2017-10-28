using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(code4money.Web.Startup))]
namespace code4money.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
