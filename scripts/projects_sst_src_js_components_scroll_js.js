(self["webpackChunkgulp_min"] = self["webpackChunkgulp_min"] || []).push([["projects_sst_src_js_components_scroll_js"],{

/***/ "./projects/sst/src/js/components/scroll.js":
/*!**************************************************!*\
  !*** ./projects/sst/src/js/components/scroll.js ***!
  \**************************************************/
/***/ (() => {

const scrollSection = document.querySelector(".layout");

document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(document.querySelector(`${link.href}`))
    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    // const topOffset = document.querySelector(`${link.dataset.href}`).offsetHeight;
    const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    scrollSection.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});


/***/ })

}]);
//# sourceMappingURL=projects_sst_src_js_components_scroll_js.js.map