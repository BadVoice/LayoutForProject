const modalFaq = document.querySelector('.forms_question__link')
const modal = document.querySelector('.modal')
const modalHide = document.querySelector('.modal__inner')

modalFaq.addEventListener(('click'), (event) => {
    modal.style.display = 'flex';
    event.preventDefault();
})



modal.addEventListener(('click'), (event) => {
    const modalContent = event.target.closest('.modal__inner')

    if (!modalContent) {
        modal.style.display = '';
    }


})