using System.Web.Http;

namespace responsiveWebDesign.Controllers
{
  using System;
  using System.Collections.Generic;

  using MySql.Data.MySqlClient;

  using responsiveWebDesign.Models;

  public class RealEstateController : ApiController
  {
      public IEnumerable<RealEstateModel> GetAllRealEstates([FromUri] int from, int numberOfRecords)
    {
      string MyConString = System.Configuration.ConfigurationManager.ConnectionStrings["MovieDBContext"].ConnectionString;

      string sql = "select * from RealEstate limit " + from + ", " + numberOfRecords;

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
                      UpdateTime = dataReader["updatetime"].ToString(),
                      UpdateDate = dataReader["updatedate"].ToString(),
                      InsertTime = dataReader["inserttime"].ToString(),
                      InsertDate = dataReader["insertdate"].ToString()
                    });
        }
        return pom;

      }
      catch (Exception e)
      {
        List<RealEstateModel> error = new List<RealEstateModel>();
        error.Add(
          new RealEstateModel
            {
              City = e.Message
            });
        return error;
      }


      return null;
    }
  }
}