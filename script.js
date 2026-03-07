let audio = document.getElementById("audio")

function playChannel(index){

let channels = document.querySelectorAll(".channel")

let card = channels[index]

let url = card.dataset.url

let name = card.dataset.name

audio.src = url
audio.play()

document.getElementById("player-title").innerText = name

}

function togglePlay(){

if(audio.paused){

audio.play()

}else{

audio.pause()

}

}
