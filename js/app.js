let channels=[]
let currentIndex=0

async function loadChannels(){

const r=await fetch(API+"/channels")

const data=await r.json()

channels=data.channels

renderChannels(channels)

}

function renderChannels(list){

const el=document.getElementById("channels")

el.innerHTML=""

list.forEach((c,i)=>{

const card=document.createElement("div")

card.className="channel-card"

card.id="ch-"+c.id

card.innerHTML=`
<b>${c.name}</b><br>
<small>${c.artist}</small>
`

card.onclick=()=>playChannel(i)

el.appendChild(card)

})

}

loadChannels()
