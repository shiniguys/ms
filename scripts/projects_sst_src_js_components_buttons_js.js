(self["webpackChunkgulp_min"] = self["webpackChunkgulp_min"] || []).push([["projects_sst_src_js_components_buttons_js"],{

/***/ "./projects/sst/src/js/components/buttons.js":
/*!***************************************************!*\
  !*** ./projects/sst/src/js/components/buttons.js ***!
  \***************************************************/
/***/ (() => {

const body = document.getElementsByTagName("BODY")[0];

// copy and typewriter
const typewriter = document.querySelectorAll(".typewriter");
let typewriterTimeOuts = [];
const typewriterFunc = (item, text, type, string) => {
  typewriterTimeOuts.forEach(clearTimeout);
  let typewriterValue = item.value,
    typewriterString = text.dataset.content;
  arr = typewriterValue;
  typewriterTimeOuts = Object.keys(arr).map((key, index) => {
    text.innerHTML = "";
    return setTimeout(() => {
      text.innerHTML += arr[key];
    }, key * 100);
  });
};

const addCopyClass = (time, classId, element, classRem, value) => {
  classId.classList.add(classRem);
  element.querySelector(".btn-text").innerHTML = "copié";
  setTimeout(() => {
    classId.classList.remove(classRem);
    typewriterFunc(
      element,
      element.querySelector(".btn-text"),
      "string",
      value
    );
  }, time);
};

const copyButtonContentToClicBord = () => {
  let copyButton = body.querySelectorAll(".btn-copy");
  copyButton.forEach((element) => {
    element.addEventListener("click", () => {
      let copytext = document.createElement("input"),
        elementValue = element.value;
      copyContent = element.textContent;
      copytext.value = element.value;
      document.body.appendChild(copytext);
      copytext.select();
      document.execCommand("copy");
      document.body.removeChild(copytext);
      addCopyClass(1000, element, element, "active", elementValue);
    });
  });
};
copyButtonContentToClicBord();

const layoutControlButtonTop = document.querySelector(
  ".layout-buttons__item[data-type='top']"
);

// When the user scrolls down 20px from the top of the document, show the button
const scrollSection = document.querySelector('.layout');
function scrollFunction() {
  if (scrollSection.scrollTop > 50) {
    layoutControlButtonTop.classList.add("visible");
  } else {
    layoutControlButtonTop.classList.remove("visible");
  }
}

layoutControlButtonTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  scrollSection.classList.remove("scroll");
  scrollSection.scrollTop = 0; // For Safari
});

let current_calculation_position = window.pageYOffset;
document.addEventListener("scroll", () => {
  scrollFunction();
  current_calculation_position = window.pageYOffset;
  layoutControlButtonTop.classList[
    current_calculation_position > 50 ? "add" : "remove"
  ]("visible");
});


/***/ })

}]);
//# sourceMappingURL=projects_sst_src_js_components_buttons_js.js.map