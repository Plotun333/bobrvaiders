function Shot2(x,y) {
    this.x = x;
    this.y = y;
    this.Bobrshot = loadImage("images/bobrshot.png");

    this.bobrbulletspeed = 2.5;


    this.show = function () {
        image(this.Bobrshot,this.x,this.y);
        noStroke();


    };

    this.move = function () {
        this.y=this.y+this.bobrbulletspeed;

    };
    this.hits = function (bobr) {
        var d = dist(this.x+3,this.y-3,bobr.x+30,bobr.y-10);


        if(d < 30){
            return true;
        }
        else {
            return false;
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