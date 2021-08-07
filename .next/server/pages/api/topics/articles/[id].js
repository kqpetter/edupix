(function() {
var exports = {};
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 1327:
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
  const filtered = _images__WEBPACK_IMPORTED_MODULE_0__/* .articles.filter */ .D.filter(article => article.topic == parseInt(id));

  if (filtered.length > 0) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({
      message: `No articles with topic id of ${id} is not found`
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [958], function() { return __webpack_exec__(1327); });
module.exports = __webpack_exports__;

})();