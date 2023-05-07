let seconds = 70
const formatingTime = (secons)=>{
    const minutes = Math.floor(secons / 60)
    const reseconds = secons % 60

    return `${minutes}: ${reseconds.toString().padStart(2,'0')}`
}

const createTimerElement =() =>{
    const p = document.createElement('p')
    return p
} 

const timerElement = createTimerElement()
timerElement.innerText = formatingTime(seconds)
const timerId = window.setInterval(() => {
    seconds--
    if (seconds === 0) {
        clearInterval(timerId)
        timerElement.innerText = 'time is up'
    } else {
        timerElement.innerText = formatingTime(seconds)
    }
}, 1000)

const createStop = ()=>{
    const stop = document.createElement('button')
    stop.classList.add('stop')
    stop.textContent = 'Stop'
    stop.addEventListener('click', ()=>{
        clearInterval(timerId)
    })
    return stop
}
const createRestart = ()=>{
    const restart = document.createElement('button')
    restart.classList.add('restart')
    restart.textContent = 'Restart'
    restart.addEventListener('click', ()=>{
        location.reload()
    })

    return restart
}

const stop = createStop()
const restart = createRestart()
const timer = document.querySelector('#timer')
timer.append(timerElement,stop, restart)