let standardStylesheet = document.querySelector("#standardStylesheet");
let urlEndpoint = window.location.href.split(".com")[1];

console.log(`Mode control active at ${urlEndpoint}`);

let blockO;
let blockT;
let blockL;
let blockS;

if (typeof document.getElementsByClassName("blockO") !== "undefined") {
  blockO = document.getElementsByClassName("blockO");
  blockT = document.getElementsByClassName("blockT");
  blockL = document.getElementsByClassName("blockL");
  blockS = document.getElementsByClassName("blockS");
}

if (sessionStorage.getItem("autosave")) {
  if (urlEndpoint === "/" || urlEndpoint === "/index.html") {
    if (
      sessionStorage.getItem("autosave").match("night-knight-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/home/home-night-knight-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("knight-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/home/home-knight-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("night-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/home/home-night-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("night-knight.min.css")
    ) {
      standardStylesheet.href = `/css/minified/home/home-night-knight.min.css`;
    }
    if (sessionStorage.getItem("autosave").match("knight.min.css")) {
      standardStylesheet.href = `/css/minified/home/home-knight.min.css`;
    } else if (sessionStorage.getItem("autosave").match("night.min.css")) {
      standardStylesheet.href = `/css/minified/home/home-night.min.css`;
    } else if (sessionStorage.getItem("autosave").match("sprite.min.css")) {
      standardStylesheet.href = `/css/minified/home/home-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("blog.min.css") ||
      sessionStorage.getItem("autosave").match("about.min.css") ||
      sessionStorage.getItem("autosave").match("work.min.css") ||
      sessionStorage.getItem("autosave").match("home.min.css")
    ) {
      standardStylesheet.href = `/css/minified/home/home.min.css`;
    }
  } else if (urlEndpoint.match("/about")) {
    if (
      sessionStorage.getItem("autosave").match("night-knight-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/about/about-night-knight-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("knight-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/about/about-knight-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("night-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/about/about-night-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("night-knight.min.css")
    ) {
      standardStylesheet.href = `/css/minified/about/about-night-knight.min.css`;
    }
    if (sessionStorage.getItem("autosave").match("knight.min.css")) {
      standardStylesheet.href = `/css/minified/about/about-knight.min.css`;
    } else if (sessionStorage.getItem("autosave").match("night.min.css")) {
      standardStylesheet.href = `/css/minified/about/about-night.min.css`;
    } else if (sessionStorage.getItem("autosave").match("sprite.min.css")) {
      standardStylesheet.href = `/css/minified/about/about-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("blog.min.css") ||
      sessionStorage.getItem("autosave").match("about.min.css") ||
      sessionStorage.getItem("autosave").match("work.min.css") ||
      sessionStorage.getItem("autosave").match("home.min.css")
    ) {
      standardStylesheet.href = `/css/minified/about/about.min.css`;
    }
  } else if (urlEndpoint.match("/work")) {
    if (
      sessionStorage.getItem("autosave").match("night-knight-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/work/work-night-knight-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("knight-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/work/work-knight-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("night-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/work/work-night-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("night-knight.min.css")
    ) {
      standardStylesheet.href = `/css/minified/work/work-night-knight.min.css`;
    }
    if (sessionStorage.getItem("autosave").match("knight.min.css")) {
      standardStylesheet.href = `/css/minified/work/work-knight.min.css`;
    } else if (sessionStorage.getItem("autosave").match("night.min.css")) {
      standardStylesheet.href = `/css/minified/work/work-night.min.css`;
    } else if (sessionStorage.getItem("autosave").match("sprite.min.css")) {
      standardStylesheet.href = `/css/minified/work/work-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("blog.min.css") ||
      sessionStorage.getItem("autosave").match("about.min.css") ||
      sessionStorage.getItem("autosave").match("work.min.css") ||
      sessionStorage.getItem("autosave").match("home.min.css")
    ) {
      standardStylesheet.href = `/css/minified/work/work.min.css`;
    }
  } else if (urlEndpoint.match("/blog")) {
    if (
      sessionStorage.getItem("autosave").match("night-knight-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/blog/night-knight-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("knight-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/blog/knight-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("night-sprite.min.css")
    ) {
      standardStylesheet.href = `/css/minified/blog/night-sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("night-knight.min.css")
    ) {
      standardStylesheet.href = `/css/minified/blog/night-knight.min.css`;
    }
    if (sessionStorage.getItem("autosave").match("knight.min.css")) {
      standardStylesheet.href = `/css/minified/blog/knight.min.css`;
    } else if (sessionStorage.getItem("autosave").match("night.min.css")) {
      standardStylesheet.href = `/css/minified/blog/night.min.css`;
    } else if (sessionStorage.getItem("autosave").match("sprite.min.css")) {
      standardStylesheet.href = `/css/minified/blog/sprite.min.css`;
    } else if (
      sessionStorage.getItem("autosave").match("blog.min.css") ||
      sessionStorage.getItem("autosave").match("about.min.css") ||
      sessionStorage.getItem("autosave").match("work.min.css") ||
      sessionStorage.getItem("autosave").match("home.min.css")
    ) {
      standardStylesheet.href = `/css/minified/blog/blog.min.css`;
    }
  }
  //FOR NOW, THIS LINE WILL SERVE blog.min.css for all other pages with different endpoints
  else {
    standardStylesheet.href = `/css/minified/blog/blog.min.css`;
  }

  // else if (window.location.href.match("/about/")) {
  //   if (sessionStorage.getItem("autosave").match("sprite.min.css")) {
  //     standardStylesheet.href = `/css/minified/blog/sprite.min.css`;
  //   } else if (sessionStorage.getItem("autosave").match("knight.min.css")) {
  //     standardStylesheet.href = `/css/minified/blog/knight.min.css`;
  //   } else if (sessionStorage.getItem("autosave").match("night.min.css")) {
  //     standardStylesheet.href = `/css/minified/blog/night.min.css`;
  //   }
  // }

  if (standardStylesheet.href.match("sprite.min.css")) {
    if (typeof blockO !== "undefined") {
      for (let i = 0; i < 4; i++) {
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
      }
    }
  }
}
