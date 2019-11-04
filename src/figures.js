class Figure {

    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
        this.rotation = 0;

        return;
    }
    
}

export class I extends Figure {
    
    getNormalBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y - 1];
        blocks[1] = [x, y];
        blocks[2] = [x, y + 1];
        blocks[3] = [x, y + 2];
        
        return blocks;
    }

    getInvertBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x - 1, y];
        blocks[1] = [x, y];
        blocks[2] = [x + 1, y];
        blocks[3] = [x + 2, y];
        
        return blocks;
    }

    getBlocks() {
        const rotation = this.rotation;

        if(rotation % 2){
            return this.getNormalBlocks();
        }    

        return this.getInvertBlocks();
    }

    getViewBlocks() {
        const x = 1; 
        const y = 1;
               
        let blocks = [];

        blocks[0] = [x - 1, y];
        blocks[1] = [x, y];
        blocks[2] = [x + 1, y];
        blocks[3] = [x + 2, y];
        
        return blocks;
    }
        
}
    
export class J extends Figure {
    
    getNormalBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y - 1];
        blocks[1] = [x, y];
        blocks[2] = [x, y + 1];
        blocks[3] = [x - 1, y + 1];
        
        return blocks;
    }

    getIvertBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y - 1];
        blocks[1] = [x + 1, y - 1];
        blocks[2] = [x, y];
        blocks[3] = [x, y + 1];
        
        return blocks;
    }

    getFlipingLeftBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x - 1, y];
        blocks[1] = [x, y];
        blocks[2] = [x + 1, y];
        blocks[3] = [x + 1, y + 1];
        
        return blocks;
    }

    getFlipingRightBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x - 1, y - 1];
        blocks[1] = [x - 1, y];
        blocks[2] = [x, y];
        blocks[3] = [x + 1, y];
        
        return blocks;
    }


    getBlocks() {
        const rotation = this.rotation;

        switch(rotation){
            case 0:
                return this.getFlipingRightBlocks();
            case 1:
                return this.getNormalBlocks();
            case 2: 
                return this.getFlipingLeftBlocks();
            case 3:
                return this.getIvertBlocks();
        }
        
        return this.getFlipingRightBlocks();
    }
    
    getViewBlocks() {
        const x = 1 
        const y = 1 
        
        let blocks = [];

        blocks[0] = [x - 1, y - 1];
        blocks[1] = [x - 1, y];
        blocks[2] = [x, y];
        blocks[3] = [x + 1, y];
        
        return blocks;
    }       
}

export class L extends Figure {
    
    getNormalBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y - 1];
        blocks[1] = [x, y];
        blocks[2] = [x, y + 1];
        blocks[3] = [x + 1, y + 1];
        
        return blocks;
    }

    getIvertBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x - 1, y - 1];
        blocks[1] = [x, y - 1];
        blocks[2] = [x, y];
        blocks[3] = [x, y + 1];
        
        return blocks;
    }

    getFlipingLeftBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x - 1, y];
        blocks[1] = [x, y];
        blocks[2] = [x + 1, y];
        blocks[3] = [x + 1, y - 1];
        
        return blocks;
    }

    getFlipingRightBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x - 1, y];
        blocks[1] = [x - 1, y + 1];
        blocks[2] = [x, y];
        blocks[3] = [x + 1, y];
        
        return blocks;
    }


    getBlocks() {
        const rotation = this.rotation;

        switch(rotation){
            case 0:
                return this.getFlipingRightBlocks();
            case 1:
                return this.getNormalBlocks();
            case 2: 
                return this.getFlipingLeftBlocks();
            case 3:
                return this.getIvertBlocks();
        }
        
        return this.getFlipingRightBlocks();
    }
    
    getViewBlocks() {
        const x = 1; 
        const y = 1;
        
        let blocks = [];

        blocks[0] = [x - 1, y];
        blocks[1] = [x - 1, y + 1];
        blocks[2] = [x, y];
        blocks[3] = [x + 1, y];
        
        return blocks;
    }       
}

export class O extends Figure {

    getBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y];
        blocks[1] = [x, y + 1];
        blocks[2] = [x + 1, y];
        blocks[3] = [x + 1, y + 1];
        
        return blocks;
    }

    getViewBlocks() {
        const x = 1; 
        const y = 1;
        
        let blocks = [];

        blocks[0] = [x, y];
        blocks[1] = [x, y + 1];
        blocks[2] = [x + 1, y];
        blocks[3] = [x + 1, y + 1];
        
        return blocks;
    }
        
}

export class S extends Figure {
    
    getNormalBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x - 1, y];
        blocks[1] = [x, y];
        blocks[2] = [x, y - 1];
        blocks[3] = [x + 1, y - 1];
        
        return blocks;
    }

    getInvertBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y - 1];
        blocks[1] = [x, y];
        blocks[2] = [x + 1, y];
        blocks[3] = [x + 1, y + 1];
        
        return blocks;
    }

    getBlocks() {
        const rotation = this.rotation;

        if((rotation + 1) % 2){
            return this.getNormalBlocks();
        }    

        return this.getInvertBlocks();
    }
    
    getViewBlocks() {
        const x = 1; 
        const y = 1;
        
        let blocks = [];

        blocks[0] = [x - 1, y];
        blocks[1] = [x, y];
        blocks[2] = [x, y - 1];
        blocks[3] = [x + 1, y - 1];
        
        return blocks;
    }       
}

export class T extends Figure {
    
    getNormalBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y - 1];
        blocks[1] = [x, y];
        blocks[2] = [x - 1, y];
        blocks[3] = [x + 1, y];
        
        return blocks;
    }

    getIvertBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x - 1, y];
        blocks[1] = [x, y];
        blocks[2] = [x + 1, y];
        blocks[3] = [x, y + 1];
        
        return blocks;
    }

    getFlipingRightBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y - 1];
        blocks[1] = [x, y];
        blocks[2] = [x, y + 1];
        blocks[3] = [x + 1, y];
        
        return blocks;
    }

    getFlipingLeftBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y - 1];
        blocks[1] = [x, y];
        blocks[2] = [x, y + 1];
        blocks[3] = [x - 1, y];
        
        return blocks;
    }


    getBlocks() {
        const rotation = this.rotation;

        switch(rotation){
            case 0:
                return this.getIvertBlocks();
            case 1:
                return this.getFlipingRightBlocks();
            case 2: 
                return this.getNormalBlocks();
            case 3:
                return this.getFlipingLeftBlocks();
        }
        
        return this.getInvertBlocks();
    }
    
    getViewBlocks() {
        const x = 1; 
        const y = 1;
        
        let blocks = [];

        blocks[0] = [x, y - 1];
        blocks[1] = [x, y];
        blocks[2] = [x - 1, y];
        blocks[3] = [x + 1, y];
        
        return blocks;
    }   
}

export class Z extends Figure {
    
    getNormalBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x - 1, y - 1];
        blocks[1] = [x, y - 1];
        blocks[2] = [x, y];
        blocks[3] = [x + 1, y];
        
        return blocks;
    }

    getInvertBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x + 1, y - 1];
        blocks[1] = [x + 1, y];
        blocks[2] = [x, y];
        blocks[3] = [x, y + 1];
        
        return blocks;
    }

    getBlocks() {
        const rotation = this.rotation;

        if((rotation + 1) % 2){
            return this.getNormalBlocks();
        }    

        return this.getInvertBlocks();
    }

    getViewBlocks() {
        const x = 1;
        const y = 1;
        
        let blocks = [];

        blocks[0] = [x - 1, y - 1];
        blocks[1] = [x, y - 1];
        blocks[2] = [x, y];
        blocks[3] = [x + 1, y];
        
        return blocks;
    }
       
}

