song1="";
song2="";
  rightWrist_x = 0;
   rightWrist_y = 0;
    leftWrist_x = 0;
     leftWrist_y = 0;
      scoreleftWrist = 0;
       scorerightWrist = 0;
        song_coconut = "";
         song_speakerman = "";

function setup(){
canvas=createCanvas(600,500); 
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function preload(){
song1=loadSound("speakerman.mp3");
song2=loadSound("coconut song!.mp3");
}
function draw(){
image(video,0,0,600,500);

song_speakerman = song1.isPlaying();
 console.log(song_speakerman); 
 song_coconut = song2.isPlaying();
  console.log(song_coconut); 
  if(scoreleftWrist > 0.2)
  { 
    circle(leftWrist_x,leftWrist_y,20);
     song1.stop();
      if(song_coconut == false)
      {
         song2.play();
         }
          else
          {
             console.log("Song Name: coconut song");
              document.getElementById("song_id").innerHTML = "Song Name: coconut song";
             }
             }
}
function play(){
    song.play();
song.setVolume(1);
song.rate(1);
}
function modelLoaded(){
    console.log('poseNet is loaded');
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    console.log("leftwristx= "+leftwristx +"leftwristy= "+leftwristy);

    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log("rightwristx= "+rightwristx +"rightwristy= "+rightwristy);
}
}