const inputField = document.querySelector("input");
const button = document.querySelector(".add-button");
const form = document.querySelector("form");
const ol = document.querySelector("ol");
const editBtns = document.querySelectorAll(".edit-button");

function addTask(e) {
  e.preventDefault();
  ol.innerHTML += `
    <li>
    <div class="clear-element">
        <input type="checkbox">
        <input type="text" value="${inputField.value}" id="task-field" readonly >  
        <div class="float-right">
            <button type="button">Edit</button>
            <button type="button">Delete</button>
        </div>
    
    </div>
    
    </li>
`;
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

form.addEventListener("submit", addTask);
editBtns.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (e.target.innerHTML === "Save") {
      saveChanges(e);
    } else {
      editTask(e);
    }
  });
});
