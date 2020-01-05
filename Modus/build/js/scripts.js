'use strict';

var nav = document.querySelector('.navigation');
var header = document.querySelector('.header-section');
var options = {
  treshold: 0.7
};
var observer = new IntersectionObserver(onEntry, options);
var sections = document.querySelectorAll('.section-observe');
sections.forEach(function (section) {
  return observer.observe(section);
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
    header.classList.add('isFixed');
  } else {
    header.classList.remove('isFixed');
  }
};