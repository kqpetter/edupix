(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{2167:function(e,n,r){"use strict";var t=r(3038),o=r(862);n.default=void 0;var c=o(r(7294)),a=r(9414),i=r(4651),u=r(7426),s={};function l(e,n,r,t){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=(0,i.useRouter)(),f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),r=t(n,2),c=r[0],i=r[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,_=e.replace,h=e.shallow,g=e.scroll,m=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var y=(n=c.Children.only(v))&&"object"===typeof n&&n.ref,b=(0,u.useIntersection)({rootMargin:"200px"}),E=t(b,2),L=E[0],R=E[1],w=c.default.useCallback((function(e){L(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,L]);(0,c.useEffect)((function(){var e=R&&r&&(0,a.isLocalURL)(d),n="undefined"!==typeof m?m:o&&o.locale,t=s[d+"%"+p+(n?"%"+n:"")];e&&!t&&l(o,d,p,{locale:n})}),[p,d,R,m,r,o]);var x={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](r,t,{shallow:c,locale:u,scroll:i}))}(e,o,d,p,_,h,g,m)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof m?m:o&&o.locale,N=o&&o.isLocaleDomain&&(0,a.getDomainLocale)(p,M,o&&o.locales,o&&o.domainLocales);x.href=N||(0,a.addBasePath)((0,a.addLocale)(p,M,o&&o.defaultLocale))}return c.default.cloneElement(n,x)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!a,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=t(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,c=t.observer,a=t.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r(7294),c=r(3447),a="undefined"!==typeof IntersectionObserver;var i=new Map},5850:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return f},default:function(){return d}});var t=r(5893),o=r(1664),c=r(6161),a=r.n(c),i=function(e){var n=e.topic;return(0,t.jsx)(o.default,{href:"/topic/".concat(n.id),children:(0,t.jsx)("a",{className:a().card,children:(0,t.jsxs)("h3",{children:[n.title," \u2192"]})})})},u=function(e){var n=e.topics;return(0,t.jsx)("div",{className:a().grid,children:n.map((function(e){return(0,t.jsx)(i,{topic:e},e.id)}))})},s=r(4510),l=r.n(s),f=!0,d=function(e){var n=e.parent,r=e.topics;return(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)("h2",{children:n.title}),(0,t.jsx)(u,{topics:r})]})}},7603:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toplevel/topics/[id]",function(){return r(5850)}])},6161:function(e){e.exports={grid:"Article_grid__2WPYc",card:"Article_card__2DgoW",logo:"Article_logo__p8cMG"}},4510:function(e){e.exports={card:"Resource_card__RHRQO",logo:"Resource_logo__zgNIZ",grid:"Resource_grid__uQTLv",main:"Resource_main__2w-sv",container:"Resource_container__BQoIn"}},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=7603,e(e.s=n);var n}));var n=e.O();_N_E=n}]);