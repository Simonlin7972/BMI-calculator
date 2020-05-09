//Elements
var btnClose = document.querySelector('.ic-close');
var btnStart = document.querySelector('.btnStart');
var result = document.querySelector('.resultCard');
var claMain = document.querySelector('.cal-Main');


// Event

btnClose.addEventListener('click', closeResult, false);
btnStart.addEventListener('click', sendData, false);



function sendData(e) {
    result.classList.remove("shrinkResult");
    claMain.classList.remove("shrinkCal");
}

function closeResult(e) {
    // shrink animation
    result.classList.add("shrinkResult");
    claMain.classList.add("shrinkCal");
}