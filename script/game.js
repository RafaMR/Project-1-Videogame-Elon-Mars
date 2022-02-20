
class Game {

    constructor ( canvasElement) {

        this.canvas = canvasElement;
        this.context = canvasElement.getContext('2d')
        this.player = new Player (this);
        this.enemy = new Enemy (this);
    //this.enableControls();

    }

    loop () {
        window.requestAnimationFrame( () => {

        this.clear();
        this.draw();
        this.loop();
        });
    }


    draw () {
        this.player.draw();
        this.enemy.draw();
    }
    

    clear (){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


}

