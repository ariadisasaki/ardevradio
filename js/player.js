const audio=new Audio()

function playChannel(i){

currentIndex=i

const c=channels[i]

audio.src=API+"/play?id="+c.id

audio.play()

highlight()

localStorage.setItem("lastChannel",i)

showEqualizer()

showMini(c.name)

}

function togglePlay(){

if(audio.paused){

audio.play()

showEqualizer()

}else{

audio.pause()

hideEqualizer()

}

}

function nextChannel(){

currentIndex++

if(currentIndex>=channels.length)currentIndex=0

playChannel(currentIndex)

}

function prevChannel(){

currentIndex--

if(currentIndex<0)currentIndex=channels.length-1

playChannel(currentIndex)

}

function highlight(){

document.querySelectorAll(".channel-card")
.forEach(e=>e.classList.remove("active"))

const id="ch-"+channels[currentIndex].id

const el=document.getElementById(id)

if(el) el.classList.add("active")

}

function showMini(name){

const m=document.getElementById("miniPlayer")

document.getElementById("miniTitle").innerText=name

m.classList.remove("hidden")

}

window.onload=()=>{

const last=localStorage.getItem("lastChannel")

if(last) playChannel(last)

}
