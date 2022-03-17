mustachex=0;
mustachey=0;

lipsx=0;
lipsy=0;

function preload() {
mustache=loadImage('https://i.postimg.cc/hvwCXm31/mustachio.png');
lips=loadImage('https://i.postimg.cc/bvpRwPRJ/mustachio.png');
}

function setup() {
  canvas=createCanvas(350,300);
  canvas.center();
  video= createCapture(VIDEO);
  video.size(350,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded() {
  console.log('poseNet is initialized');
}

function gotPoses(results) {
  if (results.length>0) {
    console.log(results);
    mustachex=results[0].pose.nose.x - 30;
    mustachey=results[0].pose.nose.y - 5;
    lipsx=results[0].pose.nose.x - 20;
    lipsy=results[0].pose.nose.y + 20;
    console.log('mustache x =' + mustachex);
    console.log('mustache y =' + mustachey);
    console.log('lips x =' + lipsx);
    console.log('lips y =' + lipsy);
  }
}

function draw() {
image(video, 0, 0, 350, 300);
image(lips, lipsx, lipsy, 40, 20);
image(mustache, mustachex, mustachey, 60, 40);
}

function snapshot() {
save('myfilterimg.png');
}