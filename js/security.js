// Nonaktifkan klik kanan
document.addEventListener("contextmenu", e => e.preventDefault());

// Basic anti devtools
setInterval(() => {
  if(window.outerWidth - window.innerWidth > 200){
    document.body.innerHTML = "Access denied";
  }
}, 1000);

// Anti iframe / hotlink
if(window.top !== window.self){
  document.body.innerHTML = "Hotlink blocked";
}
