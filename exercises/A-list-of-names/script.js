function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((p) => {
    const h1Name = document.createElement("h1");
    const h2Job = document.createElement("h2");
    h1Name.textContent = p.name;
    h2Job.textContent = p.job;
    content.appendChild(h1Name);
    content.appendChild(h2Job);
    h1Name.style.color = "red";
    content.style.textAlign = "center"
  })
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
