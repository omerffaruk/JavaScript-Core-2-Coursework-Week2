function listOfColours(colours) {
  // Write your code here...
  // 1) store #content in variable, create a label element, append it to the div, add for attribute and content to the label element, create a select element, set its id attribute the same value with label for attribute, set its name attribute "colors"
  const contentDiv = document.getElementById("content");
  const labelForColors = document.createElement("label");
  contentDiv.appendChild(labelForColors);
  labelForColors.setAttribute("for", "color-select");
  labelForColors.innerHTML += "Choose a color:";

  const selectForColors = document.createElement("select");
  contentDiv.appendChild(selectForColors);
  selectForColors.setAttribute("id", "color-select");
  selectForColors.setAttribute("name", "colors");
  selectForColors.style.display = "block";

  const defaultOption = document.createElement("option");
  selectForColors.appendChild(defaultOption);
  defaultOption.innerHTML += "--Please choose a color--  ";
  defaultOption.setAttribute("value", "");

  const para = document.createElement("p");
  contentDiv.appendChild(para);

  // 2) iterate through colours array, for each color create an option - append it to the selectForColors - set its value attribute as the name of the el - add content for each el
  colours.forEach((c) => {
    // c is color
    const optionEl = document.createElement("option");
    selectForColors.appendChild(optionEl);
    optionEl.setAttribute("value", c);
    optionEl.innerHTML += c;

    // 3) define a callback function, callback function should add content to the para - it also should print the text in the color of c
    const clickOnOption = function () {
      para.textContent = `You have selected: ${this.value}`;
      para.style.color = this.value;
    };

    // 4) add event listener to each option
    selectForColors.addEventListener("click", clickOnOption);
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
