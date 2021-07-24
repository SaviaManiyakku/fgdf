objectDetector= "";
  
img = "";
baby = [];
status = "";

function preload(){
  img = loadImage('baby.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  if (status != undefined) {
      image(img, 0, 0, 640, 420);
    for (var i = 0; i < baby.length; i++) {
      document.getElementById("status").innerHTML = "Status : Objects Detected";
      document.getElementById("baby_found").innerHTML = "Baby has been found";

      fill(255, 0, 0);
      percent = floor(objects[i].confidence * 100);
      text(baby + " " + percent + "%", baby[i].x + 5, baby[i].y + 15);
      noFill();
      stroke(255, 0, 0);
      rect(baby[i].x, baby[i].y, baby[i].width, baby[i].height);
    }
  }
}