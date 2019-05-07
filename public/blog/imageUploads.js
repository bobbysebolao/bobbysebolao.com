// console.log("Hello")

(() => {
  document.getElementById("mainImage").onchange = () => {
    const files = document.getElementById('mainImage').files;
    const file = files[0];
    if(file == null){
      return alert('No file selected.');
    }
    console.log("This is the image: ", file);
    // getSignedRequest(file);
  };
})();
