(function() {
var exports = {};
exports.id = 962;
exports.ids = [962];
exports.modules = {

/***/ 5926:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5958);

function handler({
  query: {
    id
  }
}, res) {
  const found = _images__WEBPACK_IMPORTED_MODULE_0__/* .articles.some */ .D.some(article => article.inlanguage == id);

  if (found) {
    res.json(_images__WEBPACK_IMPORTED_MODULE_0__/* .articles.filter */ .D.filter(function (obj) {
      return obj.inlanguage == id;
    }));
  } else {
    res.status(400).json({
      msg: "Language not found"
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [958], function() { return __webpack_exec__(5926); });
module.exports = __webpack_exports__;

})();