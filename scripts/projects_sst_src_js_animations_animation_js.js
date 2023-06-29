(self["webpackChunkgulp_min"] = self["webpackChunkgulp_min"] || []).push([["projects_sst_src_js_animations_animation_js"],{

/***/ "./projects/sst/src/js/animations/animation.js":
/*!*****************************************************!*\
  !*** ./projects/sst/src/js/animations/animation.js ***!
  \*****************************************************/
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

/***/ })

}]);
//# sourceMappingURL=projects_sst_src_js_animations_animation_js.js.map