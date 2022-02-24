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

    
  checkIntersection (element) {
    return (
      element.x + element.width > this.x &&
      element.x < this.x + this.r &&
      element.y  + element.height > this.y &&
      element.y < this.y + this.r 
  );
}

  runLogic (){

    if (this.x + this.r > this.game.canvas.width || this.x - this.r < 0 ) {this.vx = - this.vx;}
    if (this.y + this.r > this.game.canvas.height || this.y - this.r < 0 ) {this.vy = - this.vy;}

    this.x += this.vx
    this.y += this.vy
  }

   draw () {

      this.game.context.drawImage( enemyImage, this.x, this.y, this.r*2, this.r*2);
      this.game.context.beginPath();
      this.game.context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      this.game.context.closePath();
  }


}

//element.x + element.width > this.x &&
//element.x < this.x &&
//element.y  + element.height > this.y &&
//element.y < this.y



