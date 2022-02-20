const spellImage = new Image();
spellImage.src = './img/blue_ball.png';

class Spell {

    cosntructor (gameInstance , x, y) {
        this.game = gameInstance;
        this.x = x;
        this.y = y;
        this.vy = 20;
        this.width = 20;
        this.height = 5;
    }


    runLogic (){
        this.y += 5;
    }

    draw () {
        this.game.context.drawImage (spellImage, this.x, this.y, this.width, this.height);
    }

}
   

     