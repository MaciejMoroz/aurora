"use strict";

var BODY = document.querySelector('body'),
    hamburger = document.querySelector('[data-hamburger-btn]');

hamburger.onclick = function () {
  BODY.classList.toggle('open-navMenu');
  hamburger.classList.toggle('active');
};