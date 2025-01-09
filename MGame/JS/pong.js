$("#play2").click(function(){
    $("#play2").hide(500);
    var oyuncu;
    var karakter = {
        engel: false,
        hrkt: 170,
        yukseklik: 100,
        konum: 720
    }
    var bot = {
        engel: false,
        hrkt: 170,
        yukseklik: 100,
        konum: 40,
        aktif: false
    }
    var topN = {
        x: 370,
        y: 215,
        yon: false,
        yon2: false,
        yon3: false
    }
    var dusus;
    var duvar = false;
    var duvar2 = false;
    var sira = 0;
    var topHareket = setInterval(ball,1);
    var botHaraket = setInterval(botH,5);
    var puan = 0;
    var puan2 = 0; 
    function transfer(){
        duvar = false;
        topN.yon3 = false;
        topN.yon2 = true;
    }
    function transfer2(){
        duvar2 = false;
        topN.yon2 = false;
        topN.yon3 = true;
    }
    function gameover(){
        clearInterval(topHareket);
        topN.x = 370;
        topN.y = 215;
        karakter.hrkt = 170;
        bot.hrkt = 170;
        $("#ball").css("top",`${topN.y}px`);
        $("#ball").css("right",`${topN.x}px`);
        $("#p2").css("top",`${bot.hrkt}px`);
        $("#p1").css("top",`${karakter.hrkt}px`);
        setTimeout(function(){
            topHareket = setInterval(ball,1);
        },1000);    
    }
    function ball(){
        if(sira == 0 && !topN.yon){
            topN.x++;
        }
        //
        if((karakter.hrkt + karakter.yukseklik) > topN.y && (karakter.hrkt - 10) < topN.y && topN.x == karakter.konum){
            sira = null;
            topN.yon = true;
        }
        if(topN.yon == true){
            topN.x--;
            if((karakter.hrkt + (karakter.yukseklik / 2)) > topN.y && (karakter.hrkt - 10) < topN.y && topN.x == (karakter.konum - 1)){
                dusus = Math.random();
                transfer();
            }
            else if((karakter.hrkt + karakter.yukseklik) > topN.y && (karakter.hrkt + (karakter.yukseklik / 2)) < topN.y && topN.x == (karakter.konum - 1)){
                dusus = Math.random();
                transfer2();
            }
            if(topN.yon2){
                topN.y -= dusus;
            }
            else if(topN.yon3){
                topN.y += dusus;
            }
            //
            if(topN.y <= 20){
                topN.yon2 = false;
                duvar = true;
                duvar2 = false;
            }
            else if(topN.y >= 390){
                topN.yon3 = false;
                duvar = false;
                duvar2 = true;
            }
            if(duvar){
                topN.y += dusus;
            }
            else if(duvar2){
                topN.y -= dusus;
            }
        }
        ////////////////////////////////////
        if((bot.hrkt + bot.yukseklik) > topN.y && (bot.hrkt - 10) < topN.y && topN.x == bot.konum){
            topN.yon = false;
            bot.aktif = true;
        }
        if(!topN.yon && bot.aktif){
            topN.x++;
            if((bot.hrkt + (bot.yukseklik / 2)) > topN.y && (bot.hrkt - 10) < topN.y && topN.x == (bot.konum + 1)){
                transfer();
            }
            else if((bot.hrkt + bot.yukseklik) > topN.y && (bot.hrkt + (bot.yukseklik / 2)) < topN.y && topN.x == (bot.konum + 1)){
                transfer2();
            }
             //
            if(topN.y <= 20){
                topN.yon2 = false;
                duvar = true;
                duvar2 = false;
            }
            else if(topN.y >= 390){
                topN.yon3 = false;
                duvar = false;
                duvar2 = true;
            }
            if(duvar){
                topN.y += dusus;
            }
            else if(duvar2){
                topN.y -= dusus;
            }
        }
        $("#ball").css("top",`${topN.y}px`)
        $("#ball").css("right",`${topN.x}px`);
    }
    ///////////////////////////////////////////
    function botH(){
        if((bot.hrkt + (bot.yukseklik / 2)) > topN.y && (bot.hrkt + 5) > topN.y){
            bot.hrkt--;
        }
        else if((bot.hrkt + (bot.yukseklik - 5)) < topN.y && (bot.hrkt + (bot.yukseklik / 2)) < topN.y){
            bot.hrkt++;
        }
        $("#p2").css("top",`${bot.hrkt}px`);
        //////////////////////
        if(topN.x == 800){
            puan++;
            $("#p2puan").text(puan);
        }
        else if(topN.x == 0){
            puan2++;
            $("#p1puan").text(puan2);
        }
        if(topN.x == 800 || topN.x == 0){
            gameover();
        }
    }
    //////////////////////////////////////////
    $("body").on({
        keypress: function(e){
            if(e.key == "w" && !karakter.engel){
                oyuncu = setInterval(moves,5);
                karakter.engel = true;
                function moves(){
                    karakter.hrkt--;
                    $("#p1").css("top",`${karakter.hrkt}px`);
                    if(karakter.hrkt == 20){
                        karakter.hrkt = 21;
                    }
                }
            }
            else if(e.key == "s" && !karakter.engel){
                oyuncu = setInterval(moves,5);
                karakter.engel = true;
                function moves(){
                    karakter.hrkt++;
                    $("#p1").css("top",`${karakter.hrkt}px`);
                    if(karakter.hrkt == 310){
                        karakter.hrkt = 309;
                    }
                }
            }
        },
        keyup: function(e){
            if(e.key == "w" || e.key == "s"){
                karakter.engel = false;
                clearInterval(oyuncu);
            }
        }
    })
})
