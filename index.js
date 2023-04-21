let toDos = ["Complete webpage", 'Style with CSS', 'Make dynamic with JS', 'Remake to do list'];
let archived = ['Make evil plan', 'Destroy my enemies', 'Take over the world'];
let completedArry = ['Wake up', 'Slay'];


let toDoList = document.getElementById("toDoList");
let toDoOptions = document.getElementById("td-dropdown");
let archiveList = document.querySelector('.archived-task-list');
let archiveOptions = document.getElementById("archive-dropdown");
let compList = document.querySelector('.completed-tasks-list')

function appendTaskToContainer (container, task, elementType) {
    let element = document.createElement(elementType);
    element.innerHTML = task;
    container.appendChild(element);
}

toDos.forEach((task) => {
    appendTaskToContainer(toDosList, task, 'li')
})

toDos.forEach((task) => {
    appendTaskToContainer(toDoOptions, task, 'option')
})

archived.forEach((task) => {
    appendTaskToContainer(archived, task, 'l')
})

archived.forEach((task) => {
    appendTaskToContainer(archiveOptions, task, 'option')
})

completedArry.forEach((task) => {
    appendTaskToContainer(compList, task, 'li')
})


let operatorInput = '';

let opInput = document.querySelector('.TD-Input');
const opInFunc = (input) => {
    operatorInput = input.target.value;
}
opInput.addEventListener('change', opInFunc)

let subbut = document.querySelector('.submit');
const submitFunc = () => {
    toDos.push(operatorInput);
    let lastIndex = toDos.length - 1
    let li = document.createElement("li");
    li.innerHTML = toDos[lastIndex];
    toDoList.appendChild(li);
    let option = document.createElement("option");
    option.innerHTML = toDos[lastIndex];
    toDoOptions.appendChild(option);
}
subbut.addEventListener('click', submitFunc);

let archiveButton = document.querySelector('.archive-task');
const addArcList = (task) => {
    let index = toDos.indexOf(task);
    archived.push(task);
    toDos.splice(index, 1);
}
archiveButton.addEventListener('click', addArcList)

let completeButton = document.querySelector('.complete-task');
const addCompList = (task) => {
    let index = toDos.indexOf(task);
    completedArry.push(task);
    console.log(completedArry)
    toDos.splice(index, 1);
    console.log(toDos)
}
completeButton.addEventListener('click', addCompList);

let unaddArchive = document.querySelector('.unarchive');
const unaddArcList = (task) => {
    let index = archived.indexOf(task);
    toDos.push(task);
    archived.splice(index, 1, 0);
}
unaddArchive.addEventListener('click', unaddArcList);
