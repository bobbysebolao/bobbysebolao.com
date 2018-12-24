// alert("Hello")

//ACCORDION FUNCTIONALITY

// RESOURCES THAT HELPED ME
// 1. https://www.w3schools.com/howto/howto_js_accordion.asp

let accOne = document.getElementsByClassName("accordionOne");
let accTwo = document.getElementsByClassName("accordionTwo");
let accThree = document.getElementsByClassName("accordionThree");
let accFour = document.getElementsByClassName("accordionFour");
let accFive = document.getElementsByClassName("accordionFive");
let accSix = document.getElementsByClassName("accordionSix");

let rippedPaperBottom = document.getElementsByClassName("rippedPaperBottom");
let rippedPaperTop = document.getElementsByClassName("rippedPaperTop");
let tearLine = document.getElementsByClassName("tearLine");
let fillGap = document.getElementsByClassName("fillGap");
let instruction = document.getElementsByClassName("instruction");
let mobileInstruction = document.getElementsByClassName("mobileInstruction");

for (let i = 0; i < accOne.length; i++) {

    accOne[i].addEventListener("click", function() {
        accOne[0].classList.toggle("active");
        accOne[1].classList.toggle("active");
        rippedPaperBottom[0].classList.toggle("open");
        rippedPaperTop[0].classList.toggle("open");
        tearLine[0].classList.toggle("hidden");
        let panel = document.querySelector(".hiddenHeader");
        if (panel.style.display === "block") {
            panel.style.display = "none";
            fillGap[0].style.display = "block";
            instruction[0].style.display = "block";
            // instruction[0].innerHTML = "CLICK TO TEAR";
        } else {
            panel.style.display = "block";
            fillGap[0].style.display = "none";
            instruction[0].style.display = "none";
            // instruction[0].innerHTML = "CLICK TO FIX";
        }
        if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}

for (let i = 0; i < accTwo.length; i++) {

    accTwo[i].addEventListener("click", function() {
      accTwo[0].classList.toggle("active");
      accTwo[1].classList.toggle("active");
      rippedPaperBottom[1].classList.toggle("open");
      rippedPaperTop[1].classList.toggle("open");
      tearLine[1].classList.toggle("hidden");
        let panel = document.querySelector(".hiddenEducation");
        if (panel.style.display === "block") {
            panel.style.display = "none";
            fillGap[1].style.display = "block";
            instruction[1].style.display = "block";
            // instruction[1].innerHTML = "CLICK TO TEAR";
        } else {
            panel.style.display = "block";
            fillGap[1].style.display = "none";
            instruction[1].style.display = "none";
            // instruction[1].innerHTML = "CLICK TO FIX";
        }
        if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}

for (let i = 0; i < accThree.length; i++) {

    accThree[i].addEventListener("click", function() {
      accThree[0].classList.toggle("active");
      accThree[1].classList.toggle("active");
      rippedPaperBottom[2].classList.toggle("open");
      rippedPaperTop[2].classList.toggle("open");
      tearLine[2].classList.toggle("hidden");
        let panel = document.querySelector(".hiddenExperience");
        if (panel.style.display === "block") {
            panel.style.display = "none";
            fillGap[2].style.display = "block";
            instruction[2].style.display = "block";
            // instruction[2].innerHTML = "CLICK TO TEAR";
        } else {
            panel.style.display = "block";
            fillGap[2].style.display = "none";
            instruction[2].style.display = "none";
            // instruction[2].innerHTML = "CLICK TO FIX";
        }
        if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}

for (let i = 0; i < accFour.length; i++) {

    accFour[i].addEventListener("click", function() {
      accFour[0].classList.toggle("active");
      accFour[1].classList.toggle("active");
      rippedPaperBottom[3].classList.toggle("open");
      rippedPaperTop[3].classList.toggle("open");
      tearLine[3].classList.toggle("hidden");
        let panel = document.querySelector(".hiddenTeaching");
        if (panel.style.display === "block") {
            panel.style.display = "none";
            fillGap[3].style.display = "block";
            instruction[3].style.display = "block";
            // instruction[3].innerHTML = "CLICK TO TEAR";
        } else {
            panel.style.display = "block";
            fillGap[3].style.display = "none";
            instruction[3].style.display = "none";
            // instruction[3].innerHTML = "CLICK TO FIX";
        }
        if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}

for (let i = 0; i < accFive.length; i++) {

    accFive[i].addEventListener("click", function() {
      accFive[0].classList.toggle("active");
      accFive[1].classList.toggle("active");
      rippedPaperBottom[4].classList.toggle("open");
      rippedPaperTop[4].classList.toggle("open");
      tearLine[4].classList.toggle("hidden");
        let panel = document.querySelector(".hiddenMarketing");
        if (panel.style.display === "block") {
            panel.style.display = "none";
            fillGap[4].style.display = "block";
            instruction[4].style.display = "block";
            // instruction[4].innerHTML = "CLICK TO TEAR";
        } else {
            panel.style.display = "block";
            fillGap[4].style.display = "none";
            instruction[4].style.display = "none";
            // instruction[4].innerHTML = "CLICK TO FIX";
        }
        if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}

for (let i = 0; i < accSix.length; i++) {

    accSix[i].addEventListener("click", function() {
      accSix[0].classList.toggle("active");
      accSix[1].classList.toggle("active");
      rippedPaperBottom[5].classList.toggle("open");
      rippedPaperTop[5].classList.toggle("open");
      tearLine[5].classList.toggle("hidden");
        let panel = document.querySelector(".hiddenHobbies");
        if (panel.style.display === "block") {
            panel.style.display = "none";
            fillGap[5].style.display = "block";
            instruction[5].style.display = "block";
            // instruction[5].innerHTML = "CLICK TO TEAR";
        } else {
            panel.style.display = "block";
            fillGap[5].style.display = "none";
            instruction[5].style.display = "none";
            // instruction[5].innerHTML = "CLICK TO FIX";
        }
        if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}

//MOBILE RESPONSIVE CHANGES//

if (navigator.userAgent.match(/Mobile/)) {
mobileInstruction[0].innerHTML = "TAP";
mobileInstruction[1].innerHTML = "TAP";
mobileInstruction[2].innerHTML = "TAP";
mobileInstruction[3].innerHTML = "TAP";
mobileInstruction[4].innerHTML = "TAP";
mobileInstruction[5].innerHTML = "TAP";
}


//SCENE THREE JS ANIMATIONS

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
