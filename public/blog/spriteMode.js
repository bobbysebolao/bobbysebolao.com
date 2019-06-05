let spriteMode = document.querySelector(".spriteMode");

if (typeof standardStylesheet === 'undefined') {
let standardStylesheet = document.querySelector("#standardStylesheet");
}

//ACTIVATING SPRITE MODE

spriteMode.addEventListener("click", () => {

  if (typeof blockO !== 'undefined') {
  for (let i = 0; i < 4; i++) {
    if (standardStylesheet.href.match("/css/blog.css")) {
      blockO[i].classList.remove("post");
      blockO[i].classList.add("block-post");
      blockO[i].style.backgroundImage = `url("")`;
      blockT[i].classList.remove("post");
      blockT[i].classList.add("block-post");
      blockT[i].style.backgroundImage = `url("")`;
      blockL[i].classList.remove("post");
      blockL[i].classList.add("block-post");
      blockL[i].style.backgroundImage = `url("")`;
      blockS[i].classList.remove("post");
      blockS[i].classList.add("block-post");
      blockS[i].style.backgroundImage = `url("")`;
    } else {
      blockO[i].classList.remove("block-post");
      blockO[i].classList.add("post");
      blockO[i].style.backgroundImage = blockO[i].dataset.thumbnail;
      blockT[i].classList.remove("block-post");
      blockT[i].classList.add("post");
      blockT[i].style.backgroundImage = blockT[i].dataset.thumbnail;
      blockL[i].classList.remove("block-post");
      blockL[i].classList.add("post");
      blockL[i].style.backgroundImage = blockL[i].dataset.thumbnail;
      blockS[i].classList.remove("block-post");
      blockS[i].classList.add("post");
      blockS[i].style.backgroundImage = blockS[i].dataset.thumbnail;
    }
  }
}

  if (standardStylesheet.href.match("/css/blog.css")) {
    standardStylesheet.href = "/css/sprite.css";
    console.log("Ocean", standardStylesheet)
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else {
    standardStylesheet.href = "/css/blog.css";
    sessionStorage.removeItem("autosave");
  }
});
