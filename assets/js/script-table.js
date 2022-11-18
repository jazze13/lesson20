'use strict';

// 10 (table)
const table = document.querySelector('#users');
const form = document.forms.add_user;

form.addEventListener('submit', event => {
    event.preventDefault();

    let name = form.name.value;
    let surname = form.surname.value;

    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${name}</td> <td>${surname}</td>`;
    table.appendChild(tr);
})

table.addEventListener('click', event => {
    const td = event.target.closest('td');

    let newValue = prompt('new value:');

    td.textContent = newValue;
})