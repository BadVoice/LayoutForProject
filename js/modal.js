const modalFaq = document.querySelector('.forms_question__link')
const modal = document.querySelector('.modal')
const modalHide = document.querySelector('.modal__inner')
const body = document.querySelector('body')


modalFaq.addEventListener(('click'), (event) => {
    modal.style.display = 'flex';
    body.style.cssText = `overflow: hidden;`
    event.preventDefault();
})



modal.addEventListener(('click'), (event) => {
    const modalContent = event.target.closest('.modal__inner')

    if (!modalContent) {
        modal.style.display = '';
        body.style.cssText = `overflow:  auto;`
    }


})