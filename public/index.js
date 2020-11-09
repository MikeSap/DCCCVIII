document.addEventListener("DOMContentLoaded", function(){
    let BPM = 120
    let position = 0
    let bpmInput = document.getElementById("BPM-input")


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
    bpmInput.addEventListener("change", function(e){
        console.log(e.target.value)
        BPM = e.target.value
        if (play === true){
            clearInterval(beat)
            beat = setInterval(function(){document.dispatchEvent(oneBeat)},60000/BPM)
        }
    })
    sound1 = document.getElementById("kick")
    sound2 = document.getElementById("snare")
    sound3 = document.getElementById("hat")




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
    let empty = {
        name: "empty",
        sound: undefined
    }
    sampleArray = [ , sound1,sound2,sound3]
    let playbtn = document.getElementById("play")
    let stopbtn = document.getElementById("stop")
    let play = false
    let soundArray = [empty, kick,snare,hat]
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
            beat = setInterval(function(){document.dispatchEvent(oneBeat)},60000/BPM)
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


