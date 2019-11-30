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
      if (standardStylesheet.href.match("/css/minified/blog/blog.min.css")) {
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

  if (standardStylesheet.href.match("/css/minified/blog/blog.min.css")) {
    standardStylesheet.href = "/css/minified/blog/sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/blog/sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/blog.min.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/minified/home/home.min.css")) {
    homeTitleWordOne.textContent = "Hi";
    homeTitleWordTwo.textContent = "Score";
    homeTitleWordThree.textContent = "80884";

    homeSubtitle.textContent = "I'm learning how to make pixel art";
    standardStylesheet.href = "/css/minified/home/home-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/home/home-sprite.min.css")
  ) {
    homeTitleWordOne.textContent = "Hi ";
    homeTitleWordTwo.textContent = " I'm";
    homeTitleWordThree.textContent = "Bobby";

    homeSubtitle.textContent = "I tell stories with prose and code";
    standardStylesheet.href = "/css/minified/home/home.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/home/home-night.min.css")
  ) {
    standardStylesheet.href = "/css/minified/home/home-night-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/home/home-night-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/home/home-night.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/home/home-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/home/home-knight-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/home/home-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/home/home-knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match(
      "/css/minified/home/home-night-knight.min.css"
    )
  ) {
    standardStylesheet.href =
      "/css/minified/home/home-night-knight-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/home/home-night-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/home/home-night-knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/about/about.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/about/about-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/about/about-night.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about-night-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/about/about-night-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/about/about-night.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/about/about-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about-knight-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/about/about-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/about/about-knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match(
      "/css/minified/about/about-night-knight.min.css"
    )
  ) {
    standardStylesheet.href =
      "/css/minified/about/about-night-knight-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/about/about-night-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/about/about-night-knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/minified/work/work.min.css")) {
    standardStylesheet.href = "/css/minified/work/work-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/work/work-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/work/work.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/work/work-night.min.css")
  ) {
    standardStylesheet.href = "/css/minified/work/work-night-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/work/work-night-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/work/work-night.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/work/work-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/work/work-knight-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/work/work-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/work/work-knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match(
      "/css/minified/work/work-night-knight.min.css"
    )
  ) {
    standardStylesheet.href =
      "/css/minified/work/work-night-knight-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/work/work-night-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/work/work-night-knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/blog/knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/knight-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/blog/knight-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/blog/night.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/night-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/blog/night-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/night.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/blog/night-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/night-knight-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/blog/night-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/blog/night-knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  }
});
