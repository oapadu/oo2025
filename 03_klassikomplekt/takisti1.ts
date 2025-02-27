class Resistor{
    protected r: number;
    protected g;
    constructor(r: number, g:object){
        this.r=r; 
        this.g=g;
        this.draw();
    }
    draw(){
        this.g.beginPath();
        this.g.rect(100, 10, 100, 50);
        this.g.stroke();
        this.g.fillText(""+this.r, 120, 20);
    }
}