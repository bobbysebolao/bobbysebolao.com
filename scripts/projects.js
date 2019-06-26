const projectsContainer = document.querySelector(".projects-container");
const projectsHTMLCollection = document.getElementsByClassName(
  "portfolio-project"
);
// console.log(projectsHTMLCollection, "Hi");

let projectsArr = Array.prototype.slice.call(projectsHTMLCollection);
// console.log(projectsArr.length, "Yes");

fetch("/projects")
  .then(res => res.json())
  .then(projectsData => {
    console.log("Here are the airtable results: ", projectsData);
    for (let i = 0; i < projectsData.length; i++) {
      let newProject = document.createElement("div");
      newProject.className = "portfolio-project";
      projectsContainer.appendChild(newProject);
      // console.log("The image URL: ", projectsData[i]["Image"][0]["url"]);
      projectsContainer.style.backgroundImage = `url("${
        projectsData[i]["Image"][0]["url"]
      }")`;
    }
  });
