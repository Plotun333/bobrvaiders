function Lives(life) {
    this.img = loadImage('images/life.png');
    this.lives = life;

    this.draw = function (){
        if(this.lives===3) {
            image(this.img, width - 150, 30);
            image(this.img, width - 100, 30);
            image(this.img, width - 50, 30);
        }
        else if(this.lives===2){
            image(this.img, width - 100, 30);
            image(this.img, width - 50, 30);
        }
        else if(this.lives===1){
            image(this.img, width - 50, 30);
        }

    };

}