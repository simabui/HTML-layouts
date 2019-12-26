'use strict';
const nav = document.querySelector('.navigation__list');
const headRow = document.querySelector('.row');

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(onEntry, options);
const sections = document.querySelectorAll('.section-observe');

sections.forEach(section => {
  observer.observe(section);
});

function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');

      const currentActiveLink = nav.querySelector('.isActive');

      if (currentActiveLink) {
        currentActiveLink.classList.remove('isActive');
      }

      const nextActiveLink = nav.querySelector(`a[href="#${sectionId}"]`);

      nextActiveLink.classList.add('isActive');
    }
  });
}

window.onscroll = function() {
  if (window.pageYOffset > 100) {
    //You can set it according to your need.
    headRow.classList.add('header-fixed');
  } else {
    headRow.classList.remove('header-fixed');
  }
};
