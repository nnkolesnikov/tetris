import {I, J, L, O, S, T, Z} from './figures.js'

export default class Game{
    
    constructor(rows = 20, columns = 10) {
        this.score = 0;
        this.lines = 0;
        this.scores = [0, 40, 100, 300, 1200];
        this.isGameOver = false;

        this.rows = rows;
        this.columns = columns;

        this.field = this.createPlayField();
        this.figure = this.createFigure();
        this.nextFigure = this.createFigure();
    
    }

    get level() {
        let level = Math.floor(this.lines * 0.1) + 1;
        
        if(level > 6)
            level = 6;

        return level;
    }

    getState() { 
        const field = this.copyPlayField();
        const blocks = this.figure.getBlocks();

        for(const block of blocks){
            const x = block[0];
            const y = block[1];

             field[y][x] = 1;
        }

        return {
            score: this.score,
            lines: this.lines,
            level: this.level,
            nextFigure: this.nextFigure,
            field
        };
    }
    
    copyPlayField() {
        const field = []
        const borderY = this.rows;
        const borderX = this.columns;

        for(let y = 0; y < borderY; y++){
            field[y] = [];
            for(let x = 0; x < borderX; x++){
                field[y][x] = this.field[y][x];
            }
        }

        return field;

    }

    createPlayField() {
        const field = []
        const borderY = this.rows;
        const borderX = this.columns;

        for(let y = 0; y < borderY; y++){
            field[y] = [];
            for(let x = 0; x < borderX; x++){
                field[y][x] = 0;
            }
        }

        return field;
    }
    
    updateFigure() {
        this.figure = this.nextFigure;
        this.nextFigure = this.createFigure();

        return;
    }

    createFigure() {
        const figures  = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
        const random = Math.floor(Math.random() * 7);
        
        switch(figures[random]){
            case 'I':
                return new I(Math.floor(this.columns/2) - 1, 0);
            case 'J':
                return new J(Math.floor(this.columns/2) - 1, 1);
            case 'L':
                return new L(Math.floor(this.columns/2) - 1, 0);
            case 'O':
                return new O(Math.floor(this.columns/2) - 1, 0);
            case 'S':
                return new S(Math.floor(this.columns/2) - 1, 1);
            case 'T':
                return new T(Math.floor(this.columns/2) - 1, 0);
            case 'Z':
                return new Z(Math.floor(this.columns/2) - 1, 1);
        }

        return new I(Math.floor(this.columns/2) - 1, 0);
    }

    isValidPositionFigure(){
        const blocks = this.figure.getBlocks();

        for(const block of blocks){
            const x = block[0];
            const y = block[1];

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
        if(this.isGameOver)
            return;

        this.figure.y += 1    
        
        if(!this.isValidPositionFigure()) {
            this.figure.y -= 1;
            this.lockFigure();
            this.updateScore();
            this.updateFigure();
            
        }
        
        if(!this.isValidPositionFigure()) {
           this.isGameOver = true; 
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
    
    rotateFigure() {
        this.figure.rotation = (this.figure.rotation + 1) % 4;

        if(!this.isValidPositionFigure()){
            this.figure.rotation = this.figure.rotation > 0 ? this.figure.rotation - 1 : 3;
        }

        return;
    }

    failFigureDown() {
        //TODO    
    }

    updateScore() {
        const lines = this.clearRows();
        const score = this.scores[lines] === undefined ? this.scores[this.scores.length - 1] : this.scores[lines] 
        
        this.lines += lines;
        this.score += score;

        return;
    }

    clearRows() {
        let deleteRowsIndex = [];
        const field = this.field; 
        const borderY = this.rows;
        const borderX = this.columns;

        for(let y = borderY - 1; y >= 0; y--){
            let countBlocks = 0;
            for(let x = 0; x < borderX; x++){
                if(field[y][x] != 0)
                    countBlocks += 1;
            }

            if(!countBlocks)
                break;

            if(countBlocks === borderX){
                deleteRowsIndex.unshift(y);
            }

        }

        for(let index of deleteRowsIndex){
            this.field.splice(index, 1);
            this.field.unshift(new Array(borderX).fill(0))
        }

        return deleteRowsIndex.length;
    }

}
