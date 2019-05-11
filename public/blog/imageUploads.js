// console.log("Hello")

(() => {
  document.getElementById("mainImage").onchange = () => {
    const imageType = "mainImage";
    const files = document.getElementById('mainImage').files;
    const file = files[0];
    console.log(file.name, "<====== LOOK");
    // return;
    if(file == null){
      return alert('No file selected.');
    }
    console.log("This is the image: ", file);
    getSignedRequest(file, imageType);
  };
})();

(() => {
  document.getElementById("thumbnailImage").onchange = () => {
    const imageType = "thumbnailImage";
    const files = document.getElementById('thumbnailImage').files;
    const file = files[0];
    if(file == null){
      return alert('No file selected.');
    }
    console.log("This is the image: ", file);
    getSignedRequest(file, imageType);
  };
})();

function getSignedRequest(file, imageType){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
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
  console.log("ITS A WRAP", file);
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = () => {
    console.log("nearly there...", signedRequest);
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
      }
      else{
        alert('Could not upload file.');
      }
    }
  };
  xhr.send(file);
}
