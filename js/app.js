const container=document.getElementById("channels")

let channels=[]

fetch(API_CHANNELS)
.then(res=>res.json())
.then(data=>{

// support dua format JSON

channels=data.channels || data

renderChannels(channels)

})
.catch(err=>{
console.log("API ERROR",err)
})


function renderChannels(list){

container.innerHTML=""

list.forEach((ch,index)=>{

const card=document.createElement("div")

card.className="channel"

card.innerHTML=`

<h3>${ch.name}</h3>
<p>${ch.artist}</p>

`
if(list.length===0){

container.innerHTML="<p style='text-align:center'>Channel tidak tersedia</p>"

return

}

card.onclick=()=>playChannel(ch,card,index)

container.appendChild(card)

})

}
