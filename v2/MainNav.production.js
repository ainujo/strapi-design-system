!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("styled-components"),require("react-dom"),require("@strapi/icons/ChevronRight"),require("@strapi/icons/ChevronLeft")):"function"==typeof define&&define.amd?define("strapiDs",["react","styled-components","react-dom","@strapi/icons/ChevronRight","@strapi/icons/ChevronLeft"],e):"object"==typeof exports?exports.strapiDs=e(require("react"),require("styled-components"),require("react-dom"),require("@strapi/icons/ChevronRight"),require("@strapi/icons/ChevronLeft")):n.strapiDs=e(n.react,n["styled-components"],n["react-dom"],n["@strapi/icons/ChevronRight"],n["@strapi/icons/ChevronLeft"])}(this,(function(n,e,t,r,o){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=51)}([function(n,e,t){n.exports=t(28)()},function(e,t){e.exports=n},function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,t){n.exports=e},function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,t){var r=t(27);n.exports=function(n,e){if(null==n)return{};var t,o,a=r(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,t){"use strict";t.d(e,"a",(function(){return b}));var r,o=t(2),a=t.n(o),i=t(3),c=t.n(i),u=t(8),s=t(1),l=t.n(s),d=t(0),p=t.n(d),f=function(n){return l.a.createElement("div",n)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},g={_hover:p.a.func,background:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.string]),borderColor:p.a.string,children:p.a.oneOfType([p.a.node,p.a.string]),color:p.a.string,flex:p.a.oneOfType([p.a.string,p.a.string]),grow:p.a.oneOfType([p.a.string,p.a.string]),hasRadius:p.a.bool,hiddenS:p.a.bool,hiddenXS:p.a.bool,padding:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingBottom:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingLeft:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingRight:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingTop:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),shadow:p.a.string,shrink:p.a.oneOfType([p.a.string,p.a.string])};f.defaultProps=h,f.propTypes=g;var m={color:!0},b=c.a.div.withConfig({shouldForwardProp:function(n,e){return!m[n]&&e(n)}})(r||(r=a()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(u.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(u.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(u.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(u.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(u.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(u.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(u.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(u.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(u.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));b.defaultProps=h,b.propTypes=g},function(n,e,t){"use strict";t.d(e,"a",(function(){return b}));var r,o=t(2),a=t.n(o),i=t(3),c=t.n(i),u=["alpha","beta","delta","epsilon","omega","pi","sigma"],s=t(1),l=t.n(s),d=t(0),p=t.n(d),f=function(n){return l.a.createElement("div",n)},h={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textAlign:void 0,textTransform:void 0,variant:"omega"},g={ellipsis:p.a.bool,fontSize:p.a.oneOfType([p.a.number,p.a.string]),fontWeight:p.a.string,lineHeight:p.a.oneOfType([p.a.number,p.a.string]),textAlign:p.a.string,textColor:p.a.string,textTransform:p.a.string,variant:p.a.oneOf(u)};f.defaultProps=h,f.propTypes=g;var m={fontSize:!0,fontWeight:!0},b=c.a.span.withConfig({shouldForwardProp:function(n,e){return!m[n]&&e(n)}})(r||(r=a()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-align: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),(function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(n){var e=n.variant,t=n.theme;switch(e){case"alpha":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}}));b.defaultProps=h,b.propTypes=g},function(n,e,t){"use strict";var r=t(11),o=t.n(r),a=t(19),i=t.n(a);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==i()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var a=r,c=o()(a,3),u=c[0],s=c[1],l=c[2],d="".concat(n,": ").concat(t.spaces[u],";");return void 0!==s&&(d+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[s],";\n        }")),void 0!==l&&(d+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[l],";\n        }")),d}var p=t.spaces[r]||r;return"".concat(n,": ").concat(p,";")}}},,function(n,e,t){"use strict";t.d(e,"a",(function(){return v}));var r,o=t(2),a=t.n(o),i=t(3),c=t.n(i),u=t(6),s=t(8),l=t(1),d=t.n(l),p=t(0),f=t.n(p),h=function(n){return d.a.createElement("div",n)},g={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},m={alignItems:f.a.string,basis:f.a.oneOfType([f.a.string,f.a.number]),direction:f.a.string,gap:f.a.oneOfType([f.a.shape({desktop:f.a.number,mobile:f.a.number,tablet:f.a.number}),f.a.number,f.a.arrayOf(f.a.number),f.a.string]),inline:f.a.bool,justifyContent:f.a.string,reverse:f.a.bool,shrink:f.a.number,wrap:f.a.string};h.defaultProps=g,h.propTypes=m;var b={direction:!0},v=c()(u.a).withConfig({shouldForwardProp:function(n,e){return!b[n]&&e(n)}})(r||(r=a()(["\n  align-items: ",";\n  display: ",";\n  flex-direction: ",";\n  flex-shrink: ",";\n  flex-wrap: ",";\n  ","};\n  justify-content: ",";\n"])),(function(n){return n.alignItems}),(function(n){return n.inline?"inline-flex":"flex"}),(function(n){return n.direction}),(function(n){return n.shrink}),(function(n){return n.wrap}),(function(n){var e=n.gap,t=n.theme;return Object(s.a)("gap",e,t)}),(function(n){return n.justifyContent}));v.defaultProps=g,v.propTypes=m},function(n,e,t){var r=t(30),o=t(31),a=t(23),i=t(32);n.exports=function(n,e){return r(n)||o(n,e)||a(n,e)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r,o=t(2),a=t.n(o),i=t(3),c=t.n(i).a.div(r||(r=a()(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"])))},function(n,e,t){"use strict";t.d(e,"a",(function(){return b}));var r,o=t(4),a=t.n(o),i=t(5),c=t.n(i),u=t(2),s=t.n(u),l=t(1),d=t.n(l),p=t(0),f=t.n(p),h=t(3),g=["href","rel","target","disabled","isExternal"],m=t.n(h).a.a(r||(r=s()(["\n  cursor: pointer;\n"]))),b=d.a.forwardRef((function(n,e){var t=n.href,r=n.rel,o=n.target,i=n.disabled,u=n.isExternal,s=c()(n,g);return d.a.createElement(m,a()({ref:e,target:u?"_blank":o,rel:u?r:void 0,href:i?"#":t,disabled:i},s))}));b.displayName="BaseLink",b.defaultProps={disabled:!1,href:void 0,isExternal:!1,rel:"noreferrer noopener",target:"_self"},b.propTypes={disabled:f.a.bool,href:f.a.string,isExternal:f.a.bool,rel:f.a.string,target:f.a.string}},function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(1),o=0,a=function(n,e){return Object(r.useRef)(e||"".concat(n,"-").concat(++o)).current}},function(n,e){n.exports=function(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n},n.exports.default=n.exports,n.exports.__esModule=!0},,,,function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,t){"use strict";t.d(e,"a",(function(){return O}));var r,o,a=t(4),i=t.n(a),c=t(5),u=t.n(c),s=t(2),l=t.n(s),d=t(1),p=t.n(d),f=t(0),h=t.n(f),g=t(3),m=t.n(g),b=t(10),v=["horizontal","spacing","size"],y={size:!0},x=m()(b.a).withConfig({shouldForwardProp:function(n,e){return!y[n]&&e(n)}})(r||(r=l()(["\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: ",";\n  }\n"])),(function(n){var e=n.theme,t=n.spacing;return e.spaces[t]})),w=m()(b.a).withConfig({shouldForwardProp:function(n,e){return!y[n]&&e(n)}})(o||(o=l()(["\n  & > * {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  & > * + * {\n    margin-left: ",";\n  }\n"])),(function(n){var e=n.theme,t=n.spacing;return e.spaces[t]})),O=Object(d.forwardRef)((function(n,e){var t=n.horizontal,r=n.spacing,o=n.size,a=u()(n,v);return o&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),t?p.a.createElement(w,i()({ref:e,spacing:r||o},a)):p.a.createElement(x,i()({direction:"column",alignItems:"stretch",ref:e,spacing:r||o},a))}));O.displayName="Stack",O.defaultProps={horizontal:!1,size:void 0,spacing:void 0},O.propTypes={horizontal:h.a.bool,size:h.a.number,spacing:h.a.number}},,function(n,e){n.exports=t},function(n,e,t){var r=t(24);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},,function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(11),o=t.n(r),a=t(1),i=t(22),c=function(n){var e=n.children,t=Object(a.useRef)(null),r=Object(a.useState)(!1),c=o()(r,2),u=c[0],s=c[1];return Object(a.useLayoutEffect)((function(){return t.current=document.createElement("div"),t.current.setAttribute("data-react-portal","true"),document.body.appendChild(t.current),s(!0),function(){var n;null===(n=t.current)||void 0===n||n.remove()}}),[]),u&&t.current?Object(i.createPortal)(e,t.current):null}},function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,t){"use strict";var r=t(29);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){c=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},,,function(n,e){n.exports=r},function(n,e){n.exports=o},function(n,e,t){"use strict";t.d(e,"a",(function(){return P}));var r,o=t(4),a=t.n(o),i=t(15),c=t.n(i),u=t(5),s=t.n(u),l=t(2),d=t.n(l),p=t(1),f=t.n(p),h=t(0),g=t.n(h),m=t(3),b=t.n(m),v=t(6),y=t(7),x=t(26),w=t(11),O=t.n(w),E=function(n,e,t){var r=n.getBoundingClientRect(),o=e.getBoundingClientRect();return"bottom"===t?function(n,e){var t=(n.width-e.width)/2;return{left:e.left-t,top:e.top+e.height+8+window.pageYOffset}}(r,o):"right"===t?function(n,e){var t=(n.height-e.height)/2;return{left:e.left+e.width+8,top:e.top-t+window.pageYOffset}}(r,o):"left"===t?function(n,e){var t=(n.height-e.height)/2;return{left:e.left-n.width-8,top:e.top-t+window.pageYOffset}}(r,o):function(n,e){var t=(n.width-e.width)/2,r=e.left-t,o=e.top-n.height-8+window.pageYOffset,a=window.innerWidth-e.right;return e.left+n.width-a>window.innerWidth?(r=e.left-n.width-8,o=e.top+window.scrollY-e.height/2):r<0?(r=e.width+e.left+8,o=e.top+window.scrollY-n.height/2+8):o<0&&r>0&&(o=e.top+e.height+8),{left:r,top:o}}(r,o)},j=t(14),C=t(12),T=["children","label","description","delay","position","id"],R=["visible"];function S(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var k=b()(v.a)(r||(r=d()(["\n  position: absolute;\n  /* z-index exist because of its position inside Modals */\n  z-index: 4;\n  display: ",";\n"])),(function(n){return n.visible?"revert":"none"})),P=function(n){var e=n.children,t=n.label,r=n.description,o=n.delay,i=n.position,u=n.id,l=s()(n,T),d=Object(j.a)("tooltip",u),h=Object(j.a)("description"),g=function(n){var e=Object(p.useState)(!1),t=O()(e,2),r=t[0],o=t[1],a=Object(p.useRef)(),i=function(){a.current&&clearTimeout(a.current)};Object(p.useEffect)((function(){return function(){i()}}),[]);return{visible:r,onFocus:function(){o(!0)},onBlur:function(){o(!1)},onMouseEnter:function(){a.current=setTimeout((function(){o(!0)}),n)},onMouseLeave:function(){i(),o(!1)}}}(o),m=g.visible,b=s()(g,R),v=function(n,e){var t=Object(p.useRef)(null),r=Object(p.useRef)(null);return Object(p.useLayoutEffect)((function(){if(n){var o=t.current,a=r.current,i=E(o,a,e);o.style.left="".concat(i.left,"px"),o.style.top="".concat(i.top,"px")}}),[n]),{tooltipWrapperRef:t,toggleSourceRef:r}}(m,i),w=v.tooltipWrapperRef,P=v.toggleSourceRef,_=f.a.cloneElement(e,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?S(Object(t),!0).forEach((function(e){c()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({tabIndex:0,"aria-labelledby":t?d:void 0,"aria-describedby":r?d:void 0},b));return f.a.createElement(f.a.Fragment,null,f.a.createElement(x.a,null,f.a.createElement(k,a()({id:d,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:w,visible:m},l),m&&f.a.createElement(C.a,{id:h},r),f.a.createElement(y.a,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0"},t||r))),f.a.createElement("span",{ref:P},_))};P.defaultProps={delay:500,id:void 0,position:"top",label:void 0,description:void 0},P.propTypes={children:g.a.node.isRequired,delay:g.a.number,description:g.a.string,id:g.a.string,label:g.a.string,position:g.a.oneOf(["top","left","bottom","right"])}},function(n,e,t){"use strict";t.d(e,"a",(function(){return w}));var r,o=t(4),a=t.n(o),i=t(5),c=t.n(i),u=t(2),s=t.n(u),l=t(1),d=t.n(l),p=t(3),f=t.n(p),h=t(0),g=t.n(h),m=Object(l.createContext)({gap:0,gridCols:12}),b=t(6),v=t(8),y=["gap","gridCols"],x=f()(b.a)(r||(r=s()(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  ","\n"])),(function(n){return n.gridCols}),(function(n){var e=n.theme,t=n.gap;return Object(v.a)("gap",t,e)})),w=function(n){var e=n.gap,t=n.gridCols,r=c()(n,y);return d.a.createElement(m.Provider,{value:{gap:e,gridCols:t}},d.a.createElement(x,a()({gap:e,gridCols:t},r)))};w.defaultProps={gap:0,gridCols:12},w.propTypes={gap:g.a.oneOfType([g.a.number,g.a.arrayOf(g.a.number)]),gridCols:g.a.number};var O,E=["col","xs","s"],j=f.a.div(O||(O=s()(["\n  grid-column: span ",";\n  max-width: 100%;\n\n  "," {\n    grid-column: span ",";\n  }\n\n  "," {\n    grid-column: span ",";\n  }\n"])),(function(n){return n.col}),(function(n){return n.theme.mediaQueries.tablet}),(function(n){return n.s}),(function(n){return n.theme.mediaQueries.mobile}),(function(n){return n.xs})),C=function(n){var e=n.col,t=n.xs,r=n.s,o=c()(n,E),a=Object(l.useContext)(m),i=a.gap,u=a.gridCols;return d.a.createElement(j,{gap:i,gridCols:u,col:e,xs:t,s:r},d.a.createElement(b.a,o))};C.defaultProps={col:void 0,s:void 0,xs:void 0},C.propTypes={col:g.a.number,s:g.a.number,xs:g.a.number}},function(n,e,t){"use strict";t.d(e,"a",(function(){return h}));var r=t(4),o=t.n(r),a=t(5),i=t.n(a),c=t(1),u=t.n(c),s=t(0),l=t.n(s),d=t(10),p=t(7),f=["active","textColor","backgroundColor","children","minWidth"],h=function(n){var e=n.active,t=n.textColor,r=n.backgroundColor,a=n.children,c=n.minWidth,s=i()(n,f);return u.a.createElement(d.a,o()({inline:!0,alignItem:"center",justifyContent:"center",minWidth:c,padding:1,background:e?"primary100":r,hasRadius:!0},s),u.a.createElement(p.a,{variant:"sigma",textColor:e?"primary600":t},a))};h.defaultProps={active:!1,backgroundColor:"neutral100",minWidth:5,textColor:"neutral600"},h.propTypes={active:l.a.bool,backgroundColor:l.a.string,children:l.a.oneOfType([l.a.number,l.a.string]).isRequired,minWidth:l.a.number,textColor:l.a.string}},function(n,e,t){"use strict";t.d(e,"a",(function(){return v}));var r,o=t(4),a=t.n(o),i=t(5),c=t.n(i),u=t(2),s=t.n(u),l=t(1),d=t.n(l),p=t(0),f=t.n(p),h=t(6),g=t(3),m=["unsetMargin"],b=t.n(g)()(h.a)(r||(r=s()(["\n  height: 1px;\n  border: none;\n  ","\n"])),(function(n){return n.unsetMargin?"margin: 0;":""})),v=function(n){var e=n.unsetMargin,t=c()(n,m);return d.a.createElement(b,a()({},t,{as:"hr",unsetMargin:e}))};v.defaultProps={background:"neutral150",unsetMargin:!0},v.propTypes={background:f.a.string,unsetMargin:f.a.bool}},,,,,,,,,,,function(n,e,t){"use strict";t.r(e),t.d(e,"MainNav",(function(){return w})),t.d(e,"NavBrand",(function(){return z})),t.d(e,"NavLink",(function(){return Y})),t.d(e,"NavSection",(function(){return V})),t.d(e,"NavSections",(function(){return G})),t.d(e,"NavUser",(function(){return mn})),t.d(e,"NavCondense",(function(){return Rn}));var r,o=t(4),a=t.n(o),i=t(5),c=t.n(i),u=t(2),s=t.n(u),l=t(1),d=t.n(l),p=t(3),f=t.n(p),h=t(0),g=t.n(h),m=t(38),b=Object(l.createContext)(),v=function(){return Object(l.useContext)(b)},y=["condensed"],x=f()(m.a)(r||(r=s()(["\n  width: ",";\n  background: ",";\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  z-index: 2;\n  border-right: 1px solid ",";\n"])),(function(n){return n.condensed?"max-content":"".concat(14,"rem")}),(function(n){return n.theme.colors.neutral0}),(function(n){return n.theme.colors.neutral150})),w=function(n){var e=n.condensed,t=c()(n,y);return d.a.createElement(b.Provider,{value:e},d.a.createElement(x,a()({as:"nav",condensed:e},t)))};w.defaultProps={condensed:!1},w.propTypes={condensed:g.a.bool};var O,E,j=t(6),C=t(7),T=t(10),R=t(12),S=t(13),k=["workplace","title","icon"],P=f.a.div(O||(O=s()(["\n  border-radius: ",";\n\n  svg,\n  img {\n    height: ",";\n    width: ",";\n  }\n"])),(function(n){return n.theme.borderRadius}),(function(n){var e=n.condensed;return"".concat(e?2.5:2,"rem")}),(function(n){var e=n.condensed;return"".concat(e?2.5:2,"rem")})),_=f()(S.a)(E||(E=s()(["\n  text-decoration: unset;\n  color: inherit;\n"]))),z=d.a.forwardRef((function(n,e){var t=n.workplace,r=n.title,o=n.icon,i=c()(n,k);return v()?d.a.createElement(S.a,a()({ref:e},i),d.a.createElement(j.a,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4},d.a.createElement(P,{condensed:!0},o,d.a.createElement(R.a,null,d.a.createElement("span",null,r),d.a.createElement("span",null,t))))):d.a.createElement(_,a()({ref:e},i),d.a.createElement(j.a,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4},d.a.createElement(T.a,null,d.a.createElement(P,{"aria-hidden":!0,tabIndex:-1},o),d.a.createElement(j.a,{paddingLeft:2},d.a.createElement(C.a,{fontWeight:"bold",textColor:"neutral800",as:"span"},r,d.a.createElement(R.a,{as:"span"},t)),d.a.createElement(C.a,{variant:"pi",as:"p",textColor:"neutral600","aria-hidden":!0},t)))))}));z.displayName="NavBrand",z.defaultProps={to:"/"},z.propTypes={icon:g.a.node.isRequired,title:g.a.string.isRequired,to:g.a.string,workplace:g.a.string.isRequired};var M,L,W,q,A=t(37),B=t(39),N=["children","icon","badgeContent","badgeAriaLabel"],I=f()(j.a)(M||(M=s()(["\n  svg {\n    width: 1rem;\n    height: 1rem;\n  }\n"]))),H=f()(S.a)(L||(L=s()(["\n  position: relative;\n  text-decoration: none;\n  display: block;\n  border-radius: ",";\n  background: ",";\n\n  "," {\n    color: ",";\n  }\n\n  svg path {\n    fill: ",";\n  }\n\n  &:hover {\n    background: ",";\n\n    "," {\n      color: ",";\n    }\n\n    svg path {\n      fill: ",";\n    }\n  }\n\n  &.active {\n    background: ",";\n\n    svg path {\n      fill: ",";\n    }\n\n    "," {\n      color: ",";\n      font-weight: 500;\n    }\n  }\n"])),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.colors.neutral0}),C.a,(function(n){return n.theme.colors.neutral600}),(function(n){return n.theme.colors.neutral500}),(function(n){return n.theme.colors.neutral100}),C.a,(function(n){return n.theme.colors.neutral700}),(function(n){return n.theme.colors.neutral600}),(function(n){return n.theme.colors.primary100}),(function(n){return n.theme.colors.primary600}),C.a,(function(n){return n.theme.colors.primary600})),D=f()(T.a)(W||(W=s()(["\n  padding: ",";\n"])),(function(n){var e=n.theme;return"".concat(e.spaces[2]," ").concat(e.spaces[3])})),F=f()(B.a)(q||(q=s()(["\n  ","\n\n  "," {\n    //find a solution to remove !important\n    color: "," !important;\n    line-height: 0;\n  }\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: ",";\n  height: ",";\n  padding: ",";\n  border-radius: ",";\n  background: ",";\n"])),(function(n){return n.condensed&&"\n\t  position: absolute;\n    transform: translate(35%, -50%);\n    top: 0;\n    right: 0;\n  "}),C.a,(function(n){return n.theme.colors.neutral0}),(function(n){return n.theme.spaces[6]}),(function(n){return n.theme.spaces[5]}),(function(n){var e=n.theme;return"0 ".concat(e.spaces[2])}),(function(n){return n.theme.spaces[10]}),(function(n){return n.theme.colors.primary600})),Y=d.a.forwardRef((function(n,e){var t=n.children,r=n.icon,o=n.badgeContent,i=n.badgeAriaLabel,u=c()(n,N);return v()?d.a.createElement(H,a()({ref:e},u),d.a.createElement(A.a,{position:"right",label:t},d.a.createElement(D,{as:"span",justifyContent:"center"},d.a.createElement(I,{"aria-hidden":!0,paddingRight:0,as:"span"},r),o&&d.a.createElement(F,{condensed:!0,"aria-label":i},o)))):d.a.createElement(H,a()({ref:e},u),d.a.createElement(D,{as:"span",justifyContent:"space-between"},d.a.createElement(T.a,null,d.a.createElement(I,{"aria-hidden":!0,paddingRight:3,as:"span"},r),d.a.createElement(C.a,null,t)),o&&d.a.createElement(F,{justifyContent:"center","aria-label":i},o)))}));Y.displayName="NavLink",Y.defaultProps={badgeContent:void 0,badgeAriaLabel:void 0},Y.propTypes={badgeAriaLabel:g.a.string,badgeContent:g.a.oneOfType([g.a.string,g.a.number]),children:g.a.string.isRequired,icon:g.a.node.isRequired};var Q=t(20),U=t(40),X=["label","children"],V=function(n){var e=n.label,t=n.children,r=c()(n,X);return v()?d.a.createElement(Q.a,{spacing:2},d.a.createElement(j.a,{paddingTop:1,paddingBottom:1,background:"neutral0",hasRadius:!0,as:"span"},d.a.createElement(U.a,null),d.a.createElement(R.a,null,d.a.createElement("span",null,e))),d.a.createElement(Q.a,a()({as:"ul",spacing:2},r),l.Children.map(t,(function(n,e){return d.a.createElement("li",{key:e},n)})))):d.a.createElement(Q.a,{spacing:2},d.a.createElement(j.a,{paddingTop:1,paddingBottom:1,background:"neutral0",paddingRight:3,paddingLeft:3,hasRadius:!0,as:"span"},d.a.createElement(C.a,{variant:"sigma",textColor:"neutral600"},e)),d.a.createElement(Q.a,a()({as:"ul",spacing:2},r),l.Children.map(t,(function(n,e){return d.a.createElement("li",{key:e},n)}))))};V.propTypes={children:g.a.node.isRequired,label:g.a.string.isRequired};var $=["children"],G=function(n){var e=n.children,t=c()(n,$);return d.a.createElement(j.a,{paddingLeft:3,paddingRight:2,paddingTop:3},d.a.createElement(Q.a,a()({as:"ul",spacing:4},t),l.Children.map(e,(function(n,e){return d.a.createElement("li",{key:e},n)}))))};G.propTypes={children:g.a.node.isRequired};var J,K,Z,nn,en,tn,rn=t(11),on=t.n(rn),an=f.a.img(J||(J=s()(["\n  border-radius: 50%;\n  object-fit: cover;\n  display: block;\n  position: relative;\n"]))),cn=f.a.div(K||(K=s()(["\n  position: relative;\n  width: ","rem;\n  height: ","rem;\n  z-index: ",";\n"])),1.625,1.625,(function(n){return n.hovering?1:void 0})),un=f.a.img(Z||(Z=s()(["\n  border-radius: 50%;\n  object-fit: cover;\n  position: absolute;\n  transform: translate(-","px, -100%);\n  margin-top: -",";\n"])),19,(function(n){return n.theme.spaces[1]})),sn=f.a.div(nn||(nn=s()(["\n  z-index: 1;\n  border-radius: 30%;\n  position: absolute;\n  width: ","rem;\n  height: ","rem;\n  background: ",";\n  opacity: 0.4;\n"])),1.625,1.625,(function(n){return n.theme.colors.neutral0})),ln=function(n){var e=n.src,t=n.alt,r=n.preview,o=Object(l.useState)(!1),a=on()(o,2),i=a[0],c=a[1];return d.a.createElement("span",null,r&&i?d.a.createElement(un,{"aria-hidden":!0,alt:"",width:"".concat(64,"px"),height:"".concat(64,"px"),src:!0===r?e:r}):null,d.a.createElement(cn,{hovering:r&&i,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},r&&i?d.a.createElement(sn,null):null,d.a.createElement(an,{src:e,alt:t,width:"".concat(26,"px"),height:"".concat(26,"px")})))},dn=f()(T.a)(en||(en=s()(["\n  span {\n    line-height: 0;\n  }\n"]))),pn=function(n){var e=n.children;return d.a.createElement(dn,{borderRadius:"50%",width:"".concat(26,"px"),height:"".concat(26,"px"),background:"primary600",justifyContent:"center"},d.a.createElement(C.a,{fontWeight:"bold",textColor:"buttonNeutral0",fontSize:0,textTransform:"uppercase"},e))};pn.propTypes={children:g.a.node.isRequired},ln.defaultProps={preview:void 0},ln.propTypes={alt:g.a.string.isRequired,preview:g.a.oneOfType([g.a.string,g.a.bool]),src:g.a.string.isRequired};f()(T.a)(tn||(tn=s()(["\n  & > * + * {\n    margin-left: -","px;\n  }\n"])),13);var fn,hn=["src","children","initials"],gn=f()(j.a)(fn||(fn=s()(["\n  text-decoration: none;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  border-top: 1px solid ",";\n"])),(function(n){return n.theme.colors.neutral150})),mn=d.a.forwardRef((function(n,e){var t=n.src,r=n.children,o=n.initials,i=c()(n,hn),u=v();return d.a.createElement(gn,a()({paddingTop:3,paddingBottom:3,paddingLeft:5,paddingRight:5},i),d.a.createElement(T.a,{as:"button",justifyContent:u?"center":void 0,ref:e},t?d.a.createElement(ln,{src:t,alt:"","aria-hidden":!0}):d.a.createElement(pn,null,o),u?d.a.createElement(R.a,null,d.a.createElement("span",null,r)):d.a.createElement(j.a,{width:"".concat(8.125,"rem"),paddingLeft:2,as:"span"},d.a.createElement(C.a,{ellipsis:!0,textColor:"neutral600"},r))))}));mn.displayName="NavUser",mn.defaultProps={src:void 0,initials:void 0},mn.propTypes={children:g.a.node.isRequired,initials:g.a.node,src:g.a.string};var bn,vn=t(35),yn=t.n(vn),xn=t(36),wn=t.n(xn),On=f()(j.a)(bn||(bn=s()(["\n  path {\n    fill: ",";\n  }\n  ","\n"])),(function(n){var e=n.color;return n.theme.colors[e]}),(function(n){var e=n.theme;return(0,n.colors)(e)})),En=d.a.forwardRef((function(n,e){return d.a.createElement(On,a()({ref:e},n))}));En.displayName="Icon",En.defaultProps={color:"neutral600",colors:function(){}},En.propTypes={color:g.a.string,colors:g.a.func};var jn,Cn=["children"],Tn=f.a.button(jn||(jn=s()(["\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: ","rem; // 9 is the height of the svg and 4 is the padding below\n  right: ",";\n  transform: ",";\n  z-index: 2;\n  width: ","rem;\n  height: ","rem;\n\n  svg {\n    width: ","rem;\n    height: ","rem;\n  }\n"])),(function(n){return n.theme.colors.neutral0}),(function(n){return n.theme.colors.neutral150}),(function(n){return n.theme.borderRadius}),13/16,(function(n){var e=n.theme;return n.condensed?0:e.spaces[5]}),(function(n){return n.condensed?"translateX(50%)":void 0}),1.125,25/16,6/16,9/16),Rn=function(n){var e=n.children,t=c()(n,Cn),r=v();return d.a.createElement(Tn,a()({as:"button",condensed:r},t),d.a.createElement(En,{as:r?yn.a:wn.a,"aria-hidden":!0,color:"neutral600"}),d.a.createElement(R.a,null,e))};Rn.propTypes={children:g.a.string.isRequired}}])}));