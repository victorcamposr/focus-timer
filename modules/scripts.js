import { button } from './buttons.js'
import { Timer } from './timer.js'
import { Controls } from './controls.js'

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

const controls = Controls(button)

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls: controls.reset,
    minutes,
})

button.play.onclick = () => {
    controls.play()
    timer.countdown()
}
button.set.onclick = () => {
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
        timer.reset()
        return
    }
    minutes = newMinutes
    timer.updateDisplay(minutes, 0)
    timer.updateMinutes(newMinutes)


}

button.pause.addEventListener('click', function () {
    controls.pause()
    timer.pause()
})
button.stop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    timer.updateDisplay(minutes, 0)
})
button.soundOn.addEventListener('click', soundOnButtonAction)
button.soundOff.addEventListener('click', soundOffButtonAction)

function soundOnButtonAction() {
    button.soundOn.classList.add('hide')
    button.soundOff.classList.remove('hide')
}

function soundOffButtonAction() {
    button.soundOff.classList.add('hide')
    button.soundOn.classList.remove('hide')
}
