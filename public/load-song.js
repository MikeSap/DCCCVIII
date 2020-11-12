function loadSong(id){
    setUpSequencer()
    fetch(`/songs/${id}`)
    .then(resp => resp.json())
    .then(json => {
        bpm.value = `${json.bpm}`
        json.tracks.forEach((track, index) => {
        fetch(`/tracks/${track.id}`)
        .then(resp => resp.json())
        .then(track => loadTrack(track, index))
    })})
}

function loadTrack(track, index){
    const trackNodes = Array.from(document.querySelectorAll('.track')[index].children)
    track.track_sounds.forEach(ts => {
        const position = trackNodes.find(pos => pos.dataset.position == ts.position)
        position.dataset.soundId = ts.sound.sound_id
        position.dataset.soundInfo = ts.sound.sound_location
        position.innerText = ts.sound.sound_name
        position.setAttribute("class", `sequence-input inert clicked`)
        
    })
}