const inputField = document.querySelector("input");
const button = document.querySelector(".add-button");
const form = document.querySelector("form");
const ol = document.querySelector("ol");
//const del_button = document.getElementById("del")

function addTask(e) {
    
  e.preventDefault();
  console.log(e)
  console.log(e.submitter)
  console.log(inputField.value);
  ol.innerHTML += `
    <li>
    <div class="clear-element"">
        <input type="checkbox">
        ${inputField.value} 
        <div class="float-right">
            <button type="button">Edit</button>
            <button type="submit">Delete</button>
        </div>
    
    </div>
    
    </li>
`;
}
function delTask(id){
console.log('hello')
task  = document.getElementById(id)
console.log(task)
task.remove()
}

form.addEventListener("submit", addTask);
// del_button.addEventListener("click",delTask)


