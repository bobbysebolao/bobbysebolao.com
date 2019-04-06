let blockO = document.getElementsByClassName("blockO");
let blockT = document.getElementsByClassName("blockT");
let blockL = document.getElementsByClassName("blockL");
let blockS = document.getElementsByClassName("blockS");

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

          let latestCount = 3;
          let newsCount = 3;
          let interviewsCount = 3;
          let reviewsCount = 3;

          for (let blogPost in data) {
            // console.log(data[blogPost]["contentType"]);
            console.log(latestTimestamps);
            // var postSpan = document.createElement("span");
            var postTitle = document.createElement("h3");
            var thumbnail = document.createElement("img");
            let shine = document.createElement("div");
            shine.className = "shine";
            var postContainer = document.querySelector(".post-container");
            // var oContainer = document.querySelector(
            //   ".o-container"
            // );
            // var tContainer = document.querySelector(
            //   ".t-container"
            // );
            // var lContainer = document.querySelector(
            //   ".l-container"
            // );
            // var sContainer = document.querySelector(
            //   ".s-container"
            // );


            // thumbnail.src = `../assets/favicon.png`;
            thumbnail.src = `../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}`;
            thumbnail.className = "thumbnail";
            postTitle.innerHTML = data[blogPost]["title"];
            // postSpan.className = "post";

            // postSpan.appendChild(thumbnail);
            // postSpan.appendChild(postTitle);
            // postContainer.appendChild(oContainer);
            // postContainer.appendChild(tContainer);
            // postContainer.appendChild(lContainer);
            // postContainer.appendChild(sContainer);

            if (latestTimestamps.includes(blogPost)) {
              //REWRITE THIS LOGIC TO SELECT THE FOUR LATEST POSTS
              // console.log(blogPost);
              blockO[latestCount].appendChild(postTitle);
              blockO[latestCount].appendChild(shine);
              blockO[latestCount].style.backgroundImage = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`
              // blockO[latestCount].appendChild(thumbnail);
              latestCount--;
            }

            else if (data[blogPost]["contentType"] === "news" && !latestTimestamps.includes(blogPost)) {
            blockT[newsCount].appendChild(postTitle);
            newsCount--;
          }

          else if (data[blogPost]["contentType"] === "interview" && !latestTimestamps.includes(blogPost)) {
            blockL[interviewsCount].appendChild(postTitle);
            interviewsCount--;
          }

          else if (data[blogPost]["contentType"] === "review" && !latestTimestamps.includes(blogPost)) {
            blockS[reviewsCount].appendChild(postTitle);
            reviewsCount--;
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

//ACTIVATING SPRITE MODE

  let spriteMode = document.querySelector(".spriteMode");
  let standardStylesheet = document.querySelector("#standardStylesheet");

  spriteMode.addEventListener("click", () => {
      if (standardStylesheet.href.match("../css/blog.css")) {
      standardStylesheet.href = "../css/sprite.css";
      for (let i = 0; i < blockO.length; i++) {

      blockO[i].classList.remove("post");
      blockO[i].classList.add("block-post");
      blockT[i].classList.remove("post");
      blockT[i].classList.add("block-post");
      blockL[i].classList.remove("post");
      blockL[i].classList.add("block-post");
      blockS[i].classList.remove("post");
      blockS[i].classList.add("block-post");
    }
    }
    else {
      standardStylesheet.href = "../css/blog.css";
      for (let i = 0; i < blockO.length; i++) {
      blockO[i].classList.remove("block-post");
      blockO[i].classList.add("post");
      blockT[i].classList.remove("block-post");
      blockT[i].classList.add("post");
      blockL[i].classList.remove("block-post");
      blockL[i].classList.add("post");
      blockS[i].classList.remove("block-post");
      blockS[i].classList.add("post");
    }
    }
  });
