const inputField = document.querySelector('input');
const button = document.querySelector('.add-button');
const form = document.querySelector('form');

function addFunction (e) {
    // e.preventDefault();
    console.log(inputField.value);
}

form.addEventListener('submit', addFunction)