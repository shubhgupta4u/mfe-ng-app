using System.Web.Mvc;
using System.Web.Routing;

namespace asp_dotnet_web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Admin",
                url: "admin/dashboard/{id}",
                defaults: new { controller = "AdminDashboard", action = "Empty", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "User",
                url: "user/dashboard/{id}",
                defaults: new { controller = "Dashboard", action = "Empty", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
