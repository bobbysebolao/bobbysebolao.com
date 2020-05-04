//Great Heroku guide on how to handle image uploads, with AWS integration:
//https://devcenter.heroku.com/articles/s3-upload-node

var postContainer = document.querySelector(".post-container");
let postLinks = document.getElementsByClassName("blogPostLink");

document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let posts = JSON.parse(xhr.responseText);
        //SORTING TIMESTAMPS FOR LATEST POSTS
        let timestamps = [];

        posts.forEach(post => {
          timestamps.push(post.pub_timestamp);
        });

        function descendingSort(a, b) {
          return b - a;
        }

        timestamps.sort(descendingSort);
        let latestTimestamps = timestamps.slice(0, 4);
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
        }
        let latestLifeTimestamps = lifeTimestamps
          .sort(descendingSort)
          .slice(0, 4);
        let latestLearnTimestamps = learnTimestamps
          .sort(descendingSort)
          .slice(0, 4);
        let latestFunTimestamps = funTimestamps
          .sort(descendingSort)
          .slice(0, 4);

        // ^^FOUR MOST RECENT TIMESTAMPS FOR EACH POST TYPE ARE NOW SORTED &
        // READY TO ADD TO DOM

        let latestCount = 3;
        let lifeCount = 3;
        let learnCount = 3;
        let funCount = 3;

        for (let blogPost in posts) {
          var postTitle = document.createElement("h3");
          let shine = document.createElement("div");
          shine.className = "shine";
          postTitle.textContent = posts[blogPost]["title"];

          if (latestTimestamps.includes(posts[blogPost]["pub_timestamp"])) {
            if (
              (typeof sessionStorage.getItem("autosave") === "object" &&
                !sessionStorage.getItem("autosave")) ||
              !sessionStorage.getItem("autosave").match("sprite.min.css")
            ) {
              //SELECTS THE FOUR LATEST POSTS
              blockO[latestCount].appendChild(postTitle);
              blockO[latestCount].appendChild(shine);
              blockO[
                latestCount
              ].style.backgroundImage = `url("${posts[blogPost]["thumbnail"]["filepath"]}")`;
              blockO[
                latestCount
              ].dataset.thumbnail = `url("${posts[blogPost]["thumbnail"]["filepath"]}")`;
              blockO[latestCount].closest(
                ".blogPostLink"
              ).href = `/posts/${posts[blogPost]["filename"]}`;
            } else if (
              sessionStorage.getItem("autosave").match("sprite.min.css")
            ) {
              blockO[latestCount].appendChild(postTitle);
              blockO[latestCount].appendChild(shine);
              blockO[latestCount].closest(
                ".blogPostLink"
              ).href = `/posts/${posts[blogPost]["filename"]}`;
            }
            latestCount--;
          } else if (
            posts[blogPost]["category"] === "life" &&
            !latestTimestamps.includes(posts[blogPost]["pub_timestamp"])
          ) {
            if (
              latestLifeTimestamps.includes(posts[blogPost]["pub_timestamp"])
            ) {
              //THIS IF STATEMENT CHECKS IF THE AUTOSAVE DATA IS 'null'
              if (
                (typeof sessionStorage.getItem("autosave") === "object" &&
                  !sessionStorage.getItem("autosave")) ||
                !sessionStorage.getItem("autosave").match("sprite.min.css")
              ) {
                blockT[lifeCount].appendChild(postTitle);
                blockT[lifeCount].appendChild(shine);
                blockT[
                  lifeCount
                ].style.backgroundImage = `url("${posts[blogPost]["thumbnail"]["filepath"]}")`;
                blockT[
                  lifeCount
                ].dataset.thumbnail = `url("${posts[blogPost]["thumbnail"]["filepath"]}")`;
                blockT[lifeCount].closest(
                  ".blogPostLink"
                ).href = `/posts/${posts[blogPost]["filename"]}`;
              } else if (
                sessionStorage.getItem("autosave").match("sprite.min.css")
              ) {
                blockT[lifeCount].appendChild(postTitle);
                blockT[lifeCount].appendChild(shine);
                blockT[lifeCount].closest(
                  ".blogPostLink"
                ).href = `/posts/${posts[blogPost]["filename"]}`;
              }
              lifeCount--;
            }
          } else if (
            posts[blogPost]["category"] === "learn" &&
            !latestTimestamps.includes(posts[blogPost]["pub_timestamp"])
          ) {
            if (
              latestLearnTimestamps.includes(posts[blogPost]["pub_timestamp"])
            ) {
              //THIS IF STATEMENT CHECKS IF THE AUTOSAVE DATA IS 'null'
              if (
                (typeof sessionStorage.getItem("autosave") === "object" &&
                  !sessionStorage.getItem("autosave")) ||
                !sessionStorage.getItem("autosave").match("sprite.min.css")
              ) {
                blockL[learnCount].appendChild(postTitle);
                blockL[learnCount].appendChild(shine);
                blockL[
                  learnCount
                ].style.backgroundImage = `url("${posts[blogPost]["thumbnail"]["filepath"]}")`;
                blockL[
                  learnCount
                ].dataset.thumbnail = `url("${posts[blogPost]["thumbnail"]["filepath"]}")`;
                blockL[learnCount].closest(
                  ".blogPostLink"
                ).href = `/posts/${posts[blogPost]["filename"]}`;
              } else if (
                sessionStorage.getItem("autosave").match("sprite.min.css")
              ) {
                blockL[learnCount].appendChild(postTitle);
                blockL[learnCount].appendChild(shine);
                blockL[learnCount].closest(
                  ".blogPostLink"
                ).href = `/posts/${posts[blogPost]["filename"]}`;
              }
              learnCount--;
            }
          } else if (
            posts[blogPost]["category"] === "fun" &&
            !latestTimestamps.includes(posts[blogPost]["pub_timestamp"])
          ) {
            if (
              latestFunTimestamps.includes(posts[blogPost]["pub_timestamp"])
            ) {
              if (
                (typeof sessionStorage.getItem("autosave") === "object" &&
                  !sessionStorage.getItem("autosave")) ||
                !sessionStorage.getItem("autosave").match("sprite.min.css")
              ) {
                blockS[funCount].appendChild(postTitle);
                blockS[funCount].appendChild(shine);
                blockS[
                  funCount
                ].style.backgroundImage = `url("${posts[blogPost]["thumbnail"]["filepath"]}")`;
                blockS[
                  funCount
                ].dataset.thumbnail = `url("${posts[blogPost]["thumbnail"]["filepath"]}")`;
                blockS[funCount].closest(
                  ".blogPostLink"
                ).href = `/posts/${posts[blogPost]["filename"]}`;
              } else if (
                sessionStorage.getItem("autosave").match("sprite.min.css")
              ) {
                blockS[funCount].appendChild(postTitle);
                blockS[funCount].appendChild(shine);
                blockS[funCount].closest(
                  ".blogPostLink"
                ).href = `/posts/${posts[blogPost]["filename"]}`;
              }
              funCount--;
            }
          }
        }
      }
    };
    xhr.open("GET", "/blog/recent-posts", true);
    xhr.send();
  }
};