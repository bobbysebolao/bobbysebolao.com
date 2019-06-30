const projectImageHTMLCollection = document.getElementsByClassName(
  "portfolio-project__image"
);
const projectTypeHTMLCollection = document.getElementsByClassName(
  "portfolio-project__type"
);
const projectTitleHTMLCollection = document.getElementsByClassName(
  "portfolio-project__title"
);
const projectSummaryHTMLCollection = document.getElementsByClassName(
  "portfolio-project__summary"
);
const projectTechStackHTMLCollection = document.getElementsByClassName(
  "portfolio-project__tech-stack"
);
const projectLinksHTMLCollection = document.getElementsByClassName(
  "portfolio-project__read-more"
);

let projectImageArr = Array.prototype.slice.call(projectImageHTMLCollection);
let projectTypeArr = Array.prototype.slice.call(projectTypeHTMLCollection);
let projectTitleArr = Array.prototype.slice.call(projectTitleHTMLCollection);
let projectSummaryArr = Array.prototype.slice.call(projectSummaryHTMLCollection);
let projectTechStackArr = Array.prototype.slice.call(projectTechStackHTMLCollection);
let projectLinksArr = Array.prototype.slice.call(projectLinksHTMLCollection);

fetch("/projects")
  .then(res => res.json())
  .then(projectsData => {
    // console.log("Here are the airtable results: ", projectsData);
    for (let i = 0; i < projectsData.length; i++) {
      projectImageArr[i].style.backgroundImage = `url("${
        projectsData[i]["Image"][0]["url"]
      }")`;
      projectTypeArr[i].textContent = projectsData[i]["Type"];
      projectTitleArr[i].textContent = projectsData[i]["Title"];
      projectSummaryArr[i].textContent = projectsData[i]["Description"];
      projectTechStackArr[i].textContent = projectsData[i]["Tech Stack"];
      projectLinksArr[i].textContent = projectsData[i]["Link Text"];
      projectLinksArr[i].href = projectsData[i]["Link URL"];

      console.log("The image URL: ", projectsData[i]["Image"][0]["url"]);
      console.log("The type: ", projectsData[i]["Type"]);
      console.log("The title: ", projectsData[i]["Title"]);
      console.log("The description: ", projectsData[i]["Description"]);
      console.log("The link: ", projectsData[i]["Link URL"]);
    }
  });
