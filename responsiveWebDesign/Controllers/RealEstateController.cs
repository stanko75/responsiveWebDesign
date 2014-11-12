using System.Web.Http;

namespace responsiveWebDesign.Controllers
{
  using System;
  using System.Collections.Generic;

  using responsiveWebDesign.Models;

  public class RealEstateController : ApiController
  {
    RealEstateModel[] realEstates = new RealEstateModel[] { new RealEstateModel
                                                                    {
                                                                      Id = 1,
                                                                      Company = "www.milosev.com",
                                                                      City = "Novi Sad",
                                                                      Location = "Liman",
                                                                      Type = "Jednosoban",
                                                                      SquareMeters = 4,
                                                                      Price = 2,
                                                                      Link = "www.milosev.com" ,
                                                                      Page = 1,
                                                                      Active = true,
                                                                      UpdateTime = new DateTime(),
                                                                      UpdateDate = new DateTime(),
                                                                      InsertTime = new DateTime(),
                                                                      InsertDate = new DateTime()
                                                                    } 
    };

    public IEnumerable<RealEstateModel> GetAllRealEstates()
    {
      return realEstates;
    }
  }
}