const selectedTags = document.querySelector(".tags__selected");
const tagInput = document.querySelector("#contentTags");
const tagsList = document.querySelector("#tagsList");
const hiddenTagInput = document.querySelector("#hiddenContentTags");

let tagsToSubmit = {};

let timeout;

const inputHandler = e => {
  const input = e.target.value;
  // console.log("Here's the input: ", input);

  clearTimeout(timeout);

  timeout = setTimeout(function() {
    let url = `/blog/tags?q=${input}`;
    console.log("Here's the URL: ", url);
    if (input.length > 0) {
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log("HERE'S THE DB RESPONSE: ", json);
      appendTags(json);
    })
    .catch(error => console.error('Error:', error));
  } else if (input.length === 0) {
    tagsList.textContent = "";
  }
  }, 500);
}

const appendTags = tags => {
  console.log("Append these tags: ", tags);
  if (tags !== undefined) {

  tagsList.textContent = "";

  tags.slice(0, 5).forEach(tag => {
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
    li.appendChild(button);
    tagsList.appendChild(li);
  })
}
}

const selectTag = tagLabel => {
  if (!tagsToSubmit.hasOwnProperty(tagLabel)) {
  let renderedTag = document.createElement("span");
  let deleteRenderedTag = document.createElement("a");

  let deleteTagSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let deleteTagSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

  tagsList.textContent = "";
  renderedTag.textContent = tagLabel;

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

  tagsToSubmit[`${tagLabel}`] = tagLabel;

  // console.log("Here are the tags to submit: ", tagsToSubmit);

  hiddenTagInput.value += tagLabel + " ";
  // console.log("DA VALUE", hiddenTagInput.value)

  deleteRenderedTag.onclick = () => {
    renderedTag.parentNode.removeChild(renderedTag);
    delete tagsToSubmit[`${tagLabel}`];
    // console.log("Here are the remaining tags: ", tagsToSubmit);
    // hiddenTagInput.value.split(" ").splice()
    let hiddenTagInputArray = hiddenTagInput.value.split(" ")
    // console.log("Boo", hiddenTagInputArray)

    let filtered = hiddenTagInputArray.filter((value, index, arr) => {
    return value !== tagLabel;
});

if (filtered[filtered.length-1] = "") {
  filtered.pop();
}

hiddenTagInput.value = filtered.join(" ");

// console.log("YES YES YALL", hiddenTagInput.value)
  }

}

}

tagInput.onkeyup = inputHandler;
