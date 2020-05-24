const form = document.querySelector('#my-from');
const inputText = document.querySelector('.TextInput');
const btn = document.querySelector('.btn');
const list = document.querySelector('#listInput');

//appending item
function appendItem(input) {
    let li = document.createElement('li');
    if (input != '') {
        li.innerHTML = `
        <span>${input}</span>
        <button onclick ="removeItem()" class="closeItem">X</button>
        `
        listInput.appendChild(li);
    }
}
// call event loaded to brower
document.addEventListener('DOMContentLoaded', () => {
    getInputs().map((input) => {
        appendItem(input);
    })
});
//event add 
btn.addEventListener('click', (event) => {
    event.preventDefault();

    if (inputText.value !== '') {
        appendItem(inputText.value);
        addInput(inputText.value);
    }
    inputText.value = '';
})
//get dât from localStore
function getInputs() {
    let Inputs = [];
    if (localStorage.getItem('inputList') === null) {
        inputs = []
    } else {
        inputs = JSON.parse(localStorage.getItem('inputList'));
    }
    return inputs;
}
//add data to localstorage
function addInput(input) {
    let inputs = getInputs();
    inputs.push(input);
    localStorage.setItem('inputList', JSON.stringify(inputs));
}
//delele item
function deleteItem() {
    let btnClose = document.getElementsByClassName('.closeItem');
    for (let i = 0; i < btnClose.length; i++) {
        btnClose.onclick = removeItem(i);
    }
}

function removeItem(i) {
    let list = JSON.parse(localStorage.getItem('inputList'));
    list.splice(i - 1, 1);
    localStorage.setItem('inputList', JSON.stringify(list));
    location.reload();
}