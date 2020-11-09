const beatPad = document.querySelector('.beat-pad-container')

beatPad.addEventListener('mousedown', (e) => {
   if (e.target.className == "key-not-pressed"){
       let button = e.target       
     button.className = "key-pressed"
     setTimeout(function(){
         button.className = "key-not-pressed"}, 1000)
   }    
})

beatPad.addEventListener('mouseup', (e) => {
    if (e.target.className == "key-pressed"){
        let button = e.target       
      button.className = "key-not-pressed"
    }    
 })


 document.onkeydown = (e) => {
    let pad = document.querySelector(`#pad-${e.key}`)
    if (pad.className == "key-not-pressed"){
             pad.className = "key-pressed"  
    }
}  

document.onkeyup = (e) => {
    let pad = document.querySelector(`#pad-${e.key}`)
    if (pad.className == "key-pressed"){
             pad.className = "key-not-pressed"  
    }
}  

