
class Game {

    constructor ( canvasElement) {

        this.canvas = canvasElement;
        this.context = canvasElement.getContext('2d')
        this.player = new Player (this);
        this.enemies = [];
        this.spells = [];
        this.enableControls();

    }

    enableControls () {
        window.addEventListener('keydown', (event) => {
          const code = event.code;
          switch (code) {

            case 'ArrowRight':
              event.preventDefault();
              this.player.x += 50;
              break;
            case 'ArrowLeft':
              event.preventDefault(); 
              this.player.x -= 50;
              break;
            case 'Space':
              this.fireSpell();
              break;
          }

        }); 
      }


    generateEnemy () {
        const enemyX = Math.random() * this.canvas.width;
        const enemyY = Math.floor(Math.random() * (200 - 100 + 1) + 100);
        const enemy = new Enemy (this, enemyX,enemyY);
        this.enemies.push(enemy);

    }

 
    fireSpell () {
        const spell = new Spell ( this, this.player.x, this.player.y);
        this.spells.push (spell);
    } 


    loop () {
        window.requestAnimationFrame( () => {

        this.runLogic();
        this.draw();
        this.loop();
        });
    }


    runLogic () {

        if (Math.random() < 0.01) {
            this.generateEnemy();
          }

        for (const enemy of this.enemies) {
            enemy.runLogic();

            const intersection = enemy.checkIntersection (this.player);
            if (intersection) {
                console.log("Are interescting")
            }
        }


        for ( const spell of this.spells) {
            spell.runLogic();
        }
    }

    
    draw () {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for ( const enemy of this.enemies) {
            enemy.draw();
        }
        for ( const spell of this.spells) {
            spell.draw();
        }

        this.player.draw();
    }

}

