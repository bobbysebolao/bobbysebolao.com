document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          console.log("This is your post", data);

          for (let blogPost in data) {
            var postDiv = document.createElement("div");
            var postText = document.createElement("p");
            var thumbnail = document.createElement("img");
            var postContainer = document.getElementsByClassName(
              "post-container"
            )[0];

            // thumbnail.src = `../assets/favicon.png`;
            thumbnail.src = `../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}`;
            thumbnail.className = "thumbnail";
            postText.innerHTML = data[blogPost]["title"];
            postDiv.className = "post";

            postDiv.appendChild(thumbnail);
            postDiv.appendChild(postText);
            postContainer.appendChild(postDiv);

          }
        }
         else {
          console.error(xhr.responseText);
        }
      }
    };
    xhr.open("GET", "/blog/posts", true);
    xhr.send();
  }
