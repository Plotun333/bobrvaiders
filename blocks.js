function Block(x,y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        fill("green");
        rect(this.x,this.y,20,20)

    }


}