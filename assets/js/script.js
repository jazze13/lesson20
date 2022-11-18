'use strict';

// 1
function js_style() {
    const text = document.querySelector('#text');

    text.style.cssText = `
        font-size:20px;
        color:red;
        background:#220022;
        border:1px solid red;
        width:500px;
        height:500px;
    `
}


// 2
function getFormValue(form) {
    event.preventDefault();

    let firstName = form.fname.value;
    let lastName = form.lname.value;

    const p = document.createElement('p');
    p.innerHTML = `${firstName} <br> ${lastName}`;
    form.parentElement.appendChild(p);

}


// 3
function getAttributes() {
    const a = document.querySelector('#w3r');

    let attributes = ['id', 'rel', 'href', 'hreflang', 'type', 'target'];

    for (let attr of attributes) {
        const p = document.createElement('p');
        p.textContent = `${attr}="${a.getAttribute(attr)}"`
        p.className = 'ex3__attribute';
        a.parentElement.appendChild(p);
    }
}


// 4
function insertRow() {
    const table = document.querySelector('#sampleTable')
    let rows = table.querySelectorAll('tr').length;
    let columns = table.querySelector('tr').querySelectorAll('td').length;

    const tr = document.createElement('tr');
    
    for (let cell = 1; cell <= columns; cell++) {
        const td = document.createElement('td');
        td.textContent = `Row${rows + 1} cell${cell}`;
        tr.appendChild(td);
    }
    
    table.appendChild(tr);
}


// 5
function changeContent() {
    const row = +prompt('row:');
    const column = +prompt('column:');
    
    const table = document.querySelector('#myTable');
    
    if ( row > table.querySelectorAll('tr').length
    || row <= 0
    || column > table.querySelector('tr').querySelectorAll('td').length
    || column <= 0 ) {
        alert('There\'s no cell with such coords');
        return;
    }
    
    const newValue = prompt('new value:');
    
    const tr = table.querySelectorAll('tr')[row - 1];
    const td = tr.querySelectorAll('td')[column - 1];

    td.textContent = newValue;
}


// 6
function createTable() {
    const table = document.querySelector('#table6');

    table.innerHTML = null;

    let rows = +prompt('rows:')
    let columns = +prompt('columns:')

    if (rows <= 0 || columns <= 0) {
        alert('Couldn\'t create the table with such properties');
        return;
    }

    for (let row = 1; row <= rows; row++) {
        const tr = document.createElement('tr');

        for (let column = 1; column <= columns; column++) {
            const td = document.createElement('td');
            td.textContent = `row ${row} column ${column}`;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}


// 7
function removecolor(e) {
    const select = e.parentElement.querySelector('select')

    const removable = select.firstElementChild;

    const p = document.createElement('p')
    p.textContent = `Element ${removable.textContent} has been removed`;

    removable.remove();
    e.closest('div').appendChild(p);
}


// 8
function getOptions(e) {
    const select = e.parentElement.querySelector('select');
    const option = select.querySelectorAll('option');

    let count = option.length;
    let options = '';

    for (const op of option) {
        options += `${op.textContent}; `
    }

    alert(count + ' : ' + options);
}
