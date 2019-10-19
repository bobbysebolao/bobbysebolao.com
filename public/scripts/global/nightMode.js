console.log("hey");

let nightMode = document.querySelector(".nightMode");

if (typeof standardStylesheet === 'undefined') {
let standardStylesheet = document.querySelector("#standardStylesheet");
}

//ACTIVATING NIGHT mode
nightMode.addEventListener("click", () => {
  console.log("Tyler", standardStylesheet)
  if (standardStylesheet.href.match("/css/blog.css")) {
    standardStylesheet.href = "/css/night.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  } 
  else if (standardStylesheet.href.match("/css/night.css")){
    standardStylesheet.href = "/css/blog.css";
    sessionStorage.removeItem("autosave");
  }
  else if (standardStylesheet.href.match("/css/work.css")){
    standardStylesheet.href = "/css/work-night.css";
    sessionStorage.setItem("autosave", standardStylesheet.href);
  }
  else if (standardStylesheet.href.match("/css/work-night.css")){
    standardStylesheet.href = "/css/work.css";
    sessionStorage.removeItem("autosave");
  }
  else {
    standardStylesheet.href = "/css/blog.css";
    sessionStorage.removeItem("autosave");
  }
});
