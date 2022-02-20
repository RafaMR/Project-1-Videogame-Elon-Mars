const enemyImage = new Image();
enemyImage.src = './img/blue_ball.png';

class Enemy  {

    constructor (gameInstance) {

    this.game = gameInstance;
    this.x = 100;
    this.y = 100;
    this.vy = 10;
    this.vx = 10;
    this.r = 30;
    this.gravity = 0.40;
    }

   draw () {

      this.game.context.drawImage( enemyImage, this.x, this.y, this.r*2, this.r*2);
      this.game.context.beginPath();
      this.game.context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      this.game.context.closePath();
      

    if (this.x + this.r > this.game.canvas.width || this.x - this.r < 0 ) {this.vx = - this.vx;}
    if (this.y + this.r > this.game.canvas.height || this.y - this.r < 0 ) {this.vy = - this.vy;}
    

    this.x += this.vx
    this.y += this.vy
    
  }


}


/* 

draw() with image

draw () { 
  this.game.context.drawImage( enemyImage, this.x, this.y, this.r*2, this.r*2);
  this.game.context.beginPath();
  this.game.context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
   this.game.context.closePath();
  }

draw () with SrokeStyle

 draw () {
    this.game.context.beginPath();
    this.game.context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.game.context.strokeStyle = "black";
    this.game.context.stroke ();

}
 */