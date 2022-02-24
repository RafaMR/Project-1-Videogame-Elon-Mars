
const playerImage = new Image();
playerImage.src = './img/elon-photo.png';

class Player  {

    constructor (gameInstance){

        this.game = gameInstance;

        this.x = 750;
        this.y = 600;
        this.width = 100;
        this.height = 200;
        this.speed = 10;
        
    }


  draw (){
    this.game.context.drawImage (playerImage,this.x, this.y, this.width, this.height);
}

}

