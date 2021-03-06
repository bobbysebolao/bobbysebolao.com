if (document.getElementById("mainImage")) {

(() => {
  document.getElementById("mainImage").onchange = () => {
    const imageType = "mainImage";
    const files = document.getElementById('mainImage').files;
    const file = files[0];
    let newImgName = file.name.split(".")[0] + "-main-image." + file.name.split(".")[1];

    if(file == null){
      console.log('No file selected.');
    }
    console.log("This is the image: ", file);
    getSignedRequest(file, imageType, newImgName);
  };
})();
}

if (document.getElementById("thumbnailImage")) {
(() => {
  document.getElementById("thumbnailImage").onchange = () => {
    const imageType = "thumbnailImage";
    const files = document.getElementById('thumbnailImage').files;
    const file = files[0];

    let newImgName = file.name.split(".")[0] + "-thumbnail-image." + file.name.split(".")[1];

    if(file == null){
      console.log('No file selected.');
    }
    console.log("This is the image: ", file);
    getSignedRequest(file, imageType, newImgName);
  };
})();
}

if (document.getElementById("userImage")) {
(() => {
  document.getElementById("userImage").onchange = () => {
    const imageType = "userImage";
    const files = document.getElementById('userImage').files;
    const file = files[0];
    let newImgName = file.name.split(".")[0] + "-user-image." + file.name.split(".")[1];

    if(file == null){
      console.log('No file selected.');
    }

    getSignedRequest(file, imageType, newImgName);
  };
})();
}

function getSignedRequest(file, imageType, newFileName){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/sign-s3?file-name=${newFileName}&file-type=${file.type}`);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        console.log("ABCDEFG", file);
        console.log("HIJKLMNOP", file.type);
        const response = JSON.parse(xhr.responseText);
        uploadFile(file, response.signedRequest, response.url, imageType);
        console.log("Image is ready to upload to AWS");
      }
      else{
        console.log('Could not get signed URL.');
      }
    }
  };
  xhr.send();
}

function uploadFile(file, signedRequest, url, imageType){
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        if (imageType === "mainImage") {
          document.getElementById('mainImagePreview').src = url;
          document.getElementById('mainImageUrl').value = url;
          console.log("Main image successfully uploaded to AWS");
        } else if (imageType === "thumbnailImage") {
          document.getElementById('thumbnailPreview').src = url;
          document.getElementById('thumbnailUrl').value = url;
          console.log("Thumbnail successfully uploaded to AWS");
        }
        else if (imageType === "userImage") {
          document.getElementById('userPreview').src = url;
          document.getElementById('userUrl').value = url;
          console.log("User image successfully uploaded to AWS");
        }
      }
      else{
        console.log('Could not upload file.');
      }
    }
  };
  xhr.send(file);
}
