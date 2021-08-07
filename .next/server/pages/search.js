(function() {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 9880:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ search; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./styles/Searchheader.module.css
var Searchheader_module = __webpack_require__(3486);
var Searchheader_module_default = /*#__PURE__*/__webpack_require__.n(Searchheader_module);
;// CONCATENATED MODULE: ./components/Search/SearchHeader.jsx





const Search = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: (Searchheader_module_default()).wrapper,
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
    className: (Searchheader_module_default()).title,
    children: ["Welcome to ", /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: "https://edupix.io",
      children: "eduPix.io"
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Searchheader_module_default()).inputwrapper,
    children: /*#__PURE__*/jsx_runtime_.jsx("input", {
      className: (Searchheader_module_default()).searchinput,
      type: "search",
      placeholder: "Search resources",
      onChange: props.handleSearch
    })
  })]
});

/* harmony default export */ var SearchHeader = (Search);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/Article.module.css
var Article_module = __webpack_require__(6452);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
;// CONCATENATED MODULE: ./components/Search/SearchResult.jsx







const SearchResult = props => {
  // console.log({ props })
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/article/${props.id}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: (Article_module_default()).card,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: [props.title, " \u2192"]
      }), props.image !== "" ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "pt-2",
        style: {
          position: 'relative',
          width: '18vw',
          height: '12vw'
        },
        children: props.image !== "" ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: props.image,
          alt: props.title,
          layout: "fill",
          objectFit: "cover"
        }) : null
      }) : null, /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: props.license
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: props.publisher
      })]
    })
  });
};

/* harmony default export */ var Search_SearchResult = (SearchResult);
// EXTERNAL MODULE: ./styles/Searching.module.css
var Searching_module = __webpack_require__(996);
var Searching_module_default = /*#__PURE__*/__webpack_require__.n(Searching_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Searching.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Searching_Search = () => {
  const {
    0: results,
    1: setResults
  } = (0,external_react_.useState)([]);
  const {
    0: searchWord,
    1: setSearchWord
  } = (0,external_react_.useState)(''); // used to delay search until input has stopped

  const debounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(undefined, args);
      }, timeout);
    };
  };

  const handleSearch = evt => {
    const {
      value
    } = evt.target;
    setSearchWord(value);

    const search = value => {
      if (value.length > 0) {
        // Fetch images
        const images = async () => {
          const res = await fetch(`https://images-316715.ew.r.appspot.com/api/title/${value}`);
          const data = await res.json();
          setResults(data);
          return data;
        };

        images();
      } else {
        children;
      }
    };

    debounce(search(value));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "eduPix.io"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "edupix",
        content: "open educational resources"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Searching_module_default()).container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Searching_module_default()).main,
        children: [/*#__PURE__*/jsx_runtime_.jsx(SearchHeader, {
          handleSearch: handleSearch
        }), searchWord ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [results.length, " results for ", /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: searchWord
          })]
        }) : null, /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Searching_module_default()).grid,
          children: results.map((result, index) => /*#__PURE__*/(0,external_react_.createElement)(Search_SearchResult, _objectSpread(_objectSpread({}, result), {}, {
            key: `result-${index}`
          })))
        }), results.length === 0 && searchWord ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: ["Sorry we couldnt find any content matching ", /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: searchWord
          })]
        }) : null, results.length === 0 && !searchWord ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: "Enter a search word above to find relevant resourses"
        }) : null]
      })
    })]
  });
};

/* harmony default export */ var Searching = (Searching_Search);
;// CONCATENATED MODULE: ./pages/search.js


function search() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(Searching, {})
  });
}

/***/ }),

/***/ 6452:
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "Article_wrapper__1aIJg",
	"imagewrapp": "Article_imagewrapp__1hWQW",
	"grid": "Article_grid__2WPYc",
	"card": "Article_card__2DgoW",
	"logo": "Article_logo__p8cMG"
};


/***/ }),

/***/ 3486:
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "Searchheader_wrapper__TV9nq",
	"inputwrapper": "Searchheader_inputwrapper__2edEX",
	"searchinput": "Searchheader_searchinput__2OFnT",
	"footer": "Searchheader_footer__F0xg9",
	"title": "Searchheader_title__3U98S",
	"description": "Searchheader_description__3Mgc8",
	"code": "Searchheader_code__OIqlC",
	"grid": "Searchheader_grid__SNRJs",
	"card": "Searchheader_card__32YAp",
	"logo": "Searchheader_logo__3kNNH"
};


/***/ }),

/***/ 996:
/***/ (function(module) {

// Exports
module.exports = {
	"grid": "Searching_grid__DDaIS",
	"main": "Searching_main__20or-",
	"container": "Searching_container__1rpqz"
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

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = __webpack_require__.X(0, [374,664,675], function() { return __webpack_exec__(9880); });
module.exports = __webpack_exports__;

})();