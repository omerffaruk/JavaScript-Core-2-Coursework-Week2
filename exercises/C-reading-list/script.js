function readingList(books) {
  // Write your code here...
  // 1) store #content in a variable and create h1 element, and then append h1 to the div #content
  const contentDiv = document.getElementById("content");
  contentDiv.style.marginTop = 50;
  const heading = document.createElement("h1");
  contentDiv.appendChild(heading);
  heading.innerHTML += "Book list";
  // 2) create another div under h1 in #content and make it a flexbox, set the direction to row
  const nestedDiv = document.createElement("div");
  contentDiv.appendChild(nestedDiv);
  nestedDiv.className = "bookContainer"; // see the style.css for the styling (.bookContainer)
  // 3) iterate over books array with forEach, create a div for each one
  books.forEach((book) => {
    const flexChildDiv = document.createElement("div");
    nestedDiv.appendChild(flexChildDiv);
    flexChildDiv.className = "bookChild"; // see the style.css for the styling (.bookChild)
    // 4) in the loop, create a p element and append it to the nested div, set its content to the title - author property
    const titleAuthorP = document.createElement("p");
    flexChildDiv.appendChild(titleAuthorP);
    titleAuthorP.textContent += book.title + " - " + book.author;
    // 5) create img element and append it to the nested div, set its src attribute to the cover page http and set its alt attribute
    const image = document.createElement("img");
    flexChildDiv.appendChild(image);
    image.width = "200";
    image.height = "250";
    if (book.title === "The Design of Everyday Things") {
      image.src =
        "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg";
      image.alt = "The Design of Everyday Things";
    } else if (book.title === "The Most Human Human") {
      image.src =
        "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg";
      image.alt = "The Most Human";
    } else if (book.title === "The Pragmatic Programmer") {
      image.src =
        "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg";
      image.alt = "The Pragmatic Programmer";
    }
    // 6) if alreadyRead backgroundColor green, else red
    if (book.alreadyRead) flexChildDiv.style.backgroundColor = "green";
    else flexChildDiv.style.backgroundColor = "red";
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);