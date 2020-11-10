crudForm.addEventListener('click', (e) => {
    switch(e.target.id){
        case 'update-song':
            e.preventDefault()
            updateSong(songSelect);
        case 'delete-song':
            e.preventDefault()
            deleteSong(songSelect);
    }
})

function updateSong(songSelect){
    let seqInputs = document.querySelectorAll('.sequence-input')
    let tracks= {}
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

      fetch(`http://localhost:3000/songs/${songSelect.options[songSelect.selectedIndex].dataset.id}`, reqObj)
          .then(resp => resp.json())
          .then(updatedSong => { 
              console.log(updatedSong)
          })
}


function deleteSong(songSelect){

}