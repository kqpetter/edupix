(function() {
var exports = {};
exports.id = 885;
exports.ids = [885];
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

/***/ 6561:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ toplevel; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/Article.module.css
var Article_module = __webpack_require__(6452);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
;// CONCATENATED MODULE: ./components/topics/TopItem.js





const TopItem = ({
  topic
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/toplevel/topics/${topic.id}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: (Article_module_default()).card,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: [topic.title, " \u2192"]
      })
    })
  });
};

/* harmony default export */ var topics_TopItem = (TopItem);
;// CONCATENATED MODULE: ./components/topics/TopList.js




const TopList = ({
  topics
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Article_module_default()).grid,
    children: topics.map(topic => /*#__PURE__*/jsx_runtime_.jsx(topics_TopItem, {
      topic: topic
    }, topic.id))
  });
};

/* harmony default export */ var topics_TopList = (TopList);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1130);
// EXTERNAL MODULE: ./styles/Resource.module.css
var Resource_module = __webpack_require__(506);
var Resource_module_default = /*#__PURE__*/__webpack_require__.n(Resource_module);
;// CONCATENATED MODULE: ./pages/toplevel/index.js





const topic = ({
  topics
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Resource_module_default()).container,
    children: /*#__PURE__*/jsx_runtime_.jsx(topics_TopList, {
      topics: topics
    }, topics.id)
  });
};

const getServerSideProps = async context => {
  const res = await fetch(`${config/* server */.f}/api/topics/children/0`);
  const topics = await res.json();
  return {
    props: {
      topics
    }
  };
};
/*
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/topics/${context.params.id}`)
  
    const topic = await res.json()
  
    return {
      props: {
        topic,
      },
    }
  }
  
  
  export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/topics`)
  
    const topics = await res.json()
  
    const ids = topics.map((topic) => topic.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
    return {
      paths,
      fallback: false,
    }
  }*/

/* harmony default export */ var toplevel = (topic);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [374,664], function() { return __webpack_exec__(6561); });
module.exports = __webpack_exports__;

})();