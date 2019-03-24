let typed = document.querySelector(".landing-screen__intro--typed");

console.log(typed.textContent.length);

// console.log(typed.innerText.length);

let words = ["Financially Free", "Creative Dreamers", "Daring Designers", "Master Craftspeople", "Amateur Builders", "City Dwellers", "Nature Lovers", "Global Citizens", "Intrepid Travellers", "Tiny Housers"];

// console.log(words[0].split("").slice(0, [words[0].length]).join(""));

//How to call Immediately Invoking Function Expressions (IIFEs) - these are needed when you want to add a delay between loop iterations: https://borgs.cybrilla.com/tils/javascript-for-loop-with-delay-in-each-iteration-using-iife/

let delay = 40;
let baseline = 0;
let count = 1;

for (let i = 0; i < words.length; i++) {
  let help = 0;

  // let countdown;

  for (let j = 0; j < words[i].length; j++) {

    (function () {
      setTimeout(function () {
      typed.textContent += words[i][j];
    }, baseline+(delay*j));
    help = j;

  })();

}
  baseline += (delay*words[i].length)*4;

  // console.log(words[i].split("").slice(0, -1).join(""));

  for (let p = words[i].length-1; p>=0; p--) {

    (function () {
      setTimeout(function () {

        typed.textContent = typed.textContent.slice(0,typed.textContent.indexOf(typed.textContent.length-1));

    }, baseline+(delay*help));
    help++;

  })();
};

  baseline += (delay*words[i].length)*2;

  }

  // console.log(typed.innerText.length);
