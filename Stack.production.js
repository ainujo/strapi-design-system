!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define("strapiDs",["react","styled-components"],e):"object"==typeof exports?exports.strapiDs=e(require("react"),require("styled-components")):n.strapiDs=e(n.react,n["styled-components"])}(this,(function(n,e){return function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=26)}([function(n,e,r){n.exports=r(22)()},function(e,r){e.exports=n},function(n,r){n.exports=e},function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,r){"use strict";r.r(e),r.d(e,"Box",(function(){return g}));var t,o=r(3),i=r.n(o),a=r(2),u=r.n(a),s=r(7),c=r(1),f=r.n(c),p=r(0),d=r.n(p),l=function(n){return f.a.createElement("div",n)},m={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},h={_hover:d.a.func,background:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.string]),borderColor:d.a.string,children:d.a.oneOfType([d.a.node,d.a.string]),color:d.a.string,flex:d.a.oneOfType([d.a.string,d.a.string]),grow:d.a.oneOfType([d.a.string,d.a.string]),hasRadius:d.a.bool,hiddenS:d.a.bool,hiddenXS:d.a.bool,padding:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingBottom:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingLeft:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingRight:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingTop:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),shadow:d.a.string,shrink:d.a.oneOfType([d.a.string,d.a.string])};l.defaultProps=m,l.propTypes=h;var b={color:!0},g=u.a.div.withConfig({shouldForwardProp:function(n,e){return!b[n]&&e(n)}})(t||(t=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,r=n.background;return e.colors[r]}),(function(n){var e=n.theme,r=n.color;return e.colors[r]}),(function(n){var e=n.theme,r=n.padding;return Object(s.a)("padding",r,e)}),(function(n){var e=n.theme,r=n.paddingTop;return Object(s.a)("padding-top",r,e)}),(function(n){var e=n.theme,r=n.paddingRight;return Object(s.a)("padding-right",r,e)}),(function(n){var e=n.theme,r=n.paddingBottom;return Object(s.a)("padding-bottom",r,e)}),(function(n){var e=n.theme,r=n.paddingLeft;return Object(s.a)("padding-left",r,e)}),(function(n){var e=n.theme,r=n.marginLeft;return Object(s.a)("margin-left",r,e)}),(function(n){var e=n.theme,r=n.marginRight;return Object(s.a)("margin-right",r,e)}),(function(n){var e=n.theme,r=n.marginTop;return Object(s.a)("margin-top",r,e)}),(function(n){var e=n.theme,r=n.marginBottom;return Object(s.a)("margin-bottom",r,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,r=n.hasRadius,t=n.borderRadius;return r?e.borderRadius:t}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,r=n.borderColor,t=n.borderStyle,o=n.borderWidth;if(r&&!t&&!o)return"1px solid ".concat(e.colors[r])}),(function(n){var e=n.theme,r=n.shadow;return e.shadows[r]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,r=n.theme;return e?e(r):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));g.defaultProps=m,g.propTypes=h},function(n,e,r){var t=r(30);n.exports=function(n,e){if(null==n)return{};var r,o,i=t(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e){function r(){return n.exports=r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,r.apply(this,arguments)}n.exports=r,n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,r){"use strict";var t=r(11),o=r.n(t),i=r(15),a=r.n(i);e.a=function(n,e,r){var t=e;if(Array.isArray(e)||"object"!==a()(e)||(t=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==t){if(Array.isArray(t)){var i=t,u=o()(i,3),s=u[0],c=u[1],f=u[2],p="".concat(n,": ").concat(r.spaces[s],";");return void 0!==c&&(p+="".concat(r.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(r.spaces[c],";\n        }")),void 0!==f&&(p+="".concat(r.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(r.spaces[f],";\n        }")),p}var d=r.spaces[t]||t;return"".concat(n,": ").concat(d,";")}}},,,function(n,e,r){"use strict";r.r(e),r.d(e,"Flex",(function(){return v}));var t,o=r(3),i=r.n(o),a=r(2),u=r.n(a),s=r(4),c=r(7),f=r(1),p=r.n(f),d=r(0),l=r.n(d),m=function(n){return p.a.createElement("div",n)},h={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},b={alignItems:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.number]),direction:l.a.string,gap:l.a.oneOfType([l.a.shape({desktop:l.a.number,mobile:l.a.number,tablet:l.a.number}),l.a.number,l.a.arrayOf(l.a.number),l.a.string]),inline:l.a.bool,justifyContent:l.a.string,reverse:l.a.bool,shrink:l.a.number,wrap:l.a.string};m.defaultProps=h,m.propTypes=b;var g={direction:!0},v=u()(s.Box).withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(t||(t=i()(["\n  align-items: ",";\n  display: ",";\n  flex-direction: ",";\n  flex-shrink: ",";\n  flex-wrap: ",";\n  ","};\n  justify-content: ",";\n"])),(function(n){return n.alignItems}),(function(n){return n.inline?"inline-flex":"flex"}),(function(n){return n.direction}),(function(n){return n.shrink}),(function(n){return n.wrap}),(function(n){var e=n.gap,r=n.theme;return Object(c.a)("gap",e,r)}),(function(n){return n.justifyContent}));v.defaultProps=h,v.propTypes=b},function(n,e,r){var t=r(27),o=r(28),i=r(25),a=r(29);n.exports=function(n,e){return t(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},,,,function(n,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=r=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=r=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),r(e)}n.exports=r,n.exports.default=n.exports,n.exports.__esModule=!0},,,,,,,function(n,e,r){"use strict";var t=r(23);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,r,o,i,a){if(a!==t){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var r={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(n,e,r){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,r){var t=r(24);n.exports=function(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e,r){"use strict";r.r(e),r.d(e,"Stack",(function(){return _}));var t,o,i=r(6),a=r.n(i),u=r(5),s=r.n(u),c=r(3),f=r.n(c),p=r(1),d=r.n(p),l=r(0),m=r.n(l),h=r(2),b=r.n(h),g=r(10),v=["horizontal","spacing","size"],y={size:!0},x=b()(g.Flex).withConfig({shouldForwardProp:function(n,e){return!y[n]&&e(n)}})(t||(t=f()(["\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: ",";\n  }\n"])),(function(n){var e=n.theme,r=n.spacing;return e.spaces[r]})),O=b()(g.Flex).withConfig({shouldForwardProp:function(n,e){return!y[n]&&e(n)}})(o||(o=f()(["\n  & > * {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  & > * + * {\n    margin-left: ",";\n  }\n"])),(function(n){var e=n.theme,r=n.spacing;return e.spaces[r]})),_=Object(p.forwardRef)((function(n,e){var r=n.horizontal,t=n.spacing,o=n.size,i=s()(n,v);return o&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),r?d.a.createElement(O,a()({ref:e,spacing:t||o},i)):d.a.createElement(x,a()({direction:"column",alignItems:"stretch",ref:e,spacing:t||o},i))}));_.displayName="Stack",_.defaultProps={horizontal:!1,size:void 0,spacing:void 0},_.propTypes={horizontal:m.a.bool,size:m.a.number,spacing:m.a.number}},function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e){n.exports=function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i=[],a=!0,u=!1;try{for(r=r.call(n);!(a=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},function(n,e){n.exports=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o},n.exports.default=n.exports,n.exports.__esModule=!0}])}));