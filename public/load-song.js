function loadSong(id){
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
    track.track_sounds.forEach(ts => {
        const position = trackNodes.find(pos => pos.dataset.position == ts.position)
        position.options.selectedIndex = ts.sound.sound_id
    })
}