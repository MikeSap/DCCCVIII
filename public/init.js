document.addEventListener("DOMContentLoaded", main())

function main(){
    fetchSounds(1)
}

function fetchSounds(bankId){
    fetch(`http://localhost:3000/banks/${bankId}`)
    .then(resp => resp.json())
    .then(initializeBank)
}

function initializeBank(bank){
    bank.sounds.forEach((sound, index) => {
        sampleArray[index + 1].innerHTML = `<source src="${sound.location}" type="audio/wav">`
    })
}