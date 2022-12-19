let inputBtn = document.getElementById("iconBtn");
let originalContainer = document.querySelector(".contentContainer");
let holder = document.getElementById("inputBtn");
let task = document.getElementById("task");
let description = document.getElementById("tasks");
let card = document.querySelector("card");

let date = new Date();
let datetime =
  date.getDate() +
  "/" +
  (date.getMonth() + 1) +
  "/" +
  date.getFullYear() +
  " @ " +
  date.getHours() +
  ":" +
  date.getMinutes() +
  ":" +
  date.getSeconds();
let currentDate = datetime;
let id = [0];
let idTwo = [0];

inputBtn.addEventListener("click", () => {
  originalContainer.innerHTML += ` 
  
  <div class="card">
  <h3>${task.value}</h3>
  <p>${currentDate}</p>
  <p id="desc">${description.value}</p>
  <div class="delectAndEditDiv">
    <button onclick="handleDelete(value)" value="${id[0]}">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  <button onclick="handleEdit(value)" value="${idTwo[0]}">
    <i class="fa-solid fa-pen-to-square"></i>
  </button>
  </div>
  `;

  id[0] += 1;
  idTwo[0] += 1;
});

function handleDelete(value) {
  let listOfCards = document.querySelectorAll(".card");

  listOfCards.forEach((element, id) => {
    if (value == id) {
      element.style.display = "none";
    }
  });
}

function handleEdit(value) {
  let editedTask = prompt("Add New Task");

  let allCard = document.querySelectorAll(".card");
  allCard.forEach((element, index) => {
    if (value == index) {
      let userEdits = editedTask.split(",");
      let task = document.querySelector("h3");
      task.innerHTML = userEdits[0];
      let description = document.getElementById("desc");

      if (typeof userEdits[1] == "undefined") {
        description.innerText = description.innerText;
      } else {
        description.innerText = userEdits[1];
      }
    }
  });
}
