!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define("strapiDs",["react","styled-components"],n):"object"==typeof exports?exports.strapiDs=n(require("react"),require("styled-components")):e.strapiDs=n(e.react,e["styled-components"])}(this,(function(e,n){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=95)}({0:function(e,n,t){e.exports=t(22)()},1:function(n,t){n.exports=e},2:function(e,t){e.exports=n},22:function(e,n,t){"use strict";var r=t(23);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},23:function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3:function(e,n){e.exports=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},30:function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},5:function(e,n,t){var r=t(30);e.exports=function(e,n){if(null==e)return{};var t,o,a=r(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a},e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},68:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(1),o=Object(r.createContext)({onChange:function(){},name:"",size:"M"})},80:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(6),o=t.n(r),a=t(5),i=t.n(a),u=t(1),s=t.n(u),c=t(0),l=t.n(c),p=t(68),f=["children","labelledBy","onChange","value","size","name"],d=function(e){var n=e.children,t=e.labelledBy,r=e.onChange,a=e.value,c=e.size,l=e.name,d=i()(e,f),b=Object(u.useRef)(null);return Object(u.useLayoutEffect)((function(){var e,n,t;a||(e=b.current,n='[name="'.concat(l,'"]'),(t=e.querySelectorAll(n))&&t.length>0&&t.item(0).setAttribute("tabindex","0"))}),[a]),s.a.createElement(p.a.Provider,{value:{onChange:r,selected:a,name:l,size:c}},s.a.createElement("div",o()({ref:b,role:"radiogroup","aria-labelledby":t},d),n))};d.defaultProps={value:"",size:"M"},d.propTypes={children:l.a.node.isRequired,labelledBy:l.a.string.isRequired,name:l.a.string.isRequired,onChange:l.a.func.isRequired,size:l.a.oneOf(["M","L"]),value:l.a.string}},81:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var r,o=t(6),a=t.n(o),i=t(5),u=t.n(i),s=t(3),c=t.n(s),l=t(1),p=t.n(l),f=t(0),d=t.n(f),b=t(2),y=t.n(b),x=t(68),m=function(e){return"M"===e.size?"18px":"20px"},h=function(e){return"M"===e.size?"10px":"12px"},v=function(){return"3px"},g=["value","disabled"],O=y.a.input(r||(r=c()(["\n  margin: 0;\n  padding: 0;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 50%;\n  height: ",";\n  width: ",";\n  -webkit-appearance: none;\n\n  &:after {\n    border-radius: 50%;\n    content: '';\n    position: relative;\n    z-index: 1;\n    display: block;\n    height: ",";\n    width: ",";\n    left: ",";\n    top: ",";\n  }\n\n  &:checked:after {\n    background: ",";\n  }\n\n  &:disabled {\n    border: 1px solid ",";\n    background: ",";\n  }\n"])),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.colors.primary600}),m,m,h,h,v,v,(function(e){return e.theme.colors.primary600}),(function(e){return e.theme.colors.carbon300}),(function(e){return e.theme.colors.neutral200})),j=p.a.forwardRef((function(e,n){var t=e.value,r=e.disabled,o=u()(e,g),i=Object(l.useContext)(x.a),s=i.onChange,c=i.selected,f=i.name,d=i.size,b=c===t;return p.a.createElement(O,a()({ref:n,type:"radio",name:f,value:t,tabIndex:b?0:-1,"aria-checked":b,checked:b,disabled:r,size:d,onChange:s},o))}));j.displayName="Radio",j.defaultProps={disabled:!1},j.propTypes={disabled:d.a.bool,value:d.a.string.isRequired}},95:function(e,n,t){"use strict";t.r(n);var r=t(81);t.d(n,"BaseRadio",(function(){return r.a}));var o=t(80);t.d(n,"RadioGroup",(function(){return o.a}))}})}));