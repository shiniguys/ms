(self["webpackChunkgulp_min"] = self["webpackChunkgulp_min"] || []).push([["projects_sst_src_js_components_header_js"],{

/***/ "./projects/sst/src/js/components/header.js":
/*!**************************************************!*\
  !*** ./projects/sst/src/js/components/header.js ***!
  \**************************************************/
/***/ (() => {

let viewport_width = window.innerWidth;
let current_calculation_position = window.pageYOffset;
let start_calculation_position = 0;

window.addEventListener("resize", function () {
  // viewport and full window dimensions will change
  viewport_width = window.innerWidth;
});

// DOM
const body = document.getElementsByTagName("BODY")[0],
  header = body.querySelector(".header");

document.addEventListener("scroll", () => {
  current_calculation_position = window.scrollY;
  header.classList[current_calculation_position > 50 ? "add" : "remove"](
    "animation"
  );
  if (current_calculation_position > 50) {
    body.classList[
      current_calculation_position > start_calculation_position
        ? "add"
        : "remove"
    ]("scroll");
  }
  start_calculation_position = current_calculation_position;
});

const navigation = header.querySelector(".navigation-container"),
  navigationToggle = header.querySelector(".navigation-toggle"),
  navigationItems = navigation.querySelectorAll(".navigation-link");

const checkHeaderClass = () => {
  if (navigation.classList.contains("active")) {
    header.classList.add("selected");
  } else {
    header.classList.remove("selected");
  }
};

navigationToggle.addEventListener("click", () => {
  navigationToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  checkHeaderClass();
});


/***/ })

}]);
//# sourceMappingURL=projects_sst_src_js_components_header_js.js.map