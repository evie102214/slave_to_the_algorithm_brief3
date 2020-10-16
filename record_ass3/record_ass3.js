let mic, recorder, soundFile;
let state = 0;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(canvasPressed);
  background(220);
  textAlign(CENTER, CENTER);
  textSize(30);

  mic = new p5.AudioIn();
  mic.start();
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  soundFile = new p5.SoundFile();

  text('tap to record', width/2, height/2);
  
}

function canvasPressed() {
  userStartAudio();
  
  if (state === 0 && mic.enabled) {
    recorder.record(soundFile);

    background(205, 136, 93);
    text('Recording!', width/2, height/2);
    state++;
  }
  else if (state === 1) {
    background(128, 195, 215);
    
    recorder.stop();

    text('Done! Tap to play and download', width/2, height/2);
    state++;
  }

  else if (state === 2) {
    soundFile.play(); 
    save(soundFile, 'mySound.wav');
    state++;
  }
}
