function shoppingList(arrayOfPeople) {
  // Write your code here...
  const contentDiv = document.getElementById("content"); // get the div and store it in a variable
  const heading = document.createElement("h1");   // create a h1 element to explain what the list is
  contentDiv.appendChild(heading);  // append h1 heading to the div 
  heading.textContent += "Here is the shopping list:";  // add content to the heading
  heading.style.color = "red";  // style heading in js
  contentDiv.style.textAlign = "center";
  const ul = document.createElement("ul");  // create ul for the shopping list
  contentDiv.appendChild(ul);   // append ul to the div
  ul.style.listStyleType = "none";  // get rid of bullet points in the list
  arrayOfPeople.forEach((el) => {
    const li = document.createElement("li");  // for each element in the array, create a li element
    ul.appendChild(li);   // append each li element to the ul
    li.textContent += el;   // add each element to the li as the content
    li.style.fontSize = 20;   // style li element
  })
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
