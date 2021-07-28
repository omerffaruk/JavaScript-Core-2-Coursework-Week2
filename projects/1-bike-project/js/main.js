const blueButton = document.getElementById("blueBtn");
const orangeButton = document.getElementById("orangeBtn");
const greenButton = document.getElementById("greenBtn");

const jumbotron = document.querySelector("div.jumbotron");
const donateABikeButton = document.querySelector("div.buttons > a.btn.btn-primary.btn-lrg");
const volunteerButton = document.querySelector("div.buttons > a.btn.btn-secondary.btn-lrg");

function clickOnBlueButton () {
        jumbotron.style.backgroundColor = `#588fbd`;
        donateABikeButton.style.backgroundColor = `#ffa500`;
        volunteerButton.style.backgroundColor = `black`;
        volunteerButton.style.color = "white";   
}

function clickOnOrangeButton () {
    jumbotron.style.backgroundColor = `#f0ad4e`;
    donateABikeButton.style.backgroundColor = `#5751fd`;
    volunteerButton.style.backgroundColor = `#31b0d5`;
    volunteerButton.style.color = "white";   
}

function clickOnGreenButton () {
    jumbotron.style.backgroundColor = `#87ca8a`;
    donateABikeButton.style.backgroundColor = `black`;
    volunteerButton.style.backgroundColor = `#8c9c08`;
}


blueButton.addEventListener("click", clickOnBlueButton);
orangeButton.addEventListener("click", clickOnOrangeButton);
greenButton.addEventListener("click", clickOnGreenButton);

// 1) Create a variable to get the submit button, email input, name input, describe yourself input 
const submitButton = document.querySelector("div.primary-content.col-lg-8 > form > button");
const email = document.getElementById("exampleInputEmail1");
const nameEl = document.getElementById("example-text-input");
const describeYourself = document.getElementById("exampleTextarea");
const inputNode = document.querySelectorAll(".form-control"); // store email, name and describeYourself input in a nodeList

// 2) Define a callback function for the submit button event listener, callback function should check the length of the name, email and describe yourself input value, if they are all invalid, make their background color red 

const simpleEmailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;   // regular expression pattern for the email input value

function isFieldInvalid (inputEl) {     // check field is invalid, return true or false
    if (inputEl.type === "email") {
        return inputEl.value.length === 0 || !inputEl.value.match(simpleEmailRegex);
    }
    return inputEl.value.length === 0;
}

function isFieldValid (inputEl) {       // check field is valid, return true or false
    if (inputEl.type === "email") {
        return inputEl.value.length !== 0 && inputEl.value.match(simpleEmailRegex);
    }
    return inputEl.value.length !== 0;
}


function isFormValid () {       // check if the form is entirely valid, return true or false
    return (
        email.value.length !== 0 && 
        email.value.match(simpleEmailRegex) &&
        nameEl.value.length !== 0 && 
        describeYourself.value.length !== 0
    );
}

function clickOnSubmitButton () {       // for loop for checking each field valid or invalid, make the background red if invalid
    for (let i = 0; i < inputNode.length; i++) {
      if (isFieldInvalid(inputNode[i])) {
          inputNode[i].style.backgroundColor = "red";
      } else if (isFieldValid(inputNode[i])) {
          inputNode[i].style.backgroundColor = null;
      }
    }
    if (isFormValid()) {    // if form is entirely valid, execute the below code
      alert("Thank you for filling out the form.");
      for(let i = 0; i < inputNode.length; i++) {   // empty each input 
          inputNode[i].value = "";
      }
    }
    event.preventDefault();
}
// 3) add event listener to the submit button
submitButton.addEventListener("click", clickOnSubmitButton);