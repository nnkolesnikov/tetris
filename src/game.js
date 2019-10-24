import {J, L} from './figures.js'

export default class Game{
    score = 0;
    lines = 0;
    level = 0;
     
    field = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    figure = new J(Math.floor(this.field[0].length/2) - 1, 0);
    
    isValidPositionFigure(){
        const blocks = this.figure.getBlocks();

        for(let i = 0; i < blocks.length; i++){
            const x = blocks[i][0];
            const y = blocks[i][1];

            if(this.field[y] === undefined || this.field[y][x] === undefined || this.field[y][x])
                return false;
        }

        return true;
    }

    moveFigureLeft() {
        this.figure.x -= 1;    
        
        if(!this.isValidPositionFigure()){
            this.figure.x += 1;
        }

        return;
    }

    moveFigureRight() {
        this.figure.x += 1    
        
        if(!this.isValidPositionFigure()){
            this.figure.x -= 1;
        }
        
        return;
    }

    moveFigureDown() {
        this.figure.y += 1    
        
        if(!this.isValidPositionFigure()){
            this.figure.y -= 1;
            this.lockFigure();
        }
        
        return;
    }

    lockFigure() {
        const blocks = this.figure.getBlocks();
        for(let i = 0; i < blocks.length; i++){
            const x = blocks[i][0];
            const y = blocks[i][1];
            
            this.field[y][x] = 1;
        }

        return;
    }
    
    clearField() {
        const borderY = this.field.length;
        const borderX = this.field[0].length;

        for(let y = 0; y < borderY; y++){
            for(let x = 0; x < borderX; x++){
                this.field[y][x] = 0;
            }
        } 
        
        return;
    }

}
