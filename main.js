noseX = 0;
noseY = 0;

function preload(){

 clown = loadImage('https://i.postimg.cc/fTC1L4BW/clown.png');

}

function setup(){

  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);

}

function draw(){

  image(video,0,0,300,300);
  image(clown,noseX,noseY,30,30)

 

}

function takeSnap(){

 save("YouAreAClownLOL.png");

}

function gotPoses(result){

  if(result.length > 0){

     console.log(result);
     noseX = result[0].pose.nose.x-15;
     noseY = result[0].pose.nose.y-15;
     

  }

 

}

function modelLoaded(){

 console.log("model has been loaded");

}