function Shot(x,y) {
    this.x = x;
    this.y = y;
    this.Playershot = loadImage("images/Playershot.png");
    this.bulletspeed = 10;


    this.show = function () {
       noStroke();
       image(this.Playershot,this.x,this.y);

    };


    this.move = function () {
        this.y=this.y-this.bulletspeed;



    };
    this.hits = function (bobr,mol) {
        if (mol===true){
            var d = dist(this.x + 3, this.y - 3, bobr.x + 100, bobr.y + 82);


            if (d < 103) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            var d = dist(this.x + 3, this.y - 3, bobr.x + 23, bobr.y + 23);


            if (d < 26) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    this.hits2 = function (bobr) {
        var d = dist(this.x+3,this.y-3,bobr.x+10,bobr.y-10);


        if(d < 13){
            return true;
        }
        else {
            return false;
        }
    }
}

