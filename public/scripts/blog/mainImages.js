const imageBrowser = document.querySelector(".main-image-browser");

document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    if (
      sessionStorage.getItem("autosave") &&
      sessionStorage.getItem("autosave").includes("css/sprite.css")
    ) {
      standardStylesheet.href = "../css/sprite.css";
    }

    fetch("/blog/main-images")
      .then(res => res.json())
      .then(images => {
        console.log(images);
        for (let i = 0; i < images.length; i++) {
          var image = document.createElement("img");
          image.className = "main-image";
          image.src = images[i].filepath;
          var imageName = document.createElement("p");
          imageName.className = "main-image-name";
          var imageContainer = document.createElement("div");
          imageContainer.className = "main-image-container";
          imageName.textContent = images[i].name;

          imageContainer.appendChild(image);
          imageContainer.appendChild(imageName);
          imageBrowser.appendChild(imageContainer);
          console.log(images[i].name);
        }
      });
  }
};
