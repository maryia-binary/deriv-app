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
		module.exports = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("mobx-react"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/shared", "@deriv/translations", "mobx-react", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("mobx-react"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/shared"], root["@deriv/translations"], root["mobx-react"], root["react"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_mobx_react__, __WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/demo-message/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ Components_demo_message)\n});\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n// EXTERNAL MODULE: ../../../node_modules/classnames/index.js\nvar classnames = __webpack_require__(\"../../../node_modules/classnames/index.js\");\nvar classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);\n// EXTERNAL MODULE: external \"@deriv/components\"\nvar components_ = __webpack_require__(\"@deriv/components\");\n// EXTERNAL MODULE: external \"@deriv/shared\"\nvar shared_ = __webpack_require__(\"@deriv/shared\");\n// EXTERNAL MODULE: ./Stores/connect.js\nvar connect = __webpack_require__(\"./Stores/connect.js\");\n;// CONCATENATED MODULE: ./Components/icon-with-message/icon-with-message.tsx\n\n\n\n\n\n\nvar IconWithMessage = function IconWithMessage(_ref) {\n  var has_button = _ref.has_button,\n    has_real_account = _ref.has_real_account,\n    icon = _ref.icon,\n    message = _ref.message,\n    toggleAccountsDialog = _ref.toggleAccountsDialog,\n    toggleShouldShowRealAccountsList = _ref.toggleShouldShowRealAccountsList;\n  var _React$useContext = external_react_default().useContext(shared_.PlatformContext),\n    is_appstore = _React$useContext.is_appstore;\n  return /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: classnames_default()('da-icon-with-message', {\n      'da-icon-with-message-full-width': is_appstore\n    })\n  }, /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n    icon: icon,\n    size: 128\n  }), /*#__PURE__*/external_react_default().createElement(components_.Text, {\n    className: \"da-icon-with-message__text\",\n    as: \"p\",\n    color: \"general\",\n    size: (0,shared_.isMobile)() ? 'xs' : 's',\n    line_height: \"m\",\n    weight: \"bold\"\n  }, message), has_button && /*#__PURE__*/external_react_default().createElement(components_.Button, {\n    primary: true,\n    onClick: function onClick() {\n      toggleShouldShowRealAccountsList(true);\n      toggleAccountsDialog();\n    },\n    className: \"account__demo-message-button\",\n    \"data-testid\": \"icon-with-message-button\"\n  }, has_real_account ? (0,translations_.localize)('Switch to real account') : (0,translations_.localize)('Add a real account')));\n};\n/* harmony default export */ const icon_with_message = ((0,connect/* connect */.$j)(function (_ref2) {\n  var client = _ref2.client,\n    ui = _ref2.ui;\n  return {\n    has_real_account: client.has_any_real_account,\n    toggleAccountsDialog: ui.toggleAccountsDialog,\n    toggleShouldShowRealAccountsList: ui.toggleShouldShowRealAccountsList\n  };\n})(IconWithMessage));\n;// CONCATENATED MODULE: ./Components/icon-with-message/index.ts\n\n\n/* harmony default export */ const Components_icon_with_message = (icon_with_message);\n;// CONCATENATED MODULE: ./Components/demo-message/demo-message.tsx\n\n\n\nvar DemoMessage = function DemoMessage(_ref) {\n  var has_demo_icon = _ref.has_demo_icon,\n    has_button = _ref.has_button;\n  return /*#__PURE__*/external_react_default().createElement(Components_icon_with_message, {\n    icon: has_demo_icon ? 'IcPoaLockDemo' : 'IcPoaLock',\n    message: (0,translations_.localize)('This feature is not available for demo accounts.'),\n    has_button: has_button\n  });\n};\n/* harmony default export */ const demo_message = (DemoMessage);\n;// CONCATENATED MODULE: ./Components/demo-message/index.ts\n\n/* harmony default export */ const Components_demo_message = (demo_message);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2RlbW8tbWVzc2FnZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQU9BO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FDOURBO0FBQ0E7QUFFQTs7QUNIQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTs7QUNqQkE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9pY29uLXdpdGgtbWVzc2FnZS9pY29uLXdpdGgtbWVzc2FnZS50c3g/YWQzNiIsIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvaWNvbi13aXRoLW1lc3NhZ2UvaW5kZXgudHM/YzVkYiIsIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvZGVtby1tZXNzYWdlL2RlbW8tbWVzc2FnZS50c3g/MWFmZiIsIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvZGVtby1tZXNzYWdlL2luZGV4LnRzP2E2OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgSWNvbiwgVGV4dCwgQnV0dG9uIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgaXNNb2JpbGUsIFBsYXRmb3JtQ29udGV4dCB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdTdG9yZXMvY29ubmVjdCc7XG5pbXBvcnQgeyBUUGxhdGZvcm1Db250ZXh0IH0gZnJvbSAnVHlwZXMnO1xuaW1wb3J0IFJvb3RTdG9yZSBmcm9tICdTdG9yZXMvaW5kZXgnO1xuXG50eXBlIFRJY29uV2l0aE1lc3NhZ2UgPSB7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIGhhc19idXR0b24/OiBib29sZWFuO1xuICAgIGhhc19yZWFsX2FjY291bnQ/OiBib29sZWFuO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICB0b2dnbGVBY2NvdW50c0RpYWxvZzogKHN0YXR1cz86IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgdG9nZ2xlU2hvdWxkU2hvd1JlYWxBY2NvdW50c0xpc3Q6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcbn07XG5cbmNvbnN0IEljb25XaXRoTWVzc2FnZSA9ICh7XG4gICAgaGFzX2J1dHRvbixcbiAgICBoYXNfcmVhbF9hY2NvdW50LFxuICAgIGljb24sXG4gICAgbWVzc2FnZSxcbiAgICB0b2dnbGVBY2NvdW50c0RpYWxvZyxcbiAgICB0b2dnbGVTaG91bGRTaG93UmVhbEFjY291bnRzTGlzdCxcbn06IFRJY29uV2l0aE1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCB7IGlzX2FwcHN0b3JlIH06IFBhcnRpYWw8VFBsYXRmb3JtQ29udGV4dD4gPSBSZWFjdC51c2VDb250ZXh0KFBsYXRmb3JtQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZGEtaWNvbi13aXRoLW1lc3NhZ2UnLCB7ICdkYS1pY29uLXdpdGgtbWVzc2FnZS1mdWxsLXdpZHRoJzogaXNfYXBwc3RvcmUgfSl9PlxuICAgICAgICAgICAgPEljb24gaWNvbj17aWNvbn0gc2l6ZT17MTI4fSAvPlxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2RhLWljb24td2l0aC1tZXNzYWdlX190ZXh0J1xuICAgICAgICAgICAgICAgIGFzPSdwJ1xuICAgICAgICAgICAgICAgIGNvbG9yPSdnZW5lcmFsJ1xuICAgICAgICAgICAgICAgIHNpemU9e2lzTW9iaWxlKCkgPyAneHMnIDogJ3MnfVxuICAgICAgICAgICAgICAgIGxpbmVfaGVpZ2h0PSdtJ1xuICAgICAgICAgICAgICAgIHdlaWdodD0nYm9sZCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIHtoYXNfYnV0dG9uICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlU2hvdWxkU2hvd1JlYWxBY2NvdW50c0xpc3QodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVBY2NvdW50c0RpYWxvZygpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2FjY291bnRfX2RlbW8tbWVzc2FnZS1idXR0b24nXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPSdpY29uLXdpdGgtbWVzc2FnZS1idXR0b24nXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aGFzX3JlYWxfYWNjb3VudCA/IGxvY2FsaXplKCdTd2l0Y2ggdG8gcmVhbCBhY2NvdW50JykgOiBsb2NhbGl6ZSgnQWRkIGEgcmVhbCBhY2NvdW50Jyl9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoeyBjbGllbnQsIHVpIH06IFJvb3RTdG9yZSkgPT4gKHtcbiAgICBoYXNfcmVhbF9hY2NvdW50OiBjbGllbnQuaGFzX2FueV9yZWFsX2FjY291bnQsXG4gICAgdG9nZ2xlQWNjb3VudHNEaWFsb2c6IHVpLnRvZ2dsZUFjY291bnRzRGlhbG9nLFxuICAgIHRvZ2dsZVNob3VsZFNob3dSZWFsQWNjb3VudHNMaXN0OiB1aS50b2dnbGVTaG91bGRTaG93UmVhbEFjY291bnRzTGlzdCxcbn0pKShJY29uV2l0aE1lc3NhZ2UpO1xuIiwiaW1wb3J0IEljb25XaXRoTWVzc2FnZSBmcm9tICcuL2ljb24td2l0aC1tZXNzYWdlJztcbmltcG9ydCAnLi9pY29uLXdpdGgtbWVzc2FnZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgSWNvbldpdGhNZXNzYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgSWNvbldpdGhNZXNzYWdlIGZyb20gJ0NvbXBvbmVudHMvaWNvbi13aXRoLW1lc3NhZ2UnO1xuXG50eXBlIFREZW1vTWVzc2FnZSA9IHtcbiAgICBoYXNfZGVtb19pY29uPzogYm9vbGVhbjtcbiAgICBoYXNfYnV0dG9uPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IERlbW9NZXNzYWdlID0gKHsgaGFzX2RlbW9faWNvbiwgaGFzX2J1dHRvbiB9OiBURGVtb01lc3NhZ2UpID0+IChcbiAgICA8SWNvbldpdGhNZXNzYWdlXG4gICAgICAgIGljb249e2hhc19kZW1vX2ljb24gPyAnSWNQb2FMb2NrRGVtbycgOiAnSWNQb2FMb2NrJ31cbiAgICAgICAgbWVzc2FnZT17bG9jYWxpemUoJ1RoaXMgZmVhdHVyZSBpcyBub3QgYXZhaWxhYmxlIGZvciBkZW1vIGFjY291bnRzLicpfVxuICAgICAgICBoYXNfYnV0dG9uPXtoYXNfYnV0dG9ufVxuICAgIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEZW1vTWVzc2FnZTtcbiIsImltcG9ydCBEZW1vTWVzc2FnZSBmcm9tICcuL2RlbW8tbWVzc2FnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IERlbW9NZXNzYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/demo-message/index.ts\n");

/***/ }),

/***/ "./Stores/connect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$j\": () => (/* binding */ connect)\n/* harmony export */ });\n/* unused harmony exports MobxContent, MobxContentProvider */\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nvar isClassComponent = function isClassComponent(Component) {\n  return !!(typeof Component === 'function' && Component.prototype && Component.prototype.isReactComponent);\n};\nvar MobxContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);\nfunction injectStorePropsToComponent(propsToSelectFn, BaseComponent) {\n  var Component = function Component(own_props) {\n    var store = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(MobxContent);\n    var ObservedComponent = BaseComponent;\n    if (isClassComponent(BaseComponent)) {\n      var FunctionalWrapperComponent = function FunctionalWrapperComponent(props) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(BaseComponent, props);\n      };\n      ObservedComponent = FunctionalWrapperComponent;\n    }\n    return (0,mobx_react__WEBPACK_IMPORTED_MODULE_0__.useObserver)(function () {\n      return ObservedComponent(_objectSpread(_objectSpread({}, own_props), propsToSelectFn(store, own_props)));\n    });\n  };\n  Component.displayName = BaseComponent.name;\n  return Component;\n}\nvar MobxContentProvider = function MobxContentProvider(_ref) {\n  var store = _ref.store,\n    children = _ref.children;\n  return /*#__PURE__*/React.createElement(MobxContent.Provider, {\n    value: _objectSpread(_objectSpread({}, store), {}, {\n      mobxStores: store\n    })\n  }, children);\n};\nvar connect = function connect(propsToSelectFn) {\n  return function (Component) {\n    return injectStorePropsToComponent(propsToSelectFn, Component);\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZXMvY29ubmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9TdG9yZXMvY29ubmVjdC5qcz80NzZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBpc0NsYXNzQ29tcG9uZW50ID0gQ29tcG9uZW50ID0+XG4gICAgISEodHlwZW9mIENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiBDb21wb25lbnQucHJvdG90eXBlICYmIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG5cbmV4cG9ydCBjb25zdCBNb2J4Q29udGVudCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmZ1bmN0aW9uIGluamVjdFN0b3JlUHJvcHNUb0NvbXBvbmVudChwcm9wc1RvU2VsZWN0Rm4sIEJhc2VDb21wb25lbnQpIHtcbiAgICBjb25zdCBDb21wb25lbnQgPSBvd25fcHJvcHMgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IFJlYWN0LnVzZUNvbnRleHQoTW9ieENvbnRlbnQpO1xuXG4gICAgICAgIGxldCBPYnNlcnZlZENvbXBvbmVudCA9IEJhc2VDb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKGlzQ2xhc3NDb21wb25lbnQoQmFzZUNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IEZ1bmN0aW9uYWxXcmFwcGVyQ29tcG9uZW50ID0gcHJvcHMgPT4gPEJhc2VDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbiAgICAgICAgICAgIE9ic2VydmVkQ29tcG9uZW50ID0gRnVuY3Rpb25hbFdyYXBwZXJDb21wb25lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gT2JzZXJ2ZWRDb21wb25lbnQoeyAuLi5vd25fcHJvcHMsIC4uLnByb3BzVG9TZWxlY3RGbihzdG9yZSwgb3duX3Byb3BzKSB9KSk7XG4gICAgfTtcblxuICAgIENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IEJhc2VDb21wb25lbnQubmFtZTtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG5leHBvcnQgY29uc3QgTW9ieENvbnRlbnRQcm92aWRlciA9ICh7IHN0b3JlLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIDxNb2J4Q29udGVudC5Qcm92aWRlciB2YWx1ZT17eyAuLi5zdG9yZSwgbW9ieFN0b3Jlczogc3RvcmUgfX0+e2NoaWxkcmVufTwvTW9ieENvbnRlbnQuUHJvdmlkZXI+O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3QgPSBwcm9wc1RvU2VsZWN0Rm4gPT4gQ29tcG9uZW50ID0+IGluamVjdFN0b3JlUHJvcHNUb0NvbXBvbmVudChwcm9wc1RvU2VsZWN0Rm4sIENvbXBvbmVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Stores/connect.js\n");

/***/ }),

/***/ "../../../node_modules/classnames/index.js":
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\tvar nativeCodeString = '[native code]';\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4uLy4uLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzNkY2QiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../node_modules/classnames/index.js\n");

/***/ }),

/***/ "@deriv/components":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

/***/ }),

/***/ "@deriv/translations":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ }),

/***/ "mobx-react":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_mobx_react__;

/***/ }),

/***/ "react":
/***/ ((module) => {

"use strict";
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
/******/ 	var __webpack_exports__ = __webpack_require__("./Components/demo-message/index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});