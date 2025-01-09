var renk = ["#4686DA","#6779D4","#836AC9","#9A59B8","#AD46A2","#B92F88"];
var logo = {
    width: 170,
    height: 70,
    padding: 7,
    paddingTop: 7,
    fontSize: 35,
    letterSpacing: 0
}
$("#hov").mouseenter(function(){
    $("#menu").css("top","0");
    $("#logo").css(logo);
});
$("#logo").mouseenter(function(){
    $("#menu").css("top","0");
    $("#logo").css(logo);
});
$("#menu").mouseleave(function(){
    var logo2 = {
        width: 250,
        height: 170,
        padding: 0,
        paddingTop: 105,
        fontSize: 40,
        letterSpacing: 5
    }
    $("#logo").css(logo2);
    $("#menu").css("top","-100px")
})
$("#menu a").mouseleave(function(){
    $("#menu a").css("border-color",`${renk[Math.floor(Math.random() * renk.length)]}`)
})
$("#footer a").mouseenter(function(){
    $(this).css("color",`${renk[Math.floor(Math.random() * renk.length)]}`)
})
$("details summary").mouseenter(function(){
    $(this).css("color",`${renk[Math.floor(Math.random() * renk.length)]}`)
})
$("#space").on({
    mouseenter: function(){
        var deger = {
            bottom:50,
            left:100
        }
        var deger2 = {
            bottom:50,
            right:100
        }
        $("#a").css(deger2);
        $("#b").css(deger);
    },
    mouseleave: function(){
        var deger = {
            bottom:-100,
            left:-600
        }
        var deger2 = {
            bottom:-100,
            right:-600
        }
        $("#a").css(deger2);
        $("#b").css(deger);    
    }
})
