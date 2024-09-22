using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace asp_dotnet_web.Controllers.Admin
{
    public class AdminDashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index(string email)
        {
            ViewBag.Email = email;
            return View("~/Views/Admin/Dashboard/Index.cshtml");
        }

        public ActionResult Empty(string email)
        {
            return View("~/Views/Admin/Dashboard/Empty.cshtml");
        }
    }
}