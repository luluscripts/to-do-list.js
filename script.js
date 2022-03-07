let addToDoButton = document.getElementById('addToDo');
let toDOcontainer = document.getElementById('toDocontainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    toDOcontainer.appendChild(paragraph);
})