!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"),require("classnames"));else if("function"==typeof define&&define.amd)define(["react","prop-types","classnames"],t);else{var r="object"==typeof exports?t(require("react"),require("prop-types"),require("classnames")):t(e.react,e["prop-types"],e.classnames);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=171)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},12:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(0),l=n(f),p=r(1),d=n(p),y=r(2),b=n(y),m=r(13),h=n(m);r(15);var v=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.source,n=e.animation,a=o(e,["className","source","animation"]);return(0,h.default)(r)?l.default.createElement("span",i({className:(0,b.default)("Van-Icon",t),dangerouslySetInnerHTML:{__html:""===n?r:r.replace("<svg ",'<svg class="Van-u-animation--'+n+'" ')}},a)):null}}]),t}(f.PureComponent);v.defaultProps={className:"",source:"",animation:""},v.propTypes={className:d.default.string,source:d.default.string,animation:d.default.oneOf(["","spin","pulse"])},t.default=v},13:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(14),o=/^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i;t.default=function(e){return o.test(e.toString().replace(n,""))}},14:function(e,t,r){"use strict";e.exports=/<!--([\s\S]*?)-->/g},15:function(e,t){},171:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(0),l=n(f),p=r(1),d=n(p),y=r(2),b=n(y),m=r(172),h=n(m),v=r(12),O=n(v);r(173);var w=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.withBorder,n=o(e,["className","withBorder"]);return l.default.createElement("div",i({className:(0,b.default)("Van-PhoneCard",{"Van-PhoneCard--withBorder":r},t)},n),l.default.createElement("span",{className:"Van-PhoneCard-number"},l.default.createElement(O.default,{source:h.default}),this.props.number),l.default.createElement("span",{className:"Van-PhoneCard-description"},this.props.description))}}]),t}(f.PureComponent);w.defaultProps={withBorder:!1,className:"",number:"",description:""},w.propTypes={withBorder:d.default.bool,className:d.default.string,number:d.default.node,description:d.default.node},t.default=w},172:function(e,t){e.exports='<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path></svg>'},173:function(e,t){},2:function(e,t){e.exports=r}})});