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

/***/ "./Components/error-component/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ Components_error_component)\n});\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n// EXTERNAL MODULE: external \"@deriv/components\"\nvar components_ = __webpack_require__(\"@deriv/components\");\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n// EXTERNAL MODULE: external \"@deriv/shared\"\nvar shared_ = __webpack_require__(\"@deriv/shared\");\n;// CONCATENATED MODULE: ./Components/error-component/error-component.tsx\n\n\n\n\nvar ErrorComponent = function ErrorComponent(_ref) {\n  var header = _ref.header,\n    message = _ref.message,\n    redirect_label = _ref.redirect_label,\n    redirectOnClick = _ref.redirectOnClick,\n    _ref$should_show_refr = _ref.should_show_refresh,\n    should_show_refresh = _ref$should_show_refr === void 0 ? true : _ref$should_show_refr;\n  var refresh_message = should_show_refresh ? (0,translations_.localize)('Please refresh this page to continue.') : '';\n  return /*#__PURE__*/external_react_default().createElement(components_.PageError, {\n    header: header || (0,translations_.localize)('Oops, something went wrong.'),\n    messages: message ? [message, refresh_message] : [(0,translations_.localize)('Sorry, an error occured while processing your request.'), refresh_message],\n    redirect_urls: [shared_.routes.trade],\n    redirect_labels: [redirect_label || (0,translations_.localize)('Refresh')],\n    buttonOnClick: redirectOnClick || function () {\n      return location.reload();\n    }\n  });\n};\n/* harmony default export */ const error_component = (ErrorComponent);\n;// CONCATENATED MODULE: ./Components/error-component/index.js\n\n/* harmony default export */ const Components_error_component = (error_component);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2Vycm9yLWNvbXBvbmVudC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQU1BO0FBSkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTs7QUNyQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9lcnJvci1jb21wb25lbnQvZXJyb3ItY29tcG9uZW50LnRzeD80Yzg5Iiwid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9lcnJvci1jb21wb25lbnQvaW5kZXguanM/MDlhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFnZUVycm9yIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuXG50eXBlIFRFcnJvckNvbXBvbmVudCA9IHtcbiAgICBoZWFkZXI6IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgICBtZXNzYWdlOiBSZWFjdC5SZWFjdE5vZGU7XG4gICAgcmVkaXJlY3RfbGFiZWw6IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgICByZWRpcmVjdE9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgc2hvdWxkX3Nob3dfcmVmcmVzaDogYm9vbGVhbjtcbn07XG5cbmNvbnN0IEVycm9yQ29tcG9uZW50ID0gKHtcbiAgICBoZWFkZXIsXG4gICAgbWVzc2FnZSxcbiAgICByZWRpcmVjdF9sYWJlbCxcbiAgICByZWRpcmVjdE9uQ2xpY2ssXG4gICAgc2hvdWxkX3Nob3dfcmVmcmVzaCA9IHRydWUsXG59OiBQYXJ0aWFsPFRFcnJvckNvbXBvbmVudD4pID0+IHtcbiAgICBjb25zdCByZWZyZXNoX21lc3NhZ2U6IHN0cmluZyA9IHNob3VsZF9zaG93X3JlZnJlc2ggPyBsb2NhbGl6ZSgnUGxlYXNlIHJlZnJlc2ggdGhpcyBwYWdlIHRvIGNvbnRpbnVlLicpIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZUVycm9yXG4gICAgICAgICAgICBoZWFkZXI9e2hlYWRlciB8fCBsb2NhbGl6ZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcuJyl9XG4gICAgICAgICAgICBtZXNzYWdlcz17XG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICA/IFttZXNzYWdlLCByZWZyZXNoX21lc3NhZ2VdXG4gICAgICAgICAgICAgICAgICAgIDogW2xvY2FsaXplKCdTb3JyeSwgYW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4nKSwgcmVmcmVzaF9tZXNzYWdlXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVkaXJlY3RfdXJscz17W3JvdXRlcy50cmFkZV19XG4gICAgICAgICAgICByZWRpcmVjdF9sYWJlbHM9e1tyZWRpcmVjdF9sYWJlbCB8fCBsb2NhbGl6ZSgnUmVmcmVzaCcpXX1cbiAgICAgICAgICAgIGJ1dHRvbk9uQ2xpY2s9e3JlZGlyZWN0T25DbGljayB8fCAoKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvckNvbXBvbmVudDtcbiIsImltcG9ydCBFcnJvckNvbXBvbmVudCBmcm9tICcuL2Vycm9yLWNvbXBvbmVudC50c3gnO1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvckNvbXBvbmVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/error-component/index.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Components/error-component/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});