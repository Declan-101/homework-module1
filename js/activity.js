$(document).ready(function () {

    $("tbody td").each(function () {

        if ($(this).text() !== "Not Available" && !$(this).is(":first-child")) {
            $(this).css("cursor", "pointer");
        }

    });

    $("tbody td").click(function () {

        if ($(this).text() !== "Not Available" && !$(this).is(":first-child")) {
            $(this).toggleClass("selected");
        }

    });

});