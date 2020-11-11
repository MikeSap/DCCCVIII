crudForm.addEventListener('click', (e) => {
    switch(e.target.id){
        case 'update-song':
            e.preventDefault()
           return updateSong(songSelect);
        case 'delete-song':
            e.preventDefault()
           return deleteSong(songSelect);
    }
})

function updateSong(songSelect){
    let seqInputs = document.querySelectorAll('.sequence-input')
    let tracks= {}
    tracks["bpm"] = parseInt(bpm.value)
    seqInputs.forEach(input => {
        let soundId = input.dataset.soundId
        let trackId = input.parentNode.dataset.trackId
        tracks[trackId] ? tracks[trackId] = [...tracks[trackId], soundId]:
        tracks[trackId] = [ soundId ]
    })

    const reqObj = {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
      },
        body: JSON.stringify(tracks)
      }

      fetch(`/songs/${songSelect.options[songSelect.selectedIndex].dataset.id}`, reqObj)
}


function deleteSong(songSelect){    
    fetch(`/songs/${songSelect.options[songSelect.selectedIndex].dataset.id}`, {method: 'DELETE'})            
        songSelect.options[songSelect.selectedIndex].remove()
        songSelect.selectedIndex = 0
        setUpSequencer()
}