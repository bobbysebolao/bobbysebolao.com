console.log("LOGIN OPTIONS HERE")

const fileDivider = document.querySelector(".fileDivider");

// const xhr = new XMLHttpRequest();

document.onreadystatechange = function() {
  if (document.readyState === "complete") {
      console.log("Hi jonny")
    let xhr = new XMLHttpRequest();

    // var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var userData = JSON.parse(xhr.responseText);
        console.log("This is the login status: ", userData.loginStatus);

        if (userData.loginStatus === true) {
          let userAvatar = document.createElement('img');
          userAvatar.className = "blog-post__author-avatar";
          // userAvatar.src = `${loginStatus.avatar}`;
        }

        else {
        let register = document.createElement('p');
        let login = document.createElement('p');

        register.textContent = "Register";
        login.textContent = "Sign in";

        register.className = "blog__login-options";
        login.className = "blog__login-options";

        fileDivider.appendChild(login);
        fileDivider.appendChild(register);
      }

      }
     //  else {
     //   console.error(xhr.responseText);
     // }
    }
    xhr.open("GET", "/blog/check-login-status", true);
    xhr.send();
  };
}
