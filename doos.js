var start = 0;
var golfX;
var golfY;
var amplitude = 4;
var snelheid = 0.1;
//var offs = 100;

class Doos{
  constructor(x, y, offs1, offs2, snelheid){
    this.x = x;
    this.y = y;  
    this.offs1 = offs1;
    this.offs2 = offs2;
    this.snelheid = snelheid;
  }
  
  move(){
    golfX = this.offs1+(sin(start*this.snelheid+this.offs2)*amplitude);
    golfY = this.offs1+(sin(start*this.snelheid+this.offs2)*amplitude);
    start += 0.01;
    //console.log(golfX);
  }
  
  
  show(){
    noFill();
    stroke(210);
  beginShape();
  vertex(-golfX, -golfY);
  vertex(golfX, -golfY);
  vertex(golfX, golfY);
  vertex(-golfX, golfY);
  endShape(CLOSE);
  
    
    
  }
  
  
}