!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define("strapiDs",["react","styled-components"],e):"object"==typeof exports?exports.strapiDs=e(require("react"),require("styled-components")):n.strapiDs=e(n.react,n["styled-components"])}(this,(function(n,e){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=115)}({0:function(n,e,t){n.exports=t(22)()},1:function(e,t){e.exports=n},10:function(n,e,t){"use strict";t.r(e),t.d(e,"Flex",(function(){return v}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),c=t(4),s=t(7),d=t(1),l=t.n(d),f=t(0),p=t.n(f),h=function(n){return l.a.createElement("div",n)},m={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},b={alignItems:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.number]),direction:p.a.string,gap:p.a.oneOfType([p.a.shape({desktop:p.a.number,mobile:p.a.number,tablet:p.a.number}),p.a.number,p.a.arrayOf(p.a.number),p.a.string]),inline:p.a.bool,justifyContent:p.a.string,reverse:p.a.bool,shrink:p.a.number,wrap:p.a.string};h.defaultProps=m,h.propTypes=b;var g={direction:!0},v=u()(c.Box).withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(r||(r=i()(["\n  align-items: ",";\n  display: ",";\n  flex-direction: ",";\n  flex-shrink: ",";\n  flex-wrap: ",";\n  ","};\n  justify-content: ",";\n"])),(function(n){return n.alignItems}),(function(n){return n.inline?"inline-flex":"flex"}),(function(n){return n.direction}),(function(n){return n.shrink}),(function(n){return n.wrap}),(function(n){var e=n.gap,t=n.theme;return Object(s.a)("gap",e,t)}),(function(n){return n.justifyContent}));v.defaultProps=m,v.propTypes=b},11:function(n,e,t){var r=t(27),o=t(28),i=t(25),a=t(29);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},115:function(n,e,t){"use strict";t.r(e),t.d(e,"Textarea",(function(){return A}));var r,o,i=t(6),a=t.n(i),u=t(5),c=t.n(u),s=t(3),d=t.n(s),l=t(1),f=t.n(l),p=t(0),h=t.n(p),m=t(18),b=t(2),g=t.n(b),v=t(20),x=["disabled"],y=g.a.div(r||(r=d()(["\n  border: 1px solid ",";\n  border-radius: ",";\n\n  padding-left: ",";\n  padding-right: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n\n  background: ",";\n  ","\n"])),(function(n){var e=n.theme;return n.hasError?e.colors.danger600:e.colors.neutral200}),(function(n){return n.theme.borderRadius}),(function(n){var e=n.theme;return n.hasLeftAction?0:e.spaces[4]}),(function(n){var e=n.theme;return n.hasRightAction?0:e.spaces[4]}),(function(n){var e=n.theme;return"".concat(e.spaces[3])}),(function(n){var e=n.theme;return"".concat(e.spaces[3])}),(function(n){var e=n.theme;return n.disabled?e.colors.neutral150:e.colors.neutral0}),Object(v.c)()),O=g.a.textarea(o||(o=d()(["\n  display: block;\n  width: 100%;\n  font-weight: 400;\n  font-size: ","rem;\n  border: none;\n  color: ",";\n  resize: none;\n  background: inherit;\n\n  ::placeholder {\n    color: ",";\n    opacity: 1;\n  }\n\n  &:focus-within {\n    outline: none;\n  }\n"])),.875,(function(n){var e=n.theme;return n.disabled?e.colors.neutral600:e.colors.neutral800}),(function(n){return n.theme.colors.neutral500})),w=Object(l.forwardRef)((function(n,e){var t,r=n.disabled,o=c()(n,x),i=Object(m.useField)(),u=i.id,s=i.error,d=i.hint,l=i.name;s?t="".concat(u,"-error"):d&&(t="".concat(u,"-hint"));var p=Boolean(s);return f.a.createElement(y,{hasError:p,disabled:r},f.a.createElement(O,a()({id:u,name:l,ref:e,"aria-describedby":t,"aria-invalid":p,disabled:r,hasError:p},o)))}));w.displayName="TextareaInput",w.defaultProps={disabled:!1},w.propTypes={disabled:h.a.bool};var T,j=t(26),z=t(10),S=t(16),_=["name","hint","error","label","children","labelAction","id","required"],E=g.a.div(T||(T=d()(["\n  & textarea {\n    // TODO: remove when we'll have fonts in the theme\n    height: ","rem;\n    line-height: ","rem;\n  }\n\n  & textarea::placeholder {\n    font-weight: 400;\n    font-size: ","rem;\n    line-height: 1.43;\n    color: ",";\n    opacity: 1;\n  }\n"])),5,1.25,.875,(function(n){return n.theme.colors.neutral500})),A=f.a.forwardRef((function(n,e){var t=n.name,r=n.hint,o=n.error,i=n.label,u=n.children,s=n.labelAction,d=n.id,l=n.required,p=c()(n,_),h=Object(S.a)("textarea",d);return f.a.createElement(E,null,f.a.createElement(m.Field,{name:t,hint:r,error:o,id:h},f.a.createElement(j.Stack,{spacing:1},i&&f.a.createElement(z.Flex,null,f.a.createElement(m.FieldLabel,{required:l,action:s},i)),f.a.createElement(w,a()({ref:e,as:"textarea",value:u},p)),f.a.createElement(m.FieldHint,null),f.a.createElement(m.FieldError,null))))}));A.displayName="Textarea",A.defaultProps={"aria-label":void 0,label:void 0,labelAction:void 0,error:void 0,hint:void 0,id:void 0,children:"",required:!1},A.propTypes={"aria-label":h.a.string,children:h.a.string,error:h.a.string,hint:h.a.oneOfType([h.a.string,h.a.node,h.a.arrayOf(h.a.node)]),id:h.a.string,label:h.a.string,labelAction:h.a.element,name:h.a.string.isRequired,required:h.a.bool}},13:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"b",(function(){return a}));var r=t(8),o=function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "},i=function(n){var e=n.variant,t=n.theme;switch(e){case r.a:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case r.b:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case r.c:return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case r.d:return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case r.e:return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case r.f:return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case r.g:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}},a=function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}},14:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return i}));var r=t(1),o=Object(r.createContext)({error:void 0,hint:void 0,name:"",id:""}),i=function(){return Object(r.useContext)(o)}},15:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},16:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(1),o=0,i=function(n,e){return Object(r.useRef)(e||"".concat(n,"-").concat(++o)).current}},18:function(n,e,t){"use strict";t.r(e),t.d(e,"Field",(function(){return f})),t.d(e,"FieldLabel",(function(){return S})),t.d(e,"InputWrapper",(function(){return E.b})),t.d(e,"FieldInput",(function(){return E.a})),t.d(e,"FieldHint",(function(){return A})),t.d(e,"FieldError",(function(){return C})),t.d(e,"FieldContext",(function(){return s.a})),t.d(e,"useField",(function(){return s.b})),t.d(e,"FieldAction",(function(){return R}));var r=t(5),o=t.n(r),i=t(1),a=t.n(i),u=t(0),c=t.n(u),s=t(14),d=t(16),l=["children","name","error","hint","id"],f=function(n){var e=n.children,t=n.name,r=n.error,i=n.hint,u=n.id,c=o()(n,l),f=Object(d.a)("field",u);return a.a.createElement("div",c,a.a.createElement(s.a.Provider,{value:{name:t,id:f,error:r,hint:i}},e))};f.defaultProps={error:void 0,hint:void 0,id:void 0,name:void 0},f.propTypes={children:c.a.node.isRequired,error:c.a.string,hint:c.a.oneOfType([c.a.string,c.a.node,c.a.arrayOf(c.a.node)]),id:c.a.oneOfType([c.a.string,c.a.number]),name:c.a.string};var p,h,m=t(6),b=t.n(m),g=t(3),v=t.n(g),x=t(2),y=t.n(x),O=t(10),w=t(9),T=["children","required","action"],j=y()(w.Typography)(p||(p=v()(["\n  line-height: 0;\n"]))),z=y()(O.Flex)(h||(h=v()(["\n  line-height: 0;\n\n  svg path {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.neutral500})),S=function(n){var e=n.children,t=n.required,r=n.action,i=o()(n,T),u=Object(s.b)().id;return a.a.createElement(w.Typography,b()({variant:"pi",textColor:"neutral800",htmlFor:u,fontWeight:"bold",as:"label",required:t},i),a.a.createElement(O.Flex,{alignItems:"center"},e,t&&a.a.createElement(j,{textColor:"danger600"},"*"),r&&a.a.createElement(z,{marginLeft:1},r)))};S.defaultProps={required:!1,action:void 0},S.propTypes={action:c.a.element,children:c.a.node.isRequired,required:c.a.bool};var _,E=t(38),A=function(){var n=Object(s.b)(),e=n.id,t=n.hint,r=n.error;return!t||r?null:a.a.createElement(w.Typography,{variant:"pi",as:"p",id:"".concat(e,"-hint"),textColor:"neutral600"},t)},C=function(){var n=Object(s.b)(),e=n.id,t=n.error;return t?a.a.createElement(w.Typography,{variant:"pi",as:"p",id:"".concat(e,"-error"),textColor:"danger600","data-strapi-field-error":!0},t):null},P=["label","children"],k=y.a.button(_||(_=v()(["\n  border: none;\n  background: transparent;\n  // TODO: Make sure to use the theme when it's ready\n  font-size: 1.6rem;\n  width: auto;\n  padding: 0;\n  display: flex;\n  align-items: center;\n"]))),R=function(n){var e=n.label,t=n.children,r=o()(n,P);return a.a.createElement(k,b()({"aria-label":e,type:"button"},r),t)};R.propTypes={children:c.a.node.isRequired,label:c.a.string.isRequired}},2:function(n,t){n.exports=e},20:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}));var r=function(n){return function(e){var t=e.theme,r=e.size;return t.sizes[n][r]}},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(e){var t=e.theme,r=e.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(n,":focus-within {\n        border: 1px solid ").concat(r?t.colors.danger600:t.colors.primary600,";\n        box-shadow: ").concat(r?t.colors.danger600:t.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},i=function(n){var e=n.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(e.colors.primary600,";\n    }\n  }\n")}},22:function(n,e,t){"use strict";var r=t(23);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},23:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},24:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e,t){var r=t(24);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,e,t){"use strict";t.r(e),t.d(e,"Stack",(function(){return w}));var r,o,i=t(6),a=t.n(i),u=t(5),c=t.n(u),s=t(3),d=t.n(s),l=t(1),f=t.n(l),p=t(0),h=t.n(p),m=t(2),b=t.n(m),g=t(10),v=["horizontal","spacing","size"],x={size:!0},y=b()(g.Flex).withConfig({shouldForwardProp:function(n,e){return!x[n]&&e(n)}})(r||(r=d()(["\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: ",";\n  }\n"])),(function(n){var e=n.theme,t=n.spacing;return e.spaces[t]})),O=b()(g.Flex).withConfig({shouldForwardProp:function(n,e){return!x[n]&&e(n)}})(o||(o=d()(["\n  & > * {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  & > * + * {\n    margin-left: ",";\n  }\n"])),(function(n){var e=n.theme,t=n.spacing;return e.spaces[t]})),w=Object(l.forwardRef)((function(n,e){var t=n.horizontal,r=n.spacing,o=n.size,i=c()(n,v);return o&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),t?f.a.createElement(O,a()({ref:e,spacing:r||o},i)):f.a.createElement(y,a()({direction:"column",alignItems:"stretch",ref:e,spacing:r||o},i))}));w.displayName="Stack",w.defaultProps={horizontal:!1,size:void 0,spacing:void 0},w.propTypes={horizontal:h.a.bool,size:h.a.number,spacing:h.a.number}},27:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},28:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},29:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},30:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},31:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={input:{S:"".concat(2,"rem"),M:"".concat(2.5,"rem")},accordions:{S:"".concat(3,"rem"),M:"".concat(5.5,"rem")}}},38:function(n,e,t){"use strict";t.d(e,"b",(function(){return z})),t.d(e,"a",(function(){return S}));var r,o,i=t(6),a=t.n(i),u=t(5),c=t.n(u),s=t(3),d=t.n(s),l=t(1),f=t.n(l),p=t(2),h=t.n(p),m=t(0),b=t.n(m),g=t(31),v=t(20),x=t(14),y=t(10),O=t(4),w=["endAction","startAction","disabled","onChange","size"],T={S:6.5,M:10.5},j=h.a.input(r||(r=d()(["\n  border: none;\n  border-radius: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n  padding-right: ",";\n  padding-top: ",";\n  cursor: ",";\n\n  color: ",";\n  font-weight: 400;\n  // TODO: Make sure to use the theme when it's ready\n  font-size: ","rem;\n  display: block;\n  width: 100%;\n  background: inherit;\n\n  ::placeholder {\n    color: ",";\n    opacity: 1;\n  }\n\n  &[aria-disabled='true'] {\n    color: inherit;\n  }\n\n  //focus managed by InputWrapper\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.theme.borderRadius}),(function(n){var e=n.size;return"".concat(T[e]/16,"rem")}),(function(n){var e=n.theme;return n.hasLeftAction?0:e.spaces[4]}),(function(n){var e=n.theme;return n.hasRightAction?0:e.spaces[4]}),(function(n){var e=n.size;return"".concat(T[e]/16,"rem")}),(function(n){return n["aria-disabled"]?"not-allowed":void 0}),(function(n){return n.theme.colors.neutral800}),.875,(function(n){return n.theme.colors.neutral500})),z=h()(y.Flex)(o||(o=d()(["\n  border: 1px solid ",";\n  border-radius: ",";\n  background: ",";\n  ","\n\n  ","\n"])),(function(n){var e=n.theme;return n.hasError?e.colors.danger600:e.colors.neutral200}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.colors.neutral0}),Object(v.c)(),(function(n){var e=n.theme;return n.disabled?"\n    color: ".concat(e.colors.neutral600,";\n    background: ").concat(e.colors.neutral150,";\n  \n  "):void 0})),S=Object(l.forwardRef)((function(n,e){var t,r=n.endAction,o=n.startAction,i=n.disabled,u=n.onChange,s=n.size,d=c()(n,w),l=Object(x.b)(),p=l.id,h=l.error,m=l.hint,b=l.name;h?t="".concat(p,"-error"):m&&(t="".concat(p,"-hint"));var g=Boolean(h);return f.a.createElement(z,{size:s,justifyContent:"space-between",hasError:g,disabled:i},o&&f.a.createElement(O.Box,{paddingLeft:3,paddingRight:2},o),f.a.createElement(j,a()({id:p,name:b,ref:e,"aria-describedby":t,"aria-invalid":g,"aria-disabled":i,hasLeftAction:Boolean(o),hasRightAction:Boolean(r),onChange:function(n){i||u(n)},size:s},d)),r&&f.a.createElement(O.Box,{paddingLeft:2,paddingRight:3},r))}));S.displayName="FieldInput",S.defaultProps={disabled:!1,endAction:void 0,size:"M",startAction:void 0,onChange:function(){}},S.propTypes={disabled:b.a.bool,endAction:b.a.element,onChange:b.a.func,size:b.a.oneOf(Object.keys(g.a.input)),startAction:b.a.element}},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return g}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),c=t(7),s=t(1),d=t.n(s),l=t(0),f=t.n(l),p=function(n){return d.a.createElement("div",n)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},m={_hover:f.a.func,background:f.a.string,basis:f.a.oneOfType([f.a.string,f.a.string]),borderColor:f.a.string,children:f.a.oneOfType([f.a.node,f.a.string]),color:f.a.string,flex:f.a.oneOfType([f.a.string,f.a.string]),grow:f.a.oneOfType([f.a.string,f.a.string]),hasRadius:f.a.bool,hiddenS:f.a.bool,hiddenXS:f.a.bool,padding:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingBottom:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingLeft:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingRight:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingTop:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),shadow:f.a.string,shrink:f.a.oneOfType([f.a.string,f.a.string])};p.defaultProps=h,p.propTypes=m;var b={color:!0},g=u.a.div.withConfig({shouldForwardProp:function(n,e){return!b[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(c.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(c.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(c.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(c.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(c.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(c.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(c.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(c.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(c.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));g.defaultProps=h,g.propTypes=m},5:function(n,e,t){var r=t(30);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,t){"use strict";var r=t(11),o=t.n(r),i=t(15),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,u=o()(i,3),c=u[0],s=u[1],d=u[2],l="".concat(n,": ").concat(t.spaces[c],";");return void 0!==s&&(l+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[s],";\n        }")),void 0!==d&&(l+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[d],";\n        }")),l}var f=t.spaces[r]||r;return"".concat(n,": ").concat(f,";")}}},8:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return a})),t.d(e,"e",(function(){return u})),t.d(e,"f",(function(){return c})),t.d(e,"g",(function(){return s})),t.d(e,"h",(function(){return d}));var r="alpha",o="beta",i="delta",a="epsilon",u="omega",c="pi",s="sigma",d=[r,o,i,a,u,c,s]},9:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return v}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),c=t(13),s=t(1),d=t.n(s),l=t(0),f=t.n(l),p=t(8),h=function(n){return d.a.createElement("div",n)},m={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textAlign:void 0,textTransform:void 0,variant:p.e},b={ellipsis:f.a.bool,fontSize:f.a.oneOfType([f.a.number,f.a.string]),fontWeight:f.a.string,lineHeight:f.a.oneOfType([f.a.number,f.a.string]),textAlign:f.a.string,textColor:f.a.string,textTransform:f.a.string,variant:f.a.oneOf(p.h)};h.defaultProps=m,h.propTypes=b;var g={fontSize:!0,fontWeight:!0},v=u.a.span.withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-align: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),c.b,(function(n){return n.textAlign}),(function(n){return n.textTransform}),c.a,c.c);v.defaultProps=m,v.propTypes=b}})}));