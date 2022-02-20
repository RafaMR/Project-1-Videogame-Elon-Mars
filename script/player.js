
const playerImage = new Image();
playerImage.src = './img/player.png';

class Player  {

    constructor (gameInstance){

        this.game = gameInstance;

        this.x = 750;
        this.y = 600;
        this.w = 100;
        this.h = 200;
        this.speed = 10;
        this.frame = 1;
    }


  draw (){
    this.game.context.drawImage (playerImage, this.x, this.y, this.w, this.h);
}

}

