// products 
let prodcutsInBasket = [
    {
        id: 1,
        name: 'biustonosz push-up line mos 12',
        price: 59.00,
        sale: "",
        quantity: 1,
        img: "/img/products/1.jpg"
    },
    {
        name: "biustonosz push-up line RE 6",
        price: 109.00,
        sale: 79.00,
        quantity: 2,
        img: "/img/products/2.jpg"
    }]

// variables 
const
    BODY = document.querySelector('body'),
    basketIcon = document.querySelector('[data-basket-btn]'),
    basketCloseIcon = document.querySelector('[data-closeBasketBtn]'),
    basketCounter = document.querySelectorAll('[data-basketCounter=basketCounter]'),
    basketToPay = document.querySelector('[data-basketToPay=basketToPay]'),
    basketCounterBox = document.querySelector('.basketCounterBox--js');



basketIcon.onclick = () => {
    BODY.classList.toggle('open-basket');
    basketCloseIcon.classList.remove('rotate');
}
basketCloseIcon.onclick = () => {
    BODY.classList.toggle('open-basket');
    basketCloseIcon.classList.toggle('rotate');
}

let counter = prodcutsInBasket.length,
    toPay = prodcutsInBasket.reduce((price, product) => price + (
        product.sale == "" ? product.price * product.quantity : product.sale * product.quantity)
        , 0);

if (counter > 0) {
    basketCounter.forEach(el => {
        el.innerHTML = `${counter}`;
    })
} else {
    basketCounterBox.style.display = "none"
}

basketToPay.innerHTML = `${toPay} zł`;



