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

  if (standardStylesheet.href.match("/css/minified/blog/blog.min.css")) {
    standardStylesheet.href = "/css/minified/blog/night.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/blog/night.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/blog.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/blog/knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/night-knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/blog/night-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/blog/sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/night-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/blog/night-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/blog/knight-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/night-knight-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/blog/night-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/blog/knight-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/minified/work/work.min.css")) {
    standardStylesheet.href = "/css/minified/work/work-night.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/work/work-night.min.css")
  ) {
    standardStylesheet.href = "/css/minified/work/work.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/work/work-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/work/work-night-knight.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/work/work-night-knight.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/work/work-knight.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/work/work-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/work/work-night-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/work/work-night-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/work/work-sprite.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match(
      "/css/minified/work/work-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href =
      "/css/minified/work/work-night-knight-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/work/work-night-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/work/work-knight-sprite.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/about/about.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about-night.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/about/about-night.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/about/about-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about-night-knight.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/about/about-night-knight.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/about/about-knight.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/about/about-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about-night-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/about/about-night-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/about/about-sprite.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match(
      "/css/minified/about/about-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href =
      "/css/minified/about/about-night-knight-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/about/about-night-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/about/about-knight-sprite.min.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/minified/home/home.min.css")) {
    homeTitleWordOne.textContent = "Shhh ";
    homeTitleWordTwo.textContent = " I'm";
    homeTitleWordThree.textContent = "Sleeping!";

    homeSubtitle.textContent = "I prototype in black and white";
    standardStylesheet.href = "/css/minified/home/home-night.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/home/home-night.min.css")
  ) {
    homeTitleWordOne.textContent = "Hi ";
    homeTitleWordTwo.textContent = " I'm";
    homeTitleWordThree.textContent = "Bobby";

    homeSubtitle.textContent = "I tell stories with prose and code";
    standardStylesheet.href = "/css/minified/home/home.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/home/home-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/home/home-night-knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/home/home-night-knight.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/home/home-knight.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/home/home-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/home/home-night-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/home/home-night-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/home/home-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match(
      "/css/minified/home/home-knight-sprite.min.css"
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
    standardStylesheet.href = "/css/minified/home/home-knight-sprite.min.css";
    // console.log("Ocean", standardStylesheet);
    sessionStorage.removeItem("autosave");
  } else {
    standardStylesheet.href = "/css/minified/blog/blog.min.css";
    sessionStorage.removeItem("autosave");
  }
});
