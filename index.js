import Game from './src/game.js';
import View from './src/view.js';
import Controller from './src/controller.js'

const main = document.querySelector('#main');

const game = new Game();
const view = new View(main, 480, 640, 20, 10);
const controller = new Controller(game, view);

window.game = game;
window.view = view;
window.controller = controller;

controller.start();
