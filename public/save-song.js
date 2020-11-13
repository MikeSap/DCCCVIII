let songForm = document.querySelector('.song-form')

songForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let seqInputs = document.querySelectorAll('.sequence-input')
    let tracks= {}    
    tracks["title"] = e.target.songName.value
    tracks["creator"] = e.target.producer.value
    tracks["bpm"] = parseInt(bpm.value)
    seqInputs.forEach(input => {
        let soundId = input.dataset.soundId
        let trackId = input.parentNode.dataset.trackId
        tracks[trackId] ? tracks[trackId] = [...tracks[trackId], soundId]:
        tracks[trackId] = [ soundId ]  
    })    
    saveSong(e,tracks)
})

function saveSong(e,tracks){

    const reqObj = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
      },
        body: JSON.stringify(tracks)
      }

      fetch(`/songs`, reqObj)
          .then(resp => resp.json())
          .then(savedSong => {
            if (savedSong["errors"]){
            errorNode.setAttribute('class', 'errors')
            savedSong["errors"].forEach(error => errorNode.innerHTML += `<p>${error}</p>`)           
            setTimeout(() => {
              errorNode.innerText = ""
              errorNode.setAttribute('class', 'hidden')
            }, 3500)
            } else {              
              let newOp = document.createElement("OPTION")              
              newOp.setAttribute('data-id', `${savedSong.id}`)
              newOp.append(`${savedSong.title} - ${savedSong.creator}`)              
              songSelect.append(newOp)                      
              songSelect.value = newOp.value
              } 
          })
          // .catch (error => window.alert(error))          
        e.target.reset()
}