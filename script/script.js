
const canvasElement = document.querySelector('canvas');


const startScreen = document.getElementById ('start-screen');
const playingScreen = document.getElementById ('playing-screen');
const endScreen = document.getElementById ('game-over-screen');


const startButton = startScreen.querySelector ('button');

const tryAgainButton = endScreen.querySelector('button');


const screenElements = {
    start: startScreen,
    playing: playingScreen,
    end: endScreen
}

const game = new Game (canvasElement, screenElements);

startButton.addEventListener ('click', () => {
    game.start ();
});


tryAgainButton.addEventListener ('click', () => {
    game.start ();
});





