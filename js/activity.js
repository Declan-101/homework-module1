$(document).ready(function () {

    $("tbody td").each(function () {

        if ($(this).text() !== "Not Available" && !$(this).is(":first-child")) {
            $(this).css("cursor", "pointer");
        }

    });

    $("tbody td").click(function () {

    var content = $(this).text();

    if (content !== "Not Available" && !$(this).is(":first-child")) {

        $(this).toggleClass("selected");

        if ($(this).hasClass("selected")) {

            $("#displaySelected").css("visibility", "visible");
            $("#displaySelected").css("margin-top", "2em");

            var colIndex = $(this).index();

var cliffName = $("thead th").eq(colIndex).text();

$("#result").append(
    "<p>" + content + " at " + cliffName + "</p>"
);

        } else {

            $("#result p:contains('" + content + "')").remove();

            if ($("#result").has("p").length == false) {

                $("#displaySelected").css("visibility", "hidden");
                $("#displaySelected").css("margin-top", "0");
            }
        }
    }

});

});