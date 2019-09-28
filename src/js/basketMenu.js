const
    BODY = document.querySelector('body'),
    basketIcon = document.querySelector('[data-basket-btn]'),
    basketCloseIcon = document.querySelector('[data-closeBasketBtn]');

basketIcon.onclick = () => {
    BODY.classList.toggle('open-basket');
    basketCloseIcon.classList.remove('rotate');

}
basketCloseIcon.onclick = () => {
    BODY.classList.toggle('open-basket');
    basketCloseIcon.classList.toggle('rotate');
}

