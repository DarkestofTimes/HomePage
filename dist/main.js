/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  line-height: 1.2;
  scroll-behavior: smooth;
}

body {
  padding-top: 8vh;
  margin: 1rem;
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: hsl(0, 0%, 7%);
  z-index: -1;
}

header {
  width: 100%;
  height: 8vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
}

header ul {
  margin-left: auto;
  margin-right: 7%;
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  list-style-type: none;
  background-color: hsl(0, 0%, 7%);
  border-bottom: 2vh solid aliceblue;
  transition: transform 0.3s ease-out;
  transform: translateY(-6vh);
  border-radius: 0 0 5px 5px;
  animation: headerColor 10s linear infinite;
}

@keyframes headerColor {
  0% {
    border-bottom: 2vh solid rgb(161, 33, 33);
  }
  25% {
    border-bottom: 2vh solid rgb(193, 31, 202);
  }
  50% {
    border-bottom: 2vh solid rgb(31, 202, 176);
  }
  75% {
    border-bottom: 2vh solid rgb(202, 173, 31);
  }
  100% {
    border-bottom: 2vh solid rgb(161, 33, 33);
  }
}

header ul:hover {
  transform: translateY(0);
}
header li {
  padding: 1rem;
  height: 8vh;
}

header a {
  text-decoration: none;
  color: aliceblue;
  transition: color 0.4s ease-out;
}
header a:any-link {
  color: aliceblue;
}
header a:hover,
header a:focus {
  color: rebeccapurple;
}

.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 1rem;
  height: calc(100vh - 10vh);
  scroll-margin-top: 11vh;
}

.about h1 {
  color: aliceblue;
  font-size: 3rem;
  grid-column: 2;
  padding: 0.5rem;
}
.about p {
  color: aliceblue;
  grid-column: 2;
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 80%;
}
.about > a {
  padding: 1rem;
  grid-column: 2;
  justify-self: center;
}

.about > a > img {
  background-color: white;
  border-radius: 50%;
  transition: background-color 0.4s ease-out;
}
.about a > img:hover {
  background-color: rebeccapurple;
}

.about::before {
  content: "";
  position: absolute;
  width: clamp(30vh, 30vw, 40vw);
  height: clamp(30vh, 30vw, 40vw);
  animation: aboutWobble 10s linear infinite;
  z-index: -1;
  top: 15%;
  left: 5%;
  pointer-events: none;
}
.about::after {
  content: "";
  position: absolute;
  width: clamp(30vh, 30vw, 40vw);
  height: clamp(30vh, 30vw, 40vw);
  animation: aboutWobble 10s linear infinite;
  animation-direction: reverse;
  z-index: -1;
  top: 25%;
  left: 25%;
  pointer-events: none;
}

@keyframes aboutWobble {
  0% {
    background-color: rgb(161, 33, 33);
    transform: skew(0deg);
    border-radius: 0;
  }
  25% {
    background-color: rgb(193, 31, 202);
    transform: skew(10deg);
  }
  50% {
    background-color: rgb(31, 202, 176);
    transform: skew(0deg);
    border-radius: 50%;
  }
  75% {
    background-color: rgb(202, 173, 31);
    transform: skew(-10deg);
  }
  100% {
    background-color: rgb(161, 33, 33);
    transform: skew(0deg);
    border-radius: 0;
  }
}

.stack {
  color: #f0f8ff;
  background: linear-gradient(
    4deg,
    transparent 13%,
    #540c75 14%,
    rgb(64, 10, 88) 80%,
    transparent 81%
  );
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2fr;
}

.stack > h2 {
  padding: 1rem;
  font-size: 3rem;
  grid-column: 2;
}

.stack > p {
  width: 80%;
  padding: 1rem;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  grid-column: 2;
  align-self: start;
}

.stackGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  grid-row: 1 / -1;
  transform: translateX(-100vw);
  transition: transform 0.6s ease-out;
}

.stackItem img {
  width: clamp(10vh, 12vw, 18vw);
  height: clamp(15vh, 18vw, 24vw);
}

.stackItem p {
  text-align: center;
  font-size: 1.5rem;
}

.projects {
  color: aliceblue;
  min-height: calc(100vh - 10vh);
}

.projects h2 {
  font-size: 3rem;
  padding: 1rem;
  margin-left: 50%;
}

.projectsContainer {
  width: 100%;
  height: 100%;
  padding: 1rem;
}
.project {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
}

.projectImg {
  grid-column: 1;
  width: 100%;
  border-radius: 5px;
  transform: translateX(-100vw);
  transition: transform 0.6s ease-out;
}
.projectDescWrapper {
  padding: 1rem;
}
.project h3 {
  grid-column: 2;
  font-size: 2rem;
  padding-top: 1rem;
}
.project p {
  font-size: 1.5rem;
  grid-column: 2;
  padding-top: 1rem;
}
.linkWrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  place-items: center;
  padding-top: 1rem;
}
.project a {
  font-size: 1.5rem;
  text-decoration: none;
  background-color: aliceblue;
  width: 100%;
  text-align: center;
  font-weight: 550;
  border-radius: 5px;
}
.project a:hover {
  color: aliceblue;
  background-color: rebeccapurple;
  transition: background-color 0.6s ease-out, color 0.6s ease-out;
}

.contact {
  min-height: 98vh;
  color: aliceblue;
  font-size: 2rem;
}
.contact h2 {
  margin-left: 50%;
  padding: 1rem;
}
.contact p {
  padding: 1rem;
  text-align: center;
}
form {
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 5fr;
  row-gap: 1rem;
  color: aliceblue;
}
label {
  grid-column: 1;
  font-size: 1.5rem;
  align-self: center;
}
input {
  width: 100%;
  grid-column: 2;
  height: 3rem;
  font-size: 2rem;
  padding-left: 1rem;
  color: rebeccapurple;
  border-radius: 5px;
}
textarea {
  font-size: 2rem;
  padding-left: 1rem;
  color: rebeccapurple;
  border-radius: 5px;
  resize: none;
}
.submitBtn {
  grid-column: 1/ -1;
  background-color: aliceblue;
  transition: background-color 0.6s ease-out, color 0.6s ease-out;
}
.submitBtn:hover {
  color: aliceblue;
  background-color: rebeccapurple;
}
.contact::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 98%;
  height: 25vh;
  background-color: #540c75;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  animation: endWobbly 10s linear infinite;
  border-radius: 20px;
}

@keyframes endWobbly {
  0% {
    background-color: rgb(161, 33, 33);
  }
  25% {
    background-color: rgb(193, 31, 202);
  }
  50% {
    background-color: rgb(31, 202, 176);
  }
  75% {
    background-color: rgb(202, 173, 31);
  }
  100% {
    background-color: rgb(161, 33, 33);
  }
}

@media (max-width: 600px) {
  header {
    padding: 0;
    margin: 0;
  }
  header ul {
    font-size: 1.4rem;
    border: none;
    transform: translate(0);
  }
  header li {
    margin: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  body {
    margin: 0;
  }
  .about {
    align-items: end;
  }
  .about h1 {
    grid-column: 1 / -1;
  }
  .about p {
    width: 100%;
    grid-row: 2;
    grid-column: 1 / -1;
  }

  .stack > h2,
  .stack > p {
    grid-column: 1 / -1;
  }
  .stack > p {
    width: 100%;
  }
  .stackGrid {
    grid-column: 1 / -1;
    grid-row: 3;
  }
  .projects h2 {
    padding: 1rem;
    margin: 0;
  }
  .contact h2 {
    margin: 0;
  }
  form {
    width: 90%;
  }
  input,
  textarea {
    grid-column: 1 / -1;
  }
}
@media (max-width: 760px) {
  .project img {
    grid-column: 1 / -1;
  }
  .project h3 {
    font-size: 2rem;
  }
  .project p {
    font-size: 1.5rem;
  }
  .projectDescWrapper {
    grid-column: 1 / -1;
  }
}
/* scrollbar */

body::-webkit-scrollbar,
textarea::-webkit-scrollbar {
  width: 11px;
}
textarea,
body {
  scrollbar-width: thin;
  scrollbar-color: rebeccapurple;
}
textarea::-webkit-scrollbar-track,
body::-webkit-scrollbar-track {
  background: hsl(0, 0%, 7%);
}
textarea::-webkit-scrollbar-thumb,
body::-webkit-scrollbar-thumb {
  background-color: rebeccapurple;
  border-radius: 6px;
  border: 1px solid aliceblue;
}

/* util */
.expand {
  transform: translateY(0);
}
.slideIn {
  transform: translateX(0);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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AA2B;EAC3B,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,+DAA+D;AACjE;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,cAAc;EACd,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,+DAA+D;AACjE;AACA;EACE,gBAAgB;EAChB,+BAA+B;AACjC;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,wCAAwC;EACxC,mBAAmB;AACrB;;AAEA;EACE;IACE,kCAAkC;EACpC;EACA;IACE,mCAAmC;EACrC;EACA;IACE,mCAAmC;EACrC;EACA;IACE,mCAAmC;EACrC;EACA;IACE,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,UAAU;IACV,SAAS;EACX;EACA;IACE,iBAAiB;IACjB,YAAY;IACZ,uBAAuB;EACzB;EACA;IACE,SAAS;IACT,oBAAoB;IACpB,qBAAqB;EACvB;;EAEA;IACE,SAAS;EACX;EACA;IACE,gBAAgB;EAClB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,WAAW;IACX,mBAAmB;EACrB;;EAEA;;IAEE,mBAAmB;EACrB;EACA;IACE,WAAW;EACb;EACA;IACE,mBAAmB;IACnB,WAAW;EACb;EACA;IACE,aAAa;IACb,SAAS;EACX;EACA;IACE,SAAS;EACX;EACA;IACE,UAAU;EACZ;EACA;;IAEE,mBAAmB;EACrB;AACF;AACA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,mBAAmB;EACrB;AACF;AACA,cAAc;;AAEd;;EAEE,WAAW;AACb;AACA;;EAEE,qBAAqB;EACrB,8BAA8B;AAChC;AACA;;EAEE,0BAA0B;AAC5B;AACA;;EAEE,+BAA+B;EAC/B,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA,SAAS;AACT;EACE,wBAAwB;AAC1B;AACA;EACE,wBAAwB;AAC1B","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  line-height: 1.2;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  padding-top: 8vh;\r\n  margin: 1rem;\r\n}\r\n\r\nbody::before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: hsl(0, 0%, 7%);\r\n  z-index: -1;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 8vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\nheader ul {\r\n  margin-left: auto;\r\n  margin-right: 7%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-size: 1.5rem;\r\n  list-style-type: none;\r\n  background-color: hsl(0, 0%, 7%);\r\n  border-bottom: 2vh solid aliceblue;\r\n  transition: transform 0.3s ease-out;\r\n  transform: translateY(-6vh);\r\n  border-radius: 0 0 5px 5px;\r\n  animation: headerColor 10s linear infinite;\r\n}\r\n\r\n@keyframes headerColor {\r\n  0% {\r\n    border-bottom: 2vh solid rgb(161, 33, 33);\r\n  }\r\n  25% {\r\n    border-bottom: 2vh solid rgb(193, 31, 202);\r\n  }\r\n  50% {\r\n    border-bottom: 2vh solid rgb(31, 202, 176);\r\n  }\r\n  75% {\r\n    border-bottom: 2vh solid rgb(202, 173, 31);\r\n  }\r\n  100% {\r\n    border-bottom: 2vh solid rgb(161, 33, 33);\r\n  }\r\n}\r\n\r\nheader ul:hover {\r\n  transform: translateY(0);\r\n}\r\nheader li {\r\n  padding: 1rem;\r\n  height: 8vh;\r\n}\r\n\r\nheader a {\r\n  text-decoration: none;\r\n  color: aliceblue;\r\n  transition: color 0.4s ease-out;\r\n}\r\nheader a:any-link {\r\n  color: aliceblue;\r\n}\r\nheader a:hover,\r\nheader a:focus {\r\n  color: rebeccapurple;\r\n}\r\n\r\n.about {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n  padding: 1rem;\r\n  height: calc(100vh - 10vh);\r\n  scroll-margin-top: 11vh;\r\n}\r\n\r\n.about h1 {\r\n  color: aliceblue;\r\n  font-size: 3rem;\r\n  grid-column: 2;\r\n  padding: 0.5rem;\r\n}\r\n.about p {\r\n  color: aliceblue;\r\n  grid-column: 2;\r\n  font-size: 1.5rem;\r\n  padding: 0.5rem;\r\n  width: 80%;\r\n}\r\n.about > a {\r\n  padding: 1rem;\r\n  grid-column: 2;\r\n  justify-self: center;\r\n}\r\n\r\n.about > a > img {\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  transition: background-color 0.4s ease-out;\r\n}\r\n.about a > img:hover {\r\n  background-color: rebeccapurple;\r\n}\r\n\r\n.about::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: clamp(30vh, 30vw, 40vw);\r\n  height: clamp(30vh, 30vw, 40vw);\r\n  animation: aboutWobble 10s linear infinite;\r\n  z-index: -1;\r\n  top: 15%;\r\n  left: 5%;\r\n  pointer-events: none;\r\n}\r\n.about::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: clamp(30vh, 30vw, 40vw);\r\n  height: clamp(30vh, 30vw, 40vw);\r\n  animation: aboutWobble 10s linear infinite;\r\n  animation-direction: reverse;\r\n  z-index: -1;\r\n  top: 25%;\r\n  left: 25%;\r\n  pointer-events: none;\r\n}\r\n\r\n@keyframes aboutWobble {\r\n  0% {\r\n    background-color: rgb(161, 33, 33);\r\n    transform: skew(0deg);\r\n    border-radius: 0;\r\n  }\r\n  25% {\r\n    background-color: rgb(193, 31, 202);\r\n    transform: skew(10deg);\r\n  }\r\n  50% {\r\n    background-color: rgb(31, 202, 176);\r\n    transform: skew(0deg);\r\n    border-radius: 50%;\r\n  }\r\n  75% {\r\n    background-color: rgb(202, 173, 31);\r\n    transform: skew(-10deg);\r\n  }\r\n  100% {\r\n    background-color: rgb(161, 33, 33);\r\n    transform: skew(0deg);\r\n    border-radius: 0;\r\n  }\r\n}\r\n\r\n.stack {\r\n  color: #f0f8ff;\r\n  background: linear-gradient(\r\n    4deg,\r\n    transparent 13%,\r\n    #540c75 14%,\r\n    rgb(64, 10, 88) 80%,\r\n    transparent 81%\r\n  );\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr 2fr;\r\n}\r\n\r\n.stack > h2 {\r\n  padding: 1rem;\r\n  font-size: 3rem;\r\n  grid-column: 2;\r\n}\r\n\r\n.stack > p {\r\n  width: 80%;\r\n  padding: 1rem;\r\n  font-size: 1.5rem;\r\n  margin-bottom: 3rem;\r\n  grid-column: 2;\r\n  align-self: start;\r\n}\r\n\r\n.stackGrid {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  grid-row: 1 / -1;\r\n  transform: translateX(-100vw);\r\n  transition: transform 0.6s ease-out;\r\n}\r\n\r\n.stackItem img {\r\n  width: clamp(10vh, 12vw, 18vw);\r\n  height: clamp(15vh, 18vw, 24vw);\r\n}\r\n\r\n.stackItem p {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.projects {\r\n  color: aliceblue;\r\n  min-height: calc(100vh - 10vh);\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 3rem;\r\n  padding: 1rem;\r\n  margin-left: 50%;\r\n}\r\n\r\n.projectsContainer {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 1rem;\r\n}\r\n.project {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.projectImg {\r\n  grid-column: 1;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  transform: translateX(-100vw);\r\n  transition: transform 0.6s ease-out;\r\n}\r\n.projectDescWrapper {\r\n  padding: 1rem;\r\n}\r\n.project h3 {\r\n  grid-column: 2;\r\n  font-size: 2rem;\r\n  padding-top: 1rem;\r\n}\r\n.project p {\r\n  font-size: 1.5rem;\r\n  grid-column: 2;\r\n  padding-top: 1rem;\r\n}\r\n.linkWrapper {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 0.5rem;\r\n  place-items: center;\r\n  padding-top: 1rem;\r\n}\r\n.project a {\r\n  font-size: 1.5rem;\r\n  text-decoration: none;\r\n  background-color: aliceblue;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-weight: 550;\r\n  border-radius: 5px;\r\n}\r\n.project a:hover {\r\n  color: aliceblue;\r\n  background-color: rebeccapurple;\r\n  transition: background-color 0.6s ease-out, color 0.6s ease-out;\r\n}\r\n\r\n.contact {\r\n  min-height: 98vh;\r\n  color: aliceblue;\r\n  font-size: 2rem;\r\n}\r\n.contact h2 {\r\n  margin-left: 50%;\r\n  padding: 1rem;\r\n}\r\n.contact p {\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\nform {\r\n  width: 50vw;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 2rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr;\r\n  row-gap: 1rem;\r\n  color: aliceblue;\r\n}\r\nlabel {\r\n  grid-column: 1;\r\n  font-size: 1.5rem;\r\n  align-self: center;\r\n}\r\ninput {\r\n  width: 100%;\r\n  grid-column: 2;\r\n  height: 3rem;\r\n  font-size: 2rem;\r\n  padding-left: 1rem;\r\n  color: rebeccapurple;\r\n  border-radius: 5px;\r\n}\r\ntextarea {\r\n  font-size: 2rem;\r\n  padding-left: 1rem;\r\n  color: rebeccapurple;\r\n  border-radius: 5px;\r\n  resize: none;\r\n}\r\n.submitBtn {\r\n  grid-column: 1/ -1;\r\n  background-color: aliceblue;\r\n  transition: background-color 0.6s ease-out, color 0.6s ease-out;\r\n}\r\n.submitBtn:hover {\r\n  color: aliceblue;\r\n  background-color: rebeccapurple;\r\n}\r\n.contact::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  width: 98%;\r\n  height: 25vh;\r\n  background-color: #540c75;\r\n  margin-top: 2rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  animation: endWobbly 10s linear infinite;\r\n  border-radius: 20px;\r\n}\r\n\r\n@keyframes endWobbly {\r\n  0% {\r\n    background-color: rgb(161, 33, 33);\r\n  }\r\n  25% {\r\n    background-color: rgb(193, 31, 202);\r\n  }\r\n  50% {\r\n    background-color: rgb(31, 202, 176);\r\n  }\r\n  75% {\r\n    background-color: rgb(202, 173, 31);\r\n  }\r\n  100% {\r\n    background-color: rgb(161, 33, 33);\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  header {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  header ul {\r\n    font-size: 1.4rem;\r\n    border: none;\r\n    transform: translate(0);\r\n  }\r\n  header li {\r\n    margin: 0;\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n  }\r\n\r\n  body {\r\n    margin: 0;\r\n  }\r\n  .about {\r\n    align-items: end;\r\n  }\r\n  .about h1 {\r\n    grid-column: 1 / -1;\r\n  }\r\n  .about p {\r\n    width: 100%;\r\n    grid-row: 2;\r\n    grid-column: 1 / -1;\r\n  }\r\n\r\n  .stack > h2,\r\n  .stack > p {\r\n    grid-column: 1 / -1;\r\n  }\r\n  .stack > p {\r\n    width: 100%;\r\n  }\r\n  .stackGrid {\r\n    grid-column: 1 / -1;\r\n    grid-row: 3;\r\n  }\r\n  .projects h2 {\r\n    padding: 1rem;\r\n    margin: 0;\r\n  }\r\n  .contact h2 {\r\n    margin: 0;\r\n  }\r\n  form {\r\n    width: 90%;\r\n  }\r\n  input,\r\n  textarea {\r\n    grid-column: 1 / -1;\r\n  }\r\n}\r\n@media (max-width: 760px) {\r\n  .project img {\r\n    grid-column: 1 / -1;\r\n  }\r\n  .project h3 {\r\n    font-size: 2rem;\r\n  }\r\n  .project p {\r\n    font-size: 1.5rem;\r\n  }\r\n  .projectDescWrapper {\r\n    grid-column: 1 / -1;\r\n  }\r\n}\r\n/* scrollbar */\r\n\r\nbody::-webkit-scrollbar,\r\ntextarea::-webkit-scrollbar {\r\n  width: 11px;\r\n}\r\ntextarea,\r\nbody {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: rebeccapurple;\r\n}\r\ntextarea::-webkit-scrollbar-track,\r\nbody::-webkit-scrollbar-track {\r\n  background: hsl(0, 0%, 7%);\r\n}\r\ntextarea::-webkit-scrollbar-thumb,\r\nbody::-webkit-scrollbar-thumb {\r\n  background-color: rebeccapurple;\r\n  border-radius: 6px;\r\n  border: 1px solid aliceblue;\r\n}\r\n\r\n/* util */\r\n.expand {\r\n  transform: translateY(0);\r\n}\r\n.slideIn {\r\n  transform: translateX(0);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./img/Screenshot400w.png":
/*!********************************!*\
  !*** ./img/Screenshot400w.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c146408fcf1e6b95107.png";

/***/ }),

/***/ "./img/Screenshot800w.png":
/*!********************************!*\
  !*** ./img/Screenshot800w.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "295256f4a23cc727ea47.png";

/***/ }),

/***/ "./img/battleship400.png":
/*!*******************************!*\
  !*** ./img/battleship400.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f6e484ba0cf51a0e1f3.png";

/***/ }),

/***/ "./img/battleship800.png":
/*!*******************************!*\
  !*** ./img/battleship800.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b79d407bb3d98c39a12d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles.css */ "./src/styles.css");
/* harmony import */ var _img_battleship400_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/battleship400.png */ "./img/battleship400.png");
/* harmony import */ var _img_battleship800_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/battleship800.png */ "./img/battleship800.png");
/* harmony import */ var _img_Screenshot400w_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/Screenshot400w.png */ "./img/Screenshot400w.png");
/* harmony import */ var _img_Screenshot800w_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/Screenshot800w.png */ "./img/Screenshot800w.png");






const elementIsIn = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= window.innerHeight - window.innerHeight / 6 ||
    rect.bottom <= window.innerHeight / 6
  );
};

const slideUlDown = () => {
  const Ul = document.querySelector("header ul");
  const stackGrid = document.querySelector(".stackGrid");
  const projectImgs = document.querySelectorAll(".projectImg");
  const scrollHandler = () => {
    if (window.scrollY === 0) {
      Ul.classList.add("expand");
    } else {
      Ul.classList.remove("expand");
    }
    if (!elementIsIn(stackGrid)) {
      stackGrid.classList.add("slideIn");
    } else {
      stackGrid.classList.remove("slideIn");
    }
    projectImgs.forEach((img) => {
      if (!elementIsIn(img)) {
        img.classList.add("slideIn");
      } else {
        img.classList.remove("slideIn");
      }
    });
  };
  window.addEventListener("scroll", scrollHandler);
};

slideUlDown();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map