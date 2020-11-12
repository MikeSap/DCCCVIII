let BPM = 120
let currentSoundId = 1
let position = 0
let bpmInput = document.getElementById("BPM-input")
const beatPad = document.querySelector('.beat-pad-container')
function playSound(node){
    let new_audio = node.cloneNode()
    new_audio.play()
        
    let pad
    pad = document.getElementsByClassName(`.${node.src.split("http://localhost:3000")[1]}`)[0]
    if (pad) {
    pad.classList.remove('key-not-pressed')
    pad.classList.add("key-pressed")

    setTimeout(function(){
        pad.classList.remove('key-pressed')
        pad.classList.add("key-not-pressed")}, 150)
    }

}
beatPad.addEventListener('mousedown', (e) => {

if (padArray.includes(e.target)){
    // let button = e.target
    let node = document.createElement('audio') 
    node.setAttribute(`src`,`${sampleArray[parseInt(e.target.dataset.position)].src}`)
    node.setAttribute('preload','auto')
    playSound(node)
    currentSoundId = parseInt(e.target.dataset.position)
    // button.classList.remove('key-not-pressed')
    // button.classList.add("key-pressed")
    // setTimeout(function(){
    //     button.classList.remove('key-pressed')
    //     button.classList.add("key-not-pressed")}, 1000)
}    
})

// beatPad.addEventListener('mouseup', (e) => {
//     if (e.target.classList.contains("key-pressed")){
//         let button = e.target       
//         button.classList.remove('key-pressed')
//         button.classList.add("key-not-pressed")
//     }    
// })

document.onkeydown = (e) => {
    if (e.code.includes("Numpad")){
        let pad = document.querySelector(`#pad-${e.key}`)

        let node = document.createElement('audio') 
        node.setAttribute(`src`,`${sampleArray[parseInt(pad.dataset.position)].src}`)
        currentSoundId = parseInt(pad.dataset.position)
        node.setAttribute('preload','auto')
        playSound(node)
        // if (pad.className == "key-not-pressed"){
        //         pad.className = "key-pressed"  
        // }
    }
}  

// document.onkeyup = (e) => {
//     let pad = document.querySelector(`#pad-${e.key}`)
//     if (e.code.includes("Numpad")){
//         if (pad.className == "key-pressed"){
//                 pad.className = "key-not-pressed"  
//         }
// }

bpmInput.addEventListener("input", function(e){
    BPM = e.target.value
    if (play === true){
        clearInterval(beat)
        beat = setInterval(function(){document.dispatchEvent(oneBeat)},30000/BPM)
    }
})

let playbtn = document.getElementById("play")
let stopbtn = document.getElementById("stop")
let play = false
let oneBeat = new CustomEvent('oneBeat')

function setUpSequencer(){
    contain = document.getElementById("sequencer-container")
    contain.innerHTML = ' '
    for (let y = 0; y < 8; y += 1){
        let p = document.createElement("div")
        p.className = 'track'
        
        contain.append(p)
        p.dataset.trackId = y+1
        for (let x = 0; x < 16; x += 1){
            let select = document.createElement("div")
            select.setAttribute("class", "sequence-input inert unclicked")
            select.dataset.soundInfo = ' '
            select.dataset.soundId = 0
            select.dataset.position = x
            select.addEventListener("click",function(e){

                if (e.target.dataset.soundInfo != sampleArray[currentSoundId].src)
                {
                    e.target.innerText = sampleArray[currentSoundId].name
                    e.target.dataset.soundInfo = sampleArray[currentSoundId].src
                    
                    e.target.dataset.soundId = sampleArray[currentSoundId].id
                    let status = e.target.getAttribute("class").split(" ")
                    e.target.setAttribute("class",`${status[0]} ${status[1]} clicked`)
                } else {
                    e.target.innerText = ' '
                    e.target.dataset.soundInfo = ' '
                    e.target.dataset.soundId = 0
                    let status = e.target.getAttribute("class").split(" ")
                    e.target.setAttribute("class",`${status[0]} ${status[1]} unclicked`)
                }

            })
            p.append(select)
        }
    }
}

playbtn.addEventListener("click",function(){
    if (play === false)
    {
        play = true
        beat = setInterval(function(){document.dispatchEvent(oneBeat)},30000/BPM)
    }
})

stopbtn.addEventListener("click",function(){
    if (play === true)
    {
        play = false
        position = 0
        clearInterval(beat)
    }
})

document.addEventListener("oneBeat", function(){
    let sounds = document.getElementsByClassName("clicked")
    for (let i = 0; i < sounds.length; i += 1)
    {
        let status = sounds[i].getAttribute("class").split(" ")
        sounds[i].setAttribute("class",`${status[0]} active ${status[2]}`)
        if (parseInt(sounds[i].dataset.position) === position){
            pos = sounds[i].dataset.soundInfo
            if (pos != " "){
                let node = document.createElement('audio') 
                node.setAttribute(`src`,`${pos}`)
                node.setAttribute('preload','auto')
                playSound(node)
            }
        } else {

            let status = sounds[i].getAttribute("class").split(" ")
            sounds[i].setAttribute("class",`${status[0]} inert ${status[2]}`)
        }
    }
    sounds = document.getElementsByClassName("unclicked")
    for (let i = 0; i < sounds.length; i += 1)
    {
        let status = sounds[i].getAttribute("class").split(" ")
        sounds[i].setAttribute("class",`${status[0]} active ${status[2]}`)
        if (parseInt(sounds[i].dataset.position) === position){
        } else {
            let status = sounds[i].getAttribute("class").split(" ")
            sounds[i].setAttribute("class",`${status[0]} inert ${status[2]}`)
        }
    }
    position += 1
    if (position === 16)
    {
        position = 0
    }
})
setUpSequencer()
