!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"),require("classnames"));else if("function"==typeof define&&define.amd)define(["react","prop-types","classnames"],t);else{var n="object"==typeof exports?t(require("react"),require("prop-types"),require("classnames")):t(e.react,e["prop-types"],e.classnames);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=331)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},2:function(e,t){e.exports=n},331:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),f=r(l),s=n(1),b=r(s),d=n(2),y=r(d);n(332);var m=function(e){function t(){var e,n,r,o;u(this,t);for(var p=arguments.length,c=Array(p),i=0;i<p;i++)c[i]=arguments[i];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.handleClick=function(e){var t=r.props.step,n=void 0===t?1:t,o=r.input.value.length?parseInt(r.input.value,10):0;r.input.value="up"===e?o+n:o-n},o=n,a(r,o)}return p(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.input,r=t.meta,u=r.error,a=r.touched,p=o(t,["input","meta"]),i=(0,y.default)("Van-NumberInput",{"Van-NumberInput--error":a&&u});return f.default.createElement("div",{className:i},f.default.createElement("button",{type:"button",className:"Van-NumberInput-ctrl Van-NumberInput-ctrl--down",onClick:function(){return e.handleClick("down")}},"-"),f.default.createElement("button",{type:"button",className:"Van-NumberInput-ctrl Van-NumberInput-ctrl--up",onClick:function(){return e.handleClick("up")}},"+"),f.default.createElement("input",c({},p,n,{ref:function(t){e.input=t},type:"number",className:"Van-NumberInput-input"})))}}]),t}(l.PureComponent);m.defaultProps={input:{},meta:{},step:1},m.propTypes={input:b.default.object,meta:b.default.object,step:b.default.number},t.default=m},332:function(e,t){}})});