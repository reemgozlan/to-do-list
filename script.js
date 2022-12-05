const inputField = document.querySelector("input");
const button = document.querySelector(".add-button");
const form = document.querySelector("form");
const ol = document.querySelector("ol");
//const del_button = document.getElementById("del")

function addTask(e) {
  e.preventDefault();
  // add task as new list element
  ol.innerHTML += `
    <li>
    <div class="clear-element"">
        <input type="checkbox">
        <input type="text" value="${inputField.value}" id="task-field" readonly >
        <div class="float-right">  
            <button type="button" class="edit-button">Edit</button>
            <button type="submit">Delete</button>
        </div>
    
    </div>
    
    </li>`;
  
  // register edit from new element with event listener
  addEditsBtnsToEventListener();
}

function delTask(id) {
  console.log("hello");
  task = document.getElementById(id);
  console.log(task);
  task.remove();
task.remove()
}

function editTask(e) {
  e.target
    .closest(".clear-element")
    .querySelector("#task-field").readOnly = false;
  e.target.innerHTML = "Save";
}

function saveChanges(e) {
  e.target
    .closest(".clear-element")
    .querySelector("#task-field").readOnly = true;
  e.target.innerHTML = "Edit";
}

function addEditsBtnsToEventListener() {
  let editBtns = document.querySelectorAll(".edit-button");
  editBtns.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      if (e.target.innerHTML === "Save") {
        saveChanges(e);
      } else {
        editTask(e);
      }
    });
  });
}

form.addEventListener("submit", addTask);
// del_button.addEventListener("click",delTask)
addEditsBtnsToEventListener();
