export function Controls(button) {
    function play() {
        button.play.classList.add('hide')
        button.pause.classList.remove('hide')
        button.set.classList.add('hide')
        button.stop.classList.remove('hide')
    }

    function pause() {
        button.pause.classList.add('hide')
        button.play.classList.remove('hide')
    }

    function reset() {
        button.play.classList.remove('hide')
        button.pause.classList.add('hide')
        button.set.classList.remove('hide')
        button.stop.classList.add('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?')
        if (!newMinutes) {
            return false
        }

        return newMinutes
    }

    return {
        play,
        reset,
        pause,
        getMinutes,
    }
}
