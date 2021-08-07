(function() {
var exports = {};
exports.id = 844;
exports.ids = [844];
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

/***/ 9946:
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
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1130);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/Article.module.css
var Article_module = __webpack_require__(6452);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
;// CONCATENATED MODULE: ./components/article/ArticleItem.js





const ArticleItem = ({
  article
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/article/${article.id}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: (Article_module_default()).card,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: [article.title, " \u2192"]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: article.excerpt
      })]
    })
  });
};

/* harmony default export */ var article_ArticleItem = (ArticleItem);
;// CONCATENATED MODULE: ./components/article/ArticleList.js




const ArticleList = ({
  articles
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Article_module_default()).grid,
    children: articles.map(article => /*#__PURE__*/jsx_runtime_.jsx(article_ArticleItem, {
      article: article
    }, article.id))
  });
};

/* harmony default export */ var article_ArticleList = (ArticleList);
// EXTERNAL MODULE: ./styles/Resource.module.css
var Resource_module = __webpack_require__(506);
var Resource_module_default = /*#__PURE__*/__webpack_require__.n(Resource_module);
;// CONCATENATED MODULE: ./pages/topic/[id]/index.js






const topic = ({
  parent,
  articles
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Resource_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: parent.title
    }), /*#__PURE__*/jsx_runtime_.jsx(article_ArticleList, {
      articles: articles
    }, articles.id)]
  });
};

const getServerSideProps = async context => {
  const resParent = await fetch(`${config/* server */.f}/api/topics/${context.params.id}`);
  const parent = await resParent.json();
  const resArticles = await fetch(`${config/* server */.f}/api/topics/articles/${context.params.id}`);
  const articles = await resArticles.json();
  return {
    props: {
      parent,
      articles
    }
  };
};
/* harmony default export */ var _id_ = (topic);

/***/ }),

/***/ 6452:
/***/ (function(module) {

// Exports
module.exports = {
	"grid": "Article_grid__2WPYc",
	"card": "Article_card__2DgoW",
	"logo": "Article_logo__p8cMG"
};


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
var __webpack_exports__ = __webpack_require__.X(0, [374,664], function() { return __webpack_exec__(9946); });
module.exports = __webpack_exports__;

})();