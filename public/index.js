document.addEventListener("DOMContentLoaded", function(){
    let BPM = 120
    let currentSoundId = 1
    let position = 0
    let bpmInput = document.getElementById("BPM-input")
    const beatPad = document.querySelector('.beat-pad-container')
    function playSound(node){
        //debugger
        let new_audio = node.cloneNode()
        new_audio.play()
    }
    beatPad.addEventListener('mousedown', (e) => {
    

    if (e.target.className == "key-not-pressed"){
        let button = e.target
        //debugger

        let node = document.createElement('audio') 
        node.setAttribute(`src`,`${sampleArray[parseInt(e.target.dataset.position)].src}`)
        node.setAttribute('preload','auto')
        playSound(node)
        currentSoundId = parseInt(e.target.dataset.position)
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
        if (e.code.includes("Numpad")){
            let pad = document.querySelector(`#pad-${e.key}`)

            let node = document.createElement('audio') 
            node.setAttribute(`src`,`${sampleArray[parseInt(pad.dataset.position)].src}`)
            currentSoundId = parseInt(pad.dataset.position)
            node.setAttribute('preload','auto')
            playSound(node)
            if (pad.className == "key-not-pressed"){
                    pad.className = "key-pressed"  
            }
        }
    }  

    document.onkeyup = (e) => {
        let pad = document.querySelector(`#pad-${e.key}`)
        if (e.code.includes("Numpad")){
            if (pad.className == "key-pressed"){
                    pad.className = "key-not-pressed"  
            }
        }
    }

    bpmInput.addEventListener("input", function(e){
        console.log(e.target.value)
        BPM = e.target.value
        if (play === true){
            clearInterval(beat)
            beat = setInterval(function(){document.dispatchEvent(oneBeat)},30000/BPM)
        }
    })
    //implement the switcher
    
    
    //begin large comment

    //everything within this comment block needs to be removed before the backend can be fully implemented.
    //To implement it the backend must feed the frontend an array with each sound in it, those sounds must be turned into objects
    //each with a name and sound.
    //those sounds should be shoveled into the soundArray array and their samples into sampleArray.
    //I am working on fixing overlapping sound issues.
    //giving the sounds names. Will be outmoded when the backend is done
    //loading the sounds. This will be outmoded eventually.


    //end large comment
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
                select.setAttribute("class","row sequence-input inert unclicked")
                select.dataset.soundInfo = ' '
                select.dataset.soundId = 0
                select.dataset.position = x
                select.addEventListener("click",function(e){

                    if (e.target.dataset.soundInfo != sampleArray[currentSoundId].src)
                    {
                        console.log(e)
                        e.target.innerText = sampleArray[currentSoundId].name
                        e.target.dataset.soundInfo = sampleArray[currentSoundId].src
                        debugger
                        e.target.dataset.soundId = sampleArray[currentSoundId].id
                        let status = e.target.getAttribute("class").split(" ")
                        console.log(status)
                        e.target.setAttribute("class",`row ${status[1]} ${status[2]} clicked`)
                    } else {
                        e.target.innerText = ' '
                        e.target.dataset.soundInfo = ' '
                        e.target.dataset.soundId = 0
                        let status = e.target.getAttribute("class").split(" ")
                        e.target.setAttribute("class",`row ${status[1]} ${status[2]} unclicked`)
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
            console.log("working")
            beat = setInterval(function(){document.dispatchEvent(oneBeat)},30000/BPM)
        }
    })

    stopbtn.addEventListener("click",function(){
        if (play === true)
        {
            play = false
            position = 0
            console.log("Stopped")
            clearInterval(beat)
        }
    })

    document.addEventListener("oneBeat", function(){
        let sounds = document.getElementsByClassName("sequence-input")
        for (let i = 0; i < sounds.length; i += 1)
        {
            let status = sounds[i].getAttribute("class").split(" ")
            console.log(status)
            sounds[i].setAttribute("class",`row ${status[1]} active ${status[3]}`)
            if (parseInt(sounds[i].dataset.position) === position){
                pos = sounds[i].dataset.soundInfo
                if (pos != " "){
                    let node = document.createElement('audio') 
                    node.setAttribute(`src`,`${pos}`)
                    node.setAttribute('preload','auto')
                    playSound(node)
                    console.log(node)
                    //sampleArray[pos].play()
                }
            } else {

                let status = sounds[i].getAttribute("class").split(" ")
                console.log(status)
                sounds[i].setAttribute("class",`row ${status[1]} inert ${status[3]}`)
            }
        }
        position += 1
        if (position === 16)
        {
            position = 0
        }
    })
    setUpSequencer()
})