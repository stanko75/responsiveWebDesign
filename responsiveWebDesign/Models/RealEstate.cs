namespace responsiveWebDesign.Models
{
  using System;

  public class RealEstate
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
    public bool Active { get; set; }
    public DateTime UpdateTime { get; set; }
    public DateTime UpdateDate { get; set; }
    public DateTime InsertTime { get; set; }
    public DateTime InsertDate { get; set; }
  }
}