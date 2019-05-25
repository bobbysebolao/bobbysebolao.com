console.log("LOGIN OPTIONS HERE")

const fileDivider = document.querySelector(".fileDivider");

fetch("/blog/check-login-status")
  .then(res => res.json())
  .then(userData => {
    if (userData.loginStatus !== true) {
      let register = document.createElement('a');
      let login = document.createElement('a');

      register.textContent = "Register";
      register.href = "../create/account";
      
      login.textContent = "Sign in";
      login.href = "login";

      register.className = "blog__login-options";
      login.className = "blog__login-options";

      fileDivider.appendChild(login);
      fileDivider.appendChild(register);
      console.log("It's false")
      // userCommentsForm.style.display = 'none';
      // loginToComment.style.display = 'block';
    }
    else {
      let welcome = document.createElement('p');
      let userAvatar = document.createElement('img');

      welcome.textContent = `${userData.username}`;
      welcome.className = 'blog__login-options--welcome';

      userAvatar.className = "blog-post__user-avatar";
      userAvatar.src = `${userData.avatar}`;
      fileDivider.appendChild(welcome);
      fileDivider.appendChild(userAvatar);
      console.log("It's true")
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
