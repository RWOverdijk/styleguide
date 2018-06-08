!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"),require("classnames"));else if("function"==typeof define&&define.amd)define(["react","prop-types","classnames"],t);else{var n="object"==typeof exports?t(require("react"),require("prop-types"),require("classnames")):t(e.react,e["prop-types"],e.classnames);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=299)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},134:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=r(s),c=n(1),f=r(c),p=n(2),d=r(p),b=n(16),y=r(b),m=n(83),h=r(m),v=n(84),O=r(v);n(135);var g=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n.toggle=n.toggle.bind(n),n}return i(t,e),u(t,[{key:"componentWillMount",value:function(){this.updateAccordionState({isOpen:this.props.isOpen})}},{key:"componentWillReceiveProps",value:function(e){this.updateAccordionState({isOpen:e.isOpen})}},{key:"getIconMarkup",value:function(){return this.state.isOpen?l.default.createElement(y.default,{source:h.default}):l.default.createElement(y.default,{source:O.default})}},{key:"updateAccordionState",value:function(e){this.setState(e)}},{key:"toggle",value:function(){this.props.disabled||this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.children,r=e.disabled;return l.default.createElement("div",{className:(0,d.default)("Van-Accordion",{"Van-Accordion--disabled":r,"Van-Accordion--open":this.state.isOpen})},l.default.createElement("span",{onClick:this.toggle,className:"Van-Accordion-title"},t,!r&&this.getIconMarkup()),l.default.createElement("div",{className:"Van-Accordion-content"},n))}}]),t}(s.PureComponent);g.defaultProps={isOpen:!1,disabled:!1},g.propTypes={children:f.default.node.isRequired,title:f.default.node.isRequired,isOpen:f.default.bool,disabled:f.default.bool},t.default=g},135:function(e,t){},16:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=r(c),p=n(1),d=r(p),b=n(2),y=r(b),m=n(19),h=r(m);n(21);var v=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.source,r=e.animation,a=o(e,["className","source","animation"]);return(0,h.default)(n)?f.default.createElement("span",s({className:(0,y.default)("Van-Icon",t),dangerouslySetInnerHTML:{__html:""===r?n:n.replace("<svg ",'<svg class="Van-u-animation--'+r+'" ')}},a)):null}}]),t}(c.PureComponent);v.defaultProps={className:"",source:"",animation:""},v.propTypes={className:d.default.string,source:d.default.string,animation:d.default.oneOf(["","spin","pulse"])},t.default=v},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),o=/^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i;t.default=function(e){return o.test(e.toString().replace(r,""))}},2:function(e,t){e.exports=n},20:function(e,t,n){"use strict";e.exports=/<!--([\s\S]*?)-->/g},21:function(e,t){},299:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=r(c),p=n(1),d=r(p),b=n(2),y=r(b),m=n(134),h=r(m);n(300);var v=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.items,r=e.withNumber,a=e.open,i=e.disabled,u=o(e,["className","items","withNumber","open","disabled"]);return f.default.createElement("ul",s({className:(0,y.default)("Van-AccordionList",t)},u),n.map(function(e,t){return f.default.createElement("li",{key:"accordion-list-"+e.description.length,className:(0,y.default)("Van-AccordionList-item",{"Van-AccordionList-item--withNumber":r})},r&&f.default.createElement("span",{className:"Van-AccordionList-number"},t+1),r&&t<n.length-1&&f.default.createElement("span",{className:"Van-AccordionList-dash"}),f.default.createElement(h.default,{title:e.title,isOpen:a,disabled:i},e.description))}))}}]),t}(c.PureComponent);v.defaultProps={className:"",items:[],withNumber:!1,open:!0,disabled:!1},v.propTypes={className:d.default.string,items:d.default.arrayOf(d.default.shape({title:d.default.string,description:d.default.oneOfType([d.default.string,d.default.node])})),withNumber:d.default.bool,open:d.default.bool,disabled:d.default.bool},t.default=v},300:function(e,t){},83:function(e,t){e.exports='<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>'},84:function(e,t){e.exports='<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path></svg>'}})});