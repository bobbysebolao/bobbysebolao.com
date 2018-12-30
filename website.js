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
let accSeven = document.getElementsByClassName("accordionSeven");

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
        let panel = document.querySelector(".hiddenSkills");
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
        let panel = document.querySelector(".hiddenInterests");
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
        let panel = document.querySelector(".hiddenWhyCoding");
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

for (let i = 0; i < accSeven.length; i++) {

    accSeven[i].addEventListener("click", function() {
        accSeven[0].classList.toggle("active");
        accSeven[1].classList.toggle("active");
        rippedPaperBottom[6].classList.toggle("open");
        rippedPaperTop[6].classList.toggle("open");
        tearLine[6].classList.toggle("hidden");
        let panel = document.querySelector(".hiddenWhyFAC");
        if (panel.style.display === "block") {
            panel.style.display = "none";
            fillGap[6].style.display = "block";
            instruction[6].style.display = "block";
            // instruction[0].innerHTML = "CLICK TO TEAR";
        } else {
            panel.style.display = "block";
            fillGap[6].style.display = "none";
            instruction[6].style.display = "none";
            // instruction[0].innerHTML = "CLICK TO FIX";
        }
        if (panel.style.maxHeight) {
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
mobileInstruction[6].innerHTML = "TAP";
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

// IMAGE CAROUSEL ANIMATIONS
//Helpful resource: https://css-tricks.com/on-object-fit-and-object-position/

//PART 1: DEFINING VARIABLES FOR DOM MANIPULATION

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let rightButton = document.querySelector("#rightButton");

let leftButton = document.querySelector("#leftButton");

let count = 0;

//PART 2: DEFINING FUNCTIONS FOR ORDERING AND ANIMATING THE CAROUSEL IMAGES

function playForwards() {

  if (count == 0) {

  img1.classList.remove("position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate2", "animate3", "animateRight", "animateRight2", "animateRight3");
  img1.classList.add("animate", "position1");
  img2.classList.remove("position1", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate2", "animate3", "animateRight", "animateRight2", "animateRight3");
  img2.classList.add("animate", "position2");
  img3.classList.remove("position1", "position2", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate2", "animate3", "animateRight", "animateRight2", "animateRight3");
  img3.classList.add("animate", "position3");
  count = 1;
  }

  else if (count == 1 || count == -2) {

  img1.classList.remove("position1", "position2", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate3", "animateRight", "animateRight2", "animateRight3");
  img1.classList.add("animate2", "position3");
  img2.classList.remove("position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate3", "animateRight", "animateRight2", "animateRight3");
  img2.classList.add("animate2", "position1");
  img3.classList.remove("position1", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate3", "animateRight", "animateRight2", "animateRight3");
  img3.classList.add("animate2", "position2");
  count = 2;
  }

  else if (count == 2 || count == -1) {

  img1.classList.remove("position1", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animateRight", "animateRight2", "animateRight3");
  img1.classList.add("animate3", "position2");
  img2.classList.remove("position1", "position2", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animateRight", "animateRight2", "animateRight3");
  img2.classList.add("animate3", "position3");
  img3.classList.remove("position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animateRight", "animateRight2", "animateRight3");
  img3.classList.add("animate3", "position1");
  count = 0;
  }

}

  function playBackwards() {

  if (count == 0) {

  img1.classList.remove("position1", "position2", "position3", "positionMinus1", "positionMinus1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight2", "animateRight3");
  img1.classList.add("animateRight", "position1Offset");
  img3.classList.remove("position1", "position2", "position3", "positionMinus1", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight2", "animateRight3");
  img3.classList.add("animateRight", "positionMinus1Offset");
  count = -1;
  }

  else if (count == -1 || count == 2) {

  img2.classList.remove("position1", "position2", "position3", "positionMinus1", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight2", "animateRight3");
  img2.classList.add("animateRight", "positionMinus1Offset");
  img3.classList.remove("position1", "position2", "position3", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight", "animateRight3");
  img3.classList.add("animateRight2", "positionMinus1Offset");
  count = -2;
  }

  else if (count == -2 || count == 1) {

  img1.classList.remove("position1", "position2", "position3", "positionMinus1", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight", "animateRight2");
  img1.classList.add("animateRight3", "positionMinus1Offset");
  img2.classList.remove("position1", "position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "animate", "animate2", "animate3", "animateRight", "animateRight2");
  img2.classList.add("animateRight3", "position1DoubleOffset");
  img3.classList.remove("position1", "position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight", "animateRight2");
  count = 0;
  }
  }

//PART 3: TRIGGERING THE FUNCTIONS WITH THE CAROUSEL BUTTONS USING ONCLICK AND ONKEYPRESS EVENT LISTENERS

rightButton.addEventListener("click", function() {playForwards();})

leftButton.addEventListener("click", function() {playBackwards();})

document.addEventListener("keydown", function(event) {
  if (event.code == "ArrowRight") {
    playForwards();
  } if (event.code == "ArrowLeft") {
    playBackwards();
  }
})

//PART 4: ADDING AUTOPLAY FUNCTIONALITY
//Resources that helped me:
//1. https://stackoverflow.com/questions/21638730/javascript-toggle-a-setinterval

let autoplay = document.querySelector("#autoplay");

let shuffleButtons = document.querySelector("#shuffleButtons");

let nIntervID;

function startSlideshow() {
  nIntervID = window.setInterval(playForwards, 5000);
  autoplay.setAttribute("value", "checked");
  shuffleButtons.classList.add("active")
  // console.log(autoplay.value);
}

function stopSlideshow() {
  window.clearInterval(nIntervID);
  autoplay.setAttribute("value", "unchecked");
  shuffleButtons.classList.remove("active")
  // console.log(autoplay.value);
}

function toggleSlideshow() {
  if (autoplay.value == "checked") {
    stopSlideshow();

} else if (autoplay.value == "unchecked") {
  startSlideshow();
}
}

autoplay.addEventListener("click", function() {toggleSlideshow();})

//PART 5: MINI CAROUSEL FOR SCENE FOUR

let count2 = 0;

let thought1 = document.querySelector(".thought1");
let thought2 = document.querySelector(".thought2");
let thought3 = document.querySelector(".thought3");

function playThoughts() {

  if (count2 == 0) {

  thought1.classList.remove("position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate2", "animate3", "animateRight", "animateRight2", "animateRight3");
  thought1.classList.add("animate", "position1");
  thought2.classList.remove("position1", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate2", "animate3", "animateRight", "animateRight2", "animateRight3");
  thought2.classList.add("animate", "position2");
  thought3.classList.remove("position1", "position2", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate2", "animate3", "animateRight", "animateRight2", "animateRight3");
  thought3.classList.add("animate", "position3");
  count2 = 1;
  }

  else if (count2 == 1 || count2 == -2) {

  thought1.classList.remove("position1", "position2", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate3", "animateRight", "animateRight2", "animateRight3");
  thought1.classList.add("animate2", "position3");
  thought2.classList.remove("position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate3", "animateRight", "animateRight2", "animateRight3");
  thought2.classList.add("animate2", "position1");
  thought3.classList.remove("position1", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate3", "animateRight", "animateRight2", "animateRight3");
  thought3.classList.add("animate2", "position2");
  count2 = 2;
  }

  else if (count2 == 2 || count2 == -1) {

  thought1.classList.remove("position1", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animateRight", "animateRight2", "animateRight3");
  thought1.classList.add("animate3", "position2");
  thought2.classList.remove("position1", "position2", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animateRight", "animateRight2", "animateRight3");
  thought2.classList.add("animate3", "position3");
  thought3.classList.remove("position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animateRight", "animateRight2", "animateRight3");
  thought3.classList.add("animate3", "position1");
  count2 = 0;
  }

}

let hiddenExperience = document.querySelector(".hiddenExperience");

function startThoughtshow() {
  nIntervID = window.setInterval(playThoughts, 3000);
}

if (hiddenExperience.style.display != "none") {
    startThoughtshow();
  }
