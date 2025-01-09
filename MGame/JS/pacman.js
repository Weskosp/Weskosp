$("#res").hide(500);
$("#play").click(function(){
    $("#play").hide(500);
    var xxx = 600;
    var yyy = 400;
    var monsX = 900;
    var monsY = 300;
    var monsT = setInterval(monster,9);
    var tek = false;
    
    function monster(){
        if(monsY < yyy){
            monsY++;
            $("#mons").css("bottom",`${monsY}px`);
        }
        else if(monsY > yyy){
            monsY--;
            $("#mons").css("bottom",`${monsY}px`);
            
        }
        if(monsY == yyy){
            if(monsX < xxx){
                monsX++;
                $("#mons").css("right",`${monsX}px`);
            }
            else if(monsX > xxx){
            
                monsX--;
                $("#mons").css("right",`${monsX}px`);
            }
        }
        if(monsX < xxx){
            $("#mons").css("transform","rotateY(180deg)");
        }
        if(monsX > xxx){
            $("#mons").css("transform","rotateY(0deg)");
        }
        ///////////////////////////////////////////
        if(xxx < -10){
            xxx = -9;
        }
        else if(xxx > 1835){
            xxx = 1834;
        }
        if(yyy < -9.5){
            yyy = -9;
        }
        else if(yyy > 535){
            yyy = 534;
        }

    }
    $("body").on({
        keypress: function(e){
            if(e.key == "w" && !tek){
                tek = true;
                hareket = setInterval(zaman,5);
                $("#pac").css("transform","rotate(-90deg)")
                function zaman(){
                    yyy++;
                    $("#pac").css("bottom",`${yyy}px`);
                }    
            }
        },
        keyup: function(e){
            if(e.key == "w"){
                clearInterval(hareket);
                tek = false;
            }
        }
    })
    $("body").on({
        keypress: function(e){
            if(e.key == "s" && !tek){
                tek = true;
                hareket = setInterval(zaman,5);
                $("#pac").css("transform","rotate(90deg)")
                function zaman(){
                    yyy--;
                    $("#pac").css("bottom",`${yyy}px`);
                }    
            }
        },
        keyup: function(e){
            if(e.key == "s"){
                clearInterval(hareket);
                tek = false;
            }
        }
    })
    $("body").on({
        keypress: function(e){
            if(e.key == "a" && !tek){
                tek = true;
                hareket = setInterval(zaman,5);
                $("#pac").css("transform","rotate(180deg)")
                function zaman(){
                    xxx++;
                    $("#pac").css("right",`${xxx}px`);
                }    
            }
        },
        keyup: function(e){
            if(e.key == "a"){
                clearInterval(hareket);
                tek = false;
            }
        }
    })
    $("body").on({
        keypress: function(e){
            if(e.key == "d" && !tek){
                tek = true;
                hareket = setInterval(zaman,5);
                $("#pac").css("transform","rotate(0deg)")
                function zaman(){
                    xxx--;
                    $("#pac").css("right",`${xxx}px`);
                }    
            }
        },
        keyup: function(e){
            if(e.key == "d"){
                clearInterval(hareket);
                tek = false;
            }
        }
    })
    var ress = setInterval(rest,1);
    function rest(){
        if(monsX == xxx && monsY == yyy){
            xxx = 600;
            yyy = 400;
            monsX = 900;
            monsY = 300;
            clearInterval(monsT);
            clearInterval(ress);
            $("#res").show(500);
            $("#pac").css("right",`600px`).css("bottom",`400px`);
            $("#mons").css("right",`900px`).css("bottom","300px");
        }
    }
    $("#res").click(function(){
        monsT = setInterval(monster,9);
        ress = setInterval(rest,1);
        $("#res").hide(500);
    })
})
