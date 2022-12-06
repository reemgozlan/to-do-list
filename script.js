const inputField = document.querySelector("input");
const button = document.querySelector(".add-button");
const form = document.querySelector("form");
const ol = document.querySelector("ol");
//const del_button = document.getElementById("del")

function addTask(e) {
  e.preventDefault();
  // add task as new list element
  ol.innerHTML += `
    <li class="list-item">
    <div class="clear-element"">
        <input type="checkbox" class="check-btn">
        <input type="text" value="${inputField.value}" id="task-field" readonly >
        <div class="float-right">  
            <button type="button" class="edit-button">Edit</button>
            <button type="button" class="delete-button">Delete</button>
        </div>
    
    </div>
    
    </li>`;
  inputField.value="";
  // register buttons from new element with event listener
  addEditsBtnsToEventListener();
  addChecksToEventListener();
  addDeleteButtonToEventListner();
}

function delTask(e) {
e.target.closest(".list-item").remove();

  

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

function addChecksToEventListener() {
  let checkBtns = document.querySelectorAll(".check-btn");
  checkBtns.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      let inField = e.target.nextSibling.nextSibling;
      if (e.target.checked == true) {
        inField.style.color = 'grey';
      } else {
        inField.style.color = 'black';
      }
    })
  })
}
function addDeleteButtonToEventListner(){
  let deleteButton = document.querySelectorAll(".delete-button");
  deleteButton.forEach((elem) =>{
    elem.addEventListener("click", (e) =>{
      delTask(e);

    })
  })
}

form.addEventListener("submit", addTask);
// del_button.addEventListener("click",delTask)
addEditsBtnsToEventListener();
addChecksToEventListener();
addDeleteButtonToEventListner();