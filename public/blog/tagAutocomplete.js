const selectedTags = document.querySelector(".tags__selected");
const tagInput = document.querySelector("#contentTags");
const tagsList = document.querySelector("#tagsList");

let timeout;

const inputHandler = e => {
  const input = e.target.value;
  // console.log("Here's the input: ", input);

  clearTimeout(timeout);

  timeout = setTimeout(function() {
    let url = `/blog/tags?q=${input}`;
    console.log("Here's the URL: ", url);
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log("HERE'S THE DB RESPONSE: ", json);
      appendTags(json);
    })
    .catch(error => console.error('Error:', error));
  }, 500);
}

const appendTags = tags => {
  // console.log("Append these tags: ", tags);
  if (tags !== undefined) {

  tagsList.textContent = "";
  let number = 0;

  tags.forEach(tag => {
    console.log(tag);
    const li = document.createElement("li");
    const button = document.createElement("button");
    li.className = "tags__item";
    button.className = "tags__item-name";
    button.textContent = tag.tag_name;
    button.addEventListener("click", () => {
      tagInput.value = "";
      selectTag(button.textContent);
    });

    number += 1;
    li.appendChild(button);
    tagsList.appendChild(li);
  })
}
}

const selectTag = tag => {
  let renderedTag = document.createElement("span");
  let deleteRenderedTag = document.createElement("a");
  let deleteTagSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let deleteTagSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

  // deleteRenderedTag.addEventListener("click" () => {
  //   console.log("HELLO");
  // })

  tagsList.textContent = "";
  renderedTag.textContent = tag;

  deleteTagSVG.appendChild(deleteTagSVGPath);
  deleteRenderedTag.appendChild(deleteTagSVG);
  renderedTag.appendChild(deleteRenderedTag);
  selectedTags.appendChild(renderedTag);

  deleteTagSVG.setAttribute('viewbox', '0 0 10 10');
  deleteTagSVG.setAttribute('x', '0px');
  deleteTagSVG.setAttribute('y', '0px');
  deleteTagSVGPath.setAttribute('d', 'M10,1.41L8.59,0L5,3.59L1.41,0L0,1.41L3.59,5L0,8.59L1.41,10L5,6.41L8.59,10L10,8.59L6.41,5L10,1.41z');
  deleteTagSVG.setAttribute('width', '10px');
  deleteTagSVG.setAttribute('height', '10px');

  renderedTag.className = "tags__rendered-tag";
  deleteRenderedTag.className = "tags__rendered-tag--delete";
  deleteTagSVG.className = "tags__rendered-tag--delete-svg";
  deleteTagSVGPath.className = "tags__rendered-tag--delete-svg-path";

}

tagInput.onkeyup = inputHandler;
