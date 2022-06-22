/*! For license information please see on-ramp.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","mobx-react","react"],t):"object"==typeof exports?exports["@deriv/cashier"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react")):e["@deriv/cashier"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e["mobx-react"],e.react)}(self,(function(e,t,o,r,n){return(()=>{var a={"./components/cashier-locked/index.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var r=o("../../../node_modules/prop-types/index.js"),n=o.n(r),a=o("react"),i=o.n(a),s=o("@deriv/components"),l=o("@deriv/translations"),c=o("@deriv/shared"),d=o("./stores/connect.js"),p=function(e){var t=e.account_status,o=e.accounts,r=e.current_currency_type,n=e.is_cashier_locked,a=e.is_deposit_locked,d=e.is_system_maintenance,p=e.is_withdrawal_locked,u=e.loginid,m=e.is_identity_verification_needed,_=t.cashier_validation,h=null==_?void 0:_.includes("no_residence"),f=null==_?void 0:_.includes("unwelcome_status"),y=null==_?void 0:_.includes("SelfExclusion"),v=null==_?void 0:_.includes("no_withdrawal_or_trading_status"),g=null==_?void 0:_.includes("only_pa_withdrawals_allowed_status"),b=null==_?void 0:_.includes("WithdrawServiceUnavailableForPA"),w=null==_?void 0:_.includes("withdrawal_locked_status"),k=null==_?void 0:_.includes("documents_expired"),E=null==_?void 0:_.includes("cashier_locked_status"),x=null==_?void 0:_.includes("disabled_status"),N=null==_?void 0:_.includes("FinancialAssessmentRequired"),O=null==_?void 0:_.includes("ASK_CURRENCY"),C=null==_?void 0:_.includes("ASK_AUTHENTICATE"),z=null==_?void 0:_.includes("ASK_FINANCIAL_RISK_APPROVAL"),P=null==_?void 0:_.includes("ASK_TIN_INFORMATION"),T=null==_?void 0:_.includes("ASK_SELF_EXCLUSION_MAX_TURNOVER_SET"),j=null==_?void 0:_.includes("ASK_FIX_DETAILS"),I=null==_?void 0:_.includes("ASK_UK_FUNDS_PROTECTION"),S="IcCashierLocked",D=(0,l.localize)("Cashier is locked"),L=(0,l.localize)("Your cashier is currently locked. Please contact us via live chat to find out how to unlock it.");return d?"crypto"===r?p?(D=(0,l.localize)("Withdrawals are locked"),L=(0,l.localize)("Withdrawals are temporarily unavailable due to system maintenance. You can make your withdrawals when the maintenance is complete.")):a?(D="Deposits are locked",L=(0,l.localize)("Deposits are temporarily unavailable due to system maintenance. You can make your deposits when the maintenance is complete.")):L=(0,l.localize)("Our cryptocurrency cashier is temporarily down due to system maintenance. You can access the Cashier in a few minutes when the maintenance is complete."):L=(0,l.localize)("Our cashier is temporarily down due to system maintenance. You can access the Cashier in a few minutes when the maintenance is complete."):n?h?L=(0,l.localize)("You’ve not set your country of residence. To access Cashier, please update your country of residence in the Personal details section in your account settings."):k?L=(0,l.localize)("The identification documents you submitted have expired. Please submit valid identity documents to unlock Cashier. "):E?L=(0,l.localize)("Your cashier is currently locked. Please contact us via live chat to find out how to unlock it."):x?L=(0,l.localize)("Your account is temporarily disabled. Please contact us via live chat to enable deposits and withdrawals again."):O?L=(0,l.localize)("Please set your account currency to enable deposits and withdrawals."):C?L=m?i().createElement(l.Localize,{i18n_default_text:"Please submit your <0>proof of identity</0> to authenticate your account and access your Cashier.",components:[i().createElement("a",{key:0,className:"link",href:"/account/proof-of-identity"})]}):i().createElement(l.Localize,{i18n_default_text:"Your account has not been authenticated. Please submit your <0>proof of identity</0> and <1>proof of address</1> to authenticate your account and access your cashier.",components:[i().createElement("a",{key:0,className:"link",rel:"noopener noreferrer",href:"/account/proof-of-identity"}),i().createElement("a",{key:1,className:"link",rel:"noopener noreferrer",href:"/account/proof-of-address"})]}):z?L=i().createElement(l.Localize,{i18n_default_text:"Please complete the <0>Appropriateness Test</0> to access your cashier.",components:[i().createElement("a",{key:0,className:"link",rel:"noopener noreferrer",href:"/account/financial-assessment"})]}):N?L=i().createElement(l.Localize,{i18n_default_text:"Your cashier is locked. Please complete the <0>financial assessment</0> to unlock it.",components:[i().createElement("a",{key:0,className:"link",rel:"noopener noreferrer",href:"/account/financial-assessment"})]}):P?L=i().createElement(l.Localize,{i18n_default_text:"You have not provided your tax identification number. This information is necessary for legal and regulatory requirements. Please go to <0>Personal details</0> in your account settings, and fill in your latest tax identification number.",components:[i().createElement("a",{key:0,className:"link",rel:"noopener noreferrer",href:"/account/personal-details"})]}):I?L=i().createElement(l.Localize,{i18n_default_text:"Your cashier is locked. See <0>how we protect your funds</0> before you proceed.",components:[i().createElement("a",{key:0,className:"link",rel:"noopener noreferrer",href:"/cashier/deposit"})]}):T?L=i().createElement(l.Localize,{i18n_default_text:"Your access to Cashier has been temporarily disabled as you have not set your 30-day turnover limit. Please go to <0>Self-exclusion</0> and set your 30-day turnover limit.",components:[i().createElement("a",{key:0,className:"link",rel:"noopener noreferrer",href:"/account/self-exclusion"})]}):j&&(L=i().createElement(l.Localize,{i18n_default_text:"Your <0>personal details</0> are incomplete. Please go to your account settings and complete your personal details to enable deposits and withdrawals.",components:[i().createElement("a",{key:0,className:"link",rel:"noopener noreferrer",href:"/account/personal-details"})]})):a&&j?(S="IcCashierDepositLock",D=(0,l.localize)("Deposits are locked"),L=i().createElement(l.Localize,{i18n_default_text:"Your <0>personal details</0> are incomplete. Please go to your account settings and complete your personal details to enable deposits.",components:[i().createElement("a",{key:0,className:"link",rel:"noopener noreferrer",href:"/account/personal-details"})]})):a&&y?(S="IcCashierDepositLock",D=(0,l.localize)("Deposits are locked"),L=(0,l.localize)("You have chosen to exclude yourself from trading on our website until {{exclude_until}}. If you are unable to place a trade or deposit after your self-exclusion period, please contact us via live chat.",{exclude_until:(0,c.formatDate)(o[u].excluded_until,"DD MMM, YYYY")})):a&&f?(S="IcCashierDepositLock",D=(0,l.localize)("Deposits are locked"),L=(0,l.localize)("Please contact us via live chat.")):p&&N?(S="IcCashierWithdrawalLock",D=(0,l.localize)("Withdrawals are locked"),L=i().createElement(l.Localize,{i18n_default_text:"You can only make deposits. Please complete the <0>financial assessment</0> to unlock withdrawals.",components:[i().createElement("a",{key:0,className:"link",href:"/account/financial-assessment"})]})):p&&C?(S="IcCashierWithdrawalLock",D=(0,l.localize)("Withdrawals are locked"),L=i().createElement(l.Localize,{i18n_default_text:"Your account has not been authenticated. Please submit your <0>proof of identity</0> and <1>proof of address</1> to authenticate your account and request for withdrawals.",components:[i().createElement("a",{key:0,className:"link",rel:"noopener noreferrer",href:"/account/proof-of-identity"}),i().createElement("a",{key:1,className:"link",rel:"noopener noreferrer",href:"/account/proof-of-address"})]})):p&&j?(S="IcCashierWithdrawalLock",D=(0,l.localize)("Withdrawals are locked"),L=i().createElement(l.Localize,{i18n_default_text:"Your <0>personal details</0> are incomplete. Please go to your account settings and complete your personal details to enable withdrawals.",components:[i().createElement("a",{key:0,className:"link",rel:"noopener noreferrer",href:"/account/personal-details"})]})):p&&b?(S="IcCashierWithdrawalLock",D=(0,l.localize)("Withdrawals are locked"),L=(0,l.localize)("This feature is not available for payment agents.")):p&&v||p&&w?(S="IcCashierWithdrawalLock",D=(0,l.localize)("Withdrawals are locked"),L=(0,l.localize)("Unfortunately, you can only make deposits. Please contact us via live chat to enable withdrawals.")):p&&g&&(S="IcCashierWithdrawalLock",D=(0,l.localize)("Withdrawals are locked"),L=(0,l.localize)("You can only make deposits. Please contact us via live chat for more information.")),i().createElement("div",{className:"cashier-locked"},i().createElement(s.Icon,{icon:S,className:"cashier-locked__icon"}),i().createElement(s.Text,{as:"h2",weight:"bold",align:"center",className:"cashier-locked__title"},D),i().createElement(s.Text,{as:"p",size:"xs",align:"center",className:"cashier-locked__desc"},L))};p.propTypes={account_status:n().object,accounts:n().object,current_currency_type:n().string,is_cashier_locked:n().bool,is_deposit_locked:n().bool,is_system_maintenance:n().bool,is_withdrawal_locked:n().bool,loginid:n().string};const u=(0,d.$j)((function(e){var t=e.client,o=e.modules;return{account_status:t.account_status,accounts:t.accounts,current_currency_type:t.current_currency_type,is_cashier_locked:o.cashier.general_store.is_cashier_locked,is_deposit_locked:t.is_deposit_lock,is_system_maintenance:o.cashier.general_store.is_system_maintenance,is_withdrawal_locked:t.is_withdrawal_lock,loginid:t.loginid,is_identity_verification_needed:t.is_identity_verification_needed}}))(p)},"./components/side-note/index.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var r=o("../../../node_modules/prop-types/index.js"),n=o.n(r),a=o("react"),i=o.n(a),s=o("@deriv/components"),l=function(e){var t=e.children;return i().createElement("div",{className:"side-note__bullet-wrapper"},i().createElement("div",{className:"side-note__bullet"}),i().createElement("span",null,t))},c=function(e){var t=e.notes,o=e.title,r=e.has_bullets;return i().createElement("div",{className:"side-note"},o&&i().createElement(s.DesktopWrapper,null,i().createElement(s.Text,{className:"side-note__text",weight:"bold",as:"p"},o)),t.map((function(e,t){return r?i().createElement(l,{key:t},e):i().createElement(s.Text,{key:t,className:"side-note__text",size:"xxs",as:"p"},e)})))};c.propTypes={notes:n().array.isRequired,title:n().oneOfType([n().string,n().object]),has_bullets:n().bool};const d=c},"./stores/connect.js":(e,t,o)=>{"use strict";o.d(t,{$j:()=>d});var r=o("mobx-react"),n=o("react"),a=o.n(n);function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var c=a().createContext(null),d=function(e){return function(t){return function(e,t){var o=function(o){var n=a().useContext(c),i=t;return function(e){return!("function"!=typeof e||!e.prototype||!e.prototype.isReactComponent)}(t)&&(i=function(e){return a().createElement(t,e)}),(0,r.useObserver)((function(){return i(s(s({},o),e(n,o)))}))};return o.displayName=t.name,o}(e,t)}}},"../../../node_modules/classnames/index.js":(e,t)=>{var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var i=n.apply(null,o);i&&e.push(i)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var s in o)r.call(o,s)&&o[s]&&e.push(s);else e.push(o.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,o)=>{"use strict";var r=o("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,o,n,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return o.PropTypes=o,o}},"../../../node_modules/prop-types/index.js":(e,t,o)=>{e.exports=o("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=o},"mobx-react":e=>{"use strict";e.exports=r},react:e=>{"use strict";e.exports=n}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return a[e](o,o.exports,s),o.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var l={};return(()=>{"use strict";s.d(l,{default:()=>E});var e=s("../../../node_modules/prop-types/index.js"),t=s.n(e),o=s("react"),r=s.n(o),n=s("@deriv/components"),a=s("@deriv/shared"),i=s("@deriv/translations"),c=s("./stores/connect.js"),d=s("./components/cashier-locked/index.js"),p=function(e){var t=e.is_dark_mode_on,o=e.provider,a=e.setSelectedProvider,s=e.is_mobile,l=o.getPaymentIcons(),c=o.name.toLowerCase().replace(" ","-"),d=s?56:128;return r().createElement("div",{className:"on-ramp__provider"},r().createElement("div",{className:"on-ramp__provider-logo"},r().createElement(n.Icon,{data_testid:t?"dti_provider_icon_dark":"dti_provider_icon_light",icon:t?o.icon.dark:o.icon.light,width:d,height:d})),r().createElement(n.Text,{size:"s",color:"prominent",weight:"bold",line_height:"l",className:"on-ramp__provider-name"},o.name),r().createElement(n.Text,{size:"xs",line_height:"m",as:"p",className:"on-ramp__provider-description"},o.getDescription()),r().createElement("div",{className:"on-ramp__provider-payment-icons"},r().createElement("div",{className:"on-ramp__provider-payment-icons-shadow"}),r().createElement(n.NewsTicker,{speed:10},l.map((function(e,o){return r().createElement(n.Icon,{data_testid:t?"dti_payment_icon_dark":"dti_payment_icon_light",icon:t?e.dark:e.light,key:o,size:40})})))),r().createElement(n.Button,{id:"gtm-onramp-provider-select--".concat(c),className:"on-ramp__provider-button",type:"button",has_effect:!0,onClick:function(){return a(o)},text:(0,i.localize)("Select"),primary:!0,small:s}))};p.propTypes={is_dark_mode_on:t().bool,is_mobile:t().bool,provider:t().object,setSelectedProvider:t().func};const u=(0,c.$j)((function(e){var t=e.modules,o=e.ui;return{setSelectedProvider:t.cashier.onramp.setSelectedProvider,is_dark_mode_on:o.is_dark_mode_on,is_mobile:o.is_mobile}}))(p);var m=s("../../../node_modules/classnames/index.js"),_=s.n(m),h=function(e){var t=e.api_error,o=e.deposit_address,s=e.is_dark_mode_on,l=e.is_deposit_address_loading,c=e.is_deposit_address_popover_open,d=e.is_requesting_widget_html,p=e.onClickCopyDepositAddress,u=e.onClickDisclaimerContinue,m=e.onClickGoToDepositPage,h=e.selected_provider,f=e.setDepositAddressRef,y=e.setIsOnRampModalOpen,v=e.should_show_dialog,g=e.should_show_widget,b=e.widget_error,w=e.widget_html,k=r().useRef(null);return r().useEffect((function(){g&&w&&h.onMountWidgetContainer(k)}),[h,g,w]),null===h?null:l||g&&d?r().createElement(n.Loading,{is_fullscreen:!0}):g?r().createElement("div",{className:_()("on-ramp__widget-container",{"on-ramp__widget-container--error":b}),ref:k},b?r().createElement("div",{className:"on-ramp__widget-container-error"},b):r().createElement("div",{dangerouslySetInnerHTML:{__html:w}})):v?r().createElement("div",{className:"on-ramp__popup-no-deposit-address"},r().createElement(n.Text,{size:"xs",className:"on-ramp__popup-no-deposit-address-text"},t?r().createElement(i.Localize,{i18n_default_text:"Please go to the Deposit page to get an address."}):r().createElement(i.Localize,{i18n_default_text:"Please go to the Deposit page to generate an address. Then come back here to continue with your transaction."})),r().createElement(n.Button.Group,{className:"on-ramp__popup-no-deposit-address-buttons"},r().createElement(n.Button,{text:(0,i.localize)("Cancel"),onClick:function(){return y(!1)},secondary:!0,large:!0}),r().createElement(n.Button,{text:(0,i.localize)("Go to Deposit page"),onClick:m,primary:!0,large:!0}))):r().createElement("div",{className:"on-ramp__popup","data-testid":"dti_on-ramp_popup"},h.should_show_deposit_address&&r().createElement(r().Fragment,null,r().createElement("div",{className:"on-ramp__popup-deposit"},r().createElement(n.Text,{size:(0,a.isMobile)()?"xxs":"xs",color:"general",line_height:(0,a.isMobile)()?"m":"l",align:(0,a.isMobile)()?"left":"center"},r().createElement(i.Localize,{i18n_default_text:"Please copy the crypto address you see below. You'll need it to deposit your cryptocurrency."})),r().createElement("div",{className:"on-ramp__popup-deposit-address"},r().createElement(n.Popover,{zIndex:9998,alignment:"right",message:(0,i.localize)("Copied!"),is_open:c},r().createElement("input",{className:_()("on-ramp__popup-deposit-address-text",{"on-ramp__popup-deposit-address-text--dark":s}),ref:f,defaultValue:o,disabled:!0,onFocus:function(e){return e.preventDefault()}}),r().createElement(n.Icon,{className:"on-ramp__popup-deposit-address-icon",data_testid:"dti_deposit_address_icon",icon:(0,a.isMobile)()?"IcCopy":"icClipboard",size:16,onClick:p}))),r().createElement("div",{className:"on-ramp__popup-deposit-address-hint"},r().createElement(n.HintBox,{icon:"IcInfo",is_info:!0,message:(0,i.localize)("This address can only be used ONCE. Please copy a new one for your next transaction.")}))),r().createElement("div",{className:"on-ramp__popup-divider"})),r().createElement("div",{className:"on-ramp__popup-disclaimer"},r().createElement(n.Text,{line_height:"m",weight:"bold",color:"prominent",as:"p",className:"on-ramp__popup-disclaimer-title"},r().createElement(i.Localize,{i18n_default_text:"Disclaimer"})),r().createElement(n.Text,{size:(0,a.isMobile)()?"xxs":"xs",line_height:"l",color:"general",as:"p",className:"on-ramp__popup-disclaimer-text"},r().createElement(i.Localize,{i18n_default_text:"By clicking 'Continue' you will be redirected to {{ service }}, a third-party payment service provider. Please note that {{ website_name }} is not responsible for the content or services provided by {{ service }}. If you encounter any issues related to {{ service }} services, you must contact {{ service }} directly.",values:{service:h.name,website_name:a.website_name}}))),!g&&o&&r().createElement("div",{className:"on-ramp__popup-buttons"},r().createElement(n.Button.Group,null,r().createElement(n.Button,{large:!0,onClick:function(){return y(!1)},secondary:!0,text:(0,i.localize)("Cancel")}),r().createElement(n.Button,{id:"gtm-onramp-provider-continue--".concat((0,a.getKebabCase)(h.name)),large:!0,onClick:u,primary:!0,text:(0,i.localize)("Continue")}))))};h.propTypes={api_error:t().string,deposit_address:t().string,is_deposit_address_loading:t().bool,is_deposit_address_popover_open:t().bool,is_requesting_widget_html:t().bool,onClickCopyDepositAddress:t().func,onClickDisclaimerContinue:t().func,onClickGoToDepositPage:t().func,selected_provider:t().object,setDepositAddressRef:t().func,setIsOnRampModalOpen:t().func,should_show_dialog:t().bool,should_show_widget:t().bool,widget_error:t().string,widget_html:t().string};const f=(0,c.$j)((function(e){var t=e.modules,o=e.ui;return{api_error:t.cashier.onramp.api_error,deposit_address:t.cashier.onramp.deposit_address,is_dark_mode_on:o.is_dark_mode_on,is_deposit_address_loading:t.cashier.onramp.is_deposit_address_loading,is_deposit_address_popover_open:t.cashier.onramp.is_deposit_address_popover_open,is_requesting_widget_html:t.cashier.onramp.is_requesting_widget_html,onClickCopyDepositAddress:t.cashier.onramp.onClickCopyDepositAddress,onClickDisclaimerContinue:t.cashier.onramp.onClickDisclaimerContinue,onClickGoToDepositPage:t.cashier.onramp.onClickGoToDepositPage,selected_provider:t.cashier.onramp.selected_provider,setDepositAddressRef:t.cashier.onramp.setDepositAddressRef,setIsOnRampModalOpen:t.cashier.onramp.setIsOnRampModalOpen,should_show_dialog:t.cashier.onramp.should_show_dialog,should_show_widget:t.cashier.onramp.should_show_widget,widget_error:t.cashier.onramp.widget_error,widget_html:t.cashier.onramp.widget_html}}))(h);var y=s("./components/side-note/index.js");function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,n,a=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){s=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(s)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}var b=function(){var e=[r().createElement(i.Localize,{i18n_default_text:"Fiat onramp is a cashier service that allows you to convert fiat currencies to crypto to top up your Deriv crypto accounts. Listed here are third-party crypto exchanges. You’ll need to create an account with them to use their services.",key:0})];return r().createElement(y.Z,{notes:e,title:r().createElement(i.Localize,{i18n_default_text:"What is Fiat onramp?"})})},w=function(){return r().createElement("div",{className:"on-ramp__info"},r().createElement(n.Text,{color:"prominent",size:"s",weight:"bold",className:"on-ramp__info-header",as:"p"},r().createElement(i.Localize,{i18n_default_text:"What is Fiat onramp?"})),r().createElement("div",{className:"on-ramp__info-content"},r().createElement(n.ReadMore,{expand_text:(0,i.localize)("See more"),text:(0,i.localize)("Fiat onramp is a cashier service that allows you to convert fiat currencies to crypto to top up your Deriv crypto accounts. Listed here are third-party crypto exchanges. You’ll need to create an account with them to use their services."),collapse_length:140,className:"on-ramp__read-more"})))},k=function(e){var t=e.filtered_onramp_providers,o=e.is_cashier_locked,s=e.is_cashier_onboarding,l=e.is_deposit_locked,c=e.is_loading,p=e.is_onramp_modal_open,m=e.is_switching,_=e.menu_options,h=e.onMountOnramp,y=e.onUnmountOnramp,g=e.onramp_popup_modal_title,k=e.resetPopup,E=e.routeTo,x=e.setIsOnRampModalOpen,N=e.should_show_dialog,O=e.setSideNotes,C=e.tab_index,z=v(r().useState(a.routes.cashier_onramp),2),P=z[0],T=z[1];return r().useEffect((function(){_&&P!==a.routes.cashier_onramp&&E(P)}),[_,E,P]),r().useEffect((function(){return h(),"function"!=typeof O||m||c||O([r().createElement(b,{key:0})]),function(){return y()}}),[h,y,s,m,c,C]),m||c?r().createElement(n.Loading,{className:"cashier-onboarding__loader",is_fullscreen:!0}):l||o?r().createElement(d.Z,null):r().createElement(r().Fragment,null,r().createElement("div",{className:"cashier__wrapper cashier__wrapper--align-left on-ramp"},(0,a.isMobile)()&&r().createElement(r().Fragment,null,r().createElement(n.SelectNative,{className:"on-ramp__selector",list_items:(null!=_?_:[]).map((function(e){return{text:e.label,value:e.path}})),value:P,should_show_empty_option:!1,onChange:function(e){e.currentTarget.value!==P&&T(e.currentTarget.value)}}),r().createElement(w,null)),r().createElement(n.Text,{color:(0,a.isMobile)()?"less-prominent":"general",weight:(0,a.isMobile)()?"normal":"bold",align:"center",line_height:"m",className:"on-ramp__page-header",as:"p"},r().createElement(i.Localize,{i18n_default_text:"Select payment channel"})),t.map((function(e){return r().createElement(u,{key:e.name,provider:e})})),r().createElement(n.Modal,{className:"on-ramp__modal",has_close_icon:!0,is_open:p,small:N,title:g,toggleModal:function(){return x(!p)},onUnmount:k,width:N?"44rem":"62.8rem"},r().createElement(n.Modal.Body,null,r().createElement(f,null)))))};k.propTypes={filtered_onramp_providers:t().array,is_cashier_locked:t().bool,is_deposit_locked:t().bool,is_onramp_modal_open:t().bool,is_loading:t().bool,menu_options:t().array,onMountOnramp:t().func,onUnmountOnramp:t().func,onramp_popup_modal_title:t().string,resetPopup:t().func,routeTo:t().func,setIsOnRampModalOpen:t().func,setSideNotes:t().func,should_show_dialog:t().bool,tab_index:t().number};const E=(0,c.$j)((function(e){var t=e.modules,o=e.common,r=e.client;return{filtered_onramp_providers:t.cashier.onramp.filtered_onramp_providers,is_cashier_onboarding:t.cashier.general_store.is_cashier_onboarding,is_cashier_locked:t.cashier.general_store.is_cashier_locked,is_deposit_locked:t.cashier.deposit.is_deposit_locked,is_onramp_modal_open:t.cashier.onramp.is_onramp_modal_open,is_loading:t.cashier.general_store.is_loading,is_switching:r.is_switching,onMountOnramp:t.cashier.onramp.onMountOnramp,onUnmountOnramp:t.cashier.onramp.onUnmountOnramp,onramp_popup_modal_title:t.cashier.onramp.onramp_popup_modal_title,resetPopup:t.cashier.onramp.resetPopup,routeTo:o.routeTo,setIsOnRampModalOpen:t.cashier.onramp.setIsOnRampModalOpen,should_show_dialog:t.cashier.onramp.should_show_dialog,tab_index:t.cashier.general_store.cashier_route_tab_index}}))(k)})(),l.default})()}));