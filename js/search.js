document
.getElementById("search")
.addEventListener("input",function(){

const q=this.value.toLowerCase()

const filtered=channels.filter(c=>

c.name.toLowerCase().includes(q)

)

renderChannels(filtered)

})
