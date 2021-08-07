(function() {
var exports = {};
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 1130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ server; }
/* harmony export */ });
const dev = false;
const server = dev ? 'http://localhost:3000' : 'https://edupix.io';

/***/ }),

/***/ 4565:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1130);
// EXTERNAL MODULE: ./styles/Resource.module.css
var Resource_module = __webpack_require__(506);
var Resource_module_default = /*#__PURE__*/__webpack_require__.n(Resource_module);
;// CONCATENATED MODULE: ./pages/article/[id]/index.js









const article = ({
  article
}) => {
  // const router = useRouter()
  // const { id } = router.query
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Resource_module_default()).container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Resource_module_default()).main,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: (Resource_module_default()).card,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            children: [article.title, " "]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "pt-2",
            style: {
              position: 'relative',
              width: '60vw',
              height: '30vw'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: article.image,
              alt: article.name,
              layout: "fill",
              objectFit: "cover"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: article.license
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: article.publisher
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/search/",
          children: "Go Back"
        })]
      })
    })
  });
};

const getServerSideProps = async context => {
  const res = await fetch(`${config/* server */.f}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article
    }
  };
};
/* harmony default export */ var _id_ = (article);

/***/ }),

/***/ 506:
/***/ (function(module) {

// Exports
module.exports = {
	"card": "Resource_card__RHRQO",
	"logo": "Resource_logo__zgNIZ",
	"grid": "Resource_grid__uQTLv",
	"main": "Resource_main__2w-sv",
	"container": "Resource_container__BQoIn"
};


/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [374,664,675], function() { return __webpack_exec__(4565); });
module.exports = __webpack_exports__;

})();