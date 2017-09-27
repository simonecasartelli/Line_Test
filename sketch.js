function setup() {
  createCanvas(800,600);
  
}
function draw() {
  
  //background(220,220,220);
  strokeWeight(5);
  stroke(255,0,0)
  line(pmouseX,pmouseY,mouseX,mouseY);
  
}