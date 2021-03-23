var doos = [];


function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
  // let newCanvasX = (windowWidth);
  // let newCanvasY = (windowHeight);
  // cnv.position(newCanvasX, newCanvasY);
  for (let i = 0; i < windowWidth; i++){
   doos[i] = new Doos(0, 0, i*4, i-2, i*0.001);
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
  
  for (let i = 0; i < windowWidth; i++){   
  doos[i].move();
  doos[i].show(); 
  }
  stroke(0);
  strokeWeight(3);
  line(0,0, 400, 400);
  line(0,0, -400, -400);
  line(0,0, 400, -400);
  line(0,0, -400, 400);
  
}