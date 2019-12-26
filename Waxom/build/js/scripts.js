'use strict';

var nav = document.querySelector('.navigation__list');
var headRow = document.querySelector('.row');
var options = {
  threshold: 0.5
};
var observer = new IntersectionObserver(onEntry, options);
var sections = document.querySelectorAll('.section-observe');
sections.forEach(function (section) {
  observer.observe(section);
});

function onEntry(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var sectionId = entry.target.getAttribute('id');
      var currentActiveLink = nav.querySelector('.isActive');

      if (currentActiveLink) {
        currentActiveLink.classList.remove('isActive');
      }

      var nextActiveLink = nav.querySelector("a[href=\"#".concat(sectionId, "\"]"));
      nextActiveLink.classList.add('isActive');
    }
  });
}

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    //You can set it according to your need.
    headRow.classList.add('header-fixed');
  } else {
    headRow.classList.remove('header-fixed');
  }
};