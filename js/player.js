const audio = document.getElementById("audio");

function play(url){
  audio.src = url;
  audio.play();
}

function toggle(){
  if(audio.paused) audio.play();
  else audio.pause();
}
