
const enemyJeffImage = new Image();
enemyJeffImage.src = './img/bezos.png';

class EnemyJeff  {

    constructor (gameInstance, x , y) {

    this.game = gameInstance;
    this.x = x;
    this.y = y;
    this.vy = 5;
    this.vx = 0;
    this.r = 60;
    this.gravity = 1;
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
      this.x += this.vx;
      this.y += this.vy;
      }


    draw () {
        //this.game.context.fillRect(this.x, this.y, this.r * 2, this.r * 2);
        this.game.context.drawImage( enemyJeffImage, this.x, this.y, this.r*2, this.r*2);
        this.game.context.beginPath();
        this.game.context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.game.context.closePath();
    }

  }