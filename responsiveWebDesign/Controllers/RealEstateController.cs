using System.Web.Http;

namespace responsiveWebDesign.Controllers
{
  using System;
  using System.Collections.Generic;

  using MySql.Data.MySqlClient;

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
                                                                      Active = 1,
                                                                      UpdateTime = new DateTime(),
                                                                      UpdateDate = new DateTime(),
                                                                      InsertTime = new DateTime(),
                                                                      InsertDate = new DateTime()
                                                                    } 
    };

    public IEnumerable<RealEstateModel> GetAllRealEstates()
    {
      string MyConString = System.Configuration.ConfigurationManager.ConnectionStrings["MovieDBContext"].ConnectionString;

      string sql = "select * from RealEstate";

      try
      {
        var connection = new MySqlConnection(MyConString);
        var cmdSel = new MySqlCommand(sql, connection);

        connection.Open();

        MySqlDataReader dataReader = cmdSel.ExecuteReader();

        List<RealEstateModel> pom = new List<RealEstateModel>();

        while (dataReader.Read())
        {
          pom.Add(new RealEstateModel
                    {
                      Id = int.Parse(dataReader["id"].ToString()),
                      Company = dataReader["company"].ToString(),
                      City = dataReader["city"].ToString(),
                      Location = dataReader["location"].ToString(),
                      Type = dataReader["type"].ToString(),
                      SquareMeters = int.Parse(dataReader["squaremeters"].ToString()),
                      Price = float.Parse(dataReader["price"].ToString()),
                      Link = dataReader["link"].ToString(),
                      Active = int.Parse(dataReader["active"].ToString()),
                      //UpdateTime = Convert.ToDateTime(dataReader["updatetime"].ToString()),
                      //UpdateDate = Convert.ToDateTime(dataReader["updatedate"].ToString()),
                      //InsertTime = Convert.ToDateTime(dataReader["inserttime"].ToString()),
                      //InsertDate = Convert.ToDateTime(dataReader["insertdate"].ToString())
                    });
        }
        return pom;

      }
      catch (Exception e)
      {
        
      }


      return realEstates;
    }
  }
}