const portfolioProject = document.querySelector(".portfolio-project");
const projectsHTMLCollection = document.getElementsByClassName(
  "portfolio-project__image"
);
// console.log(projectsHTMLCollection, "Hi");

let projectsArr = Array.prototype.slice.call(projectsHTMLCollection);
console.log(projectsArr.length, "Yes");

fetch("/projects")
  .then(res => res.json())
  .then(projectsData => {
    console.log("Here are the airtable results: ", projectsData);
    for (let i = 0; i < projectsData.length; i++) {
      console.log("The image URL: ", projectsData[i]["Image"][0]["url"]);
      projectsArr[i].style.backgroundImage = `url("${
        projectsData[i]["Image"][0]["url"]
      }")`;
    }
  });
