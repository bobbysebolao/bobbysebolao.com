console.log("hey");

let nightMode = document.querySelector(".nightMode");

if (typeof standardStylesheet === "undefined") {
  let standardStylesheet = document.querySelector("#standardStylesheet");
}

//ACTIVATING NIGHT mode
nightMode.addEventListener("click", () => {
  // nightMode.classList.toggle("mode-active");
  console.log("Tyler", standardStylesheet);

  let homeTitleWordOne = document.querySelector(".home-title__wordone");
  let homeTitleWordTwo = document.querySelector(".home-title__wordtwo");
  let homeTitleWordThree = document.querySelector(".home-title__wordthree");

  const homeSubtitle = document.querySelector(".home-subtitle");

  if (standardStylesheet.href.match("/css/blog.css")) {
    standardStylesheet.href = "/css/night.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/night.css")) {
    standardStylesheet.href = "/css/blog.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/knight.css")) {
    standardStylesheet.href = "/css/night-knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/night-knight.css")) {
    standardStylesheet.href = "/css/knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/sprite.css")) {
    standardStylesheet.href = "/css/night-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/night-sprite.css")) {
    standardStylesheet.href = "/css/sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/knight-sprite.css")) {
    standardStylesheet.href = "/css/night-knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/night-knight-sprite.css")) {
    standardStylesheet.href = "/css/knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/work.css")) {
    standardStylesheet.href = "/css/work-night.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/work-night.css")) {
    standardStylesheet.href = "/css/work.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/work-knight.css")) {
    standardStylesheet.href = "/css/work-night-knight.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/work-night-knight.css")) {
    standardStylesheet.href = "/css/work-knight.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/work-sprite.css")) {
    standardStylesheet.href = "/css/work-night-sprite.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/work-night-sprite.css")) {
    standardStylesheet.href = "/css/work-sprite.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/work-knight-sprite.css")) {
    standardStylesheet.href = "/css/work-night-knight-sprite.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/work-night-knight-sprite.css")
  ) {
    standardStylesheet.href = "/css/work-knight-sprite.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/about.css")) {
    standardStylesheet.href = "/css/about-night.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/about-night.css")) {
    standardStylesheet.href = "/css/about.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/about-knight.css")) {
    standardStylesheet.href = "/css/about-night-knight.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/about-night-knight.css")) {
    standardStylesheet.href = "/css/about-knight.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/about-sprite.css")) {
    standardStylesheet.href = "/css/about-night-sprite.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/about-night-sprite.css")) {
    standardStylesheet.href = "/css/about-sprite.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/about-knight-sprite.css")) {
    standardStylesheet.href = "/css/about-night-knight-sprite.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/about-night-knight-sprite.css")
  ) {
    standardStylesheet.href = "/css/about-knight-sprite.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/home.css")) {
    homeTitleWordOne.textContent = "Shhh ";
    homeTitleWordTwo.textContent = " I'm";
    homeTitleWordThree.textContent = "Sleeping!";

    homeSubtitle.textContent = "I sometimes dream in black and white";
    standardStylesheet.href = "/css/home-night.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/home-night.css")) {
    homeTitleWordOne.textContent = "Hi ";
    homeTitleWordTwo.textContent = " I'm";
    homeTitleWordThree.textContent = "Bobby";

    homeSubtitle.textContent = "I tell stories with prose and code";
    standardStylesheet.href = "/css/home.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/home-knight.css")) {
    standardStylesheet.href = "/css/home-night-knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/home-night-knight.css")) {
    standardStylesheet.href = "/css/home-knight.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/home-sprite.css")) {
    standardStylesheet.href = "/css/home-night-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (standardStylesheet.href.match("/css/home-night-sprite.css")) {
    standardStylesheet.href = "/css/home-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/home-knight-sprite.css")) {
    standardStylesheet.href = "/css/home-night-knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/home-night-knight-sprite.css")
  ) {
    standardStylesheet.href = "/css/home-knight-sprite.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else {
    standardStylesheet.href = "/css/blog.css";
    sessionStorage.removeItem("autosave");
  }
});
