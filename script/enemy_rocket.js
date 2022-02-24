
const enemyImage = new Image();
enemyImage.src = './img/doge_normal.png';

class Enemy  {

    constructor (gameInstance, x , y) {

    this.game = gameInstance;
    this.x = x;
    this.y = y;
    this.vy = 5;
    this.vx = 5;
    this.r = 60;
    this.gravity = 0.50;
    }



    draw (){
    this.game.context.drawImage (playerImage,this.x, this.y, this.width, this.height);
}
