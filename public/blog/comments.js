const userComments = document.querySelector(".user-comments");

document.onreadystatechange = function() {
  if (document.readyState === "complete") {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log("These are the post comments: ", data);

        for (let comment in data) {
          console.log("MEMEME", data[comment]);
          let commentContainer = document.createElement("div");
          let userAvatar = document.createElement("img");
          let commentUsername = document.createElement("p");
          let commentDate = document.createElement("p");
          let commentBody = document.createElement("p");
          commentContainer.className = "user-comments__comment";
          userAvatar.className = "user-comments__avatar";
          commentUsername.className = "user-comments__username";
          commentDate.className = "user-comments__date";
          commentBody.className = "user-comments__body";

          userAvatar.src = "../assets/images/users/" + data[comment]["avatar_name"];
          commentUsername.textContent = data[comment]["username"];
          commentDate.textContent = data[comment]["com_date"].split(" ").slice(1, 4).join(" ");
          commentBody.textContent = data[comment]["body"];
          commentContainer.appendChild(userAvatar);
          commentContainer.appendChild(commentUsername);
          commentContainer.appendChild(commentDate);
          commentContainer.appendChild(commentBody);
          userComments.appendChild(commentContainer);
        }

      }
      else {
       console.error(xhr.responseText);
     }
    }

  };
  xhr.open("GET", "/blog/comments", true);
  xhr.send();
}

// // fetch("/getbusinesses")
// //   .then(res => res.json())
// //   .then(json => updateSelect(json));
