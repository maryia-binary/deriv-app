/*! For license information please see poi-poa-docs-submitted.js.LICENSE.txt */
!function(_,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],e):"object"==typeof exports?exports["@deriv/account"]=e(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):_["@deriv/account"]=e(_["@deriv/components"],_["@deriv/shared"],_["@deriv/translations"],_.react)}(self,((__WEBPACK_EXTERNAL_MODULE__deriv_components__,__WEBPACK_EXTERNAL_MODULE__deriv_shared__,__WEBPACK_EXTERNAL_MODULE__deriv_translations__,__WEBPACK_EXTERNAL_MODULE_react__)=>(()=>{var __webpack_modules__={"./Components/icon-message-content/icon-message-content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\n\n\n\n\nvar IconMessageContent = function IconMessageContent(_ref) {\n  var children = _ref.children,\n    className = _ref.className,\n    full_width = _ref.full_width,\n    icon = _ref.icon,\n    message = _ref.message,\n    text = _ref.text;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Div100vhContainer, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'account-management__message-wrapper\', {\n      \'account-management__message-wrapper-full-width\': full_width\n    }),\n    is_disabled: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.isDesktop)(),\n    height_offset: "110px"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'account-management__message-content\', _defineProperty({}, "".concat(className, "__message-content"), className))\n  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'account-management__message-icon\', _defineProperty({}, "".concat(className, "__message-icon"), className))\n  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    as: "div",\n    color: "general",\n    weight: "bold",\n    size: "s",\n    align: "center",\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'account-management__message\', _defineProperty({}, "".concat(className, "__message"), className))\n  }, message), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "account-management__text-container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_defineProperty({}, "".concat(className, "__text"), className)),\n    as: "p",\n    size: "xs",\n    align: "center"\n  }, text)), children));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMessageContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2ljb24tbWVzc2FnZS1jb250ZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUlBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBUUE7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9pY29uLW1lc3NhZ2UtY29udGVudC9pY29uLW1lc3NhZ2UtY29udGVudC50c3g/MDBlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBEaXYxMDB2aENvbnRhaW5lciwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGlzRGVza3RvcCB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuXG50eXBlIFRJY29uTWVzc2FnZUNvbnRlbnQgPSB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIGZ1bGxfd2lkdGg/OiBib29sZWFuO1xuICAgIGljb246IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgICBtZXNzYWdlOiBSZWFjdC5SZWFjdE5vZGU7XG4gICAgdGV4dD86IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudDtcbn07XG5cbmNvbnN0IEljb25NZXNzYWdlQ29udGVudCA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lLFxuICAgIGZ1bGxfd2lkdGgsXG4gICAgaWNvbixcbiAgICBtZXNzYWdlLFxuICAgIHRleHQsXG59OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxUSWNvbk1lc3NhZ2VDb250ZW50PikgPT4gKFxuICAgIDxEaXYxMDB2aENvbnRhaW5lclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2FjY291bnQtbWFuYWdlbWVudF9fbWVzc2FnZS13cmFwcGVyJywge1xuICAgICAgICAgICAgJ2FjY291bnQtbWFuYWdlbWVudF9fbWVzc2FnZS13cmFwcGVyLWZ1bGwtd2lkdGgnOiBmdWxsX3dpZHRoLFxuICAgICAgICB9KX1cbiAgICAgICAgaXNfZGlzYWJsZWQ9e2lzRGVza3RvcCgpfVxuICAgICAgICBoZWlnaHRfb2Zmc2V0PScxMTBweCdcbiAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X19tZXNzYWdlLWNvbnRlbnQnLCB7XG4gICAgICAgICAgICAgICAgW2Ake2NsYXNzTmFtZX1fX21lc3NhZ2UtY29udGVudGBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdhY2NvdW50LW1hbmFnZW1lbnRfX21lc3NhZ2UtaWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtjbGFzc05hbWV9X19tZXNzYWdlLWljb25gXTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgYXM9J2RpdidcbiAgICAgICAgICAgICAgICBjb2xvcj0nZ2VuZXJhbCdcbiAgICAgICAgICAgICAgICB3ZWlnaHQ9J2JvbGQnXG4gICAgICAgICAgICAgICAgc2l6ZT0ncydcbiAgICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X19tZXNzYWdlJywge1xuICAgICAgICAgICAgICAgICAgICBbYCR7Y2xhc3NOYW1lfV9fbWVzc2FnZWBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7dGV4dCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjY291bnQtbWFuYWdlbWVudF9fdGV4dC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7Y2xhc3NOYW1lfV9fdGV4dGBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPSdwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0neHMnXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9EaXYxMDB2aENvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25NZXNzYWdlQ29udGVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/icon-message-content/icon-message-content.tsx\n')},"./Components/icon-message-content/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icon_message_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-message-content */ "./Components/icon-message-content/icon-message-content.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_icon_message_content__WEBPACK_IMPORTED_MODULE_0__["default"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9pY29uLW1lc3NhZ2UtY29udGVudC9pbmRleC50cz83ZmY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29uTWVzc2FnZUNvbnRlbnQgZnJvbSAnLi9pY29uLW1lc3NhZ2UtY29udGVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25NZXNzYWdlQ29udGVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/icon-message-content/index.ts\n')},"./Components/poi-poa-docs-submitted/poi-poa-docs-submitted.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/translations */ "@deriv/translations");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var Components_icon_message_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/icon-message-content */ "./Components/icon-message-content/index.ts");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar PoiPoaDocsSubmitted = function PoiPoaDocsSubmitted(_ref) {\n  var account_status = _ref.account_status,\n    jurisdiction_selected_shortcode = _ref.jurisdiction_selected_shortcode,\n    onClickOK = _ref.onClickOK,\n    updateAccountStatus = _ref.updateAccountStatus,\n    has_created_account_for_selected_jurisdiction = _ref.has_created_account_for_selected_jurisdiction,\n    openPasswordModal = _ref.openPasswordModal;\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    is_loading = _React$useState2[0],\n    setIsLoading = _React$useState2[1];\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    setIsLoading(true);\n    updateAccountStatus().then(function () {\n      setIsLoading(false);\n    })["finally"](function () {\n      return setIsLoading(false);\n    });\n    //eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n  var onSubmit = function onSubmit() {\n    onClickOK();\n    if (!has_created_account_for_selected_jurisdiction) {\n      openPasswordModal();\n    }\n  };\n  var getDescription = function getDescription() {\n    var _getAuthenticationSta = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.getAuthenticationStatusInfo)(account_status),\n      manual_status = _getAuthenticationSta.manual_status,\n      poi_verified_for_vanuatu_maltainvest = _getAuthenticationSta.poi_verified_for_vanuatu_maltainvest,\n      poi_verified_for_bvi_labuan = _getAuthenticationSta.poi_verified_for_bvi_labuan,\n      poa_pending = _getAuthenticationSta.poa_pending;\n    var is_vanuatu_or_maltainvest_selected = [_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.Jurisdiction.VANUATU, _deriv_shared__WEBPACK_IMPORTED_MODULE_3__.Jurisdiction.MALTA_INVEST].includes(jurisdiction_selected_shortcode);\n    if (is_vanuatu_or_maltainvest_selected && poi_verified_for_vanuatu_maltainvest && poa_pending || !is_vanuatu_or_maltainvest_selected && poi_verified_for_bvi_labuan && poa_pending || manual_status === \'pending\') {\n      return (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)(\'We’ll review your documents and notify you of its status within 1 - 3 working days.\');\n    }\n    return (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)(\'We’ll review your documents and notify you of its status within 5 minutes.\');\n  };\n  return is_loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {\n    is_fullscreen: false\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_icon_message_content__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    message: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)(\'Your documents were submitted successfully\'),\n    text: getDescription(),\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n      icon: "IcDocsSubmit",\n      size: 128\n    }),\n    className: "poi-poa-submitted"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    has_effect: true,\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)(\'Ok\'),\n    onClick: onSubmit,\n    primary: true\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PoiPoaDocsSubmitted);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvaS1wb2EtZG9jcy1zdWJtaXR0ZWQvcG9pLXBvYS1kb2NzLXN1Ym1pdHRlZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQU9BO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL3BvaS1wb2EtZG9jcy1zdWJtaXR0ZWQvcG9pLXBvYS1kb2NzLXN1Ym1pdHRlZC50c3g/YTdmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBMb2FkaW5nIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IGdldEF1dGhlbnRpY2F0aW9uU3RhdHVzSW5mbywgSnVyaXNkaWN0aW9uIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgSWNvbk1lc3NhZ2VDb250ZW50IGZyb20gJ0NvbXBvbmVudHMvaWNvbi1tZXNzYWdlLWNvbnRlbnQnO1xuaW1wb3J0IHsgR2V0QWNjb3VudFN0YXR1cyB9IGZyb20gJ0BkZXJpdi9hcGktdHlwZXMnO1xuXG50eXBlIFRQb2lQb2FEb2NzU3VibWl0dGVkID0ge1xuICAgIGFjY291bnRfc3RhdHVzOiBHZXRBY2NvdW50U3RhdHVzO1xuICAgIG9uQ2xpY2tPSzogKCkgPT4gdm9pZDtcbiAgICBqdXJpc2RpY3Rpb25fc2VsZWN0ZWRfc2hvcnRjb2RlOiBzdHJpbmc7XG4gICAgaGFzX2NyZWF0ZWRfYWNjb3VudF9mb3Jfc2VsZWN0ZWRfanVyaXNkaWN0aW9uOiBib29sZWFuO1xuICAgIG9wZW5QYXNzd29yZE1vZGFsOiAoKSA9PiB2b2lkO1xuICAgIHVwZGF0ZUFjY291bnRTdGF0dXM6ICgpID0+IFByb21pc2U8dm9pZD47XG59O1xuXG5jb25zdCBQb2lQb2FEb2NzU3VibWl0dGVkID0gKHtcbiAgICBhY2NvdW50X3N0YXR1cyxcbiAgICBqdXJpc2RpY3Rpb25fc2VsZWN0ZWRfc2hvcnRjb2RlLFxuICAgIG9uQ2xpY2tPSyxcbiAgICB1cGRhdGVBY2NvdW50U3RhdHVzLFxuICAgIGhhc19jcmVhdGVkX2FjY291bnRfZm9yX3NlbGVjdGVkX2p1cmlzZGljdGlvbixcbiAgICBvcGVuUGFzc3dvcmRNb2RhbCxcbn06IFRQb2lQb2FEb2NzU3VibWl0dGVkKSA9PiB7XG4gICAgY29uc3QgW2lzX2xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICB1cGRhdGVBY2NvdW50U3RhdHVzKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHNldElzTG9hZGluZyhmYWxzZSkpO1xuICAgICAgICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgb25DbGlja09LKCk7XG4gICAgICAgIGlmICghaGFzX2NyZWF0ZWRfYWNjb3VudF9mb3Jfc2VsZWN0ZWRfanVyaXNkaWN0aW9uKSB7XG4gICAgICAgICAgICBvcGVuUGFzc3dvcmRNb2RhbCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IG1hbnVhbF9zdGF0dXMsIHBvaV92ZXJpZmllZF9mb3JfdmFudWF0dV9tYWx0YWludmVzdCwgcG9pX3ZlcmlmaWVkX2Zvcl9idmlfbGFidWFuLCBwb2FfcGVuZGluZyB9ID1cbiAgICAgICAgICAgIGdldEF1dGhlbnRpY2F0aW9uU3RhdHVzSW5mbyhhY2NvdW50X3N0YXR1cyk7XG4gICAgICAgIGNvbnN0IGlzX3ZhbnVhdHVfb3JfbWFsdGFpbnZlc3Rfc2VsZWN0ZWQgPSBbSnVyaXNkaWN0aW9uLlZBTlVBVFUsIEp1cmlzZGljdGlvbi5NQUxUQV9JTlZFU1RdLmluY2x1ZGVzKFxuICAgICAgICAgICAganVyaXNkaWN0aW9uX3NlbGVjdGVkX3Nob3J0Y29kZVxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoaXNfdmFudWF0dV9vcl9tYWx0YWludmVzdF9zZWxlY3RlZCAmJiBwb2lfdmVyaWZpZWRfZm9yX3ZhbnVhdHVfbWFsdGFpbnZlc3QgJiYgcG9hX3BlbmRpbmcpIHx8XG4gICAgICAgICAgICAoIWlzX3ZhbnVhdHVfb3JfbWFsdGFpbnZlc3Rfc2VsZWN0ZWQgJiYgcG9pX3ZlcmlmaWVkX2Zvcl9idmlfbGFidWFuICYmIHBvYV9wZW5kaW5nKSB8fFxuICAgICAgICAgICAgbWFudWFsX3N0YXR1cyA9PT0gJ3BlbmRpbmcnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsaXplKCdXZeKAmWxsIHJldmlldyB5b3VyIGRvY3VtZW50cyBhbmQgbm90aWZ5IHlvdSBvZiBpdHMgc3RhdHVzIHdpdGhpbiAxIC0gMyB3b3JraW5nIGRheXMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsaXplKCdXZeKAmWxsIHJldmlldyB5b3VyIGRvY3VtZW50cyBhbmQgbm90aWZ5IHlvdSBvZiBpdHMgc3RhdHVzIHdpdGhpbiA1IG1pbnV0ZXMuJyk7XG4gICAgfTtcbiAgICByZXR1cm4gaXNfbG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmcgaXNfZnVsbHNjcmVlbj17ZmFsc2V9IC8+XG4gICAgKSA6IChcbiAgICAgICAgPEljb25NZXNzYWdlQ29udGVudFxuICAgICAgICAgICAgbWVzc2FnZT17bG9jYWxpemUoJ1lvdXIgZG9jdW1lbnRzIHdlcmUgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseScpfVxuICAgICAgICAgICAgdGV4dD17Z2V0RGVzY3JpcHRpb24oKX1cbiAgICAgICAgICAgIGljb249ezxJY29uIGljb249J0ljRG9jc1N1Ym1pdCcgc2l6ZT17MTI4fSAvPn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncG9pLXBvYS1zdWJtaXR0ZWQnXG4gICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b24gaGFzX2VmZmVjdCB0ZXh0PXtsb2NhbGl6ZSgnT2snKX0gb25DbGljaz17b25TdWJtaXR9IHByaW1hcnkgLz5cbiAgICAgICAgPC9JY29uTWVzc2FnZUNvbnRlbnQ+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQb2lQb2FEb2NzU3VibWl0dGVkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poi-poa-docs-submitted/poi-poa-docs-submitted.tsx\n')},"../../../node_modules/classnames/index.js":(module,exports)=>{eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\tvar nativeCodeString = '[native code]';\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4uLy4uLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzNkY2QiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../node_modules/classnames/index.js\n")},"@deriv/components":_=>{"use strict";_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_components__},"@deriv/shared":_=>{"use strict";_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_shared__},"@deriv/translations":_=>{"use strict";_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_translations__},react:_=>{"use strict";_.exports=__WEBPACK_EXTERNAL_MODULE_react__}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=_=>{var e=_&&_.__esModule?()=>_.default:()=>_;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(_,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(_,t)&&Object.defineProperty(_,t,{enumerable:!0,get:e[t]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./Components/poi-poa-docs-submitted/poi-poa-docs-submitted.tsx");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})()));