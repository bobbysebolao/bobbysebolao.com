document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);

          // console.log("This is your post", data);

          //SORTING TIMESTAMPS FOR LATEST POSTS
          let timestamps = Object.getOwnPropertyNames(data);
          console.log(typeof(timestamps[0]));

          function descendingSort(a, b) {
            return b - a;
          }

          timestamps.sort(descendingSort);
          let latestTimestamps = timestamps.slice(0, 4);
          console.log(typeof(latestTimestamps[0]));
          // ^FOUR MOST RECENT TIMESTAMPS ARE SORTED, READY TO ADD TO DOM

          for (let blogPost in data) {
            // console.log(data[blogPost]["contentType"]);
            console.log(latestTimestamps);
            var postSpan = document.createElement("span");
            var postTitle = document.createElement("h2");
            var thumbnail = document.createElement("img");
            var postContainer = document.querySelector(
              ".post-container"
            );
            var oContainer = document.querySelector(
              ".o-container"
            );
            var tContainer = document.querySelector(
              ".t-container"
            );
            var lContainer = document.querySelector(
              ".l-container"
            );
            var sContainer = document.querySelector(
              ".s-container"
            );

            // thumbnail.src = `../assets/favicon.png`;
            thumbnail.src = `../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}`;
            thumbnail.className = "thumbnail";
            postTitle.innerHTML = data[blogPost]["title"];
            postSpan.className = "post";

            postSpan.appendChild(thumbnail);
            postSpan.appendChild(postTitle);
            postContainer.appendChild(oContainer);
            postContainer.appendChild(tContainer);
            postContainer.appendChild(lContainer);
            postContainer.appendChild(sContainer);

            if (latestTimestamps.includes(blogPost)) {
              //REWRITE THIS LOGIC TO SELECT THE FOUR LATEST POSTS
              // console.log(blogPost);
              oContainer.appendChild(postSpan);
            }

            else if (data[blogPost]["contentType"] === "news") {
            tContainer.appendChild(postSpan);
          }

          else if (data[blogPost]["contentType"] === "interview") {
            lContainer.appendChild(postSpan);
          }

          else if (data[blogPost]["contentType"] === "review") {
            sContainer.appendChild(postSpan);
          }

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
