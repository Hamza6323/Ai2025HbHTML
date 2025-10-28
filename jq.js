$(document).ready(function() {
    $("p").hover(function() {
        $(this).css("color", "red");
    });

    $("#btn").hover(function() {
        $(this).css({
            "background-color": "black",
            "color": "white"
        });
    });
});
