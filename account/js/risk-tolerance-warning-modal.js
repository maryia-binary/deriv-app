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
		module.exports = factory(require("@deriv/components"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/translations"], root["react"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/trading-assessment/risk-tolerance-warning-modal.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar RiskToleranceWarningModal = function RiskToleranceWarningModal(_ref) {\n  var show_risk_modal = _ref.show_risk_modal,\n    handleAcceptRisk = _ref.handleAcceptRisk,\n    title = _ref.title,\n    button_text = _ref.button_text,\n    body_content = _ref.body_content,\n    _ref$has_sub_header = _ref.has_sub_header,\n    has_sub_header = _ref$has_sub_header === void 0 ? false : _ref$has_sub_header;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.DesktopWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    width: \"44rem\",\n    title: title,\n    height: \"41rem\",\n    is_open: show_risk_modal,\n    className: \"center-risk-modal\",\n    toggleModal: handleAcceptRisk,\n    has_close_icon: false\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n    icon: \"IcRedWarning\",\n    size: \"63\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    as: \"p\",\n    size: \"xs\",\n    align: \"center\",\n    line_height: \"s\",\n    className: \"risk-acceptance__text\"\n  }, body_content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    type: \"button\",\n    large: true,\n    text: button_text || (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)('OK'),\n    primary: true,\n    onClick: handleAcceptRisk\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.MobileWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.MobileDialog, {\n    visible: show_risk_modal,\n    title: has_sub_header ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)('Trading Experience Assessment') : title,\n    portal_element_id: \"modal_root\",\n    has_close_icon: false\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {\n    className: \"risk-tolerance-modal\"\n  }, has_sub_header ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    size: \"xs\",\n    line_height: \"s\",\n    weight: \"bold\",\n    as: \"p\",\n    className: \"risk-tolerance-modal__title\"\n  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"risk-tolerance-modal__title--separator\"\n  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"risk-tolerance-modal__wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n    icon: \"IcRedWarning\",\n    size: \"65\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    as: \"p\",\n    size: \"xs\",\n    align: \"center\",\n    line_height: \"l\",\n    className: \"risk-acceptance__text\"\n  }, body_content))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, {\n    className: \"risk-tolerance-modal__footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    type: \"button\",\n    large: true,\n    text: button_text || (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)('OK'),\n    primary: true,\n    onClick: handleAcceptRisk\n  })))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RiskToleranceWarningModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3RyYWRpbmctYXNzZXNzbWVudC9yaXNrLXRvbGVyYW5jZS13YXJuaW5nLW1vZGFsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL3RyYWRpbmctYXNzZXNzbWVudC9yaXNrLXRvbGVyYW5jZS13YXJuaW5nLW1vZGFsLmpzeD8zMTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIEljb24sIE1vZGFsLCBUZXh0LCBEZXNrdG9wV3JhcHBlciwgTW9iaWxlRGlhbG9nLCBNb2JpbGVXcmFwcGVyIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcblxuY29uc3QgUmlza1RvbGVyYW5jZVdhcm5pbmdNb2RhbCA9ICh7XG4gICAgc2hvd19yaXNrX21vZGFsLFxuICAgIGhhbmRsZUFjY2VwdFJpc2ssXG4gICAgdGl0bGUsXG4gICAgYnV0dG9uX3RleHQsXG4gICAgYm9keV9jb250ZW50LFxuICAgIGhhc19zdWJfaGVhZGVyID0gZmFsc2UsXG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPERlc2t0b3BXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD0nNDRyZW0nXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSc0MXJlbSdcbiAgICAgICAgICAgICAgICAgICAgaXNfb3Blbj17c2hvd19yaXNrX21vZGFsfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NlbnRlci1yaXNrLW1vZGFsJ1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNb2RhbD17aGFuZGxlQWNjZXB0Umlza31cbiAgICAgICAgICAgICAgICAgICAgaGFzX2Nsb3NlX2ljb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPSdJY1JlZFdhcm5pbmcnIHNpemU9JzYzJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J3AnIHNpemU9J3hzJyBhbGlnbj0nY2VudGVyJyBsaW5lX2hlaWdodD0ncycgY2xhc3NOYW1lPSdyaXNrLWFjY2VwdGFuY2VfX3RleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib2R5X2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtidXR0b25fdGV4dCB8fCBsb2NhbGl6ZSgnT0snKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWNjZXB0Umlza31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICA8L0Rlc2t0b3BXcmFwcGVyPlxuICAgICAgICAgICAgPE1vYmlsZVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPE1vYmlsZURpYWxvZ1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtzaG93X3Jpc2tfbW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtoYXNfc3ViX2hlYWRlciA/IGxvY2FsaXplKCdUcmFkaW5nIEV4cGVyaWVuY2UgQXNzZXNzbWVudCcpIDogdGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHBvcnRhbF9lbGVtZW50X2lkPSdtb2RhbF9yb290J1xuICAgICAgICAgICAgICAgICAgICBoYXNfY2xvc2VfaWNvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuQm9keSBjbGFzc05hbWU9J3Jpc2stdG9sZXJhbmNlLW1vZGFsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNfc3ViX2hlYWRlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSd4cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZV9oZWlnaHQ9J3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD0nYm9sZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9J3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmlzay10b2xlcmFuY2UtbW9kYWxfX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlzay10b2xlcmFuY2UtbW9kYWxfX3RpdGxlLS1zZXBhcmF0b3InIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlzay10b2xlcmFuY2UtbW9kYWxfX3dyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249J0ljUmVkV2FybmluZycgc2l6ZT0nNjUnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J3AnIHNpemU9J3hzJyBhbGlnbj0nY2VudGVyJyBsaW5lX2hlaWdodD0nbCcgY2xhc3NOYW1lPSdyaXNrLWFjY2VwdGFuY2VfX3RleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9keV9jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXIgY2xhc3NOYW1lPSdyaXNrLXRvbGVyYW5jZS1tb2RhbF9fZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtidXR0b25fdGV4dCB8fCBsb2NhbGl6ZSgnT0snKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWNjZXB0Umlza31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvTW9iaWxlRGlhbG9nPlxuICAgICAgICAgICAgPC9Nb2JpbGVXcmFwcGVyPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSaXNrVG9sZXJhbmNlV2FybmluZ01vZGFsO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/trading-assessment/risk-tolerance-warning-modal.jsx\n");

/***/ }),

/***/ "@deriv/components":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Components/trading-assessment/risk-tolerance-warning-modal.jsx");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});