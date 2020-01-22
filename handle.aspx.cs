using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections.Specialized;



public partial class handle : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //New Session opens
        if (Session["myArry"] == null)
        {
            Session["myArry"] = "";
        }
        //Saves the data in array
        string name = Request["name"];
        string image = Request["image"];
        string theArry = Session["myArry"].ToString();
        theArry += "," + name + "," + image;
        //Saves the array in the Session
        Session["myArry"] = theArry;
        Response.Write(theArry);



    }
}