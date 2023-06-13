/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/shared", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/shared"], root["@deriv/translations"], root["react"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/sent-email-modal/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ Components_sent_email_modal)\n});\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n// EXTERNAL MODULE: external \"@deriv/components\"\nvar components_ = __webpack_require__(\"@deriv/components\");\n// EXTERNAL MODULE: external \"@deriv/shared\"\nvar shared_ = __webpack_require__(\"@deriv/shared\");\n;// CONCATENATED MODULE: ./Components/sent-email-modal/sent-email-modal.tsx\n\n\n\n\nvar getNoEmailContentStrings = function getNoEmailContentStrings() {\n  return [{\n    key: 'email_spam',\n    icon: 'IcEmailSpam',\n    content: (0,translations_.localize)('The email is in your spam folder (Sometimes things get lost there).')\n  }, {\n    key: 'wrong_email',\n    icon: 'IcEmail',\n    content: (0,translations_.localize)('You accidentally gave us another email address (Usually a work or a personal one instead of the one you meant).')\n  }, {\n    key: 'wrong_typo',\n    icon: 'IcEmailTypo',\n    content: (0,translations_.localize)('The email address you entered had a mistake or typo (happens to the best of us).')\n  }, {\n    key: 'email_firewall',\n    icon: 'IcEmailFirewall',\n    content: (0,translations_.localize)('We can’t deliver the email to this address (Usually because of firewalls or filtering).')\n  }];\n};\nvar SentEmailModal = function SentEmailModal(_ref) {\n  var identifier_title = _ref.identifier_title,\n    _ref$is_modal_when_mo = _ref.is_modal_when_mobile,\n    is_modal_when_mobile = _ref$is_modal_when_mo === void 0 ? false : _ref$is_modal_when_mo,\n    is_open = _ref.is_open,\n    _ref$has_live_chat = _ref.has_live_chat,\n    has_live_chat = _ref$has_live_chat === void 0 ? false : _ref$has_live_chat,\n    onClickSendEmail = _ref.onClickSendEmail,\n    onClose = _ref.onClose;\n  var getSubtitle = function getSubtitle() {\n    var subtitle = '';\n    switch (identifier_title) {\n      case shared_.CFD_PLATFORMS.DXTRADE:\n        subtitle = /*#__PURE__*/external_react_default().createElement(translations_.Localize, {\n          i18n_default_text: \"Please click on the link in the email to change your <0>{{platform_name_dxtrade}}</0> password.\",\n          components: [/*#__PURE__*/external_react_default().createElement(\"span\", {\n            className: \"send-email-template__subtitle-platform\",\n            key: 0\n          })],\n          values: {\n            platform_name_dxtrade: (0,shared_.getPlatformSettings)('dxtrade').name\n          }\n        });\n        break;\n      case shared_.CFD_PLATFORMS.MT5:\n        subtitle = (0,translations_.localize)('Please click on the link in the email to change your Deriv MT5 password.');\n        break;\n      case 'Google':\n      case 'Facebook':\n        subtitle = (0,translations_.localize)('Check your {{ identifier_title }} account email and click the link in the email to proceed.', {\n          identifier_title: identifier_title\n        });\n        break;\n      case 'Change_Email':\n        subtitle = (0,translations_.localize)('Check your email and click the link in the email to proceed.');\n        break;\n      default:\n        subtitle = (0,translations_.localize)('Please click on the link in the email to reset your password.');\n        break;\n    }\n    return subtitle;\n  };\n  var onLiveChatClick = function onLiveChatClick() {\n    var _LiveChatWidget;\n    onClose();\n\n    // TODO fix types after implementing TS for livechat in core\n    (_LiveChatWidget = window.LiveChatWidget) === null || _LiveChatWidget === void 0 ? void 0 : _LiveChatWidget.call('maximize');\n  };\n  var live_chat = has_live_chat ? /*#__PURE__*/external_react_default().createElement(translations_.Localize, {\n    i18n_default_text: \"Still didn't get the email? Please contact us via <0>live chat.</0>\",\n    components: [/*#__PURE__*/external_react_default().createElement(\"span\", {\n      className: \"send-email-template__footer-live-chat\",\n      key: 0,\n      onClick: onLiveChatClick\n    }, /*#__PURE__*/external_react_default().createElement(components_.Popover, {\n      className: \"send-email-template__footer-live-chat__link\",\n      classNameBubble: \"help-centre__tooltip\",\n      alignment: \"top\",\n      message: (0,translations_.localize)('Live chat'),\n      zIndex: \"9999\"\n    }))]\n  }) : null;\n  var sent_email_template = /*#__PURE__*/external_react_default().createElement(components_.SendEmailTemplate, {\n    className: \"sent-email\",\n    subtitle: getSubtitle(),\n    title: (0,translations_.localize)('We’ve sent you an email'),\n    lbl_no_receive: (0,translations_.localize)(\"Didn't receive the email?\"),\n    txt_resend: (0,translations_.localize)('Resend email'),\n    txt_resend_in: (0,translations_.localize)('Resend email in'),\n    onClickSendEmail: onClickSendEmail,\n    live_chat: live_chat\n  }, getNoEmailContentStrings().map(function (item) {\n    return /*#__PURE__*/external_react_default().createElement(\"div\", {\n      className: \"sent-email__content\",\n      key: item.key\n    }, /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n      icon: item.icon,\n      size: 32\n    }), /*#__PURE__*/external_react_default().createElement(components_.Text, {\n      size: \"xxs\",\n      as: \"p\"\n    }, item.content));\n  }));\n  if ((0,shared_.isMobile)() && !is_modal_when_mobile) {\n    return /*#__PURE__*/external_react_default().createElement(components_.MobileDialog, {\n      portal_element_id: \"modal_root\",\n      title: (0,translations_.localize)('We’ve sent you an email'),\n      wrapper_classname: \"mt5-email-sent\",\n      visible: is_open,\n      onClose: onClose,\n      has_content_scroll: true\n    }, sent_email_template);\n  }\n  return /*#__PURE__*/external_react_default().createElement(components_.Modal, {\n    className: 'sent-email__modal',\n    is_open: is_open,\n    has_close_icon: true,\n    should_header_stick_body: true,\n    title: \"\",\n    toggleModal: onClose,\n    width: \"440px\"\n  }, /*#__PURE__*/external_react_default().createElement(components_.Div100vhContainer, {\n    className: \"account__scrollbars_container-wrapper\",\n    is_disabled: (0,shared_.isDesktop)(),\n    height_offset: \"80px\"\n  }, /*#__PURE__*/external_react_default().createElement(components_.Modal.Body, null, /*#__PURE__*/external_react_default().createElement(\"div\", {\n    onClick: onClose,\n    className: \"send-email-template__close\",\n    \"data-testid\": \"dt_send_email_template_close\"\n  }, /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n    icon: \"IcCross\"\n  })), sent_email_template)));\n};\n/* harmony default export */ const sent_email_modal = (SentEmailModal);\n;// CONCATENATED MODULE: ./Components/sent-email-modal/index.ts\n\n/* harmony default export */ const Components_sent_email_modal = (sent_email_modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3NlbnQtZW1haWwtbW9kYWwvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBb0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFPQTtBQU5BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBT0E7QUFFQTs7QUN2TEE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9zZW50LWVtYWlsLW1vZGFsL3NlbnQtZW1haWwtbW9kYWwudHN4PzI0OTQiLCJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL3NlbnQtZW1haWwtbW9kYWwvaW5kZXgudHM/ZjgyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbG9jYWxpemUsIExvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBEaXYxMDB2aENvbnRhaW5lciwgSWNvbiwgTW9iaWxlRGlhbG9nLCBNb2RhbCwgU2VuZEVtYWlsVGVtcGxhdGUsIFRleHQsIFBvcG92ZXIgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBnZXRQbGF0Zm9ybVNldHRpbmdzLCBDRkRfUExBVEZPUk1TLCBpc01vYmlsZSwgaXNEZXNrdG9wIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5cbnR5cGUgVFNlbnRFbWFpbE1vZGFsID0ge1xuICAgIGlkZW50aWZpZXJfdGl0bGU6IHN0cmluZztcbiAgICBpc19tb2RhbF93aGVuX21vYmlsZT86IGJvb2xlYW47XG4gICAgaXNfb3BlbjogYm9vbGVhbjtcbiAgICBoYXNfbGl2ZV9jaGF0PzogYm9vbGVhbjtcbiAgICBvbkNsaWNrU2VuZEVtYWlsOiAoKSA9PiB2b2lkO1xuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59O1xuXG50eXBlIFROb0VtYWlsQ29udGVudEl0ZW0gPSB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudDtcbn07XG5cbi8vIFRPRE8gcmVwbGFjZSB0aGVzZSB0eXBlcyB0byByZWFsIGFmdGVyIGltcGxlbWVudGluZyBUUyBmb3IgbGl2ZWNoYXQgaW4gY29yZVxudHlwZSBUV2luZG93TGl2ZUNoYXRXaWRnZXQgPSBXaW5kb3cgJiB0eXBlb2YgZ2xvYmFsVGhpcyAmIHsgTGl2ZUNoYXRXaWRnZXQ/OiB7IGNhbGw6IChwYXJhbTogc3RyaW5nKSA9PiB2b2lkIH0gfTtcblxuY29uc3QgZ2V0Tm9FbWFpbENvbnRlbnRTdHJpbmdzID0gKCk6IFROb0VtYWlsQ29udGVudEl0ZW1bXSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnZW1haWxfc3BhbScsXG4gICAgICAgICAgICBpY29uOiAnSWNFbWFpbFNwYW0nLFxuICAgICAgICAgICAgY29udGVudDogbG9jYWxpemUoJ1RoZSBlbWFpbCBpcyBpbiB5b3VyIHNwYW0gZm9sZGVyIChTb21ldGltZXMgdGhpbmdzIGdldCBsb3N0IHRoZXJlKS4nKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnd3JvbmdfZW1haWwnLFxuICAgICAgICAgICAgaWNvbjogJ0ljRW1haWwnLFxuICAgICAgICAgICAgY29udGVudDogbG9jYWxpemUoXG4gICAgICAgICAgICAgICAgJ1lvdSBhY2NpZGVudGFsbHkgZ2F2ZSB1cyBhbm90aGVyIGVtYWlsIGFkZHJlc3MgKFVzdWFsbHkgYSB3b3JrIG9yIGEgcGVyc29uYWwgb25lIGluc3RlYWQgb2YgdGhlIG9uZSB5b3UgbWVhbnQpLidcbiAgICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ3dyb25nX3R5cG8nLFxuICAgICAgICAgICAgaWNvbjogJ0ljRW1haWxUeXBvJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGxvY2FsaXplKCdUaGUgZW1haWwgYWRkcmVzcyB5b3UgZW50ZXJlZCBoYWQgYSBtaXN0YWtlIG9yIHR5cG8gKGhhcHBlbnMgdG8gdGhlIGJlc3Qgb2YgdXMpLicpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICdlbWFpbF9maXJld2FsbCcsXG4gICAgICAgICAgICBpY29uOiAnSWNFbWFpbEZpcmV3YWxsJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGxvY2FsaXplKFxuICAgICAgICAgICAgICAgICdXZSBjYW7igJl0IGRlbGl2ZXIgdGhlIGVtYWlsIHRvIHRoaXMgYWRkcmVzcyAoVXN1YWxseSBiZWNhdXNlIG9mIGZpcmV3YWxscyBvciBmaWx0ZXJpbmcpLidcbiAgICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgXTtcbn07XG5cbmNvbnN0IFNlbnRFbWFpbE1vZGFsID0gKHtcbiAgICBpZGVudGlmaWVyX3RpdGxlLFxuICAgIGlzX21vZGFsX3doZW5fbW9iaWxlID0gZmFsc2UsXG4gICAgaXNfb3BlbixcbiAgICBoYXNfbGl2ZV9jaGF0ID0gZmFsc2UsXG4gICAgb25DbGlja1NlbmRFbWFpbCxcbiAgICBvbkNsb3NlLFxufTogVFNlbnRFbWFpbE1vZGFsKSA9PiB7XG4gICAgY29uc3QgZ2V0U3VidGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdWJ0aXRsZTogc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50ID0gJyc7XG4gICAgICAgIHN3aXRjaCAoaWRlbnRpZmllcl90aXRsZSkge1xuICAgICAgICAgICAgY2FzZSBDRkRfUExBVEZPUk1TLkRYVFJBREU6XG4gICAgICAgICAgICAgICAgc3VidGl0bGUgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaTE4bl9kZWZhdWx0X3RleHQ9J1BsZWFzZSBjbGljayBvbiB0aGUgbGluayBpbiB0aGUgZW1haWwgdG8gY2hhbmdlIHlvdXIgPDA+e3twbGF0Zm9ybV9uYW1lX2R4dHJhZGV9fTwvMD4gcGFzc3dvcmQuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17WzxzcGFuIGNsYXNzTmFtZT0nc2VuZC1lbWFpbC10ZW1wbGF0ZV9fc3VidGl0bGUtcGxhdGZvcm0nIGtleT17MH0gLz5dfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7IHBsYXRmb3JtX25hbWVfZHh0cmFkZTogZ2V0UGxhdGZvcm1TZXR0aW5ncygnZHh0cmFkZScpLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDRkRfUExBVEZPUk1TLk1UNTpcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZSA9IGxvY2FsaXplKCdQbGVhc2UgY2xpY2sgb24gdGhlIGxpbmsgaW4gdGhlIGVtYWlsIHRvIGNoYW5nZSB5b3VyIERlcml2IE1UNSBwYXNzd29yZC4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0dvb2dsZSc6XG4gICAgICAgICAgICBjYXNlICdGYWNlYm9vayc6XG4gICAgICAgICAgICAgICAgc3VidGl0bGUgPSBsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgJ0NoZWNrIHlvdXIge3sgaWRlbnRpZmllcl90aXRsZSB9fSBhY2NvdW50IGVtYWlsIGFuZCBjbGljayB0aGUgbGluayBpbiB0aGUgZW1haWwgdG8gcHJvY2VlZC4nLFxuICAgICAgICAgICAgICAgICAgICB7IGlkZW50aWZpZXJfdGl0bGUgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDaGFuZ2VfRW1haWwnOlxuICAgICAgICAgICAgICAgIHN1YnRpdGxlID0gbG9jYWxpemUoJ0NoZWNrIHlvdXIgZW1haWwgYW5kIGNsaWNrIHRoZSBsaW5rIGluIHRoZSBlbWFpbCB0byBwcm9jZWVkLicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZSA9IGxvY2FsaXplKCdQbGVhc2UgY2xpY2sgb24gdGhlIGxpbmsgaW4gdGhlIGVtYWlsIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnRpdGxlO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkxpdmVDaGF0Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG9uQ2xvc2UoKTtcblxuICAgICAgICAvLyBUT0RPIGZpeCB0eXBlcyBhZnRlciBpbXBsZW1lbnRpbmcgVFMgZm9yIGxpdmVjaGF0IGluIGNvcmVcbiAgICAgICAgKHdpbmRvdyBhcyBUV2luZG93TGl2ZUNoYXRXaWRnZXQpLkxpdmVDaGF0V2lkZ2V0Py5jYWxsKCdtYXhpbWl6ZScpO1xuICAgIH07XG5cbiAgICBjb25zdCBsaXZlX2NoYXQgPSBoYXNfbGl2ZV9jaGF0ID8gKFxuICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PVwiU3RpbGwgZGlkbid0IGdldCB0aGUgZW1haWw/IFBsZWFzZSBjb250YWN0IHVzIHZpYSA8MD5saXZlIGNoYXQuPC8wPlwiXG4gICAgICAgICAgICBjb21wb25lbnRzPXtbXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzZW5kLWVtYWlsLXRlbXBsYXRlX19mb290ZXItbGl2ZS1jaGF0JyBrZXk9ezB9IG9uQ2xpY2s9e29uTGl2ZUNoYXRDbGlja30+XG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlbmQtZW1haWwtdGVtcGxhdGVfX2Zvb3Rlci1saXZlLWNoYXRfX2xpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVCdWJibGU9J2hlbHAtY2VudHJlX190b29sdGlwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50PSd0b3AnXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtsb2NhbGl6ZSgnTGl2ZSBjaGF0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg9Jzk5OTknXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPixcbiAgICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgKSA6IG51bGw7XG5cbiAgICBjb25zdCBzZW50X2VtYWlsX3RlbXBsYXRlOiBSZWFjdC5SZWFjdEVsZW1lbnQgPSAoXG4gICAgICAgIDxTZW5kRW1haWxUZW1wbGF0ZVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzZW50LWVtYWlsJ1xuICAgICAgICAgICAgc3VidGl0bGU9e2dldFN1YnRpdGxlKCl9XG4gICAgICAgICAgICB0aXRsZT17bG9jYWxpemUoJ1dl4oCZdmUgc2VudCB5b3UgYW4gZW1haWwnKX1cbiAgICAgICAgICAgIGxibF9ub19yZWNlaXZlPXtsb2NhbGl6ZShcIkRpZG4ndCByZWNlaXZlIHRoZSBlbWFpbD9cIil9XG4gICAgICAgICAgICB0eHRfcmVzZW5kPXtsb2NhbGl6ZSgnUmVzZW5kIGVtYWlsJyl9XG4gICAgICAgICAgICB0eHRfcmVzZW5kX2luPXtsb2NhbGl6ZSgnUmVzZW5kIGVtYWlsIGluJyl9XG4gICAgICAgICAgICBvbkNsaWNrU2VuZEVtYWlsPXtvbkNsaWNrU2VuZEVtYWlsfVxuICAgICAgICAgICAgbGl2ZV9jaGF0PXtsaXZlX2NoYXR9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtnZXROb0VtYWlsQ29udGVudFN0cmluZ3MoKS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbnQtZW1haWxfX2NvbnRlbnQnIGtleT17aXRlbS5rZXl9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtpdGVtLmljb259IHNpemU9ezMyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBzaXplPSd4eHMnIGFzPSdwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1NlbmRFbWFpbFRlbXBsYXRlPlxuICAgICk7XG5cbiAgICBpZiAoaXNNb2JpbGUoKSAmJiAhaXNfbW9kYWxfd2hlbl9tb2JpbGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2JpbGVEaWFsb2dcbiAgICAgICAgICAgICAgICBwb3J0YWxfZWxlbWVudF9pZD0nbW9kYWxfcm9vdCdcbiAgICAgICAgICAgICAgICB0aXRsZT17bG9jYWxpemUoJ1dl4oCZdmUgc2VudCB5b3UgYW4gZW1haWwnKX1cbiAgICAgICAgICAgICAgICB3cmFwcGVyX2NsYXNzbmFtZT0nbXQ1LWVtYWlsLXNlbnQnXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17aXNfb3Blbn1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgICAgICAgIGhhc19jb250ZW50X3Njcm9sbFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzZW50X2VtYWlsX3RlbXBsYXRlfVxuICAgICAgICAgICAgPC9Nb2JpbGVEaWFsb2c+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBjbGFzc05hbWU9eydzZW50LWVtYWlsX19tb2RhbCd9XG4gICAgICAgICAgICBpc19vcGVuPXtpc19vcGVufVxuICAgICAgICAgICAgaGFzX2Nsb3NlX2ljb25cbiAgICAgICAgICAgIHNob3VsZF9oZWFkZXJfc3RpY2tfYm9keVxuICAgICAgICAgICAgdGl0bGU9JydcbiAgICAgICAgICAgIHRvZ2dsZU1vZGFsPXtvbkNsb3NlfVxuICAgICAgICAgICAgd2lkdGg9JzQ0MHB4J1xuICAgICAgICA+XG4gICAgICAgICAgICA8RGl2MTAwdmhDb250YWluZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2FjY291bnRfX3Njcm9sbGJhcnNfY29udGFpbmVyLXdyYXBwZXInXG4gICAgICAgICAgICAgICAgaXNfZGlzYWJsZWQ9e2lzRGVza3RvcCgpfVxuICAgICAgICAgICAgICAgIGhlaWdodF9vZmZzZXQ9JzgwcHgnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlbmQtZW1haWwtdGVtcGxhdGVfX2Nsb3NlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9J2R0X3NlbmRfZW1haWxfdGVtcGxhdGVfY2xvc2UnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249J0ljQ3Jvc3MnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7c2VudF9lbWFpbF90ZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICA8L0RpdjEwMHZoQ29udGFpbmVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZW50RW1haWxNb2RhbDtcbiIsImltcG9ydCBTZW50RW1haWxNb2RhbCBmcm9tICcuL3NlbnQtZW1haWwtbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBTZW50RW1haWxNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/sent-email-modal/index.ts\n");

/***/ }),

/***/ "@deriv/components":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

/***/ }),

/***/ "@deriv/translations":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ }),

/***/ "react":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Components/sent-email-modal/index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});