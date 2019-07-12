//Great Heroku guide on how to handle image uploads, with AWS integration:
//https://devcenter.heroku.com/articles/s3-upload-node

let blockO = document.getElementsByClassName("blockO");
let blockT = document.getElementsByClassName("blockT");
let blockL = document.getElementsByClassName("blockL");
let blockS = document.getElementsByClassName("blockS");
let postLinks = document.getElementsByClassName("blogPostLink");

// let spriteMode = document.querySelector(".spriteMode");
// let nightMode = document.querySelector(".nightMode");
let standardStylesheet = document.querySelector("#standardStylesheet");

// const xhr = new XMLHttpRequest();

// const fileDivider = document.querySelector(".fileDivider");

// fetch("/blog/check-login-status")
//   .then(res => res.json())
//   .then(userData => {
//     console.log("balloon", userData)
//     if (userData.loginStatus !== true) {
//       let register = document.createElement('p');
//       let login = document.createElement('p');
//
//       register.textContent = "Register";
//       login.textContent = "Sign in";
//
//       register.className = "blog__login-options";
//       login.className = "blog__login-options";
//
//       fileDivider.appendChild(login);
//       fileDivider.appendChild(register);
//       console.log("It's false")
//       // userCommentsForm.style.display = 'none';
//       // loginToComment.style.display = 'block';
//     }
//     else {
//       let userAvatar = document.createElement('img');
//       userAvatar.className = "user-comments__avatar";
//       userAvatar.src = `${userData.avatar}`;
//       fileDivider.appendChild(userAvatar);
//       console.log("It's true")
//       // userCommentsForm.style.display = 'block';
//       // loginToComment.style.display = 'none';
//     }
//   });

document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    // fetch("/blog/check-login-status")
    //   .then(res => res.json())
    //   .then(userData => {
    //     console.log("balloon", userData)
    //     if (userData.loginStatus !== true) {
    //       let register = document.createElement('p');
    //       let login = document.createElement('p');
    //
    //       register.textContent = "Register";
    //       login.textContent = "Sign in";
    //
    //       register.className = "blog__login-options";
    //       login.className = "blog__login-options";
    //
    //       fileDivider.appendChild(login);
    //       fileDivider.appendChild(register);
    //       console.log("It's false")
    //       // userCommentsForm.style.display = 'none';
    //       // loginToComment.style.display = 'block';
    //     }
    //     else {
    //       let userAvatar = document.createElement('img');
    //       userAvatar.className = "user-comments__avatar";
    //       userAvatar.src = `${userData.avatar}`;
    //       fileDivider.appendChild(userAvatar);
    //       console.log("It's true")
    //       // userCommentsForm.style.display = 'block';
    //       // loginToComment.style.display = 'none';
    //     }
    //   });

    let xhr = new XMLHttpRequest();
    if (
      sessionStorage.getItem("autosave") &&
      sessionStorage.getItem("autosave").includes("css/sprite.css")
    ) {
      standardStylesheet.href = "../css/sprite.css";
    }

    else if (sessionStorage.getItem("autosave") &&
    sessionStorage.getItem("autosave").includes("css/sprite.css")
  ) {
    standardStylesheet.href = "../css/night.css";
  }
    // const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let posts = JSON.parse(xhr.responseText);
        // let thumbnails = JSON.parse(xhr.responseText)[1];
        console.log("These are your posts: ", posts);
        // console.log("These are your thumbnails: ", thumbnails);
        // return;

        //SORTING TIMESTAMPS FOR LATEST POSTS
        let timestamps = [];

        posts.forEach(post => {
          timestamps.push(post.pub_timestamp);
        });
        //
        // console.log("timestamps: ", timestamps);
        // return;

        function descendingSort(a, b) {
          return b - a;
        }

        timestamps.sort(descendingSort);
        let latestTimestamps = timestamps.slice(0, 4);
        //   if (timestamps.length > 4) {
        //   timestamps = timestamps.splice(0,4);
        // }
        console.log("HERE ARE YOUR TIMESTAMPS", timestamps);
        // return;
        let lifeTimestamps = [];
        let learnTimestamps = [];
        let funTimestamps = [];
        for (let i = 0; i < posts.length; i++) {
          if (
            posts[i]["category"] === "life" &&
            !latestTimestamps.includes(posts[i]["pub_timestamp"])
          ) {
            lifeTimestamps.push(posts[i]["pub_timestamp"]);
          } else if (
            posts[i]["category"] === "learn" &&
            !latestTimestamps.includes(posts[i]["pub_timestamp"])
          ) {
            learnTimestamps.push(posts[i]["pub_timestamp"]);
          } else if (
            posts[i]["category"] === "fun" &&
            !latestTimestamps.includes(posts[i]["pub_timestamp"])
          ) {
            funTimestamps.push(posts[i]["pub_timestamp"]);
          }
          // console.log("QWERTY", data[timestamps[i]]["contentType"]);
        }
        // console.log("LIFE: ", lifeTimestamps);
        // console.log("LEARN: ", learnTimestamps);
        // console.log("FUN: ", funTimestamps);
        // return;
        let latestLifeTimestamps = lifeTimestamps
          .sort(descendingSort)
          .slice(0, 4);
        let latestLearnTimestamps = learnTimestamps
          .sort(descendingSort)
          .slice(0, 4);
        let latestFunTimestamps = funTimestamps
          .sort(descendingSort)
          .slice(0, 4);

        // console.log("LIFE: ", latestLifeTimestamps);
        // console.log("LEARN: ", latestLearnTimestamps);
        // console.log("FUN: ", latestFunTimestamps);
        // console.log(data[0]["pub_timestamp"])
        // return;

        // ^^FOUR MOST RECENT TIMESTAMPS FOR EACH POST TYPE ARE NOW SORTED &
        // READY TO ADD TO DOM

        let latestCount = 3;
        let lifeCount = 3;
        let learnCount = 3;
        let funCount = 3;

        for (let blogPost in posts) {
          // console.log("yo", data[blogPost]["pub_timestamp"])

          // console.log("HEY HO", latestTimestamps);

          var postTitle = document.createElement("h3");
          let shine = document.createElement("div");
          shine.className = "shine";
          var postContainer = document.querySelector(".post-container");

          postTitle.textContent = posts[blogPost]["title"];

          if (latestTimestamps.includes(posts[blogPost]["pub_timestamp"])) {
            // console.log(data[blogPost]["pub_timestamp"], "hehehe")
            //SELECTS THE FOUR LATEST POSTS
            blockO[latestCount].appendChild(postTitle);
            blockO[latestCount].appendChild(shine);
            blockO[latestCount].style.backgroundImage = `url("${
              posts[blogPost]["thumbnail"]["filepath"]
            }")`;
            blockO[latestCount].dataset.thumbnail = `url("${
              posts[blogPost]["thumbnail"]["filepath"]
            }")`;
            // blockO[latestCount].style.border = "none";
            // console.log("DATA ATTR: ", blockO[latestCount].dataset.thumbnail);
            blockO[latestCount].closest(".blogPostLink").href = `/blog/posts/${
              posts[blogPost]["filename"]
            }`;
            // console.log("AAAAAAA", blockO[latestCount].closest(".blogPostLink"));
            latestCount--;
          } else if (
            posts[blogPost]["category"] === "life" &&
            !latestTimestamps.includes(posts[blogPost]["pub_timestamp"])
          ) {
            // console.log("BOOOBOOOO")
            if (
              latestLifeTimestamps.includes(posts[blogPost]["pub_timestamp"])
            ) {
              // console.log("BOOOBOOOO")
              blockT[lifeCount].appendChild(postTitle);
              blockT[lifeCount].appendChild(shine);
              blockT[lifeCount].style.backgroundImage = `url("${
                posts[blogPost]["thumbnail"]["filepath"]
              }")`;
              blockT[lifeCount].dataset.thumbnail = `url("${
                posts[blogPost]["thumbnail"]["filepath"]
              }")`;
              // blockT[lifeCount].style.border = "none";
              blockT[lifeCount].closest(".blogPostLink").href =
                posts[blogPost]["filename"];
              lifeCount--;
            }
          } else if (
            posts[blogPost]["category"] === "learn" &&
            !latestTimestamps.includes(posts[blogPost]["pub_timestamp"])
          ) {
            // console.log("WOOOWOOOO")
            if (
              latestLearnTimestamps.includes(posts[blogPost]["pub_timestamp"])
            ) {
              // console.log("WOOOWOOOO")
              blockL[learnCount].appendChild(postTitle);
              blockL[learnCount].appendChild(shine);
              blockL[learnCount].style.backgroundImage = `url("${
                posts[blogPost]["thumbnail"]["filepath"]
              }")`;
              blockL[learnCount].dataset.thumbnail = `url("${
                posts[blogPost]["thumbnail"]["filepath"]
              }")`;
              // blockL[learnCount].style.border = "none";
              blockL[learnCount].closest(".blogPostLink").href =
                posts[blogPost]["filename"];
              learnCount--;
            }
          } else if (
            posts[blogPost]["category"] === "fun" &&
            !latestTimestamps.includes(posts[blogPost]["pub_timestamp"])
          ) {
            console.log("GOOOGOOOO", latestFunTimestamps);
            console.log("timestamp", posts[blogPost]["pub_timestamp"]);
            // return;
            if (
              latestFunTimestamps.includes(posts[blogPost]["pub_timestamp"])
            ) {
              console.log("It's working");
              // return;
              blockS[funCount].appendChild(postTitle);
              blockS[funCount].appendChild(shine);
              blockS[funCount].style.backgroundImage = `url("${
                posts[blogPost]["thumbnail"]["filepath"]
              }")`;
              blockS[funCount].dataset.thumbnail = `url("${
                posts[blogPost]["thumbnail"]["filepath"]
              }")`;
              // blockS[funCount].style.border = "none";
              blockL[funCount].closest(".blogPostLink").href =
                posts[blogPost]["filename"];
              funCount--;
            }
          }
        }
      }
      //  else {
      //   console.error(xhr.responseText);
      // }
    };
    xhr.open("GET", "/blog/recent-posts", true);
    xhr.send();
  }
  // xhr.open("GET", "/blog/recent-posts", true);
  // xhr.send();
};

// //ACTIVATING SPRITE MODE
//
// spriteMode.addEventListener("click", () => {
//   for (let i = 0; i < 4; i++) {
//     if (standardStylesheet.href.match("../css/blog.css")) {
//       blockO[i].classList.remove("post");
//       blockO[i].classList.add("block-post");
//       blockO[i].style.backgroundImage = `url("")`;
//       blockT[i].classList.remove("post");
//       blockT[i].classList.add("block-post");
//       blockT[i].style.backgroundImage = `url("")`;
//       blockL[i].classList.remove("post");
//       blockL[i].classList.add("block-post");
//       blockL[i].style.backgroundImage = `url("")`;
//       blockS[i].classList.remove("post");
//       blockS[i].classList.add("block-post");
//       blockS[i].style.backgroundImage = `url("")`;
//     } else {
//       blockO[i].classList.remove("block-post");
//       blockO[i].classList.add("post");
//       blockO[i].style.backgroundImage = blockO[i].dataset.thumbnail;
//       blockT[i].classList.remove("block-post");
//       blockT[i].classList.add("post");
//       blockT[i].style.backgroundImage = blockT[i].dataset.thumbnail;
//       blockL[i].classList.remove("block-post");
//       blockL[i].classList.add("post");
//       blockL[i].style.backgroundImage = blockL[i].dataset.thumbnail;
//       blockS[i].classList.remove("block-post");
//       blockS[i].classList.add("post");
//       blockS[i].style.backgroundImage = blockS[i].dataset.thumbnail;
//     }
//   }
//
//   if (standardStylesheet.href.match("../css/blog.css")) {
//     standardStylesheet.href = "../css/sprite.css";
//     sessionStorage.setItem("autosave", standardStylesheet.href);
//   } else {
//     standardStylesheet.href = "../css/blog.css";
//     sessionStorage.removeItem("autosave");
//   }
// });

//ACTIVATING NIGHT mode
// nightMode.addEventListener("click", () => {
//
//   if (standardStylesheet.href.match("../css/blog.css")) {
//     standardStylesheet.href = "../css/night.css";
//     sessionStorage.setItem("autosave", standardStylesheet.href);
//   } else {
//     standardStylesheet.href = "../css/blog.css";
//     sessionStorage.removeItem("autosave");
//   }
// });
