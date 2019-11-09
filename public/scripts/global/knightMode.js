console.log("knights ahoy");

let knightMode = document.querySelector(".knightMode");

if (typeof standardStylesheet === 'undefined') {
let standardStylesheet = document.querySelector("#standardStylesheet");
}

//ACTIVATING KNIGHT mode

knightMode.addEventListener("click", () => {
  console.log("Tyler", standardStylesheet)

  let homeTitleWordOne = document.querySelector(".home-title__wordone");
  let homeTitleWordTwo = document.querySelector(".home-title__wordtwo");
  let homeTitleWordThree = document.querySelector(".home-title__wordthree");

  const homeSubtitle = document.querySelector(".home-subtitle");

  if (standardStylesheet.href.match("/css/blog.css")) {
    standardStylesheet.href = "/css/knight.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } 
  else if (standardStylesheet.href.match("/css/knight.css")){
    standardStylesheet.href = "/css/blog.css";
    sessionStorage.removeItem("autosave");
  }
  else if (standardStylesheet.href.match("/css/work.css")){
    standardStylesheet.href = "/css/work-knight.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  }
  else if (standardStylesheet.href.match("/css/work-knight.css")){
    standardStylesheet.href = "/css/work.css";
    sessionStorage.removeItem("autosave");
  }
  else if (standardStylesheet.href.match("/css/about.css")){
    standardStylesheet.href = "/css/about-knight.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  }
  else if (standardStylesheet.href.match("/css/about-knight.css")){
    standardStylesheet.href = "/css/about.css";
    sessionStorage.removeItem("autosave");
  }
  else if (standardStylesheet.href.match("/css/home.css")){
    standardStylesheet.href = "/css/home-knight.css";
    homeTitleWordOne.textContent = "Hail ";
    homeTitleWordTwo.textContent = " 'Tis";
    homeTitleWordThree.textContent = "Bobby";

    homeSubtitle.textContent = "My surname means 'big onion' in Portuguese";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  }
  else if (standardStylesheet.href.match("/css/home-knight.css")){
    homeTitleWordOne.textContent = "Hi ";
    homeTitleWordTwo.textContent = " I'm";
    homeTitleWordThree.textContent = "Bobby";

    homeSubtitle.textContent = "I tell stories with prose and code";
    standardStylesheet.href = "/css/home.css";
    sessionStorage.removeItem("autosave");
  }
  else {
    standardStylesheet.href = "/css/blog.css";
    sessionStorage.removeItem("autosave");
  }
});
