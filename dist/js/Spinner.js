!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"),require("classnames"));else if("function"==typeof define&&define.amd)define(["react","prop-types","classnames"],t);else{var n="object"==typeof exports?t(require("react"),require("prop-types"),require("classnames")):t(e.react,e["prop-types"],e.classnames);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=347)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},12:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),f=r(i),p=n(1),d=r(p),v=n(2),m=r(v),y=n(13),h=r(y);n(15);var g=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.source,r=e.animation,a=o(e,["className","source","animation"]);return(0,h.default)(n)?f.default.createElement("span",s({className:(0,m.default)("Van-Icon",t),dangerouslySetInnerHTML:{__html:""===r?n:n.replace("<svg ",'<svg class="Van-u-animation--'+r+'" ')}},a)):null}}]),t}(i.PureComponent);g.defaultProps={className:"",source:"",animation:""},g.propTypes={className:d.default.string,source:d.default.string,animation:d.default.oneOf(["","spin","pulse"])},t.default=g},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=/^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i;t.default=function(e){return o.test(e.toString().replace(r,""))}},14:function(e,t,n){"use strict";e.exports=/<!--([\s\S]*?)-->/g},15:function(e,t){},2:function(e,t){e.exports=n},347:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),c=n(1),l=r(c),s=n(2),u=r(s),i=n(12),f=r(i),p=n(348),d=r(p),v=n(349),m=r(v),y=n(87),h=r(y),g=n(350),b=r(g);n(351);var w=function(e){var t=e.children,n=e.fullScreen;return a.default.createElement("div",{className:(0,u.default)("Van-Spinner",{"Van-Spinner--fullScreen":n})},a.default.createElement("div",{className:"Van-Spinner-iconContainer"},a.default.createElement(f.default,{source:d.default,className:"Van-Spinner-icon Van-Spinner-bio"}),a.default.createElement(f.default,{source:m.default,className:"Van-Spinner-icon Van-Spinner-hydro"}),a.default.createElement(f.default,{source:h.default,className:"Van-Spinner-icon Van-Spinner-sun"}),a.default.createElement(f.default,{source:b.default,className:"Van-Spinner-icon Van-Spinner-wind"})),t&&a.default.createElement("div",{className:"Van-Spinner-content"},t))};w.defaultProps={children:null,fullScreen:!1},w.propTypes={children:l.default.node,fullScreen:l.default.bool},t.default=w},348:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M448.52 0C-84.775 0 9.152 401.591 14.038 421.115c-7.317 28.621-11.273 50.17-12.989 60.527A23.124 23.124 0 0 0 0 488.452C0 501.453 11.106 512 24.811 512c12.87 0 23.428-9.262 24.691-21.167 5.505-52.05 14.681-60.05 14.681-60.05C669.908 430.783 448.52 0 448.52 0z"></path></svg>'},349:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M0 320.502C0 426.298 78.844 512.063 176.063 512c97.187-.031 175.968-85.827 175.937-191.592 0-2.875-.094-5.752-.219-8.627-.031-1.094-.094-2.188-.156-3.313-.094-1.813-.25-3.594-.406-5.392a61.396 61.396 0 0 0-.281-3.393c-11.125-114.172-109.219-235.097-153.5-284.464C197.156 14.893 185.969 0 175.625 0c-5.438 0-11.125 4.172-15.344 8.157h-.094l-5.906 6.517C108.563 65.713 5.531 193.107.219 310.469v.313c-.156 3-.219 6.064-.219 9.064v.656z"></path></svg>'},350:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 561 512"><path d="M551.187 419.727L315.018 283.108h.095c0-175.569-57.769-246.425-86.355-274.33-19.026-18.547-22.646-3.405-23.265 6.238l-2.238 268.021h.071l-.107.07C46.999 369.989 12.519 454.036 1.827 492.083c-7.096 25.309 8.156 20.881 17.049 16.643l239.598-130.761-.274-.476h.632c155.387 88.213 247.111 75.094 286.163 64.998 26.003-6.713 14.406-17.38 6.192-22.76z"></path></svg>'},351:function(e,t){},87:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481 512"><path d="M223.309 12.221c9.439-16.295 24.912-16.295 34.382 0l22.004 37.948c9.439 16.279 31.163 23.45 48.229 15.904l39.789-17.56c17.065-7.53 29.567 1.703 27.787 20.513l-4.157 43.854c-1.75 18.81 11.658 37.558 29.818 41.651l42.353 9.545c18.19 4.093 22.974 19.029 10.627 33.183l-28.725 32.996c-12.346 14.17-12.346 37.324 0 51.495l28.725 32.98c12.347 14.186 7.563 29.12-10.627 33.183l-42.353 9.561c-18.16 4.095-31.568 22.842-29.818 41.651l4.157 43.839c1.78 18.81-10.722 28.058-27.787 20.528l-39.789-17.561c-17.065-7.53-38.789-.375-48.229 15.904l-22.004 37.933c-9.471 16.311-24.943 16.311-34.382 0l-22.004-37.933c-9.471-16.279-31.163-23.435-48.229-15.904l-39.789 17.561c-17.066 7.529-29.6-1.719-27.818-20.528l4.157-43.839c1.781-18.81-11.628-37.557-29.787-41.651l-42.353-9.561C-.705 343.85-5.487 328.916 6.859 314.73l28.725-32.98c12.346-14.171 12.346-37.324 0-51.495L6.859 197.259c-12.346-14.154-7.563-29.09 10.627-33.183l42.353-9.545c18.159-4.093 31.568-22.841 29.787-41.651l-4.157-43.854c-1.782-18.81 10.752-28.042 27.818-20.513l39.789 17.56c17.066 7.546 38.758.375 48.229-15.904l22.004-37.948z"></path></svg>'}})});