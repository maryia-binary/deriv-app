/*! For license information please see poi-verified.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,o,r){return(()=>{var n={"./Components/icon-message-content/index.js":(e,t,o)=>{"use strict";o.d(t,{default:()=>u});var r=o("react"),n=o.n(r),s=o("../../../node_modules/prop-types/index.js"),a=o("../../../node_modules/classnames/index.js"),i=o.n(a),c=o("@deriv/components"),p=o("@deriv/shared");function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var l=function(e){var t=e.children,o=e.className,r=e.full_width,s=e.icon,a=e.icon_row,l=e.message,u=e.text;return n().createElement(c.Div100vhContainer,{className:i()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":r}),is_disabled:(0,p.isDesktop)(),height_offset:"110px"},n().createElement("div",{className:i()("account-management__message-content",d({},"".concat(o,"__message-content"),o))},s&&n().createElement("div",{className:i()("account-management__message-icon",d({},"".concat(o,"__message-icon"),o))},s),a&&n().createElement("div",null,a),n().createElement(c.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:i()("account-management__message",d({},"".concat(o,"__message"),o))},l),u&&n().createElement("div",{className:"account-management__text-container"},n().createElement(c.Text,{className:i()(d({},"".concat(o,"__text"),o)),as:"p",size:"xs",align:"center"},u)),t))};l.propTypes={children:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.array]),className:s.PropTypes.string,full_width:s.PropTypes.bool,icon:s.PropTypes.object,message:s.PropTypes.oneOfType([s.PropTypes.node,s.PropTypes.string,s.PropTypes.object]),text:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.element])};const u=l},"./Components/poa/poa-button/index.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var r=o("react"),n=o.n(r),s=o("../../../node_modules/prop-types/index.js"),a=o.n(s),i=o("@deriv/components"),c=o("@deriv/shared"),p=o("@deriv/translations"),d=function(e){var t=e.custom_text,o=void 0===t?(0,p.localize)("Submit proof of address"):t;return n().createElement(i.ButtonLink,{className:"account-management__button",to:c.routes.proof_of_address},n().createElement(i.Text,{className:"dc-btn__text",as:"p",weight:"bold","data-testid":"poa_button_text"},o))};d.propTypes={custom_text:a().oneOfType([a().string,a().element])};const l=d},"../../../node_modules/classnames/index.js":(e,t)=>{var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var s=typeof o;if("string"===s||"number"===s)e.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&e.push(a)}}else if("object"===s)if(o.toString===Object.prototype.toString)for(var i in o)r.call(o,i)&&o[i]&&e.push(i);else e.push(o.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,o)=>{"use strict";var r=o("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,o,n,s,a){if(a!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return o.PropTypes=o,o}},"../../../node_modules/prop-types/index.js":(e,t,o)=>{e.exports=o("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=o},react:e=>{"use strict";e.exports=r}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return n[e](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";a.d(i,{default:()=>l});var e=a("react"),t=a.n(e),o=a("../../../node_modules/prop-types/index.js"),r=a("@deriv/components"),n=a("@deriv/shared"),s=a("@deriv/translations"),c=a("./Components/poa/poa-button/index.js"),p=a("./Components/icon-message-content/index.js"),d=function(e){var o=e.needs_poa,a=e.redirect_button,i=e.is_from_external,d=t().useContext(n.PlatformContext).is_appstore,l=(0,s.localize)("Your proof of identity is verified");return o?t().createElement(p.default,{message:l,icon:d?t().createElement(r.Icon,{icon:"IcPoaVerifiedDashboard",height:128,width:237}):t().createElement(r.Icon,{icon:"IcPoaVerified",size:128}),className:"account-management-dashboard",text:(0,s.localize)("To continue trading, you must also submit a proof of address.")},!i&&t().createElement(t().Fragment,null,t().createElement(c.Z,null),a)):t().createElement(p.default,{message:l,icon:d?t().createElement(r.Icon,{icon:"IcPoaVerifiedDashboard",height:128,width:237}):t().createElement(r.Icon,{icon:"IcPoaVerified",size:128}),className:"account-management-dashboard"},!i&&a)};d.propTypes={has_poa:o.PropTypes.bool,is_description_enabled:o.PropTypes.bool,redirect_button:o.PropTypes.oneOfType([o.PropTypes.object,o.PropTypes.bool])};const l=d})(),i.default})()}));