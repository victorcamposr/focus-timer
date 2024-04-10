export function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
    minutes,
    updateDisplay,
    
}) {

    let timerTimeOut

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }
    function countdown() {
        timerTimeOut = setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            updateDisplay(minutes, 0)

            if (isFinished) {
                resetControls()
                updateDisplay()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            countdown()
        }, 1000)
    }
    function updateMinutes(newMinutes) {
        minutes = newMinutes
      }
    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function pause() {
        clearTimeout(timerTimeOut)
    }

    return {
        countdown,
        reset,
        updateDisplay,
        pause,
        updateMinutes
    }
}
