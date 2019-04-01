document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          console.log("This is your post", data);

          for (let blogPost in data) {
            var postSpan = document.createElement("span");
            var postTitle = document.createElement("h2");
            var thumbnail = document.createElement("img");
            var postContainer = document.getElementsByClassName(
              "o-container"
            )[0];

            // thumbnail.src = `../assets/favicon.png`;
            thumbnail.src = `../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}`;
            thumbnail.className = "thumbnail";
            postTitle.innerHTML = data[blogPost]["title"];
            postSpan.className = "post";

            postSpan.appendChild(thumbnail);
            postSpan.appendChild(postTitle);
            postContainer.appendChild(postSpan);

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
