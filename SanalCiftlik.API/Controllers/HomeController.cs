using SanalCiftlik.Typess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using SanalCiftlik.DATALAYER;

//using System.Web.Mvc;

namespace SanalCiftlik.API.Controllers
{
    public class HomeController : ApiController
    {
        List<Kullanici> KULLANICI_LISTESI = new List<Kullanici>();


        [HttpGet]
        public IHttpActionResult Get_Kullanici(string kullanici_ad,string sifre)
        {
            KULLANICI_LISTESI = Dal.Get_Kullanici(kullanici_ad, sifre);
            return Content(HttpStatusCode.OK, KULLANICI_LISTESI);
        }
        [HttpGet]
        public IHttpActionResult Get_Kullanici()
        {
            KULLANICI_LISTESI = Dal.Get_Kullanici();
            return Content(HttpStatusCode.OK, KULLANICI_LISTESI);
        }
        [HttpPost]
        public IHttpActionResult Set_Kullanici()
        {
            KULLANICI_LISTESI = Dal.Set_Kullanici();
            return Content(HttpStatusCode.OK, KULLANICI_LISTESI);
        }
        [HttpGet]
        public IHttpActionResult Hayvan_Sat(int animalNo, string userName)
        {
            Dal.Hayvan_Sat(animalNo, userName);
            return Content(HttpStatusCode.OK,"İşleminiz Tamamlandı");
        }
    }
}
