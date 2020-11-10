let songForm = document.querySelector('.song-form')

songForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let seqInputs = document.querySelectorAll('.sequence-input')
    let tracks= {}    
    tracks["title"] = e.target.songName.value
    tracks["creator"] = e.target.producer.value
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

      fetch(`http://localhost:3000/songs`, reqObj)
          .then(resp => resp.json())
          .then(savedSong => {
            if (savedSong["errors"]){
            errorNode.setAttribute('class', 'errors')
            savedSong["errors"].forEach(error => errorNode.innerHTML += `<p>${error}</p>`)           
            setTimeout(() => {
              errorNode.innerText = ""
              errorNode.setAttribute('class', 'hidden')
            }, 3500)
            } else {console.log(savedSong)
              } 
          })
          // .catch (error => window.alert(error))          
        e.target.reset()
}