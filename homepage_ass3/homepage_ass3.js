let cg;
var song;
var button;
var slider;
var link;

function preload(){
  song = loadSound("Cloudy_Sky_Jordy_Chandra.mp3");
}

function setup() {
  createCanvas(1500, 800);
  frameRate(5);
  
  link = createA("https://evie102214.github.io/slave-to-the-algorithm-2020/lyrics_ass3", "make your lyrics!");
  link.position(600, 300);
  link = createA("https://evie102214.github.io/slave-to-the-algorithm-2020/record_ass3", "Record Your Voice!");
  link.position(800, 500);

  
  button = createButton("Play Music");
  button.position(100, 600);
  button.mousePressed(togglePlaying);
  
  slider = createSlider(0,1, 0.5, 0.01);
  slider.position(150, 650);
  
  cg = createGraphics(1500, 800);
  cg.background(0);
  cg.fill(255);
  cg.textAlign(CENTER, CENTER);
  cg.textSize(80);
  cg.text("Make your own song", 0, 0, width, height);

}

function togglePlaying(){
  if (!song.isPlaying()){
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    song.pause();
    button.html("keep playing");
  }
}

function draw() {

  for(let i = 0 ; i<100; i++){
    let x = random(width);
    let y = random(height);

    let c = cg.get(x, y);

    if( c[0] == 255 ){
      stroke(random(255), random(255), random(255));
      let amt = 5;
      line(random(x-amt, x+amt), random(y-amt,y+amt),random(x-amt, x+amt), random(y-amt,y+amt)); 
    }
  }
  
  var petalSize = random(10, 50);
  var flowerCenterX = random(width);
  var flowerCenterY = random(height);
  var r = random(255);
  var g = random(255);
  var b = random(255);
  
  fill(r, g, b);
  ellipse(flowerCenterX - petalSize/2, flowerCenterY - petalSize/2, petalSize, petalSize);
  ellipse(flowerCenterX + petalSize/2, flowerCenterY - petalSize/2, petalSize, petalSize);
  ellipse(flowerCenterX - petalSize/2, flowerCenterY + petalSize/2, petalSize, petalSize);
  ellipse(flowerCenterX + petalSize/2, flowerCenterY + petalSize/2, petalSize, petalSize);
  
  fill(r/2, g/2, b/2);
  ellipse(flowerCenterX, flowerCenterY, petalSize, petalSize);
  
  
}
