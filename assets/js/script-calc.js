'use strict';

const form = document.forms.proger_cost;

setInterval(() => {
    let sub;
    switch(form.difficulty.value) {
        case '1':
            sub = 'легкая';
            break;
        case '2':
            sub = 'средняя';
            break;
        case '3':
            sub = 'сложная';
            break;
        case '4':
            sub = 'очень сложная';
            break;
        case '5':
            sub = 'невозможная';
            break;
    }
    
    form.querySelector('#difficulty_sub').textContent = sub;
    form.querySelector('#people_count_sub').textContent = form.people_count.value;
}, 10);

form.people_count.addEventListener('change', function(event) {
})

document.querySelector('form button').addEventListener('click', event => {
    event.preventDefault();

    let language = parseInt( form.querySelector('#language').value );
    let people = parseInt( form.people_count.value );
    let difficulty = parseInt( form.difficulty.value );
    let time = 12 / parseInt( form.time.value );

    console.log(`cost = ${language} * ${people} * ${difficulty} * ${time}`)
    let cost = language * people * difficulty * time;

    const result = document.querySelector('#calc_result');
    result.textContent = cost;
})