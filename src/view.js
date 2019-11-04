export default class View {

    constructor(element, width, height, rows, columns) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.rows = rows;
        this.columns = columns;
        
        this.fieldBorderWidth = 3;
        this.fieldX = this.fieldBorderWidth;
        this.fieldY = this.fieldBorderWidth;
        this.fieldWidth = this.width * 2 / 3;
        this.fieldHeight = this.height;
        this.fieldInnerWidth = this.fieldWidth - (2 * this.fieldBorderWidth);
        this.fieldInnerHeight = this.fieldHeight - (2 * this.fieldBorderWidth);

        this.blockWidth = this.fieldInnerWidth / columns;
        this.blockHeight = this.fieldInnerHeight / rows;
        
        this.panelX = this.fieldWidth + 20;
        this.panelY = 0;
        this.panelWidth = this.width / 3;
        this.panelHeight = this.height;

        this.canvas = document.createElement('canvas');
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        this.context = this.canvas.getContext('2d');

        this.element.appendChild(this.canvas);

        return;
    }
    
    render(state){
        const field = state.field;
        const score = state.score;
        const lines = state.lines;
        const level = state.level;
        const nextFigure = state.nextFigure;

        this.clearScreen();
        this.renderPlayField(field);
        this.renderPanel(score, lines, level, nextFigure);

        return;
    }

    renderStartScreen() {
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.font = '20px sans-serif';
        this.context.fillText('Press ENTER to start game', this.width / 2, this.height / 2);

        return;
    } 
    
    renderPauseScreen() {
        this.context.fillStyle = 'rgba(255, 255, 255, 0.2)'; 
        this.context.fillRect(0, 0, this.width, this.height);
        
        return;
    }

    renderGameOverScreen(score) {
        this.clearScreen();

        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.font = '36px sans-serif';
        this.context.fillText('GAME OVER', this.width / 2, this.height / 2 - 60);
        
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.font = '20px sans-serif';
        this.context.fillText('Your score: ' + score, this.width / 2, this.height / 2);

        return;
    }



    renderPanel(score, lines, level, nextFigure){
        this.context.fillStyle = 'black';
        this.context.textAlign = 'start';
        this.context.textBaseline = 'top';
        this.context.font = '20px sans-serif';

        this.context.fillText('Score: ' + score, this.panelX, this.fieldY);
        this.context.fillText('Lines: ' + lines, this.panelX, this.fieldY + 30);
        this.context.fillText('Level: ' + level, this.panelX, this.fieldY + 60);
        this.context.fillText('Next: ', this.panelX, this.fieldY + 90);
        
        const blocks = nextFigure.getViewBlocks();
        
        for(const block of blocks){
            const x = block[0];
            const y = block[1];

            this.renderBlock(
                this.panelX + (x * this.blockWidth * 0.7),
                this.panelY + 130  + (y * this.blockHeight* 0.7),
                this.blockWidth * 0.7,
                this.blockHeight * 0.7
            );
        }

        return;
    }
    
    clearScreen(){
        this.context.clearRect(0, 0, this.width, this.height);

        return;
    }

    renderPlayField(field){
        const borderY = field.length;

        for(let y = 0; y < borderY; y++){
            const row = field[y];
            const borderX = row.length;

            for(let x = 0; x < borderX; x++){
                const block = row[x];
                
                if(block){
                    this.renderBlock(
                        this.fieldX + (x * this.blockWidth), 
                        this.fieldY + (y * this.blockHeight), 
                        this.blockWidth, 
                        this.blockHeight
                    );
                } 
            }
        } 
        
        this.context.lineWidth = this.fieldBorderWidth;
        this.context.strokeRect(0, 0, this.fieldWidth, this.fieldHeight);

        return;
    }

    renderBlock(x, y, width, height) {
        this.context.fillStyle = 'black';
        this.context.fillRect(x, y, width - this.fieldBorderWidth, height - this.fieldBorderWidth);
        
        return;
    }
}
