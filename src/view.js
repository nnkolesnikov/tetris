export default class View {
    constructor(element, width, height, rows, columns) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.rows = rows;
        this.columns = columns;
        
        this.blockWidth = this.width / columns;
        this.blockHeight = this.height / rows;
        

        this.canvas = document.createElement('canvas');
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        this.context = this.canvas.getContext('2d');

        this.element.appendChild(this.canvas);
    }
    
    render(state){
        this.clearScreen();
        this.renderPlayField(state);
    }

    clearScreen(){
        this.context.clearRect(0, 0, this.width, this.height);
    }

    renderPlayField(field){
        const borderY = field.length;

        for(let y = 0; y < borderY; y++){
            const row = field[y];
            const borderX = row.length;

            for(let x = 0; x < borderX; x++){
                const block = row[x];
                
                if(block){
                    this.renderBlock(x, y, this.blockWidth, this.blockHeight)
                } 
            }
        } 
        
        return;

    }

    renderBlock(x, y, width, height) {
        this.context.fillRect(x * height, y * width , width - 2, height - 2);
    }
}
