document.addEventListener("DOMContentLoaded", main())

function main(){
    fetchSounds(1)
    fetchBanks()
}

function fetchSounds(bankId){
    fetch(`http://localhost:3000/banks/${bankId}`)
    .then(resp => resp.json())
    .then(initializeBank)
}

function initializeBank(bank){
    bank.sounds.forEach((sound, index) => {
        sampleArray[index + 1].setAttribute("src", `${sound.location}`)
        sampleArray[index + 1].setAttribute("preload", "auto")
        padArray[index].innerText = `${sound.name}`
    })
}

function  fetchBanks(){
    fetch('http://localhost:3000/banks')
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

