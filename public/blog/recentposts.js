let blockO = document.getElementsByClassName("blockO");
let blockT = document.getElementsByClassName("blockT");
let blockL = document.getElementsByClassName("blockL");
let blockS = document.getElementsByClassName("blockS");
let postLinks = document.getElementsByClassName("blogPostLink");

let spriteMode = document.querySelector(".spriteMode");
let standardStylesheet = document.querySelector("#standardStylesheet");

document.onreadystatechange = function() {

  if (sessionStorage.getItem('autosave').includes('css/sprite.css')) {
  standardStylesheet.href = "../css/sprite.css";
  // console.log("Session storage is working");
}

  if (document.readyState === "complete") {
    // console.log("Look here", sessionStorage.getItem('autosave'));

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          // console.log("This is your post", data);
          // return;

          //SORTING TIMESTAMPS FOR LATEST POSTS
          let timestamps = Object.getOwnPropertyNames(data);

          function descendingSort(a, b) {
            return b - a;
          }

          timestamps.sort(descendingSort);
          let latestTimestamps = timestamps.slice(0, 4);
          timestamps.splice(0,4);
          // console.log("HERE ARE YOUR TIMESTAMPS", timestamps);
          // return;
          let newsTimestamps = [];
          let interviewTimestamps = [];
          let reviewTimestamps = [];
          for (let i = 0; i < timestamps.length; i++) {
            if (data[timestamps[i]]["contentType"] === "news") {
              newsTimestamps.push(timestamps[i]);
            }
            else if (data[timestamps[i]]["contentType"] === "interview") {
              interviewTimestamps.push(timestamps[i]);
            }
            else if (data[timestamps[i]]["contentType"] === "review") {
              reviewTimestamps.push(timestamps[i]);
            }
            // console.log("QWERTY", data[timestamps[i]]["contentType"]);
          }
          let latestNewsTimestamps = newsTimestamps.sort(descendingSort).slice(0,4);
          let latestInterviewTimestamps = interviewTimestamps.sort(descendingSort).slice(0,4);
          let latestReviewTimestamps = reviewTimestamps.sort(descendingSort).slice(0,4);

          // ^^FOUR MOST RECENT TIMESTAMPS FOR EACH POST TYPE ARE NOW SORTED &
          // READY TO ADD TO DOM

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
              blockO[latestCount].closest(".blogPostLink").href = data[blogPost]["filename"];
              console.log("AAAAAAA", blockO[latestCount].closest(".blogPostLink"));
              latestCount--;
            }

            else if (data[blogPost]["contentType"] === "news" && !latestTimestamps.includes(blogPost)) {
              if (latestNewsTimestamps.includes(blogPost)) {
            blockT[newsCount].appendChild(postTitle);
            blockT[newsCount].appendChild(shine);
            blockT[newsCount].style.backgroundImage = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
            blockT[newsCount].dataset.thumbnail = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
            blockT[newsCount].closest(".blogPostLink").href = "www.google.com";
            newsCount--;
          }
          }

          else if (data[blogPost]["contentType"] === "interview" && !latestTimestamps.includes(blogPost)) {
            if (latestInterviewTimestamps.includes(blogPost)) {
            blockL[interviewsCount].appendChild(postTitle);
            blockL[interviewsCount].appendChild(shine);
            blockL[interviewsCount].style.backgroundImage = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
            blockL[interviewsCount].dataset.thumbnail = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
            blockL[interviewsCount].closest(".blogPostLink").href = "www.google.com";
            interviewsCount--;
          }
          }

          else if (data[blogPost]["contentType"] === "review" && !latestTimestamps.includes(blogPost)) {
            if (latestReviewTimestamps.includes(blogPost)) {
            blockS[reviewsCount].appendChild(postTitle);
            blockS[reviewsCount].appendChild(shine);
            blockS[reviewsCount].style.backgroundImage = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
            blockS[reviewsCount].dataset.thumbnail = `url("../assets/images/blog/${data[blogPost]["thumbnail"]["name"]}")`;
            blockL[reviewsCount].closest(".blogPostLink").href = "www.google.com";
            reviewsCount--;
          }
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
  sessionStorage.setItem("autosave", standardStylesheet.href);
}
else {
  standardStylesheet.href = "../css/blog.css";
  sessionStorage.removeItem("autosave");
}
  });
