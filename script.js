const inputField = document.querySelector("input");
const button = document.querySelector(".add-button");
const form = document.querySelector("form");
const ol = document.querySelector("ol");

function addTask(e) {
  e.preventDefault();
  console.log(inputField.value);
  ol.innerHTML += `
    <li>
    <div class="clear-element">
        <input type="checkbox">
        ${inputField.value} 
        <div class="float-right">
            <button type="button">Edit</button>
            <button type="button">Delete</button>
        </div>
    
    </div>
    
    </li>
`;
}

form.addEventListener("submit", addTask);


