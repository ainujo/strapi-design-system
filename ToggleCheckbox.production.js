!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define("strapiDs",["react","styled-components"],e):"object"==typeof exports?exports.strapiDs=e(require("react"),require("styled-components")):n.strapiDs=e(n.react,n["styled-components"])}(this,(function(n,e){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=86)}([function(n,e,t){n.exports=t(22)()},function(e,t){e.exports=n},function(n,t){n.exports=e},function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return m}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(7),c=t(1),l=t.n(c),d=t(0),f=t.n(d),p=function(n){return l.a.createElement("div",n)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},g={_hover:f.a.func,background:f.a.string,basis:f.a.oneOfType([f.a.string,f.a.string]),borderColor:f.a.string,children:f.a.oneOfType([f.a.node,f.a.string]),color:f.a.string,flex:f.a.oneOfType([f.a.string,f.a.string]),grow:f.a.oneOfType([f.a.string,f.a.string]),hasRadius:f.a.bool,hiddenS:f.a.bool,hiddenXS:f.a.bool,padding:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingBottom:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingLeft:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingRight:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingTop:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),shadow:f.a.string,shrink:f.a.oneOfType([f.a.string,f.a.string])};p.defaultProps=h,p.propTypes=g;var b={color:!0},m=u.a.div.withConfig({shouldForwardProp:function(n,e){return!b[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(s.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(s.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(s.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(s.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(s.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(s.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(s.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(s.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(s.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));m.defaultProps=h,m.propTypes=g},function(n,e,t){var r=t(30);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,t){"use strict";var r=t(11),o=t.n(r),i=t(15),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,u=o()(i,3),s=u[0],c=u[1],l=u[2],d="".concat(n,": ").concat(t.spaces[s],";");return void 0!==c&&(d+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==l&&(d+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[l],";\n        }")),d}var f=t.spaces[r]||r;return"".concat(n,": ").concat(f,";")}}},function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return a})),t.d(e,"e",(function(){return u})),t.d(e,"f",(function(){return s})),t.d(e,"g",(function(){return c})),t.d(e,"h",(function(){return l}));var r="alpha",o="beta",i="delta",a="epsilon",u="omega",s="pi",c="sigma",l=[r,o,i,a,u,s,c]},function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return x}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(13),c=t(1),l=t.n(c),d=t(0),f=t.n(d),p=t(8),h=function(n){return l.a.createElement("div",n)},g={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textAlign:void 0,textTransform:void 0,variant:p.e},b={ellipsis:f.a.bool,fontSize:f.a.oneOfType([f.a.number,f.a.string]),fontWeight:f.a.string,lineHeight:f.a.oneOfType([f.a.number,f.a.string]),textAlign:f.a.string,textColor:f.a.string,textTransform:f.a.string,variant:f.a.oneOf(p.h)};h.defaultProps=g,h.propTypes=b;var m={fontSize:!0,fontWeight:!0},x=u.a.span.withConfig({shouldForwardProp:function(n,e){return!m[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-align: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),s.b,(function(n){return n.textAlign}),(function(n){return n.textTransform}),s.a,s.c);x.defaultProps=g,x.propTypes=b},function(n,e,t){"use strict";t.r(e),t.d(e,"Flex",(function(){return x}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(4),c=t(7),l=t(1),d=t.n(l),f=t(0),p=t.n(f),h=function(n){return d.a.createElement("div",n)},g={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},b={alignItems:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.number]),direction:p.a.string,gap:p.a.oneOfType([p.a.shape({desktop:p.a.number,mobile:p.a.number,tablet:p.a.number}),p.a.number,p.a.arrayOf(p.a.number),p.a.string]),inline:p.a.bool,justifyContent:p.a.string,reverse:p.a.bool,shrink:p.a.number,wrap:p.a.string};h.defaultProps=g,h.propTypes=b;var m={direction:!0},x=u()(s.Box).withConfig({shouldForwardProp:function(n,e){return!m[n]&&e(n)}})(r||(r=i()(["\n  align-items: ",";\n  display: ",";\n  flex-direction: ",";\n  flex-shrink: ",";\n  flex-wrap: ",";\n  ","};\n  justify-content: ",";\n"])),(function(n){return n.alignItems}),(function(n){return n.inline?"inline-flex":"flex"}),(function(n){return n.direction}),(function(n){return n.shrink}),(function(n){return n.wrap}),(function(n){var e=n.gap,t=n.theme;return Object(c.a)("gap",e,t)}),(function(n){return n.justifyContent}));x.defaultProps=g,x.propTypes=b},function(n,e,t){var r=t(27),o=t(28),i=t(25),a=t(29);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},,function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"b",(function(){return a}));var r=t(8),o=function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "},i=function(n){var e=n.variant,t=n.theme;switch(e){case r.a:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case r.b:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case r.c:return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case r.d:return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case r.e:return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case r.f:return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case r.g:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}},a=function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}},,function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},,function(n,e,t){"use strict";t.r(e),t.d(e,"VisuallyHidden",(function(){return u}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a).a.div(r||(r=i()(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"])))},,,function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}));var r=function(n){return function(e){var t=e.theme,r=e.size;return t.sizes[n][r]}},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(e){var t=e.theme,r=e.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(n,":focus-within {\n        border: 1px solid ").concat(r?t.colors.danger600:t.colors.primary600,";\n        box-shadow: ").concat(r?t.colors.danger600:t.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},i=function(n){var e=n.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(e.colors.primary600,";\n    }\n  }\n")}},,function(n,e,t){"use strict";var r=t(23);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,t){var r=t(24);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},,function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={input:{S:"".concat(2,"rem"),M:"".concat(2.5,"rem")},accordions:{S:"".concat(3,"rem"),M:"".concat(5.5,"rem")}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(n,e,t){"use strict";t.r(e),t.d(e,"ToggleCheckbox",(function(){return P}));var r,o,i,a,u=t(6),s=t.n(u),c=t(5),l=t.n(c),d=t(3),f=t.n(d),p=t(1),h=t.n(p),g=t(0),b=t.n(g),m=t(2),x=t.n(m),v=t(31),y=t(20),w=t(9),O=t(17),S=t(4),T=t(10),_=["size","onLabel","offLabel","children","checked","disabled","onChange"],j=x.a.label(r||(r=f()(["\n  position: relative;\n  display: inline-block;\n  z-index: 0;\n  width: 100%;\n"]))),z=x()(S.Box)(o||(o=f()(["\n  cursor: ",";\n  // Masks the background of each value\n  overflow: hidden;\n  flex-wrap: wrap;\n\n  ","\n"])),(function(n){return n.disabled?"not-allowed":void 0}),Object(y.c)()),k=x()(T.Flex).attrs({hasRadius:!0})(i||(i=f()(["\n  background-color: ",";\n  border: 1px solid\n    ",";\n  position: relative;\n  user-select: none;\n  z-index: 2;\n  flex: 1 1 50%;\n  /**\n    We declare the defined value because we want the height of the input when \n    the values are in a row to be 40px. But defining a height on the label\n    would break the input when it wraps.\n  */\n  padding-top: ",";\n  padding-bottom: ",";\n"])),(function(n){var e=n.theme,t=n.checked,r=n.disabled;return t?r?e.colors.neutral200:e.colors.neutral0:"transparent"}),(function(n){var e=n.theme,t=n.checked,r=n.disabled;return t&&null!==t?r?e.colors.neutral300:e.colors.neutral200:r?e.colors.neutral150:e.colors.neutral100}),(function(n){var e=n.size;return"".concat("S"===e?"2px":"6px")}),(function(n){var e=n.size;return"".concat("S"===e?"2px":"6px")})),C=x.a.input(a||(a=f()(["\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n"]))),P=h.a.forwardRef((function(n,e){var t=n.size,r=n.onLabel,o=n.offLabel,i=n.children,a=n.checked,u=n.disabled,c=n.onChange,d=l()(n,_),f=a||null===a?"neutral600":"danger700",p=a?"primary600":"neutral600",g=function(n){u||c(n)};return h.a.createElement(j,null,h.a.createElement(O.VisuallyHidden,null,i),h.a.createElement(z,{hasRadius:!0,disabled:u,padding:1,display:"flex",background:u?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},h.a.createElement(k,{size:t,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:null!==a&&!a,disabled:u},h.a.createElement(w.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:u?"neutral700":f},o)),h.a.createElement(k,{size:t,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:null!==a&&a,disabled:u},h.a.createElement(w.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:u?"neutral700":p},r)),h.a.createElement(C,s()({type:"checkbox","aria-disabled":u,onChange:function(n){return g(n)},ref:e},d,{checked:!(null===a||!a)}))))}));P.displayName="ToggleCheckbox",P.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},P.propTypes={checked:b.a.bool,children:b.a.string.isRequired,disabled:b.a.bool,offLabel:b.a.string.isRequired,onChange:b.a.func,onLabel:b.a.string.isRequired,size:b.a.oneOf(Object.keys(v.a.input))}}])}));