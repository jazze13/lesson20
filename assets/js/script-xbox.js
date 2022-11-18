'use strict';

// 11 (xbox)
const reg = document.querySelector('#registration_link');
reg.onclick = () => {
    console.log(1324)

    document.querySelectorAll('.modals_wrapper, .modal').forEach(elem => {
        elem.style.display = '';
    });
    
    document.body.style.overflow = 'hidden';
}

document.querySelector('.modals_wrapper').addEventListener('click', event => {
    if ( !event.target.closest('.modal') ) {
        closeModals();
    }
})

function closeModals() {
    document.querySelectorAll('.modals_wrapper, .modal').forEach(elem => {
        elem.style.display = 'none';
    })
    document.body.style.overflow = '';
}