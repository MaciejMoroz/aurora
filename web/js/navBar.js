"use strict";

var BODY = document.querySelector('body'),
    hamburger = document.querySelector('[data-hamburger-btn]'),
    dropDownMenu1 = document.querySelector('[data-drop-down-menu1]'),
    dropDownMenu2 = document.querySelector('[data-drop-down-menu2]'),
    dropDownMenu3 = document.querySelector('[data-drop-down-menu3]'),
    colapse = document.querySelectorAll(".colapse");

hamburger.onclick = function () {
  BODY.classList.toggle('open-navMenu');
};