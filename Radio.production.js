!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define("strapiDs",["react","styled-components"],e):"object"==typeof exports?exports.strapiDs=e(require("react"),require("styled-components")):n.strapiDs=e(n.react,n["styled-components"])}(this,(function(n,e){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=123)}({0:function(n,e,t){n.exports=t(22)()},1:function(e,t){e.exports=n},11:function(n,e,t){var r=t(27),o=t(28),i=t(25),a=t(29);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},123:function(n,e,t){"use strict";t.r(e),t.d(e,"Radio",(function(){return y})),t.d(e,"RadioGroup",(function(){return x.a}));var r,o=t(5),i=t.n(o),a=t(3),u=t.n(a),s=t(1),c=t.n(s),f=t(0),d=t.n(f),l=t(2),p=t.n(l),h=t(81),g=t(9),m=t(4),b=["children"],v=p()(g.Typography)(r||(r=u()(["\n  display: flex;\n  align-items: center;\n"]))),y=function(n){var e=n.children,t=i()(n,b);return c.a.createElement(v,{as:"label",textColor:"neutral800"},c.a.createElement(h.a,t),c.a.createElement(m.Box,{paddingLeft:2},e))};y.propTypes={children:d.a.node.isRequired,value:d.a.any.isRequired};var x=t(80)},13:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"b",(function(){return a}));var r=t(8),o=function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "},i=function(n){var e=n.variant,t=n.theme;switch(e){case r.a:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case r.b:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case r.c:return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case r.d:return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case r.e:return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case r.f:return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case r.g:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}},a=function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}},15:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=e},22:function(n,e,t){"use strict";var r=t(23);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},23:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},24:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e,t){var r=t(24);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},28:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},29:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},30:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return b}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(7),c=t(1),f=t.n(c),d=t(0),l=t.n(d),p=function(n){return f.a.createElement("div",n)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},g={_hover:l.a.func,background:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.string]),borderColor:l.a.string,children:l.a.oneOfType([l.a.node,l.a.string]),color:l.a.string,flex:l.a.oneOfType([l.a.string,l.a.string]),grow:l.a.oneOfType([l.a.string,l.a.string]),hasRadius:l.a.bool,hiddenS:l.a.bool,hiddenXS:l.a.bool,padding:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingBottom:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingLeft:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingRight:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingTop:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),shadow:l.a.string,shrink:l.a.oneOfType([l.a.string,l.a.string])};p.defaultProps=h,p.propTypes=g;var m={color:!0},b=u.a.div.withConfig({shouldForwardProp:function(n,e){return!m[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(s.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(s.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(s.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(s.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(s.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(s.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(s.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(s.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(s.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));b.defaultProps=h,b.propTypes=g},5:function(n,e,t){var r=t(30);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},68:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(1),o=Object(r.createContext)({onChange:function(){},name:"",size:"M"})},7:function(n,e,t){"use strict";var r=t(11),o=t.n(r),i=t(15),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,u=o()(i,3),s=u[0],c=u[1],f=u[2],d="".concat(n,": ").concat(t.spaces[s],";");return void 0!==c&&(d+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(d+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),d}var l=t.spaces[r]||r;return"".concat(n,": ").concat(l,";")}}},8:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return a})),t.d(e,"e",(function(){return u})),t.d(e,"f",(function(){return s})),t.d(e,"g",(function(){return c})),t.d(e,"h",(function(){return f}));var r="alpha",o="beta",i="delta",a="epsilon",u="omega",s="pi",c="sigma",f=[r,o,i,a,u,s,c]},80:function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var r=t(6),o=t.n(r),i=t(5),a=t.n(i),u=t(1),s=t.n(u),c=t(0),f=t.n(c),d=t(68),l=["children","labelledBy","onChange","value","size","name"],p=function(n){var e=n.children,t=n.labelledBy,r=n.onChange,i=n.value,c=n.size,f=n.name,p=a()(n,l),h=Object(u.useRef)(null);return Object(u.useLayoutEffect)((function(){var n,e,t;i||(n=h.current,e='[name="'.concat(f,'"]'),(t=n.querySelectorAll(e))&&t.length>0&&t.item(0).setAttribute("tabindex","0"))}),[i]),s.a.createElement(d.a.Provider,{value:{onChange:r,selected:i,name:f,size:c}},s.a.createElement("div",o()({ref:h,role:"radiogroup","aria-labelledby":t},p),e))};p.defaultProps={value:"",size:"M"},p.propTypes={children:f.a.node.isRequired,labelledBy:f.a.string.isRequired,name:f.a.string.isRequired,onChange:f.a.func.isRequired,size:f.a.oneOf(["M","L"]),value:f.a.string}},81:function(n,e,t){"use strict";t.d(e,"a",(function(){return S}));var r,o=t(6),i=t.n(o),a=t(5),u=t.n(a),s=t(3),c=t.n(s),f=t(1),d=t.n(f),l=t(0),p=t.n(l),h=t(2),g=t.n(h),m=t(68),b=function(n){return"M"===n.size?"18px":"20px"},v=function(n){return"M"===n.size?"10px":"12px"},y=function(){return"3px"},x=["value","disabled"],O=g.a.input(r||(r=c()(["\n  margin: 0;\n  padding: 0;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 50%;\n  height: ",";\n  width: ",";\n  -webkit-appearance: none;\n\n  &:after {\n    border-radius: 50%;\n    content: '';\n    position: relative;\n    z-index: 1;\n    display: block;\n    height: ",";\n    width: ",";\n    left: ",";\n    top: ",";\n  }\n\n  &:checked:after {\n    background: ",";\n  }\n\n  &:disabled {\n    border: 1px solid ",";\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.neutral0}),(function(n){return n.theme.colors.primary600}),b,b,v,v,y,y,(function(n){return n.theme.colors.primary600}),(function(n){return n.theme.colors.carbon300}),(function(n){return n.theme.colors.neutral200})),S=d.a.forwardRef((function(n,e){var t=n.value,r=n.disabled,o=u()(n,x),a=Object(f.useContext)(m.a),s=a.onChange,c=a.selected,l=a.name,p=a.size,h=c===t;return d.a.createElement(O,i()({ref:e,type:"radio",name:l,value:t,tabIndex:h?0:-1,"aria-checked":h,checked:h,disabled:r,size:p,onChange:s},o))}));S.displayName="Radio",S.defaultProps={disabled:!1},S.propTypes={disabled:p.a.bool,value:p.a.string.isRequired}},9:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return v}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(13),c=t(1),f=t.n(c),d=t(0),l=t.n(d),p=t(8),h=function(n){return f.a.createElement("div",n)},g={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textAlign:void 0,textTransform:void 0,variant:p.e},m={ellipsis:l.a.bool,fontSize:l.a.oneOfType([l.a.number,l.a.string]),fontWeight:l.a.string,lineHeight:l.a.oneOfType([l.a.number,l.a.string]),textAlign:l.a.string,textColor:l.a.string,textTransform:l.a.string,variant:l.a.oneOf(p.h)};h.defaultProps=g,h.propTypes=m;var b={fontSize:!0,fontWeight:!0},v=u.a.span.withConfig({shouldForwardProp:function(n,e){return!b[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-align: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),s.b,(function(n){return n.textAlign}),(function(n){return n.textTransform}),s.a,s.c);v.defaultProps=g,v.propTypes=m}})}));