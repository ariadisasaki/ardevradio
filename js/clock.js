function updateClock(){

const now=new Date()

document.getElementById("tanggal")
.innerText=now.toLocaleDateString("id-ID",{
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
})

document.getElementById("jam")
.innerText="Pkl. "+now.toLocaleTimeString()

}

setInterval(updateClock,1000)
