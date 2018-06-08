!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"),require("classnames"));else if("function"==typeof define&&define.amd)define(["react","prop-types","classnames"],t);else{var n="object"==typeof exports?t(require("react"),require("prop-types"),require("classnames")):t(e.react,e["prop-types"],e.classnames);for(var a in n)("object"==typeof exports?exports:e)[a]=n[a]}}(this,function(e,t,n){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=309)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},16:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),d=a(c),f=n(1),p=a(f),h=n(2),v=a(h),b=n(19),m=a(b);n(21);var y=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.source,a=e.animation,o=r(e,["className","source","animation"]);return(0,m.default)(n)?d.default.createElement("span",s({className:(0,v.default)("Van-Icon",t),dangerouslySetInnerHTML:{__html:""===a?n:n.replace("<svg ",'<svg class="Van-u-animation--'+a+'" ')}},o)):null}}]),t}(c.PureComponent);y.defaultProps={className:"",source:"",animation:""},y.propTypes={className:p.default.string,source:p.default.string,animation:p.default.oneOf(["","spin","pulse"])},t.default=y},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(20),r=/^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i;t.default=function(e){return r.test(e.toString().replace(a,""))}},2:function(e,t){e.exports=n},20:function(e,t,n){"use strict";e.exports=/<!--([\s\S]*?)-->/g},21:function(e,t){},309:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.DashboardHeaderNotifications=t.DashboardHeaderDropdown=void 0;var r=n(310);Object.defineProperty(t,"DashboardHeaderDropdown",{enumerable:!0,get:function(){return a(r).default}});var o=n(313);Object.defineProperty(t,"DashboardHeaderNotifications",{enumerable:!0,get:function(){return a(o).default}});var l=n(0),i=a(l),s=n(1),u=a(s),c=n(316),d=a(c);n(317);var f=function(e){return i.default.createElement("header",{className:"Van-DashboardHeader"},i.default.createElement("section",{className:"Van-DashboardHeader-logoWrapper"},i.default.createElement("div",{className:"Van-DashboardHeader-logoText"},"Mijn"),i.default.createElement("span",{className:"Van-DashboardHeader-logo",dangerouslySetInnerHTML:{__html:d.default}})),e.children&&i.default.createElement("section",{className:"Van-DashboardHeader-addons"},e.children))};f.defaultProps={children:null},f.propTypes={children:u.default.node},t.default=f},310:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),u=a(s),c=n(1),d=a(c),f=n(2),p=a(f),h=n(16),v=a(h),b=n(83),m=a(b),y=n(84),g=a(y),w=n(311),D=a(w),_=n(312),E=a(_),O=function(e){function t(){var e,n,a,l;r(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.state={isActive:!1},a.toggleMenu=function(){a.setState({isActive:!a.state.isActive})},a.closeMenu=function(){a.setState({isActive:!1})},a.preventDefault=function(e){return e.preventDefault()},l=n,o(a,l)}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.subtitle,a=e.icon,r=e.children,o=this.state.isActive,l=(0,p.default)("Van-DashboardHeaderDropdown",{"Van-DashboardHeaderDropdown--active":this.state.isActive});return u.default.createElement("div",{className:l},u.default.createElement("div",{className:"Van-DashboardHeaderDropdown-captionWrapper",onClick:this.toggleMenu,onBlur:this.closeMenu,tabIndex:"0"},a&&u.default.createElement("div",{className:"Van-DashboardHeaderDropdown-iconWrapper"},u.default.createElement(v.default,{source:a})),u.default.createElement("div",{className:"Van-DashboardHeaderDropdown-caption"},u.default.createElement("div",{className:"Van-DashboardHeaderDropdown-title"},t),n&&u.default.createElement("div",{className:"Van-DashboardHeaderDropdown-subtitle"},n)),u.default.createElement("div",{className:"Van-DashboardHeaderDropdown-toggle"},u.default.createElement(v.default,{source:o?m.default:g.default}))),r&&o&&u.default.createElement("div",{className:"Van-DashboardHeaderDropdown-optionWrapper",onMouseDown:this.preventDefault},r))}}]),t}(u.default.Component);O.propTypes={icon:d.default.string,title:d.default.string.isRequired,subtitle:d.default.oneOfType([d.default.string,d.default.number]),children:d.default.node},O.defaultProps={subtitle:null,children:null,icon:null},O.SectionHeader=D.default,O.Option=E.default,t.default=O},311:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(1),i=a(l),s=function(e){var t=e.title;return o.default.createElement("div",{className:"Van-DashboardHeaderDropdown-sectionHeader"},t)};s.propTypes={title:i.default.node.isRequired},t.default=s},312:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(1),i=a(l),s=n(16),u=a(s),c=function(e){var t=e.icon,n=e.caption,a=e.subcaption,r=e.handleClick;return o.default.createElement("div",{className:"Van-DashboardHeaderDropdownEntry",onClick:r},null!==t&&o.default.createElement("div",{className:"Van-DashboardHeaderDropdownEntry-iconWrapper"},o.default.createElement(u.default,{source:t})),o.default.createElement("div",{className:"Van-DashboardHeaderDropdownEntry-option"},o.default.createElement("div",{className:"Van-DashboardHeaderDropdownEntry-caption"},n),a&&o.default.createElement("div",{className:"Van-DashboardHeaderDropdownEntry-subcaption"},a)))};c.propTypes={icon:i.default.string,caption:i.default.node.isRequired,subcaption:i.default.string,handleClick:i.default.func.isRequired},c.defaultProps={icon:null,subcaption:null},t.default=c},313:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),u=a(s),c=n(1),d=a(c),f=n(2),p=a(f),h=n(16),v=a(h),b=n(314),m=a(b),y=n(315),g=a(y),w=function(e){function t(){var e,n,a,l;r(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.state={isActive:!1},a.toggle=function(){a.props.children&&a.setState({isActive:!a.state.isActive})},a.hide=function(){a.props.children&&a.setState({isActive:!1})},l=n,o(a,l)}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props.children,t=u.default.Children.count(e),n=(0,p.default)("Van-DashboardHeaderNotifications",{"Van-DashboardHeaderNotifications--active":this.state.isActive},{"Van-DashboardHeaderNotifications--hasContent":t>0});return u.default.createElement("div",{className:n,onBlur:this.hide,tabIndex:"0"},u.default.createElement("div",{className:"Van-DashboardHeaderNotifications-toggle",onClick:this.toggle},t>0&&u.default.createElement("div",{className:"Van-DashboardHeaderNotifications-count"},t),u.default.createElement(v.default,{source:m.default})),t>0&&this.state.isActive&&u.default.createElement("div",{className:"Van-DashboardHeaderNotifications-listWrapper",onMouseDown:function(e){return e.preventDefault()}},e))}}]),t}(u.default.Component);w.propTypes={children:d.default.node},w.defaultProps={children:null},w.Notification=g.default,t.default=w},314:function(e,t){e.exports='<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"></path></svg>'},315:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(1),i=a(l),s=n(16),u=a(s),c=n(85),d=a(c),f=function(e){var t=e.close,n=e.title,a=e.children;return o.default.createElement("div",{className:"Van-DashboardHeaderNotifications-notification"},t&&o.default.createElement("div",{className:"Van-DashboardHeaderNotifications-notificationClose",onClick:t},o.default.createElement(u.default,{source:d.default})),n&&o.default.createElement("p",{className:"Van-DashboardHeaderNotifications-title"},n),a)};f.propTypes={close:i.default.func,children:i.default.node.isRequired,title:i.default.node.isRequired},f.defaultProps={close:null},t.default=f},316:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 31" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M19.025.397v21.27H.088V.397h18.937z"></path><path id="c" d="M19.12 21.667H.185V.397H19.12v21.27z"></path></defs><g fill="none" fill-rule="evenodd"><path fill="#343D47" d="M37.12 10.05c-1.383-.663-2.93-1.037-4.568-1.037-5.818 0-10.535 4.716-10.535 10.534 0 5.817 4.717 10.533 10.535 10.533 1.638 0 3.185-.373 4.568-1.04.195.605.767 1.04 1.433 1.04h4.53V9.013h-4.53c-.666 0-1.238.433-1.433 1.038m-4.568 14.005c-2.49 0-4.506-2.022-4.506-4.508 0-2.49 2.016-4.508 4.506-4.508 2.358 0 4.294 1.81 4.49 4.117v.774c-.196 2.313-2.133 4.125-4.49 4.125M129.23 30.185c-1.635 0-3.183-.374-4.562-1.04-.202.607-.76 1.04-1.435 1.04h-4.527V0h6.04v10.123c1.36-.645 2.883-1.005 4.483-1.005 5.827 0 10.537 4.717 10.537 10.535 0 5.816-4.71 10.532-10.538 10.532m0-15.042c-2.355 0-4.287 1.81-4.484 4.124v.773c.197 2.308 2.13 4.12 4.483 4.12 2.494 0 4.517-2.017 4.517-4.507 0-2.49-2.023-4.51-4.518-4.51M166.943 9.154c-7.215 0-10.68 5.68-10.68 10.502v.034c0 4.856 3.465 10.536 10.68 10.536 7.214 0 10.68-5.68 10.68-10.536 0-4.857-3.466-10.536-10.68-10.536m-.016 15.005c-2.356 0-4.287-1.812-4.485-4.12v-.774c.198-2.312 2.13-4.122 4.485-4.122 2.493 0 4.517 2.02 4.517 4.51 0 2.488-2.024 4.505-4.517 4.505M80.65 30.185c1.633 0 3.18-.374 4.56-1.04.2.607.76 1.04 1.435 1.04h4.527V0h-6.04v10.123c-1.36-.645-2.883-1.005-4.483-1.005-5.828 0-10.54 4.717-10.54 10.535 0 5.816 4.712 10.532 10.54 10.532m0-15.042c2.353 0 4.285 1.81 4.482 4.124v.773c-.197 2.308-2.13 4.12-4.483 4.12-2.496 0-4.52-2.017-4.52-4.507 0-2.49 2.024-4.51 4.52-4.51M153.952 8.977c-.117-.003-.23-.018-.348-.018-1.635 0-3.183.374-4.562 1.04-.2-.607-.762-1.04-1.436-1.04h-4.526V30.133h6.044V18.675c0-2.18 2.14-3.69 4.48-3.69.117 0 .232.01.348.02V8.976z"></path><g transform="translate(180.833 8.56)"><path fill="#343D47" d="M9.557 6.427c3.06 0 3.352 2.43 3.352 3.69v11.55h6.115V8.883c0-2.337-.502-6.7-4.824-7.992C12.383.318 10.613.4 10.613.4 8.978.4 7.43.776 6.052 1.44 5.852.833 5.29.4 4.617.4H.087V21.668h6.118V10.115c0-2.422 1.26-3.688 3.352-3.688"></path></g><g transform="translate(47.5 8.56)"><path fill="#343D47" d="M9.653 6.427c3.06 0 3.352 2.43 3.352 3.69v11.55h6.115V8.883c0-2.337-.5-6.7-4.822-7.992-1.82-.573-3.59-.49-3.59-.49-1.634 0-3.18.375-4.56 1.04C5.947.833 5.387.4 4.71.4H.186V21.668H6.3V10.115c0-2.422 1.258-3.688 3.353-3.688"></path></g><path fill="#343D47" d="M112.528 12.073c-1.868-1.975-4.49-3.16-7.545-3.16-6.07 0-10.454 5.136-10.454 10.705 0 5.927 4.85 10.562 10.56 10.562 2.05 0 4.025-.61 5.677-1.796 1.69-1.15 3.09-2.873 4.06-5.102h-6.107c-.72 1.042-1.724 1.87-3.63 1.87-2.332 0-4.346-1.404-4.597-3.523h14.838c.468-3.664-.287-6.86-2.802-9.557m-3.642 5.42h-7.782c-.167-.006-.786-.08-.466-.91.744-1.663 2.407-2.825 4.35-2.825 1.99 0 3.695 1.222 4.407 2.957.21.707-.35.774-.51.777M14.728 8.957L10.645 22.16 6.562 8.957H0l7.593 21.178h6.067l7.632-21.178"></path></g></svg>'},317:function(e,t){},83:function(e,t){e.exports='<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>'},84:function(e,t){e.exports='<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path></svg>'},85:function(e,t){e.exports='<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path></svg>'}})});