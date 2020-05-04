let spriteMode = document.querySelector(".spriteMode");

const permMarkerArrow = `<path
d="M69.938,19.352c0.281,0.062,0.445,0.156,0.492,0.281s0.031,0.262-0.047,0.41c-0.078,0.147-0.199,0.301-0.363,0.457
s-0.315,0.297-0.457,0.422c-0.141-0.031-0.289-0.004-0.444,0.082c-0.156,0.086-0.298,0.176-0.423,0.27
c-0.438-0.047-0.887-0.051-1.348-0.012s-0.887,0.074-1.277,0.105c-0.077,0-0.12,0.03-0.129,0.094
c-0.008,0.062-0.034,0.102-0.082,0.117c-0.452-0.142-0.938-0.195-1.452-0.164c-0.515,0.03-1.056,0.094-1.617,0.188
s-1.133,0.191-1.711,0.293c-0.578,0.103-1.156,0.16-1.733,0.176c-0.173-0.125-0.302-0.276-0.388-0.456
c-0.086-0.181-0.146-0.375-0.176-0.587c-0.031-0.211-0.043-0.426-0.035-0.645s0.012-0.438,0.012-0.656
c0.048-0.172,0.134-0.305,0.259-0.397c0.125-0.094,0.25-0.181,0.375-0.259c0.391-0.016,0.741-0.038,1.055-0.069
c0.312-0.031,0.613-0.062,0.902-0.094c0.289-0.032,0.577-0.062,0.866-0.095c0.289-0.031,0.604-0.055,0.949-0.069
c0.203-0.048,0.556-0.095,1.056-0.142c0.422-0.031,1.02-0.062,1.793-0.094c0.772-0.032,1.815-0.047,3.129-0.047
c-0.017,0.141,0.026,0.242,0.129,0.305c0.102,0.063,0.207,0.113,0.315,0.152s0.207,0.086,0.293,0.141
C69.966,19.115,69.984,19.211,69.938,19.352z M71.297,14.828c0.219,0.03,0.367,0.086,0.445,0.164
c0.078,0.077,0.117,0.172,0.117,0.28c0,0.109-0.023,0.23-0.07,0.363s-0.094,0.271-0.141,0.41c-0.453,0.25-1.035,0.426-1.746,0.527
c-0.711,0.101-1.441,0.172-2.191,0.211s-1.473,0.055-2.168,0.047s-1.254,0.012-1.676,0.059c-0.844,0.094-1.508,0.185-1.992,0.271
s-0.828,0.168-1.031,0.246c-0.281-0.017-0.496-0.07-0.645-0.164c-0.149-0.095-0.258-0.207-0.328-0.341
c-0.07-0.133-0.117-0.28-0.141-0.444c-0.024-0.164-0.066-0.34-0.129-0.527c0.108-0.125,0.18-0.297,0.211-0.516
c0.03-0.22-0.008-0.383-0.117-0.492c0.125-0.031,0.238-0.121,0.34-0.271c0.102-0.148,0.137-0.262,0.105-0.34
c0.28-0.062,0.565-0.104,0.854-0.129c0.289-0.023,0.573-0.043,0.854-0.059c0.281-0.017,0.551-0.039,0.81-0.07
c0.258-0.031,0.495-0.094,0.715-0.188c0.767-0.031,1.569-0.06,2.414-0.082c0.844-0.023,1.633-0.052,2.366-0.082
c0.234,0.078,0.527,0.121,0.88,0.129c0.352,0.008,0.69,0.03,1.02,0.069s0.613,0.121,0.855,0.246
C71.15,14.272,71.281,14.5,71.297,14.828z"
/>
<path
d="M85.734,17.031c0,0.188,0.074,0.354,0.223,0.504c0.148,0.148,0.262,0.315,0.34,0.504c0.094,0.219,0.121,0.438,0.082,0.655
c-0.039,0.219-0.129,0.414-0.27,0.587c-0.142,0.172-0.324,0.319-0.551,0.444c-0.228,0.125-0.488,0.211-0.785,0.258
c-0.188-0.077-0.332-0.108-0.435-0.094c-0.103,0.016-0.237-0.016-0.409-0.094c-0.281,0.188-0.621,0.371-1.021,0.551
s-0.785,0.23-1.16,0.152c-0.047,0.125-0.138,0.188-0.271,0.188s-0.215,0.07-0.246,0.211c-0.641,0.109-1.266,0.281-1.875,0.517
c-0.608,0.234-1.203,0.487-1.78,0.762c-0.578,0.274-1.138,0.551-1.677,0.832s-1.059,0.523-1.559,0.727
c-0.219-0.062-0.422-0.059-0.609,0.013c-0.187,0.07-0.383,0.098-0.586,0.082c0.047-0.047,0.056-0.078,0.023-0.095
c-0.031-0.016-0.078-0.026-0.141-0.034c-0.063-0.009-0.129-0.017-0.199-0.023s-0.129-0.035-0.176-0.082
c-0.172-0.109-0.301-0.195-0.387-0.258c-0.086-0.063-0.156-0.109-0.211-0.142c-0.056-0.031-0.113-0.069-0.177-0.116
s-0.147-0.117-0.258-0.211c0.062-0.156,0.098-0.285,0.104-0.388c0.008-0.102,0.004-0.194-0.012-0.28s-0.035-0.177-0.059-0.271
c-0.024-0.094-0.027-0.219-0.012-0.375c0.858-0.547,1.616-0.979,2.272-1.301s1.297-0.598,1.922-0.832s1.271-0.457,1.935-0.668
s1.434-0.488,2.309-0.832c-0.359-0.203-0.824-0.391-1.395-0.562c-0.571-0.171-1.142-0.362-1.711-0.573
c-0.57-0.211-1.091-0.474-1.56-0.785c-0.469-0.312-0.781-0.719-0.938-1.219c-0.219-0.017-0.41-0.142-0.573-0.375
c-0.164-0.234-0.23-0.509-0.199-0.82c0.155-0.094,0.301-0.199,0.435-0.316c0.133-0.117,0.301-0.207,0.504-0.27
c0.172-0.031,0.395-0.017,0.668,0.047c0.272,0.062,0.569,0.147,0.891,0.258c0.32,0.11,0.656,0.228,1.008,0.353
s0.684,0.227,0.996,0.305s0.652,0.147,1.02,0.211c0.368,0.062,0.707,0.156,1.021,0.281c0.142,0.062,0.262,0.137,0.362,0.223
c0.102,0.086,0.224,0.146,0.363,0.176c0.281,0.047,0.582,0.138,0.902,0.271s0.645,0.276,0.973,0.434s0.652,0.316,0.973,0.48
c0.322,0.164,0.621,0.301,0.902,0.41c-0.016,0.094,0.086,0.211,0.305,0.352C85.247,16.941,85.484,17.016,85.734,17.031z"
/>`;

const pixelArrow = `<g id="pixel-arrow">
<path d="M59.683,17.486c-0.128-0.272-0.191-0.592-0.191-0.96c0-0.384,0.063-0.704,0.191-0.96h11.52
  c0.128,0.256,0.191,0.576,0.191,0.96c0,0.368-0.063,0.688-0.191,0.96H59.683z"/>
<path d="M71.203,19.407c0.128,0.256,0.191,0.576,0.191,0.96c0,0.368-0.063,0.688-0.191,0.96h-11.52
  c-0.128-0.272-0.191-0.592-0.191-0.96c0-0.384,0.063-0.704,0.191-0.96H71.203z"/>
<path d="M86.373,18.447c0,0.368-0.064,0.688-0.191,0.96h-2.402c0.129,0.256,0.193,0.576,0.193,0.96
  c0,0.368-0.064,0.688-0.193,0.96h-2.398c0.129,0.256,0.191,0.576,0.191,0.96c0,0.368-0.062,0.688-0.191,0.96h-2.4
  c0.127,0.256,0.193,0.576,0.193,0.96c0,0.368-0.066,0.688-0.193,0.96h-3.84c-0.127-0.271-0.193-0.592-0.193-0.96
  c0-0.384,0.066-0.704,0.193-0.96h2.4c-0.129-0.271-0.191-0.592-0.191-0.96c0-0.384,0.062-0.704,0.191-0.96h2.398
  c-0.127-0.272-0.191-0.592-0.191-0.96c0-0.384,0.064-0.704,0.191-0.96h2.402c-0.129-0.272-0.193-0.592-0.193-0.96
  c0-0.384,0.064-0.704,0.193-0.96H79.94c-0.127-0.272-0.191-0.592-0.191-0.96c0-0.384,0.064-0.704,0.191-0.96h-2.398
  c-0.129-0.272-0.191-0.592-0.191-0.96c0-0.384,0.062-0.704,0.191-0.96h-2.4c-0.127-0.272-0.193-0.592-0.193-0.96
  c0-0.384,0.066-0.704,0.193-0.96h3.84c0.127,0.256,0.193,0.576,0.193,0.96c0,0.368-0.066,0.688-0.193,0.96h2.4
  c0.129,0.256,0.191,0.576,0.191,0.96c0,0.368-0.062,0.688-0.191,0.96h2.398c0.129,0.256,0.193,0.576,0.193,0.96
  c0,0.368-0.064,0.688-0.193,0.96h2.402C86.309,17.743,86.373,18.062,86.373,18.447z"/>
</g>`;

if (typeof standardStylesheet === "undefined") {
  let standardStylesheet = document.querySelector("#standardStylesheet");
}

//ACTIVATING SPRITE MODE

spriteMode.addEventListener("click", () => {
  if (blockO.length !== 0) {
    for (let i = 0; i < 4; i++) {
      if (
        standardStylesheet.href.match("/css/minified/blog/blog.min.css") ||
        standardStylesheet.href.match("/css/minified/blog/night.min.css") ||
        standardStylesheet.href.match("/css/minified/blog/knight.min.css") ||
        standardStylesheet.href.match("/css/minified/blog/night-knight.min.css")
      ) {
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

  let homeTitleWordOne = document.querySelector(".home-title__wordone");
  let homeTitleWordTwo = document.querySelector(".home-title__wordtwo");
  let homeTitleWordThree = document.querySelector(".home-title__wordthree");

  const homeSubtitle = document.querySelector(".home-subtitle");

  if (standardStylesheet.href.match("/css/minified/blog/blog.min.css")) {
    standardStylesheet.href = "/css/minified/blog/sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
    if (typeof prevArrow !== "undefined" && typeof nextArrow !== "undefined") {
      prevArrow.innerHTML = pixelArrow;
      nextArrow.innerHTML = pixelArrow;
    }
  } else if (
    standardStylesheet.href.match("/css/minified/blog/sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/blog.min.css";
    sessionStorage.removeItem("autosave");
    if (typeof prevArrow !== "undefined" && typeof nextArrow !== "undefined") {
      prevArrow.innerHTML = permMarkerArrow;
      nextArrow.innerHTML = permMarkerArrow;
    }
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
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/home/home-night-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/home/home-night.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/home/home-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/home/home-knight-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/home/home-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/home/home-knight.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match(
      "/css/minified/home/home-night-knight.min.css"
    )
  ) {
    standardStylesheet.href =
      "/css/minified/home/home-night-knight-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/home/home-night-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/home/home-night-knight.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/about/about.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/about/about-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/about/about-night.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about-night-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/about/about-night-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/about/about-night.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/about/about-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/about/about-knight-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/about/about-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/about/about-knight.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match(
      "/css/minified/about/about-night-knight.min.css"
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
    standardStylesheet.href = "/css/minified/about/about-night-knight.min.css";
    sessionStorage.removeItem("autosave");
  } else if (standardStylesheet.href.match("/css/minified/work/work.min.css")) {
    standardStylesheet.href = "/css/minified/work/work-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match("/css/minified/work/work-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/work/work.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/work/work-night.min.css")
  ) {
    standardStylesheet.href = "/css/minified/work/work-night-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/work/work-night-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/work/work-night.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/work/work-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/work/work-knight-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } else if (
    standardStylesheet.href.match(
      "/css/minified/work/work-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/work/work-knight.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match(
      "/css/minified/work/work-night-knight.min.css"
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
    standardStylesheet.href = "/css/minified/work/work-night-knight.min.css";
    sessionStorage.removeItem("autosave");
  } else if (
    standardStylesheet.href.match("/css/minified/blog/knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/knight-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
    if (typeof prevArrow !== "undefined" && typeof nextArrow !== "undefined") {
      prevArrow.innerHTML = pixelArrow;
      nextArrow.innerHTML = pixelArrow;
    }
  } else if (
    standardStylesheet.href.match("/css/minified/blog/knight-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/knight.min.css";
    sessionStorage.removeItem("autosave");
    if (typeof prevArrow !== "undefined" && typeof nextArrow !== "undefined") {
      prevArrow.innerHTML = permMarkerArrow;
      nextArrow.innerHTML = permMarkerArrow;
    }
  } else if (
    standardStylesheet.href.match("/css/minified/blog/night.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/night-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
    if (typeof prevArrow !== "undefined" && typeof nextArrow !== "undefined") {
      prevArrow.innerHTML = pixelArrow;
      nextArrow.innerHTML = pixelArrow;
    }
  } else if (
    standardStylesheet.href.match("/css/minified/blog/night-sprite.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/night.min.css";
    sessionStorage.removeItem("autosave");
    if (typeof prevArrow !== "undefined" && typeof nextArrow !== "undefined") {
      prevArrow.innerHTML = permMarkerArrow;
      nextArrow.innerHTML = permMarkerArrow;
    }
  } else if (
    standardStylesheet.href.match("/css/minified/blog/night-knight.min.css")
  ) {
    standardStylesheet.href = "/css/minified/blog/night-knight-sprite.min.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
    if (typeof prevArrow !== "undefined" && typeof nextArrow !== "undefined") {
      prevArrow.innerHTML = pixelArrow;
      nextArrow.innerHTML = pixelArrow;
    }
  } else if (
    standardStylesheet.href.match(
      "/css/minified/blog/night-knight-sprite.min.css"
    )
  ) {
    standardStylesheet.href = "/css/minified/blog/night-knight.min.css";
    sessionStorage.removeItem("autosave");
    if (typeof prevArrow !== "undefined" && typeof nextArrow !== "undefined") {
      prevArrow.innerHTML = permMarkerArrow;
      nextArrow.innerHTML = permMarkerArrow;
    }
  }
});
