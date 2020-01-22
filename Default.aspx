<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
      <!-- CSS -->
    <link href="Styles/reset.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" type="text/css" />
    <link href="Styles/myStyle.css" rel="stylesheet" type="text/css" />

</head>
<body>
    <form id="form1" runat="server">
    <div id="continer">
        <asp:Button CssClass="btn btn-primary" ID="back" runat="server" Text="back" OnClick="back_Click" />
        <asp:Table ID="Table1" runat="server" class="table">
            <asp:TableRow CssClass="thead-dark">
                <asp:TableHeaderCell >name</asp:TableHeaderCell>
                <asp:TableHeaderCell>image</asp:TableHeaderCell>
                
            </asp:TableRow>
        </asp:Table>
        
    </div>
    </form>
</body>
</html>
