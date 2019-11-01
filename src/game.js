import {I, J, L, O, S, T, Z} from './figures.js'

export default class Game{
    
    constructor(level = 1, rows = 20, columns = 10) {
        this.score = 0;
        this.lines = 0;
        this.level = level;
        
        this.rows = rows;
        this.columns = columns;

        this.field = this.createPlayField();
        this.figure = this.createFigure();
    
    }

    getState() { 
        const field = this.copyPlayField();
        const blocks = this.figure.getBlocks();

        for(let i = 0; i < blocks.length; i++){
            const x = blocks[i][0];
            const y = blocks[i][1];
            
            field[y][x] = 1;
        }

        return field;
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
    
    generateFigure() {
        this.figure = this.createFigure();
    }

    createFigure() {
        const figures  = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
        const random = Math.floor(Math.random() * 7);
        
        switch(figures[random]){
            case 'I':
                return new I(Math.floor(this.columns/2) - 1, 0);
            case 'J':
                return new J(Math.floor(this.columns/2) - 1, 0);
            case 'L':
                return new L(Math.floor(this.columns/2) - 1, 0);
            case 'O':
                return new O(Math.floor(this.columns/2) - 1, 0);
            case 'S':
                return new S(Math.floor(this.columns/2) - 1, 0);
            case 'T':
                return new T(Math.floor(this.columns/2) - 1, 0);
            case 'Z':
                return new Z(Math.floor(this.columns/2) - 1, 0);
        }

        return new I(Math.floor(this.columns/2) - 1, 0);

    }

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
            this.generateFigure();
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
    
    rotateFigure(){
        this.figure.rotation = (this.figure.rotation + 1) % 4;

        if(!this.isValidPositionFigure()){
            this.figure.rotation = this.figure.rotation > 0 ? this.figure.rotation - 1 : 3;
        }

        return;
    }

    clearPlayField() {
        const borderY = this.field.length;

        for(let y = 0; y < borderY; y++){
            const borderX = this.field[y].length;

            for(let x = 0; x < borderX; x++){
                this.field[y][x] = 0;
            }
        } 
        
        return;
    }
}
