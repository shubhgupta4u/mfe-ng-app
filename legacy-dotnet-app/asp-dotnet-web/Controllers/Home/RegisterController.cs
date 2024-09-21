using asp_dotnet_web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace asp_dotnet_web.Controllers.Home
{
    public class RegisterController : Controller
    {
        // GET: Register
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SignUp(RegistrationModel model)
        {
            if (ModelState.IsValid)
            {
                return RedirectToAction("Login", "Home");
            }

            return View("~/Views/Home/Register.cshtml", model);
        }
    }
}