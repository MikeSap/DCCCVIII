function loadSong(id){
    clearSong()
    setUpSequencer()
    fetch(`http://localhost:3000/songs/${id}`)
    .then(resp => resp.json())
    .then(json => json.tracks.forEach((track, index) => {
        fetch(`http://localhost:3000/tracks/${track.id}`)
        .then(resp => resp.json())
        .then(track => loadTrack(track, index))
    }))
}

function loadTrack(track, index){
    const trackNodes = Array.from(document.querySelectorAll('.track')[index].children)
    //debugger
    track.track_sounds.forEach(ts => {
        //debugger
        const position = trackNodes.find(pos => pos.dataset.position == ts.position)
        position.dataset.soundId = ts.sound.sound_id
        position.dataset.soundInfo = ts.sound.sound_location
        position.innerText = ts.sound.sound_name
        position.setAttribute("class", `row sequence-input inert clicked`)
        
    })
}

function clearSong(){
    for(let i = 0; i < 8; i++){
        const trackNodes = Array.from(document.querySelectorAll('.track')[i].children)
        trackNodes.forEach(pos => pos.selectedIndex = 0)
    }
}


