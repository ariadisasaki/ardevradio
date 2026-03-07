const audio=document.getElementById("audio")

const playerBar=document.getElementById("playerBar")

const playerTitle=document.getElementById("playerTitle")

const playBtn=document.getElementById("playBtn")

const equalizer=document.getElementById("equalizer")

let activeCard=null

function playChannel(ch,card){

audio.src=API_PLAY+"?id="+ch.id

audio.play()

playerBar.classList.remove("hidden")

playerTitle.innerText=ch.name

equalizer.classList.remove("hidden")

playBtn.innerText="⏸"

if(activeCard){

activeCard.classList.remove("active")

}

card.classList.add("active")

activeCard=card

}

function togglePlay(){

if(audio.paused){

audio.play()

playBtn.innerText="⏸"

equalizer.classList.remove("hidden")

}else{

audio.pause()

playBtn.innerText="▶"

equalizer.classList.add("hidden")

}

}
