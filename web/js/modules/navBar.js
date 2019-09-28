"use strict";

var BODY = document.querySelector('body'),
    hamburger = document.querySelector('[data-hamburger-btn]'),
    checkboxes = document.querySelectorAll("input[type='checkbox']");

hamburger.onclick = function () {
  BODY.classList.toggle('open-navMenu');
  hamburger.classList.toggle('active');
};

checkboxes.map(function (checkbox, i) {
  console.log(i);
  console.log(checkbox);
});