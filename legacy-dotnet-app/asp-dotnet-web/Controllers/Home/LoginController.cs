using asp_dotnet_web.Models;
using System.Web.Mvc;

namespace asp_dotnet_web.Controllers.Home
{
    public class LoginController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SignIn(LoginModel model) {
            if (ModelState.IsValid)
            {
                return RedirectToAction("Index", "Dashboard", new { email = model.Email });
            }

            return View("~/Views/Home/Login.cshtml", model);
        }
    }
}