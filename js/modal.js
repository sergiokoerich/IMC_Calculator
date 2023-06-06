export const Modal = {

    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.modal button.close'),
    wrapper: document.querySelector('.modal-wrapper'),

    open: function() {
        Modal.wrapper.classList.add('open')},  //abrimos a caixa 2
    close() {           //ambos escrita da mesma forma.
        Modal.wrapper.classList.remove('open')} //removemos a caixa 2 qnd clica no botao X
}

Modal.btnClose.onclick = () => {
    Modal.close()   //removemos a caixa 2 qnd clica no botao X
}

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {   //tecla ESC = Escape
        Modal.close()   //qnd pressionado o esc, fechar o modal.
    }
})