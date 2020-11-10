let songForm = document.querySelector('.song-form')

songForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let seqInputs = document.querySelectorAll('.sequence-input')
    let tracks= {}
    tracks["title"] = e.target.songName.value
    tracks["creator"] = e.target.producer.value
    seqInputs.forEach(input => {
        //debugger
        if (input.id)
        {
          let soundId = input.id
          let trackId = input.parentNode.dataset.trackId
          tracks[trackId] ? tracks[trackId] = [...tracks[trackId], soundId]:
          tracks[trackId] = [ soundId ] 
        } else {
          let trackId = input.parentNode.dataset.trackId
          tracks[trackId] ? tracks[trackId] = [...tracks[trackId], 0]:
          tracks[trackId] = [ 0 ]
        }
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
            console.log(savedSong)
          })
          
        e.target.reset()

}