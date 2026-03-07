const search=document.getElementById("search")

search.addEventListener("input",()=>{

const keyword=search.value.toLowerCase()

const filtered=channels.filter(ch=>

ch.name.toLowerCase().includes(keyword) ||

ch.artist.toLowerCase().includes(keyword)

)

renderChannels(filtered)

})
