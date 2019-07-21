console.log("POSTS HERE")

let currentPostUrl = document.getElementsByName("postUrl")[0].content;
let currentPostName = currentPostUrl.split("/posts/")[1];
console.log("BAMBINO", currentPostName)
let prevPostButton = document.querySelector("#prevPost");
let nextPostButton = document.querySelector("#nextPost");
let prevArrow = document.querySelector("#prevArrow");
let nextArrow = document.querySelector("#nextArrow");
let nextPostSvg = document.querySelector(".next-post");

let homeIcon = `<path d="M85.854,21.507c0.043-0.065,0.076-0.138,0.081-0.234c0.009-0.201,0.025-0.406,0.046-0.613
	c0.151-0.018,0.268-0.195,0.125-0.332c-0.026-0.025-0.054-0.051-0.081-0.077c0.218-1.819,0.657-3.811-0.28-5.427
	c-0.752-1.298-2.771-0.712-3.932-0.552c-0.184,0.025-0.33,0.246-0.321,0.419c0.042,0.928,0.038,1.853,0.007,2.779
	c-0.925-0.88-1.848-1.762-2.756-2.659c-0.216-0.214-0.506-0.172-0.727,0c-3.721,2.902-7.261,6.245-9.956,10.131
	c-0.237,0.341,0.3,0.75,0.575,0.441c3.034-3.403,6.141-6.682,9.712-9.53c1.49,1.459,3.016,2.884,4.518,4.331
	c0.993,0.957,1.979,1.919,2.949,2.898c0.361,0.363,1.271,1.154,1.415,1.442c0.17,0.341,0.623,0.199,0.736-0.096
	C88.232,23.733,86.958,22.475,85.854,21.507z"/>
<path d="M85.602,24.521c-0.901-1.018-2.061-1.857-3.016-2.843c-1.179-1.218-2.278-2.511-3.379-3.797
	c-0.188-0.218-0.492-0.15-0.688,0c-1.752,1.349-3.503,2.707-5.142,4.191c-0.716,0.648-2.847,2.262-2.562,3.414
	c0.002,0.008,0.008,0.015,0.011,0.022c-0.254,0.871,0.174,1.919,0.348,2.783c0.114,0.57,0.23,1.14,0.345,1.709
	c-0.109-0.071-0.287,0.048-0.194,0.169c0.097,0.126,0.199,0.248,0.302,0.37c0.18,0.92,0.346,1.843,0.471,2.774
	c0.034,0.256,0.189,0.466,0.472,0.47c0.68,0.007,1.593,0.162,2.453,0.179c0.091,0.057,0.183,0.047,0.249,0.001
	c0.573-0.008,1.108-0.09,1.518-0.333c0.175-0.105,0.216-0.321,0.138-0.483c0.383-2.013,0.324-4.071,0.306-6.113l2.027,0.001
	c0.231,1.869,0.125,3.759,0.264,5.636c0.014,0.181,0.109,0.307,0.234,0.378c0.028,0.151,0.122,0.293,0.282,0.349
	c1.264,0.434,2.697,0.085,3.985-0.082c0.218-0.028,0.409-0.128,0.471-0.356c0.656-2.459,1.029-5.333,1.109-7.88
	C85.72,24.924,85.74,24.676,85.602,24.521z"/>`

let prevPostUrl;
let nextPostUrl;

fetch("/blog/recent-posts")
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].filename === currentPostName) {
        if (typeof data[i+1] !== 'undefined') {
          nextPostUrl = `/posts/${data[i+1].filename}`;
          nextPostButton.href.baseVal = nextPostUrl;
          nextPostButton.href.animVal = nextPostUrl;
        }
        else {
          nextPostSvg.removeChild(nextPostSvg.lastElementChild);
        }
        if (typeof data[i-1] !== 'undefined') {
        prevPostUrl = `/posts/${data[i-1].filename}`;
        prevPostButton.href.baseVal = prevPostUrl;
        prevPostButton.href.animVal = prevPostUrl;
      }
      else {
        let child = prevArrow.lastElementChild;
        while (child) {
          prevArrow.removeChild(child);
          child = prevArrow.lastElementChild;
        }
        prevArrow.insertAdjacentHTML('beforeend', homeIcon);
      }
      }
    }
  });
