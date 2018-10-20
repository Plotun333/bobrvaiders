//jestliže tohle čtete tak jste bobr (Vitek Peterka nebo Kryštof Svobada pane pane)
//Wifi z tomle kodu neni
//brrr
var Player;
var bobr = [];
var bobrspeed =-1;
var side = 'left';
var shots = [];
var bobrshots = [];
var fire=false;
var shot;
var brrshot;
var blocks = [];
var numblocks = 64;
var xb=0;
var yb=400;
var fast = 1;
var level = 1;
var life;
var lives = 3;
var extra = 0.2;
var starfast;
var Key = "";
var Molciklives = 40;

function setup() {
    if(level===11){
        //const Http = new XMLHttpRequest();
        //const url='https://qoutegenerator/bobr';
        //Http.open("GET", url,true,Key,null);
        //Http.send();
        //Http.onreadystatechange=(e)=>{
            fill('black');

            rect(0,0,width,height,);
            fill('red');
            textAlign(CENTER);
            textSize(30);
            //text("Školní Wifi:"//+Http.responseText, width/2, height/2);

      // };

        Getout();
    }
    life = new Lives(lives);
    shots = [];
    side = 'left';


    fast = 1+(extra*level);

    bobrspeed =-1;

    textSize(200);
    if(level==1) {
        for (var c = 0; c < numblocks; c++) {

            if (c % 16 === 0 && c !== 0) {
                xb += 200;
                yb -= 80;
            }

            if (c % 4 === 0 && c !== 0) {
                yb += 20;
                xb -= 60;
            }
            else {
                xb += 20;
            }
            b = new Block(xb, yb);
            blocks.push(b);
        }
    }



    createCanvas(800,600);


    Player = new Ship();
    shot = new Shot(width/2,height);


    if(level!==10) {
        var y = 0;
        var x = 0;
        for (var i = 0; i < 20; i++) {

            bobr[i] = new Bobr(x * 70, y);
            x++;

            if (i % 5 === 4 && i !== 0) {

                y += 60;
                bobr.x = 20;
                x = 0;

            }
        }
    }
    else{

        bobr[0] = new Molcik();
    }

}
function draw() {

    life.lives = lives;

    if(bobr.length===0){
        level++;

        Key+="A";
        setup();
    }
    background('black');
    Player.show();
    life.draw();
    for(var b = 0; b < blocks.length; b++){
        blocks[b].show();
    }
    for (var i = 0; i < bobr.length; i++) {
        bobr[i].show();

    }

    getBullet();

    fill('white');
    text("LEVEL: "+level,50, 50);
    if(level===10){

        textSize(20);
        fill('blue');
        text("Molčik lives: "+ Molciklives,350,50);
    }
    if(level!==10) {
        for (var brr = 0; brr < bobrshots.length; brr++) {
            bobrshots[brr].move();
            bobrshots[brr].show();
            if (bobrshots[brr].y >= height) {

                bobrshots.splice(brr, 1);
                break;

            }

            if (bobrshots.length >= 1) {

                if (bobrshots[brr].hits(Player)) {
                    lives -= 1;
                    bobrshots = [];



                    bobrshots.splice(brr, 1);
                    if (lives === 0) {
                        alert("You Have Died");
                        fill('black');
                        rect(0, 0, width, height,);
                        fill('red');

                        textAlign(CENTER);
                        textSize(30);
                        text("Game Over", width / 2, height / 2);
                        Getout();
                        break;
                    }
                    break;
                }
                for (var b = 0; b < blocks.length; b++) {
                    if (bobrshots[brr].hits2(blocks[b])) {
                        bobrshots.splice(brr, 1);
                        blocks.splice(b, 1);
                        break;

                    }
                }
            }
        }
    }
    for (var i = 0; i < shots.length; i++) {
        shots[i].move();
        shots[i].show();
        if (shots[i].y <= 0) {

            shots.splice(i, 1);
            fire = false;
            break;
        }
        if(shots.length >=1){
            for(var b = 0; b<blocks.length;b++) {
                if (shots[i].hits2(blocks[b])) {
                   shots.splice(i, 1);
                   blocks.splice(b, 1);
                   fire = false;
                   break;

                }
            }
        }
        if (shots.length >= 1) {
            if (level !== 10) {
                for (var j = 0; j < bobr.length; j++) {
                    if (shots[i].hits(bobr[j])) {
                        Key += 'br';
                        shots.splice(i, 1);
                        fire = false;


                        bobr.splice(j, 1);
                        break;
                    }

                }
            }
            else{
                if (shots[i].hits(bobr[0],true)) {
                    Molciklives--;
                    shots.splice(i, 1);
                    fire = false;


                    if(Molciklives===0) {
                        bobr.splice(0, 1);



                    }
                    break;
                }
            }
        }


        }

        for (var i = 0; i < bobr.length; i++) {
            if (bobr[i].hits(Player)) {
                alert("You Have Died");
                fill('black');
                rect(0, 0, width, height,);
                fill('red');

                textAlign(CENTER);
                textSize(30);
                text("Game Over", width / 2, height / 2);
                Getout();
            }
        }

        movebobr();

        Player.move();

        if (Player.x > 740) {
            Player.Dir(0);
        }
        if (Player.x < -5) {
            Player.Dir(0);
        }

}
function keyReleased() {
    if (key !== ' ') {
        Player.Dir(0);


    }
}
function keyPressed() {

        if (key === ' ' && fire === false) {
            fire = true;
            shot = new Shot(Player.x + 30, Player.y);
            shots.push(shot);

        }

        if (keyCode === RIGHT_ARROW) {
            if (Player.x < 740) {
                Player.Dir(1);
            } else {
                Player.Dir(0);
            }

        }
        else if (keyCode === LEFT_ARROW) {
            if (Player.x > -5) {
                Player.Dir(-1);
            } else {
                Player.Dir(0);
            }


        }


    }
function movebobr() {

        for (var i = bobr.length-1; i > -1; i--) {


            if (side === 'right' && bobr[i].x >= width - 60) {

                fast+=0.25;
                bobrspeed = -fast;

                side = 'left';
                for (var br = 0; br < bobr.length; br++) {
                    bobr[br].y += 20;
                }
            }
            if (side === 'left' && bobr[i].x <= 0) {

                fast+=0.25;
                bobrspeed = fast;

                side = 'right';
                for (var br = 0; br < bobr.length; br++) {
                    bobr[br].y += 20;
                }


            }
        }
        for (var ix = bobr.length-1; ix > -1; ix--) {
            bobr[ix].x += bobrspeed;
        }




    }
function getBullet() {
    for (var brr = 0; brr < bobr.length; brr++) {
        var random = Math.floor((Math.random() * 900) + 1);
        if (random === 1) {
            brrshot = new Shot2(bobr[brr].x, bobr[brr].y);
            bobrshots.push(brrshot);

        }

    }
}
function Getout( status ) {

        var i;

        if (typeof status === 'string') {
            alert(status);
        }

        window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);

        var handlers = [
            'copy', 'cut', 'paste',
            'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
            'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
            'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
        ];

        function stopPropagation (e) {
            e.stopPropagation();
            // e.preventDefault(); // Stop for the form controls, etc., too?
        }
        for (i=0; i < handlers.length; i++) {
            window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
        }

        if (window.stop) {
            window.stop();
        }

        throw '';
}