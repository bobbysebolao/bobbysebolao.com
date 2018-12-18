// alert("Hello")

let headLeft = document.querySelector('.headLeft');

let headRight = document.querySelector('.headRight');

let headTurned = document.querySelector('.headTurned');

// headLeft.classList.toggle('headLeftHidden');

function headLeftShow(){
headLeft.classList.toggle('headLeftHidden');
setTimeout(function() {
headLeft.classList.toggle('headLeftHidden');
}, 1000);

}

function headRightShow(){
headRight.classList.toggle('headRightHidden');
setTimeout(function() {
headRight.classList.toggle('headRightHidden');
}, 1000);

}

function headTurnedShow(){
headTurned.classList.toggle('headTurnedHidden');
setTimeout(function() {
headTurned.classList.toggle('headTurnedHidden');
}, 1000);

}

// // headLeftShow();
// setTimeout(headLeftShow, 1000);
setInterval(headLeftShow, 3000);

// headRightShow();
// setTimeout(headRightShow, 1000);
setInterval(headRightShow, 2000);

setTimeout(headTurnedShow, 3000);
headTurnedShow();
setInterval(headTurnedShow, 3000);
