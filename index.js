import Game from './src/game.js';
import View from './src/view.js';

const main = document.querySelector('#main');

const game = new Game();
const view = new View(main, 320, 640, 20, 10);

window.game = game;
window.view = view;

document.addEventListener('keydown', event => {
    switch(event.keyCode) {
        case 37: // LEFT ARROW 
            game.moveFigureLeft();
            view.render(game.getState());
            break;
        case 38: // UP ARROW 
            game.rotateFigure();
            view.render(game.getState());
            break;
        case 39: // RIGHT ARROW 
            game.moveFigureRight();
            view.render(game.getState());
            break;
        case 40: // DOWN ARROW 
            game.moveFigureDown();
            view.render(game.getState());
            break;
    }
})
