/*! For license information please see poa-needs-review.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,n,o){return(()=>{var r={"./Components/icon-message-content/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>d});var o=n("react"),r=n.n(o),a=n("../../../node_modules/classnames/index.js"),s=n.n(a),i=n("@deriv/components"),c=n("@deriv/shared");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=function(e){var t=e.className,n=e.children,o=e.icon,a=e.icon_row,d=e.message,l=e.text;return r().createElement(i.Div100vhContainer,{className:"account-management__message-wrapper",is_disabled:(0,c.isDesktop)(),height_offset:"110px"},r().createElement("div",{className:s()("account-management__message-content",u({},"".concat(t,"__message-content"),t))},o&&r().createElement("div",{className:s()("account-management__message-icon",u({},"".concat(t,"__message-icon"),t))},o),a&&r().createElement("div",null,a),r().createElement("div",{className:s()("account-management__message",u({},"".concat(t,"__message"),t))},d),l&&r().createElement("div",{className:"account-management__text-container"},r().createElement(i.Text,{className:s()(u({},"".concat(t,"__text"),t)),as:"p",size:"xs",align:"center"},l)),n))}},"./Components/poa-continue-trading-button/continue-trading-button.jsx":(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var o=n("@deriv/components"),r=n("@deriv/translations"),a=n("react"),s=n.n(a),i=function(){return s().createElement(o.ButtonLink,{to:"/"},s().createElement(o.Text,{className:"dc-btn__text",as:"p",weight:"bold"},(0,r.localize)("Continue trading")))}},"./Components/poa-needs-review/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>d});var o=n("@deriv/components"),r=n("@deriv/translations"),a=n("react"),s=n.n(a),i=n("./Components/icon-message-content/index.js"),c=n("./Components/poi-button/index.js"),u=n("./Components/poa-continue-trading-button/continue-trading-button.jsx");const d=function(e){var t=e.needs_poi,n=e.is_description_enabled,a=void 0===n||n,d=(0,r.localize)("Your proof of address was submitted successfully");return t?s().createElement(i.default,{message:d,icon:s().createElement(o.Icon,{icon:"IcPoaVerified",size:128})},a&&s().createElement(s().Fragment,null,s().createElement("div",{className:"account-management__text-container"},s().createElement(o.Text,{align:"center",size:"xs",as:"p"},(0,r.localize)("Your document is being reviewed, please check back in 1-3 days.")),s().createElement(o.Text,{align:"center",size:"xs",as:"p"},(0,r.localize)("You must also submit a proof of identity."))),s().createElement(c.Z,null))):s().createElement(i.default,{message:d,text:(0,r.localize)("Your document is being reviewed, please check back in 1-3 days."),icon:s().createElement(o.Icon,{icon:"IcPoaVerified",size:128})},a&&s().createElement(u.M,null))}},"./Components/poi-button/index.js":(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n("./Components/poi-button/poi-button.jsx").x},"./Components/poi-button/poi-button.jsx":(e,t,n)=>{"use strict";n.d(t,{x:()=>i});var o=n("@deriv/components"),r=n("@deriv/translations"),a=n("react"),s=n.n(a),i=function(){return s().createElement(o.ButtonLink,{className:"account-management__button",to:"/account/proof-of-identity"},s().createElement(o.Text,{className:"dc-btn__text",weight:"bold",as:"p"},(0,r.localize)("Proof of identity")))}},"../../../node_modules/classnames/index.js":(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===a)for(var i in n)o.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=n},react:e=>{"use strict";e.exports=o}},a={};function s(e){if(a[e])return a[e].exports;var t=a[e]={exports:{}};return r[e](t,t.exports,s),t.exports}return s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s("./Components/poa-needs-review/index.js")})().default}));