class Figure {

    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
        this.rotation = 0;
    }
    
}

export class J extends Figure {
    
    getNormalBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y];
        blocks[1] = [x, y + 1];
        blocks[2] = [x, y + 2];
        blocks[3] = [x - 1, y + 2];
        
        return blocks;
    }

    getIvertBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y];
        blocks[1] = [x + 1, y + 1];
        blocks[2] = [x, y + 1];
        blocks[3] = [x, y + 2];
        
        return blocks;
    }

    getFlipingLeftBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y];
        blocks[1] = [x + 1, y];
        blocks[2] = [x + 2, y];
        blocks[3] = [x + 2, y + 1];
        
        return blocks;
    }

    getFlipingRightBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y];
        blocks[1] = [x, y + 1];
        blocks[2] = [x + 1, y + 1];
        blocks[3] = [x + 2, y + 1];
        
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
                return this.getIvertBlocks();
            case 3:
                return this.getFlipingLeftBlocks();
        }
    }
        
}

export class L extends Figure {
    
    getNormalBlocks() {
        const x = this.x;
        const y = this.y;
        
        let blocks = [];

        blocks[0] = [x, y];
        blocks[1] = [x, y + 1];
        blocks[2] = [x, y + 2];
        blocks[3] = [x + 1, y + 2];
        
        return blocks;
    }

    getBlocks() {
        const rotation = this.rotation;

        switch(rotation){
            case 0:
                return this.getNormalBlocks();
            
        }
    }
        
}
