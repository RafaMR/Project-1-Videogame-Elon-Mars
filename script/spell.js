const spellImage = new Image();
spellImage.src = './img/shot.png';

class Spell {

    constructor (gameInstance , x, y) {
        this.game = gameInstance;
        this.x = x;
        this.y = y;
        this.vy = 20;
        this.width = 200;
        this.height = 300;
    }


    runLogic (){
        this.y -= 20;
    }

    draw () {
        this.game.context.drawImage (spellImage, this.x, this.y, this.width, this.height);
    }

}
   

     