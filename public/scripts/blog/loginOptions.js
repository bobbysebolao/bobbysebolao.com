const getUrl = window.location;
const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

const fileDivider = document.querySelector(".fileDivider");
const createOptions = document.querySelector(".blog__create-options");
const loginOptions = document.querySelector(".blog__login-options");

const userProfile = document.querySelector(".user-profile");

const profileOptionsList = document.querySelector(".blog__profile-options");

document.addEventListener("click", e => {
  if (
    e.target.className !== "blog__login-options" &&
    e.target.className !== "user-profile" &&
    e.target.className !== "user-profile__username" &&
    e.target.className !== "blog-post__user-avatar"
  ) {
    if (
      profileOptionsList.classList.contains("blog__profile-options--display")
    ) {
      profileOptionsList.classList.toggle("blog__profile-options--hidden");
      profileOptionsList.classList.toggle("blog__profile-options--display");
    }
  }
});

loginOptions.addEventListener("click", () => {
  if (userProfile.hasChildNodes()) {
    profileOptionsList.classList.toggle("blog__profile-options--hidden");
    profileOptionsList.classList.toggle("blog__profile-options--display");
  }
});

fetch("/blog/check-login-status")
  .then(res => res.json())
  .then(userData => {
    if (userData.loginStatus !== true) {
      let register = document.createElement("a");
      let login = document.createElement("a");

      register.textContent = "Register";
      register.href = "../create/account";

      login.textContent = "Sign in";
      login.href = "../blog/login";

      loginOptions.appendChild(login);
      loginOptions.appendChild(register);
    } else {
      let username = document.createElement("p");
      let avatar = document.createElement("img");

      let createNewPost = document.createElement("a");
      createNewPost.className = "blog__login-options--create";
      createNewPost.textContent = "New post";
      createNewPost.href = baseUrl + "./../blog/new";

      let imageManager = document.createElement("a");
      imageManager.className = "blog__login-options--create";
      imageManager.textContent = "Image manager";
      imageManager.href = baseUrl + "./../blog/image-manager";

      username.textContent = `${userData.username}`;
      username.className = "user-profile__username";

      avatar.className = "blog-post__user-avatar";
      avatar.src = `${userData.avatar}`;

      createOptions.appendChild(createNewPost);
      createOptions.appendChild(imageManager);
      userProfile.appendChild(username);
      userProfile.appendChild(avatar);
    }
  });
