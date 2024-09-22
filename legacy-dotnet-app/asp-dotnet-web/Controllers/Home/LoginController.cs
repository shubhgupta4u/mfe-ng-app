using asp_dotnet_web.Models;
using System.Web.Mvc;
using System.Web.Routing;

namespace asp_dotnet_web.Controllers.Home
{
    public class LoginController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SignIn(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                if (model.UserType.Equals("Admin"))
                {
                    return RedirectToRoute("Admin", new { email = model.Email });
                    //return RedirectToAction("Empty", "AdminDashboard", new { email = model.Email });
                }
                else
                {
                    return RedirectToRoute("User", new { email = model.Email });
                    // return RedirectToAction("Empty", "Dashboard", new { email = model.Email });
                }

            }

            return View("~/Views/Home/Login.cshtml", model);
        }
    }
}