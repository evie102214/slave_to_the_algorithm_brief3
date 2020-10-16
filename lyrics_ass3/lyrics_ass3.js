var input;
var output;
var bg;
var y = 0;
var canvas;
let word = 'make a song';
let index = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  inp = createInput("hi");
  inp.changed(newText);
  inp.input(newTyping);
  inp.style('font-size: 60px');
  output = select('#output'); //to show text typing
  output.style('font-size: 60px');
  frameRate(5);
}

function newTyping(){
  output.html(inp.value()) ;
}

function newText() {
  createP(inp.value()); //to press enter to be insert down the text box
}

function draw(){
  background(bg);
  
  textSize(60);
  
  index++;
  if(index >= word.length){
    index = 0;
  }
  
  for(let i = 0; i<word.length; i++){
    text(word[i], random(width), random(height));
  }
}

function preload(){
  bg = loadImage('bg.png');
}
