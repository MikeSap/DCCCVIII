document.addEventListener("DOMContentLoaded", function(){
    let BPM = 120
    let position = 0
    let bpmInput = document.getElementById("BPM-input")

    const beatPad = document.querySelector('.beat-pad-container')

    beatPad.addEventListener('mousedown', (e) => {
    if (e.target.className == "key-not-pressed"){
        let button = e.target       
        console.log(e.target.dataset.id)
        sampleArray[parseInt(e.target.dataset.id)].play()
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

            sampleArray[parseInt(pad.dataset.id)].play()
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
            beat = setInterval(function(){document.dispatchEvent(oneBeat)},15000/BPM)
        }
    })
    //begin large comment

    //everything within this comment block needs to be removed before the backend can be fully implemented.
    //To implement it the backend must feed the frontend an array with each sound in it, those sounds must be turned into objects
    //each with a name and sound.
    //those sounds should be shoveled into the soundArray array and their samples into sampleArray.
    //I am working on fixing overlapping sound issues.
    //giving the sounds names. Will be outmoded when the backend is done
    sound1 = document.getElementById("sound-1")
    sound2 = document.getElementById("sound-2")
    sound3 = document.getElementById("sound-3")
    sound4 = document.getElementById("sound-4")
    sound5 = document.getElementById("sound-5")
    sound6 = document.getElementById("sound-6")
    sound7 = document.getElementById("sound-7")
    sound8 = document.getElementById("sound-8")
    sound9 = document.getElementById("sound-9")
    //loading the sounds. This will be outmoded eventually. 
    let kick = {
        name: "kick",
        sound: sound1
    }
    let snare = {
        name: "snare",
        sound: sound2
    }
    let hat = {
        name: "hat",
        sound: sound3
    }
    let openHat = {
        name: "open hat",
        sound: sound4
    }
    let ride = {
        name: "ride",
        sound: sound5
    }
    let crash = {
        name: "crash",
        sound: sound6
    }
    let tom1 = {
        name: "tom 1",
        sound: sound7
    }
    let tom2 = {
        name: "tom 2",
        sound: sound8
    }
    let tom3 = {
        name: "tom 3",
        sound: sound9
    }
    
    let empty = {
        name: "empty",
        sound: undefined
    }
    let sampleArray = [ , sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,sound9]
    let soundArray = [empty, kick,snare,hat,openHat,crash,ride,tom1,tom2,tom3]

    //end large comment
    let playbtn = document.getElementById("play")
    let stopbtn = document.getElementById("stop")
    let play = false
    
    let oneBeat = new CustomEvent('oneBeat')

    function setUpSequencer(){
        contain = document.getElementById("sequencer-container")
        for (let y = 0; y < 8; y += 1){
            let p = document.createElement("p")
            p.innertext = `Sequence ${y+1}`
            contain.append(p)
            for (let x = 0; x < 16; x += 1){
                let select = document.createElement("select")
                select.setAttribute("class","sequence-input")
                select.dataset.id = x
                for (let i = 0; i < soundArray.length; i += 1){
                    let option = document.createElement("option")
                    option.innerText = soundArray[i].name
                    option.value = 
                    select.append(option)
                }
                p.append(select)
            }
        }
    }

    playbtn.addEventListener("click",function(){
        if (play === false)
        {
            play = true
            console.log("working")
            beat = setInterval(function(){document.dispatchEvent(oneBeat)},15000/BPM)
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
            if (parseInt(sounds[i].dataset.id) === position){
                pos = sounds[i].options["selectedIndex"]
                if (pos != 0){
                    sampleArray[pos].play()
                }
            }
            //debugger
        }
        position += 1
        if (position === 16)
        {
            position = 0
        }
    })
    setUpSequencer()
})