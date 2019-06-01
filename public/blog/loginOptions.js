console.log("LOGIN OPTIONS HERE");

const fileDivider = document.querySelector(".fileDivider");
const createOptions = document.querySelector(".blog__create-options");
const loginOptions = document.querySelector(".blog__login-options");

const userProfile = document.querySelector(".user-profile");

const profileOptionsList = document.querySelector(".blog__profile-options");

document.addEventListener("click", e => {
  console.log("BAH", e.target.className);
  if (
    e.target.className !== "blog__login-options" &&
    e.target.className !== "user-profile" &&
    e.target.className !== "user-profile__username" &&
    e.target.className !== "blog-post__user-avatar"
  ) {
    if (
      profileOptionsList.classList.contains("blog__profile-options--display")
    ) {
      console.log("WOOOOOO");
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
      login.href = "login";

      // register.className = "blog__login-options";
      // login.className = "blog__login-options";

      loginOptions.appendChild(login);
      loginOptions.appendChild(register);
      console.log("It's false");
      // userCommentsForm.style.display = 'none';
      // loginToComment.style.display = 'block';
    } else {
      // let profileOptions = document.createElement('details');
      // let logoutOption = document.createElement('summary');

      // profileOptions.textContent = "Hello";
      // logoutOption.textContent = "Bye";

      let username = document.createElement("p");
      let avatar = document.createElement("img");

      let createNewPost = document.createElement("a");
      createNewPost.className = "blog__login-options--create";
      createNewPost.textContent = "New post";
      createNewPost.href = "new";

      let imageManager = document.createElement("a");
      imageManager.className = "blog__login-options--create";
      imageManager.textContent = "Image manager";
      imageManager.href = "image-manager";

      username.textContent = `${userData.username}`;
      username.className = "user-profile__username";

      avatar.className = "blog-post__user-avatar";
      avatar.src = `${userData.avatar}`;

      // profileOptions.appendChild(logoutOption);
      // loginOptions.appendChild(profileOptions);

      createOptions.appendChild(createNewPost);
      createOptions.appendChild(imageManager);
      userProfile.appendChild(username);
      userProfile.appendChild(avatar);
      // loginOptions.appendChild(userProfile)
      // loginOptions.appendChild(profileOptions);
      console.log("It's true");
      // userCommentsForm.style.display = 'block';
      // loginToComment.style.display = 'none';
    }
  });

// const xhr = new XMLHttpRequest();

// document.onreadystatechange = function() {
//   if (document.readyState === "complete") {
//       console.log("Hi jonny")
//     let xhr = new XMLHttpRequest();
//
//     // var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var userData = JSON.parse(xhr.responseText);
//         console.log("This is the login status: ", userData.loginStatus);
//
//         if (userData.loginStatus === true) {
//           let userAvatar = document.createElement('img');
//           userAvatar.className = "blog-post__author-avatar";
//           // userAvatar.src = `${loginStatus.avatar}`;
//         }
//
//         else {
//         let register = document.createElement('p');
//         let login = document.createElement('p');
//
//         register.textContent = "Register";
//         login.textContent = "Sign in";
//
//         register.className = "blog__login-options";
//         login.className = "blog__login-options";
//
//         fileDivider.appendChild(login);
//         fileDivider.appendChild(register);
//       }
//
//       }
//      //  else {
//      //   console.error(xhr.responseText);
//      // }
//     }
//     xhr.open("GET", "/blog/check-login-status", true);
//     xhr.send();
//   };
// }
