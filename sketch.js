function setup() {
  createCanvas(480, 260);
}
function even(i){
  return (i/2) == floor(i/2);
}
function textFlicker(){
  if(even(frameCount)&&frameCount<=120){
     fill(72);
  }else{
    fill(0);
  }
}
let defaultSize = 8;
function draw() {
  background(color(256,128,256));
  noStroke();
  textFlicker();
  textSize(defaultSize);
  text("Please note that this is a pre-pre-alpha build",defaultSize,defaultSize);
  text("and this does not reflect the final product.",defaultSize,defaultSize*2);
  text("This is just a test thing.",defaultSize,defaultSize*3);
  fill(color(128,64,128));
  rect(0,height-32,width,32);
}