'use strict';

// не доделано

const form = document.forms.proger_cost;

form.difficulty.addEventListener('change', function(event) {
    let sub;
    switch(this.value) {
        case 1:
            sub = 'легкая';
            break;
        case 2:
            sub = 'средняя';
            break;
        case 3:
            sub = 'сложная';
            break;
        case 4:
            sub = 'очень сложная';
            break;
        case 5:
            sub = 'невозможная';
            break;
    }

    form.querySelector('#difficulty_sub').textContent = sub;
})

form.people_count.addEventListener('change', function(event) {
    form.querySelector('#people_count_sub').textContent = this.value;
})

form.addEventListener('sumbit', event => {
    event.preventDefault();

    let cost;
    cost = form.querySelector('select').value;

})