function todoList(todos) {
  // Write your code here...
  // 1) store the #content in a variable, create h1 heading, create ul element inside and append them to the div
  const contentDiv = document.getElementById("content");
  const heading = document.createElement("h1");
  contentDiv.appendChild(heading);
  heading.textContent += "To do list"
  heading.style.color = "red";
  const ul = document.createElement("ul");
  contentDiv.appendChild(ul);
  // 2) iterate over todos array, create li for each array el and append it to the ul, add todo property to the li as the content 
  todos.forEach((el) => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += el.todo;
    // 3) define a callback function for the click event listener, callback function should make the text-decoration property of li to the line-through, if it's already line through it should make it to none
    const onClickLi = function () {
      if (li.style.textDecoration === "line-through red") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through red";
      }
    };
    // 4) add click event listener to the each li item
    li.addEventListener("click", onClickLi);
  })
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);