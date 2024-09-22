using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace asp_dotnet_web.Controllers.Users
{
    [Route("Dashboard")]
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index(string email)
        {
            ViewBag.Email = email;
            return View("~/Views/Users/Dashboard/Index.cshtml");
        }

        public ActionResult Empty(string email)
        {
            return View("~/Views/Users/Dashboard/Empty.cshtml");
        }
    }
}