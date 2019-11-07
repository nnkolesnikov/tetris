export default class Controller {
    
    constructor(game, view){
        this.game = game;
        this.view = view;
        this.isPlaying = false;
        this.intervalId = null;

        document.addEventListener('keydown', this.handlerKey.bind(this));
        
        return;
    }

    update() {
        if(this.game.isGameOver) {
            this.stop();
            return;
        }

        this.game.moveFigureDown();
        this.view.render(this.game.getState());
         
        return;
    }

    startTimer() {
        const speed = 1400 - this.game.level * 200

        if(!this.intervalId) {
            this.intervalId = setInterval(() => this.update(), speed);
        }

        return;
    }

    stopTimer() {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }

        return;
    }

    start() {
        this.view.renderStartScreen();

        return;
    }

    stop() {
        this.stopTimer();
        this.view.renderGameOverScreen(this.game.getState().score);    

        return;
    }

    pause() { 
        this.view.renderPauseScreen();
        this.isPlaying = false;
        this.stopTimer();

        return;
    }

    play() {
        this.view.render(this.game.getState());
        this.isPlaying = true;
        this.startTimer();
        
        return;
    }

    left() {
        if(this.isPlaying) { 
            this.game.moveFigureLeft();
            this.view.render(this.game.getState());
        }

        if(this.game.isGameOver) {
            this.stop();
        }

        return;
    }

    right() {
        if(this.isPlaying) {
            this.game.moveFigureRight();
            this.view.render(this.game.getState());
        }
        
        if(this.game.isGameOver) {
            this.stop();
        }

        return;
    }

    up() {
        if(this.isPlaying) {
            this.game.rotateFigure();
            this.view.render(this.game.getState());
        }
        
        if(this.game.isGameOver) {
            this.stop();
        }

        return;
    }

    down() {
        if(this.isPlaying) {
            this.game.moveFigureDown();
            this.view.render(this.game.getState());
        }

        if(this.game.isGameOver) {
            this.stop();
        }

        return;
    }

    space() {
        if(this.isPlaying) {
            this.game.failFigureDown();
            this.view.render(this.game.getState());
        }

        if(this.game.isGameOver) {
            this.stop();
        }

        return;

    }
    
    handlerKey(event) {
        if(this.game.isGameOver)
            return;
        switch(event.keyCode) {
            case 13: // ENTER
                if(!this.isPlaying)
                    this.play();    
                else
                    this.pause();    
                break;
            case 32: // SPACE
                this.space();
                break;
            case 37: // LEFT ARROW 
                this.left();
                break;
            case 38: // UP ARROW 
                this.up();
                break;
            case 39: // RIGHT ARROW 
                this.right();
                break;
            case 40: // DOWN ARROW 
                this.down();
                break;
        }
        
        return;
    }
}


