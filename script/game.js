const scoreImage = new Image();
scoreImage.src = './img/doge_coin.png';

class Game {

    constructor ( canvasElement, screens ) {

        this.canvas = canvasElement;
        this.context = canvasElement.getContext('2d');
        this.screens = screens;
        this.running = false;
        this.enableControls();
    }
//--------------------//

    start() {
        this.running = true;
        this.player = new Player (this);
        this.score = 0;
        this.enemies = [];
        this.enemiesJeff = [];
        this.spells = [];
        this.displayScreen('playing');
        this.loop();
    }
//--------------------//

    displayScreen (name) {
        for (let screenName in this.screens) {
            this.screens [screenName].style.display = 'none';
        }

        this.screens[name].style.display = '';
    }
//--------------------//

    lose (){
        this.running = false;
        this.displayScreen ('end');
    }
//--------------------//

    enableControls () {
        window.addEventListener('keydown', (event) => {
        if (this.running) { 

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
            event.preventDefault();  
            this.fireSpell();
              break;
          }
        
        }

        //this.player.x = clamp(this.player.x, 0, this.canvas.width- this.player.width); 
        //this.player.y = clamp(this.player.y, 0, this.canvas.height -this.player.height); 
        }); 
    }     

//--------------------//

    generateEnemy () {
        const enemyX = Math.random() * this.canvas.width;
        const enemyY = Math.floor(Math.random() * (200 - 100 + 1) + 100);
        const enemy = new Enemy (this, enemyX,enemyY);
        this.enemies.push(enemy);

    }

    generateEnemyJeff () {
        const enemyX = Math.random() * this.canvas.width;
        const enemyY = Math.floor(Math.random() * (100 - 50 + 1) + 50);
        const enemyJeff = new EnemyJeff (this, enemyX,enemyY);
        this.enemiesJeff.push(enemyJeff);

    }
    
//--------------------//

    fireSpell () {  
        const spell = new Spell ( this, this.player.x + this.player.width /2 - 200 / 2, this.player.y);
        this.spells.push (spell);
    } 

//--------------------//

    loop () {
        window.requestAnimationFrame( () => {

            this.runLogic();
            this.draw();

                if (this.running) {
                    this.loop();
                } 
        });
    }

//--------------------//

    runLogic () {

        if (Math.random() < 0.01) {
            this.generateEnemy();
          }

        if (Math.random() < 0.002) {
            this.generateEnemyJeff();
        }
        

        for (const enemy of this.enemies) {
            this.runEnemyLogic (enemy);
        }

        for (const enemyJeff of this.enemiesJeff) {
            this.runEnemyLogic (enemyJeff);
        }


        for ( const spell of this.spells) {
            this.runSpellLogic (spell);
         }
    }

//----------------//
    runEnemyLogic (enemy) {
        enemy.runLogic();
        
        const intersection = enemy.checkIntersection (this.player);
     
        if (intersection) {
            this.lose ();
        }
    }

    runEnemyLogicJeff (enemyJeff) {
        enemyJeff.runLogic();

        const interesectionJeff = enemyJeff.checkIntersection (this.player);
        if (interesectionJeff) {
            this.lose ();
        }

    }

//--------------------//

    runSpellLogic (spell) {

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

//--------------------//

    drawScore (){
        this.context.font = '50px VT323, monospace'
        this.context.drawImage (scoreImage, 650, 10, 100, 80);
        this.context.drawImage (scoreImage, 810, 10, 100, 80);
        this.context.fillText(`Ð${this.score}`, 750, 70);
    }

//--------------------//

    draw () {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for ( const enemy of this.enemies) {
            enemy.draw();
        }
        for ( const enemy of this.enemies) {
            enemy.draw();
        }
       for ( const enemyJeff of this.enemiesJeff) {
            enemyJeff.draw();
        }
        /*for ( const enemyJeff of this.enemiesJeff) {
            enemyJeff.draw();
        }
        for ( const enemyJeff of this.enemiesJeff) {
            enemyJeff.draw();
        }
        */
       
        for ( const spell of this.spells) {
            spell.draw();
        }
        
        this.player.draw();
        this.drawScore();
    }

}

    //function clamp (n, min, max) {
    //return Math.min(Math.max(n, min), max);
 // }

