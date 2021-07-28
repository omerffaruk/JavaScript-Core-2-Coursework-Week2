/* 
  What should script.js do? 
  1) Get the todos element content and turn them into HTML elements according to the HTML code: 

    // Create todo list with todos array and populateTodos funciton. The function should take todos array and replace the elements already in HTML. To make that happen you should: 1) For each todos element, create li elements and store it in a variable. 2) Append it to the list(ul element) 3)Add content to the li element 4) Give li the class value of "list-group-item d-flex justify-content-between align-items-center" 5) Create a span element, store it in a variable and append it to the li 6) Create two i elements for each todos element and give them class names accordingly 7) for each todos element, check the completed value and line through it if it is true
  
  2) Each "to do" element should have two buttons: first one should line through the element (if already line through remove the line through), and second button should delete the element
    // checkSymbol for line-through: define a callback function for each element of the todos (liEl); callback function should access the check symbol first, it should change its style.textDecoration value to "line-through", add click event listener to the check symbol once call back function is completed
    // trashSymbol for delete: call back function should remove the item entirely from the page, add click event listener to the trash symbol

  3) When clicked on Add Todo button, it should create a new "to do" element with two buttons as well, first button should line through the element (if already line-through remove it), the second button should delete the element
    // Follow these steps: 1) Take the value of "Add to do" input and store it in a variable; 2) Get the ul element and store it in a variable 3) Create a new li element, store it in a variable, append it to the ul element 4) li.innerText += input value that you stored in a variable in the first step 5) Create span and i elements and give them same class names with the already existing ones 6) you don't need to add click event listener since the function is attached to the onclick html attribute 7) Once created a new li element, clear the add to do input section
*/

function createToDoEl(inputValue) {   // when called, this function will create to do element with the input value
  let list = document.getElementById("todo-list");
  const liEl = document.createElement("li");
  list.appendChild(liEl);
  liEl.className =
    "list-group-item d-flex justify-content-between align-items-center";
  liEl.innerText = inputValue;
  const span = document.createElement("span");
  liEl.appendChild(span);
  span.className = "badge bg-primary rounded-pill";
  const checkSymbol = document.createElement("i");
  const trashSymbol = document.createElement("i");
  span.append(checkSymbol, trashSymbol);
  checkSymbol.className = "fa fa-check";
  trashSymbol.className = "fa fa-trash";
  checkSymbol.setAttribute("aria-hidden", true);
  trashSymbol.setAttribute("aria-hidden", "true");
  function lineThrough() {
    liEl.style.textDecoration = "line-through";
  }

  function deleteItem() {
    liEl.remove();
  }

  checkSymbol.addEventListener("click", lineThrough);
  trashSymbol.addEventListener("click", deleteItem);
}

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((el) => {
    if(!el.completed) createToDoEl(el.task);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputValue = document.getElementById("todoInput").value;
  if (inputValue.length > 0) createToDoEl(inputValue);
  function clearInput() {
    document.getElementById("todoInput").value = "";
  }
  clearInput();  
}

function createDeleteDoneButton() {
  /*    1) Create a Delete Done button next to the Add Todo button: create button element, store it in a variable, place it next to the Add Todo button, set its class name the same with Add Todo, add inner text to the button, set its onclick attribute to the deleteAllCompletedTodos(event) function */
  const deleteDoneButton = document.createElement("button");
  const parentDiv = document.querySelector(
    "#content > div > div > div:nth-child(2) > div > div.card-body > form > div:nth-child(2)"
  );
  deleteDoneButton.innerHTML = "Delete Done";
  deleteDoneButton.className = "btn btn-primary mb-3";
  deleteDoneButton.setAttribute("id", "deleteDoneBtn");
  deleteDoneButton.setAttribute("onclick", "deleteAllCompletedTodos(event)");
  parentDiv.appendChild(deleteDoneButton);
}

createDeleteDoneButton();

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  // Write your code here...
  event.preventDefault();
  /*      2) Get all the li elements with getElementsByClass (will return HTML Collection), turn it into array with Array.from(), loop through each elements in the array to check if their style.textDecoration === "line-through", if so remove the el */
  const toDoEls = document.getElementsByClassName(
    "list-group-item d-flex justify-content-between align-items-center"
  );
  const toDoElsArray = Array.from(toDoEls);
  toDoElsArray.forEach((el) => {
    if(el.style.textDecoration == "line-through") el.remove();
  })
}
