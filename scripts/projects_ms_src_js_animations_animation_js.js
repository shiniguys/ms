(self["webpackChunkgulp_min"] = self["webpackChunkgulp_min"] || []).push([["projects_ms_src_js_animations_animation_js"],{

/***/ "./projects/ms/src/js/animations/animation.js":
/*!****************************************************!*\
  !*** ./projects/ms/src/js/animations/animation.js ***!
  \****************************************************/
/***/ (() => {

const animationElements = document.querySelectorAll("[data-animation]");
// Create the observer, same as before:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-animation-status", "start");
      return;
    } else {
      entry.target.setAttribute("data-animation-status", "overview");
    }
  });
});

animationElements.forEach((element) => {
  observer.observe(element);
});

const body = document.getElementsByTagName("BODY")[0];

const btnmore = document.querySelectorAll('.btn-more');

let donatewrapper = document.querySelector('.donate-underwrapper');

Array.prototype.forEach.call(btnmore, (elem) => {
  elem.addEventListener('click', () => {

    let perentItem = elem.parentElement

    body.classList.add('over');
    // donatewrapper.classList.add('active');
    perentItem.classList.add('active');
  })
})

const donateclose = document.querySelectorAll('.donate-close');

Array.prototype.forEach.call(donateclose, (elem) => {
  elem.addEventListener('click', () => {
    let perentItem = elem.parentElement.parentElement;

    body.classList.remove('over');
    perentItem.classList.remove('active');
  })
})

/***/ })

}]);
//# sourceMappingURL=projects_ms_src_js_animations_animation_js.js.map