// console.log("Hello")

(() => {
  document.getElementById("mainImage").onchange = () => {
    const files = document.getElementById('mainImage').files;
    const file = files[0];
    if(file == null){
      return alert('No file selected.');
    }
    console.log("This is the image: ", file);
    getSignedRequest(file);
  };
})();

function getSignedRequest(file){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        const response = JSON.parse(xhr.responseText);
        uploadFile(file, response.signedRequest, response.url);
        console.log("Image is ready to upload to AWS");
      }
      else{
        console.log('Could not get signed URL.');
      }
    }
  };
  xhr.send();
}

function uploadFile(file, signedRequest, url){
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = () => {
    console.log("nearly there...", signedRequest);
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        // document.getElementById('preview').src = url;
        // document.getElementById('avatar-url').value = url;
        console.log("Image successfully uploaded to AWS");
      }
      else{
        alert('Could not upload file.');
      }
    }
  };
  xhr.send(file);
}
