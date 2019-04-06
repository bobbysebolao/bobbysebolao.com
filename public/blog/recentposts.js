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

            console.log(latestTimestamps);

            var postTitle = document.createElement("h3");
            let shine = document.createElement("div");
            shine.className = "shine";
            var postContainer = document.querySelector(".post-container");

            postTitle.innerHTML = data[blogPost]["title"];

            if (latestTimestamps.includes(blogPost)) {
              //SELECTS THE FOUR LATEST POSTS
              blockO[latestCount].appendChild(postTitle);
              blockO[latestCount].appendChild(shine);
              blockO[latestCount].style.backgroundImage = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
              blockO[latestCount].dataset.thumbnail = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
              console.log("DATA ATTR: ", blockO[latestCount].dataset.thumbnail);
              latestCount--;
            }

            else if (data[blogPost]["contentType"] === "news" && !latestTimestamps.includes(blogPost)) {
            blockT[newsCount].appendChild(postTitle);
            blockT[newsCount].appendChild(shine);
            blockT[newsCount].style.backgroundImage = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
            blockT[newsCount].dataset.thumbnail = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
            newsCount--;
          }

          else if (data[blogPost]["contentType"] === "interview" && !latestTimestamps.includes(blogPost)) {
            blockL[interviewsCount].appendChild(postTitle);
            blockL[interviewsCount].appendChild(shine);
            blockL[interviewsCount].style.backgroundImage = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
            blockL[interviewsCount].dataset.thumbnail = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
            interviewsCount--;
          }

          else if (data[blogPost]["contentType"] === "review" && !latestTimestamps.includes(blogPost)) {
            blockS[reviewsCount].appendChild(postTitle);
            blockS[reviewsCount].appendChild(shine);
            blockS[reviewsCount].style.backgroundImage = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
            blockS[reviewsCount].dataset.thumbnail = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
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

    for (let i = 0; i < 4; i++) {

      if (standardStylesheet.href.match("../css/blog.css")) {
    blockO[i].classList.remove("post");
    blockO[i].classList.add("block-post");
    blockO[i].style.backgroundImage = `url("")`;
    blockT[i].classList.remove("post");
    blockT[i].classList.add("block-post");
    blockT[i].style.backgroundImage = `url("")`;
    blockL[i].classList.remove("post");
    blockL[i].classList.add("block-post");
    blockL[i].style.backgroundImage = `url("")`;
    blockS[i].classList.remove("post");
    blockS[i].classList.add("block-post");
    blockS[i].style.backgroundImage = `url("")`;
  }
    else {
      blockO[i].classList.remove("block-post");
      blockO[i].classList.add("post");
      blockO[i].style.backgroundImage = blockO[i].dataset.thumbnail;
      blockT[i].classList.remove("block-post");
      blockT[i].classList.add("post");
      blockT[i].style.backgroundImage = blockT[i].dataset.thumbnail;
      blockL[i].classList.remove("block-post");
      blockL[i].classList.add("post");
      blockL[i].style.backgroundImage = blockL[i].dataset.thumbnail;
      blockS[i].classList.remove("block-post");
      blockS[i].classList.add("post");
      blockS[i].style.backgroundImage = blockS[i].dataset.thumbnail;
    }
  }

  if (standardStylesheet.href.match("../css/blog.css")) {
  standardStylesheet.href = "../css/sprite.css";
}
else {
  standardStylesheet.href = "../css/blog.css";
}
  });
