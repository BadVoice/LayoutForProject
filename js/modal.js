const modalFaq = document.querySelector('.forms_question__link')
const modal = document.querySelector('.modal')
const modalHide = document.querySelector('.modal__inner')
const htmlElement = document.querySelector("html");


modalFaq.addEventListener(('click'), (event) => {
    modal.style.display = 'flex';
    htmlElement.style.overflow = "hidden";

    event.preventDefault();
})



modal.addEventListener(('click'), (event) => {
    const modalContent = event.target.closest('.modal__inner')

    if (!modalContent) {
        modal.style.display = '';

    }



})