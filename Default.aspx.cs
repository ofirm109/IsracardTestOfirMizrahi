using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        mytable();
    }
    
    public void mytable()
    {
        if (Session["myArry"] != null)
        {
            //Getting the array from Session
            string myArryString = Session["myArry"].ToString();
            string[] myArry = myArryString.Split(',');
            //Creates a table that retrieves the data
            int MaxRow = (myArry.Length - 1)/2;
            for (int i = 0; i < (myArry.Length)-1; i+=2)
            {
                TableRow td = new TableRow();
                
                TableCell nameInTable = new TableCell();
                nameInTable.Text = myArry[i+1].ToString();
                TableCell imageInTable = new TableCell();
                Image imageInTable2 = new Image();
                imageInTable2.ImageUrl = myArry[i+2].ToString();
                imageInTable.Controls.Add(imageInTable2);
                td.Cells.Add(nameInTable);
                td.Cells.Add(imageInTable);
                Table1.Rows.Add(td);
            }
            DataBind();
        }
    }

    protected void back_Click(object sender, EventArgs e)
    {
        //Back to the main page
        Response.Redirect("index.html");
    }
}