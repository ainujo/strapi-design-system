!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("strapiDs",[],r):"object"==typeof exports?exports.strapiDs=r():e.strapiDs=r()}(this,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=101)}({101:function(e,r,t){"use strict";t.r(r),t.d(r,"lightTheme",(function(){return f})),t.d(r,"darkTheme",(function(){return u})),t.d(r,"extendTheme",(function(){return y})),t.d(r,"getThemeSize",(function(){return m.b})),t.d(r,"inputFocusStyle",(function(){return m.c})),t.d(r,"buttonFocusStyle",(function(){return m.a}));var n=t(19),o=t.n(n),a={sizes:t(31).a,zIndices:[5,10,15,20],spaces:["0px","4px","8px","12px","16px","20px","24px","32px","40px","48px","56px","64px"],borderRadius:"4px",mediaQueries:{tablet:"@media (max-width: ".concat(68.75,"rem)"),mobile:"@media (max-width: ".concat(34.375,"rem)")},fontSizes:["".concat(11/16,"rem"),"".concat(.75,"rem"),"".concat(.875,"rem"),"1rem","".concat(1.125,"rem"),"".concat(2,"rem")],lineHeights:[1.14,1.22,1.25,1.33,1.43,1.45,1.5],fontWeights:{regular:400,semiBold:500,bold:600}};function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var f=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({colors:{alternative100:"#f6ecfc",alternative200:"#e0c1f4",alternative500:"#ac73e6",alternative600:"#9736e8",alternative700:"#8312d1",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#fcecea",danger200:"#f5c0b8",danger500:"#ee5e52",danger600:"#d02b20",danger700:"#b72b1a",neutral0:"#ffffff",neutral100:"#f6f6f9",neutral1000:"#181826",neutral150:"#eaeaef",neutral200:"#dcdce4",neutral300:"#c0c0cf",neutral400:"#a5a5ba",neutral500:"#8e8ea9",neutral600:"#666687",neutral700:"#4a4a6a",neutral800:"#32324d",neutral900:"#212134",primary100:"#f0f0ff",primary200:"#d9d8ff",primary500:"#7b79ff",primary600:"#4945ff",primary700:"#271fe0",secondary100:"#eaf5ff",secondary200:"#b8e1ff",secondary500:"#66b7f1",secondary600:"#0c75af",secondary700:"#006096",success100:"#eafbe7",success200:"#c6f0c2",success500:"#5cb176",success600:"#328048",success700:"#2f6846",warning100:"#fdf4dc",warning200:"#fae7b9",warning500:"#f29d41",warning600:"#d9822f",warning700:"#be5d01"},shadows:{filterShadow:"0px 1px 4px rgba(33, 33, 52, 0.1)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"0px 2px 15px rgba(33, 33, 52, 0.1)",tableShadow:"0px 1px 4px rgba(33, 33, 52, 0.1)"}},a);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var u=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({colors:{alternative100:"#181826",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#ac73e6",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#181826",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#ee5e52",danger700:"#ee5e52",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#32324d",neutral200:"#4a4a6a",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#181826",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#181826",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#66b7f1",secondary700:"#b8e1ff",success100:"#181826",success200:"#4a4a6a",success500:"#5cb176",success600:"#5cb176",success700:"#c6f0c2",warning100:"#181826",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#f29d41",warning700:"#fae7b9"},shadows:{filterShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",tableShadow:"1px 1px 10px rgba(3, 3, 5, 0.2)"}},a),p=t(15),s=t.n(p);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var b=function(e){return"\n".concat(e,"\n\nThe following is an example:\n\n\nimport { lightTheme, extendTheme } from '@strapi/design-system/themes';\n\nconst myCustomTheme = extendTheme(lightTheme, {\n    ").concat(Object.keys(f).map((function(e){return"".concat(e,": /* put the overrides for the ").concat(e," key */,")})).join("\n"),"\n})\n")},d=function(e){return e&&"object"===s()(e)&&!Array.isArray(e)},x=function e(r,t){var n=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},r);return d(r)&&d(t)&&Object.keys(t).forEach((function(o){d(t[o])&&r.hasOwnProperty(o)?n[o]=e(r[o],t[o]):n[o]=t[o]})),n},y=function(e,r){if(!d(e)){var t=b("The first argument should be an object and corresponds to the theme you want to extend.");throw new Error(t)}if(!d(r)){var n=b("The second argument should be an object and corresponds to the keys of the theme you want to override.");throw new Error(n)}return x(e,r)},m=t(20)},15:function(e,r){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},19:function(e,r){e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},e.exports.default=e.exports,e.exports.__esModule=!0},20:function(e,r,t){"use strict";t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return o})),t.d(r,"a",(function(){return a}));var n=function(e){return function(r){var t=r.theme,n=r.size;return t.sizes[e][n]}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(r){var t=r.theme,n=r.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(e,":focus-within {\n        border: 1px solid ").concat(n?t.colors.danger600:t.colors.primary600,";\n        box-shadow: ").concat(n?t.colors.danger600:t.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},a=function(e){var r=e.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(r.colors.primary600,";\n    }\n  }\n")}},31:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n={input:{S:"".concat(2,"rem"),M:"".concat(2.5,"rem")},accordions:{S:"".concat(3,"rem"),M:"".concat(5.5,"rem")}}}})}));