const BODY = document.querySelector('body'),
    hamburger = document.querySelector('[data-hamburger-btn]'),
    checkboxes = document.querySelectorAll("input[type='checkbox']");

hamburger.onclick = () => {
    BODY.classList.toggle('open-navMenu');
    hamburger.classList.toggle('active');
}

checkboxes.map((checkbox, i) => {
    console.log(i)
    console.log(checkbox)

})