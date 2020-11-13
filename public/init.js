document.addEventListener("DOMContentLoaded", main())

function main(){
    fetchSounds(1)
    fetchBanks()
    fetchSongs()
}

function fetchSounds(bankId){
    fetch(`/banks/${bankId}`)
    .then(resp => resp.json())
    .then(initializeBank)
}

function initializeBank(bank){
    bank.sounds.forEach((sound, index) => {
        let new_sound = {}
        new_sound.src = `${sound.location}`
        new_sound.name = sound.name
        new_sound.id = sound.id
        sampleArray[index + 1] = new_sound
        padArray[index].dataset.soundId =`${sound.id}`
        padArray[index].innerText = `${sound.name}`
    })
}

function  fetchBanks(){
    fetch('/banks')
    .then(resp => resp.json())
    .then(bankSelector)
}

function bankSelector(banks){
    const select = document.getElementById('bank-select')
    banks.forEach(bank => {
        const option = document.createElement('option')
        option.innerText = bank.name
        option.dataset.id = bank.id
        select.append(option)
    })
    select.addEventListener('change', e => {
        fetchSounds(e.target.options[e.target.selectedIndex].dataset.id)
    })
}

function fetchSongs(){
    fetch('/songs')
    .then(resp => resp.json())
    .then(songSelector)
}

function songSelector(songs){
    const select = document.getElementById('load-song')
    songs.forEach(song => {
        const option = document.createElement('option')
        option.innerText = `${song.title} - ${song.creator}`
        option.dataset.id = song.id
        select.append(option)
    })
    select.addEventListener('change', e => {
        loadSong(parseInt(e.target.options[e.target.selectedIndex].dataset.id))
    })

}

