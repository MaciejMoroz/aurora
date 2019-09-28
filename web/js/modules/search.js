"use strict";

var BODY = document.querySelector('body'),
    searchIcon = document.querySelector('[data-search-btn]'),
    searchBox = document.querySelector('[data-search-box]'),
    closeBtn = document.querySelector('[data-closeBtn]');

searchIcon.onclick = function () {
  BODY.classList.toggle('open-searchBox');
  closeBtn.classList.remove('rotate');
};

closeBtn.onclick = function () {
  BODY.classList.toggle('open-searchBox');
  closeBtn.classList.toggle('rotate');
};

var windowSize = function windowSize() {
  var currentSize = window.innerWidth;

  if (currentSize > 1100) {
    BODY.classList.remove('open-searchBox');
  }
};

window.addEventListener("resize", windowSize);