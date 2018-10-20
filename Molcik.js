function Molcik() {
    this.x = 100;
    this.y = 100;

    var movedown = 60;
    this.Bobr = loadImage("images/molda.JPG");
    this.show = function () {

        image(this.Bobr,this.x-50,this.y-50);
    };
    this.hits = function (player) {

        var d = dist(this.x + 30, this.y +17, player.x + 100, player.y - 82);


        if (d < 10) {
            return true;
        }
        else {
            return false;
        }
    }

}