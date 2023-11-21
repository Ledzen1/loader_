
let rahunok = 0
let pause = false
let timerInter
let barInter

document.getElementById('magicButton').addEventListener('click', toggleTimer)

function toggleTimer() {
    const magicButton = document.getElementById('magicButton')

    if (!pause) {
        magicButton.value = 'Stop'
        startTimer()
        startBar()
    } else {
        magicButton.value = 'Start'
        stopTimer()
        stopBar()

    }
}


function startGreenLine(){
    width += step
    progress.style.width = `${width}px`
    if (rahunok === 100){
        stopBar()
        stopTimer()
        restart()
        magicButton.value = 'Reload'
        magicButton.background = 'green'
    }
}

function restart(){
    if (rahunok === 100)
    rahunok = 0
    width = 0
}


function startBar(){
    pause = true
    barInter = setInterval(startGreenLine, 100)
    magicButton.style.background = 'orange'
}
function stopBar(){
    pause = false
    clearInterval(barInter)

}

function startTimer() {
    pause = true
    timerInter = setInterval(updateTimer, 100)
}

function stopTimer() {
    pause = false
    clearInterval(timerInter)
}

function updateTimer() {
    rahunok += 1
    let counter = document.getElementById('counter')
    counter.textContent = `${rahunok}%`
}

function fullDownload(){

}


let width = 0
let step = 4
let time = 100





let div = document.getElementById('tooltip-container')
let tooltip = document.getElementById('tooltip')

div.onmousemove = function(e) {
    tooltip.style.display = 'block'
    tooltip.style.top = `${e.clientY + 13}px`
    tooltip.style.left = `${e.clientX + 13}px`
}
div.onmouseout = function(){
    tooltip.style.display = 'none'
}