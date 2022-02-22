

class Game {

    constructor ( canvasElement) {

        this.canvas = canvasElement;
        this.context = canvasElement.getContext('2d');
        this.score = 0;
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
        const spell = new Spell ( this, this.player.x + this.player.width /2 - 200 / 2, this.player.y);
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
                const indexOfEnemy = this.enemies.indexOf(enemy);
                this.enemies.splice(indexOfEnemy, 1);
            }
        }


        for ( const spell of this.spells) {
            
            spell.runLogic();

            for (const enemy of this.enemies) {
                
                const intersection = enemy.checkIntersection (spell);
                    if (intersection) {
                        const indexOfEnemy = this.enemies.indexOf(enemy);
                        this.enemies.splice(indexOfEnemy, 1);
                        const indexOfSpell = this.spells.indexOf(spell);
                        this.spells.splice(indexOfSpell, 1);
                        this.score += 1;
                    }
            }
            
        }
    }


    drawScore (){
        this.context.font = '48px monospace'
        this.context.fillText(`Dogecoins ${this.score}`, 750, 50);
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
        this.drawScore();
    }

}

