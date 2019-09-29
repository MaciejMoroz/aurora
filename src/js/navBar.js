const BODY = document.querySelector('body'),
    hamburger = document.querySelector('[data-hamburger-btn]');

hamburger.onclick = () => {
    BODY.classList.toggle('open-navMenu');
    hamburger.classList.toggle('active');
}

