LeftWristX=0;
RightWristX=0;
difference=0;

function setup() {
  video=createCapture(VIDEO);
  video.size(500, 500);
  canvas=createCanvas(350,350);
  canvas.center();
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function draw() {
  background("#b6f2ef");
  textSize(difference);
  fill("indigo");
  text("WhiteHat_Jr", 60, 100);
}
function modelLoaded() {
  console.log("PoseNet is Initalized");
}
function gotPoses(results) {
  if (results.length > 0 ) {
    console.log(results);
    LeftWristX=results[0].pose.leftWrist.x;
    RightWristX=results[0].pose.rightWrist.x;
    difference=floor(LeftWristX - RightWristX);
  }
}
