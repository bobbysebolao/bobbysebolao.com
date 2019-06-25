const portfolioProjects = document.getElementsByClassName("portfolio-project");
console.log(portfolioProjects, "Hi");

fetch("/projects")
  .then(res => res.json())
  .then(userData => {
    console.log("Here are the airtable results: ", userData);
    return;
    if (userData.loginStatus !== true) {
      userCommentsForm.style.display = "none";
      loginToComment.style.display = "block";
    } else {
      userCommentsForm.style.display = "block";
      loginToComment.style.display = "none";
    }
  });
