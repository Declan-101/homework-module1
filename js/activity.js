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

            var colIndex = $(this).index();
            var cliffName = $("thead th").eq(colIndex).text();
            var selectedText = content + " at " + cliffName;

            if ($(this).hasClass("selected")) {

                $("#result").append("<p>" + selectedText + "</p>");

            } else {

                $("#result p").filter(function () {
                    return $(this).text() === selectedText;
                }).remove();
            }

            if ($("#result p").length > 0) {
                $("#activityModal").modal("show");
            } else {
                $("#activityModal").modal("hide");
            }
        }
    });

});