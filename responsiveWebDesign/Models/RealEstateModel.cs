namespace responsiveWebDesign.Models
{
  using System;

  public class RealEstateModel
  {
    public int Id { get; set; }
    public string Company { get; set; }
    public string City { get; set; }
    public string Location { get; set; }
    public string Type { get; set; }
    public int SquareMeters { get; set; }
    public float Price { get; set; }
    public string Link { get; set; }
    public int Page { get; set; }
    public int Active { get; set; }
    public string UpdateTime { get; set; }
    public string UpdateDate { get; set; }
    public string InsertTime { get; set; }
    public string InsertDate { get; set; }
  }
}