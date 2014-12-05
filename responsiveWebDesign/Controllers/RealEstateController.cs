using System.Web.Http;

namespace responsiveWebDesign.Controllers
{
  using System;
  using System.Collections.Generic;

  using MySql.Data.MySqlClient;

  using responsiveWebDesign.Models;

  public class RealEstateController : ApiController
  {
    string MyConString;
    MySqlConnection connection;
    MySqlCommand cmdSel;

    public RealEstateController()
    {
      MyConString =
        System.Configuration.ConfigurationManager.ConnectionStrings["MovieDBContext"].ConnectionString;
      connection = new MySqlConnection(MyConString);
    }

    public IEnumerable<RealEstateModel> GetAllRealEstates([FromUri] int from, int numberOfRecords)
    {
      string sql = "select * from RealEstate where Active = 1 limit " + from + ", " + numberOfRecords;

      return GenerateResults(sql);
    }

    public IEnumerable<RealEstateModel> GetRealEstatesWithCondition([FromUri] int from, int numberOfRecords)
    {

      string sql = 
        "select *, (Price / SquareMeters) as M2 from RealEstate " +
          "where ((Price / SquareMeters) < 1000) " + 
		      "and ((Price / SquareMeters) > 500) " + 
	      "and (Price < 38000) and (SquareMeters > 20) " + 
	      "and (Location not in ("  + 
							      "\"Adice\"," + 
							      "\"Avijacija\", " +
							      "\"Detelinara\", " +
							      "\"Klisa\", " +
							      "\"Klisa (mali Beograd)\", " +
							      "\"Klisa (slana Bara)\", " +
							      "\"Klisa (veliki Rit)\", " +
							      "\"Nova Detelinara\", " +
							      "\"Satelit\", " +
							      "\"Stara Detelinara\"," +
							      "\"Salajka\"," +
							      "\"Podbara\"" + 
						      ")" + 
				      ")" + 
      "order by Price, Location limit " + from + ", " + numberOfRecords;

      return GenerateResults(sql);
    }

    public IEnumerable<RealEstateModel> GenerateResults(string sql)
    {
      try
      {
        cmdSel = new MySqlCommand(sql, connection);
        connection.Open();

        MySqlDataReader dataReader = cmdSel.ExecuteReader();

        List<RealEstateModel> pom = new List<RealEstateModel>();

        while (dataReader.Read())
        {
          pom.Add(
            new RealEstateModel
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
        connection.Close();
        return pom;

      }
      catch (Exception e)
      {
        List<RealEstateModel> error = new List<RealEstateModel>();
        error.Add(new RealEstateModel { City = e.Message });
        return error;
      }      
    }
  }
}