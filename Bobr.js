function Bobr(x,y) {
    this.x = 5+x;
    this.y = 5+y;

    var movedown = 60;
    this.Bobr = loadImage("images/beaver.png");
    this.show = function () {

        image(this.Bobr,this.x,this.y);
    };
    this.hits = function (player) {
        var d = dist(this.x+23,this.y+23,player.x+30,player.y-17);


        if(d < 30){
            return true;
        }
        else {
            return false;
        }
    }



}