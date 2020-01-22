//Global variables
var sentName = "";
var sentImage = "";
$(document).ready(function () {
    var myname = "";
    var myAPI = "https://api.github.com/search/repositories?q=YOUR_SEARCH_KEYWORD";
    var ifErorr = true;
    //Hiding the controllers
    hideControlrs();
    $("#wait").hide();
    //Clicking the search button
    $("#Search").click(function () {
        //Hiding the controllers
        hideControlrs();
        $("#wait").hide();
        ifErorr = true;
        //You entered the name into a variable
        myname = ($("#searchText").val()).toString();
        $("#wait").show();
        //Contacting the server
        var jqxhr = $.getJSON(myAPI, function () {
            
            $("#wait").hide();
        })
            .done(function (data) {
                //Search the name and retrieve data
                $.each(data.items, function (i, v) {
                    if (v.name == myname) {
                        $("#image").attr("src", v.owner.avatar_url.toString());
                        $("#thisName").html(v.name);
                        ifErorr = false;
                        $("#bookmarkallcomponet").show();
                        sentName = myname;
                        sentImage = v.owner.avatar_url.toString();
                    }

                });
                if (ifErorr == true) {
                    //Error message if the name does not exist
                    $("#erorrName").fadeIn(200);
                    $("#wait").hide();
                }

            })
            .fail(function () {
                //Error message if server is not contacted
                $("#erorrconnect").fadeIn(200);
                $("#wait").hide();
            });
    });
});

//Click the bookmark button
function bookmark() {
    //Opens a loading page
    $("#wait").show();
    //Sending the data to the ASP.NET page
    $.get("handle.aspx?name=" + sentName + "&image=" + sentImage + "", function (data, status) {
        $("#bookmark").hide();
        $("#savebookmark").fadeIn(200);
        $("#wait").hide();
    });


}
//Hiding the controllers
function hideControlrs() {
    $("#erorrName").hide();
    $("#erorrconnect").hide();
    $("#savebookmark").hide();
    $("#bookmark").show();
    $("#bookmarkallcomponet").hide();
}