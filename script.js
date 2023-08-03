document.body.addEventListener('keypress', e => {
    playSound(e.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', _ => {
    let song = document.querySelector('#input').value
    
    if(song != '') playComposition(song.split(''))
})


const playSound = sound => {
    const audioElement = document.querySelector(`#s_${sound}`)
    const keyElement = document.querySelector(`div[data-key="${sound}"]`) 

    if(audioElement) audioElement.play()
    if(keyElement) keyPress(keyElement)
}

const playComposition = songArray => {
    let wait = 0

    songArray.forEach(songItem => {
        setTimeout(ev => {
            playSound(`key${songItem}`)

        }, wait)

        wait+=250
    });
}

const keyPress = key => {
    key.classList.add('active')

    setTimeout(e=>{
        key.classList.remove('active')
    },450)
}