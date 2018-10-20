function Ship() {
    this.x = width/2-60;
    this.y = height-30;
    this.side =0;
    this.PlayerShape = loadImage("images/Player.png");
    this.show = function () {

       image(this.PlayerShape,this.x,this.y);
    };
    this.Dir = function (dir) {
        this.side=dir;
    };
    this.move = function () {
        this.x+=this.side*5;

    }
}