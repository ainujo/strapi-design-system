!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("strapiDs",["react"],t):"object"==typeof exports?exports.strapiDs=t(require("react")):e.strapiDs=t(e.react)}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=57)}([function(e,t,r){e.exports=r(22)()},function(t,r){t.exports=e},,,,function(e,t,r){var n=r(30);e.exports=function(e,t){if(null==e)return{};var r,o,u=n(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},,,,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},,,,,,,,,,function(e,t,r){"use strict";var n=r(23);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(24);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},,,,,function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t,r){var n=r(45),o=r(46),u=r(25),s=r(47);e.exports=function(e){return n(e)||o(e)||u(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},,,function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(32),o=r.n(n),u=function(e,t){return o()(e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter((function(e){return!e.hasAttribute("disabled")&&(!!t||"-1"!==e.getAttribute("tabindex"))}))},s=function(e){return e.filter((function(e){return"INPUT"===e.tagName&&("checkbox"!==e.type&&"radio"!==e.type)}))}},,,,,,,,,,function(e,t,r){var n=r(24);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},,,,,,,,,,function(e,t,r){"use strict";r.r(t),r.d(t,"FocusTrap",(function(){return y}));var n=r(6),o=r.n(n),u=r(5),s=r.n(u),a=r(1),c=r.n(a),i=r(0),f=r.n(i),p=r(35),l=r(12),d=["onEscape","restoreFocus"],y=function(e){var t=e.onEscape,r=e.restoreFocus,n=s()(e,d),u=Object(a.useRef)(null);Object(a.useEffect)((function(){if(r){var e=document.activeElement;return function(){e.focus()}}}),[r]),Object(a.useEffect)((function(){if(u.current){var e=Object(p.a)(u.current);if(e.length>0)e[0].focus();else console.warn("[FocusTrap]: it seems there are no focusable elements in the focus trap tree. Make sure there s at least one.")}}),[]);return c.a.createElement("div",o()({ref:u,onKeyDown:function(e){if(e.key===l.a.ESCAPE&&t)return t();if(e.key===l.a.TAB){var r=Object(p.a)(u.current);if(r.length>0){var n=r[0],o=r[r.length-1];e.shiftKey?n===document.activeElement&&(e.preventDefault(),o.focus()):o===document.activeElement&&(e.preventDefault(),n.focus())}}}},n))};y.defaultProps={restoreFocus:!0},y.propTypes={onEscape:f.a.func,restoreFocus:f.a.bool}}])}));