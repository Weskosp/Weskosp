$("#play3").click(function(){
    $("#play3").hide(500);
    var snake = {
        x: 370,
        y: 215
    }
    var parts = {
        x: 390,
        y: 215,
        engel: false,
        engely: false
    }
    var elma = {
        x: 600,
        y: 200
    }
    var start = setInterval(str,2);
    var snakeMove;
    var buyume;
    var i;
    function str(){
        snake.x--;
        $("#yilan").css("right",`${snake.x}px`);
    }
    $("body").keypress(function(e){
        clearInterval(start);
        clearInterval(snakeMove);
        if(e.key == "w"){
            snakeMove = setInterval(snk,2);
            function snk(){
                snake.y--;
                $("#yilan").css("top",`${snake.y}px`);
            }
        }
        if(e.key == "s"){
            snakeMove = setInterval(snk,2);
            function snk(){
                snake.y++;
                $("#yilan").css("top",`${snake.y}px`);
            }
        }
        if(e.key == "d"){
            snakeMove = setInterval(snk,2);
            function snk(){
                snake.x--;
                $("#yilan").css("right",`${snake.x}px`);
            }            
        }
        if(e.key == "a"){
            snakeMove = setInterval(snk,2);
            function snk(){
                snake.x++;
                $("#yilan").css("right",`${snake.x}px`);
            }                 
        }
    })
    setInterval(function(){
        sr();
        partss();
    },1)
    function partss(){
        if(parts.y == snake.y){
            parts.engel = false
        }
        if(parts.x == snake.x){
            parts.engely = false;
        }
        if(parts.x != snake.x && !parts.engel){
            parts.engely = true;
            if(parts.x > snake.x){
                parts.x--;
            }
            else if(parts.x < snake.x){
                parts.x++;
            }
        }
        if(parts.y != snake.y && !parts.engely){
            parts.engel = true;
            if(parts.y > snake.y){
                parts.y--;
            }
            else if(parts.y < snake.y){
                parts.y++;
            }
        }
        $(".part").css("top",`${parts.y}px`);
        $(".part").each(function(index){
            $(this).css("right",`${parts.x + index}px`);
            console.log(index);
        })
    }
    function sr(){
        if(snake.x <= 0){
            snake.x = 770;
        }
        else if(snake.x >= 771){
            snake.x = 1;
        }
        else if(snake.y <= 0){
            snake.y = 460;
        }
        else if(snake.y >= 465){
            snake.y = 1;
        }
        if((elma.x + 20) >= (snake.x || (snake.x - 20)) && (elma.x - 30) <= (snake.x || (snake.x - 20)) && (elma.y - 10) <= (snake.y || (snake.y + 20)) && (elma.y + 20) >= (snake.y || (snake.y + 20))){
            elma.x = Math.floor(Math.random() * 750);
            elma.y = Math.floor(Math.random() * 450);
            $("#elm").css("top",`${elma.y}px`);
            $("#elm").css("right",`${elma.x}px`);
            buyume = document.createElement("div");
            buyume.classList.add("part");
            $("#bolge").append(buyume);
        }
    }
})
