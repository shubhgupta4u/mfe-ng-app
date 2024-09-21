using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace asp_dotnet_web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login()
        {
            ViewBag.Message = "Sign In";

            return View();
        }

        public ActionResult Register()
        {
            ViewBag.Message = "Sign Up";

            return View();
        }
    }
}