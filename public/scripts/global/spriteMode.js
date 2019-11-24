let spriteMode = document.querySelector(".spriteMode");
console.log(spriteMode);

if (typeof standardStylesheet === "undefined") {
  let standardStylesheet = document.querySelector("#standardStylesheet");
}

//ACTIVATING SPRITE MODE

spriteMode.addEventListener("click", () => {
  // spriteMode.classList.toggle("mode-active");
  if (typeof blockO !== "undefined") {
    for (let i = 0; i < 4; i++) {
      if (standardStylesheet.href.match("/css/blog.css")) {
        // spriteMode.classList.add("mode-active");
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
        // spriteMode.classList.remove("mode-active");
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

  let homeTitleWordOne = document.querySelector(".home-title__wordone");
  let homeTitleWordTwo = document.querySelector(".home-title__wordtwo");
  let homeTitleWordThree = document.querySelector(".home-title__wordthree");

  const homeSubtitle = document.querySelector(".home-subtitle");

  if (standardStylesheet.href.match("/css/blog.css")) {
    standardStylesheet.href = "/css/sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/sprite.css")) {
    standardStylesheet.href = "/css/blog.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/home.css")) {
    homeTitleWordOne.textContent = "Hi";
    homeTitleWordTwo.textContent = "Score";
    homeTitleWordThree.textContent = "80884";

    homeSubtitle.textContent = "I love playing games and making pixel art";
    standardStylesheet.href = "/css/home-sprite.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/home-sprite.css")) {
    homeTitleWordOne.textContent = "Hi ";
    homeTitleWordTwo.textContent = " I'm";
    homeTitleWordThree.textContent = "Bobby";

    homeSubtitle.textContent = "I tell stories with prose and code";
    standardStylesheet.href = "/css/home.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/home-night.css")) {
    standardStylesheet.href = "/css/home-night-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/home-night-sprite.css")) {
    standardStylesheet.href = "/css/home-night.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/home-knight.css")) {
    standardStylesheet.href = "/css/home-knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/home-knight-sprite.css")) {
    standardStylesheet.href = "/css/home-knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/home-night-knight.css")) {
    standardStylesheet.href = "/css/home-night-knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/home-night-knight-sprite.css")
  ) {
    standardStylesheet.href = "/css/home-night-knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/about.css")) {
    standardStylesheet.href = "/css/about-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/about-sprite.css")) {
    standardStylesheet.href = "/css/about.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/about-night.css")) {
    standardStylesheet.href = "/css/about-night-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/about-night-sprite.css")) {
    standardStylesheet.href = "/css/about-night.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/about-knight.css")) {
    standardStylesheet.href = "/css/about-knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/about-knight-sprite.css")) {
    standardStylesheet.href = "/css/about-knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/about-night-knight.css")) {
    standardStylesheet.href = "/css/about-night-knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/about-night-knight-sprite.css")
  ) {
    standardStylesheet.href = "/css/about-night-knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/work.css")) {
    standardStylesheet.href = "/css/work-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/work-sprite.css")) {
    standardStylesheet.href = "/css/work.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/work-night.css")) {
    standardStylesheet.href = "/css/work-night-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/work-night-sprite.css")) {
    standardStylesheet.href = "/css/work-night.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/work-knight.css")) {
    standardStylesheet.href = "/css/work-knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/work-knight-sprite.css")) {
    standardStylesheet.href = "/css/work-knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/work-night-knight.css")) {
    standardStylesheet.href = "/css/work-night-knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/work-night-knight-sprite.css")
  ) {
    standardStylesheet.href = "/css/work-night-knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/knight.css")) {
    standardStylesheet.href = "/css/knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/knight-sprite.css")) {
    standardStylesheet.href = "/css/knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/night.css")) {
    standardStylesheet.href = "/css/night-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/night-sprite.css")) {
    standardStylesheet.href = "/css/night.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/night-knight.css")) {
    standardStylesheet.href = "/css/night-knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/night-knight-sprite.css")) {
    standardStylesheet.href = "/css/night-knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  }
});
