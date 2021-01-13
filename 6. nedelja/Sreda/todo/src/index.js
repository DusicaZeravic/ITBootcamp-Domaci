import service from './service.js';

console.log(service.data);

// Selected elements
const list = document.querySelector('#list')
const addBtn = document.querySelector('#add-btn');

// Function that add object to DOM
const addToDom = (obj) => {
    let liTask = document.createElement('li');
    let divLeft = document.createElement('div');
    divLeft.className = 'left';
    let descriptionP = document.createElement('p');
    descriptionP.innerHTML = `${obj.desc}`;

    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.onclick = function () {
        descriptionP.classList.toggle('completed');
    }

    let delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    delBtn.addEventListener('click', () => {
        liTask.remove();
        service.deleteById(obj.id);
        console.log(service.data);
    })
    divLeft.append(checkbox, descriptionP);
    liTask.append(divLeft, delBtn);
    list.appendChild(liTask);
}

// Function that add input values to object and then push them into array
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const descInput = document.querySelector('#desc');
    const checkboxInput = document.querySelector('.checkbox');

    let obj = {
        desc: descInput.value.trim(),
        done: checkboxInput.checked
    };

    if (descInput.value !== '') {
        service.add(obj);
        addToDom(obj);
        console.log(service.data);
    } else {
        console.log('Greska');
    }

    descInput.value = ''
    checkboxInput.checked = false

})

// Display all tasks
service.data.forEach(task => {
    addToDom(task);
})