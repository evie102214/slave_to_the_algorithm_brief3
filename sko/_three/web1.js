var web;

function preload(){
  web = loadJSON("makesong.json");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  fill(web.r, web.g, web.b);
  text(web.name, 200, 600);
  
  fill(209);
  rect(350,350,350,350);
  
  fill(209);
  rect(850,350,windowWidth, windowHeight);
}
