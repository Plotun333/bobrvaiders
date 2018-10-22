function Blood(x,y) {
    this.x = x;
    this.y = y;

    var movedown = 60;
    this.Bobr = loadImage("images/bobrbloodstain.jpg");
    this.show = function () {

        image(this.Bobr, this.x, this.y);
    }

}