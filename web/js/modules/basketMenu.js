"use strict";

var BODY = document.querySelector('body'),
    basketIcon = document.querySelector('[data-basket-btn]'),
    basketCloseIcon = document.querySelector('[data-closeBasketBtn]');

basketIcon.onclick = function () {
  BODY.classList.toggle('open-basket');
  basketCloseIcon.classList.remove('rotate');
};

basketCloseIcon.onclick = function () {
  BODY.classList.toggle('open-basket');
  basketCloseIcon.classList.toggle('rotate');
};