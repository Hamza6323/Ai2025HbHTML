$(document).ready(function(){
    $("#fadein").click(function(){
        $("#para").fadeIn(1000)
    })

    $("#fadeout").click(function(){
        $("#para").fadeOut(1000)
    })

    $("#fadetoggle").click(function(){
        $("#para").fadeToggle(1000)
    })

    $("#fadeto").click(function(){
        $("#para").fadeTo(1000, 0.9)
    })

    $("#slideup").click(function(){
        $("p").slideUp(2000)
    })

    $("#slidedown").click(function(){
        $("p").slideDown(2000)
    })

    $("#slidetoggle").click(function(){
        $("p").slideToggle(2000)
    })

    $("#animate").click(function(){
        $(".box").animate({
            "left": "300px",
            "border-radius": "100px",
        }, 2000)
    })
})