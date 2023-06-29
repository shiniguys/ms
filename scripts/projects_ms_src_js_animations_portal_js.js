"use strict";
(self["webpackChunkgulp_min"] = self["webpackChunkgulp_min"] || []).push([["projects_ms_src_js_animations_portal_js"],{

/***/ "./projects/ms/src/js/animations/portal.js":
/*!*************************************************!*\
  !*** ./projects/ms/src/js/animations/portal.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openPortal": () => (/* binding */ openPortal),
/* harmony export */   "portalHandlers": () => (/* binding */ portalHandlers),
/* harmony export */   "teleportPage": () => (/* binding */ teleportPage)
/* harmony export */ });
const portal = document.querySelector(".portal"),
  portalTitle = portal.querySelector(".portal-title"),
  portalLinks = document.querySelectorAll("[data-portal]");

function preload() {
  document.body.classList.add("overflow");
  portal.classList.add("animation-out");
  window.addEventListener("load", function () {
    setTimeout(() => {
      document.body.classList.remove("overflow");
      portal.classList.remove("animation-out");
      portal.style = "z-index: -100;opacity: 0;";
    }, 1000);
  });
}
preload();

function openPortal(element) {
  portal.style = "opacity: 0;";
  portal.classList.add("animation-in");
  if(element.getAttribute('data-portal-text')){
    portalTitle.innerHTML = element.getAttribute('data-portal-text');
  }else{
    portalTitle.innerHTML = element.textContent;
  }
  
}

function teleportPage(e, link){
  e.preventDefault();
  e.stopPropagation();
  openPortal(link);
  setTimeout(() => {
    window.location.href = link.href;            
  }, 2000);
}

function portalHandlers (arr) {
  if (arr.length) {
    arr.forEach((link) => {
      // console.log(link)
      let counter = 0;
      link.addEventListener("click", (e) => {
        let href = e.target.getAttribute("href");
        if (link.getAttribute("data-portal") == "second" && window.innerWidth < 1420) {
          counter++;
          let href = e.target.getAttribute("href");
          if (counter == 2) {
            teleportPage(e, link);
          }
        } else {
          teleportPage(e, link);
        }
      });
    });
  }
}
portalHandlers(portalLinks);



/***/ })

}]);
//# sourceMappingURL=projects_ms_src_js_animations_portal_js.js.map