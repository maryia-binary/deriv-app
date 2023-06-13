/*! For license information please see p2p.create-ad-error-modal.ad7b46a0e42baf3beb81.js.LICENSE.txt */
"use strict";(self.webpackChunk_deriv_p2p=self.webpackChunk_deriv_p2p||[]).push([["create-ad-error-modal"],{"./src/components/modal-manager/modals/create-ad-error-modal/create-ad-error-modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "../../node_modules/mobx-react-lite/es/index.js");\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/i18next */ "./src/components/i18next/index.js");\n/* harmony import */ var Constants_api_error_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Constants/api-error-codes */ "./src/constants/api-error-codes.js");\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Stores */ "./src/stores/index.js");\n/* harmony import */ var Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/modal-manager/modal-manager-context */ "./src/components/modal-manager/modal-manager-context.js");\n\n\n\n\n\n\n\nvar CreateAdErrorModal = function CreateAdErrorModal() {\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_5__.useStores)(),\n    my_ads_store = _useStores.my_ads_store;\n  var _useModalManagerConte = (0,Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_6__.useModalManagerContext)(),\n    hideModal = _useModalManagerConte.hideModal,\n    is_modal_open = _useModalManagerConte.is_modal_open;\n  if (my_ads_store.error_code === Constants_api_error_codes__WEBPACK_IMPORTED_MODULE_4__.api_error_codes.DUPLICATE_ADVERT) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n      className: "p2p-my-ads__modal-error",\n      is_open: is_modal_open,\n      small: true,\n      has_close_icon: false,\n      title: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_3__.localize)(\'You already have an ad with this rate\')\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n      as: "p",\n      color: "prominent",\n      size: "xs"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n      i18n_default_text: "You already have an ad with the same exchange rate for this currency pair and order type. <br/><br/>Please set a different rate for your ad."\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n      has_effect: true,\n      text: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_3__.localize)(\'Update ad\'),\n      onClick: function onClick() {\n        return hideModal();\n      },\n      primary: true,\n      large: true\n    })));\n  } else if (my_ads_store.error_code === Constants_api_error_codes__WEBPACK_IMPORTED_MODULE_4__.api_error_codes.ADVERT_SAME_LIMITS) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n      className: "p2p-my-ads__modal-error",\n      is_open: is_modal_open,\n      small: true,\n      has_close_icon: false,\n      title: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_3__.localize)(\'You already have an ad with this range\')\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n      as: "p",\n      color: "prominent",\n      size: "xs"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n      i18n_default_text: "Please set a different minimum and/or maximum order limit. <br/><br/>The range of your ad should not overlap with any of your active ads."\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n      has_effect: true,\n      text: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_3__.localize)(\'Update ad\'),\n      onClick: function onClick() {\n        return hideModal();\n      },\n      primary: true,\n      large: true\n    })));\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    className: "p2p-my-ads__modal-error",\n    is_open: is_modal_open,\n    small: true,\n    has_close_icon: false,\n    title: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_3__.localize)("Something\'s not right")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    as: "p",\n    color: "prominent",\n    size: "xs"\n  }, my_ads_store.api_error_message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    has_effect: true,\n    text: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_3__.localize)(\'Ok\'),\n    onClick: function onClick() {\n      return hideModal();\n    },\n    primary: true,\n    large: true\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(CreateAdErrorModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9jcmVhdGUtYWQtZXJyb3ItbW9kYWwvY3JlYXRlLWFkLWVycm9yLW1vZGFsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvcDJwLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtbWFuYWdlci9tb2RhbHMvY3JlYXRlLWFkLWVycm9yLW1vZGFsL2NyZWF0ZS1hZC1lcnJvci1tb2RhbC5qc3g/NWRhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmltcG9ydCB7IGxvY2FsaXplLCBMb2NhbGl6ZSB9IGZyb20gJ0NvbXBvbmVudHMvaTE4bmV4dCc7XG5pbXBvcnQgeyBhcGlfZXJyb3JfY29kZXMgfSBmcm9tICdDb25zdGFudHMvYXBpLWVycm9yLWNvZGVzJztcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJ1N0b3Jlcyc7XG5pbXBvcnQgeyB1c2VNb2RhbE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnQ29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFsLW1hbmFnZXItY29udGV4dCc7XG5cbmNvbnN0IENyZWF0ZUFkRXJyb3JNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG15X2Fkc19zdG9yZSB9ID0gdXNlU3RvcmVzKCk7XG4gICAgY29uc3QgeyBoaWRlTW9kYWwsIGlzX21vZGFsX29wZW4gfSA9IHVzZU1vZGFsTWFuYWdlckNvbnRleHQoKTtcblxuICAgIGlmIChteV9hZHNfc3RvcmUuZXJyb3JfY29kZSA9PT0gYXBpX2Vycm9yX2NvZGVzLkRVUExJQ0FURV9BRFZFUlQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncDJwLW15LWFkc19fbW9kYWwtZXJyb3InXG4gICAgICAgICAgICAgICAgaXNfb3Blbj17aXNfbW9kYWxfb3Blbn1cbiAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgIGhhc19jbG9zZV9pY29uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17bG9jYWxpemUoJ1lvdSBhbHJlYWR5IGhhdmUgYW4gYWQgd2l0aCB0aGlzIHJhdGUnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J3AnIGNvbG9yPSdwcm9taW5lbnQnIHNpemU9J3hzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nWW91IGFscmVhZHkgaGF2ZSBhbiBhZCB3aXRoIHRoZSBzYW1lIGV4Y2hhbmdlIHJhdGUgZm9yIHRoaXMgY3VycmVuY3kgcGFpciBhbmQgb3JkZXIgdHlwZS4gPGJyLz48YnIvPlBsZWFzZSBzZXQgYSBkaWZmZXJlbnQgcmF0ZSBmb3IgeW91ciBhZC4nIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBoYXNfZWZmZWN0IHRleHQ9e2xvY2FsaXplKCdVcGRhdGUgYWQnKX0gb25DbGljaz17KCkgPT4gaGlkZU1vZGFsKCl9IHByaW1hcnkgbGFyZ2UgLz5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIGlmIChteV9hZHNfc3RvcmUuZXJyb3JfY29kZSA9PT0gYXBpX2Vycm9yX2NvZGVzLkFEVkVSVF9TQU1FX0xJTUlUUykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwMnAtbXktYWRzX19tb2RhbC1lcnJvcidcbiAgICAgICAgICAgICAgICBpc19vcGVuPXtpc19tb2RhbF9vcGVufVxuICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgaGFzX2Nsb3NlX2ljb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtsb2NhbGl6ZSgnWW91IGFscmVhZHkgaGF2ZSBhbiBhZCB3aXRoIHRoaXMgcmFuZ2UnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J3AnIGNvbG9yPSdwcm9taW5lbnQnIHNpemU9J3hzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nUGxlYXNlIHNldCBhIGRpZmZlcmVudCBtaW5pbXVtIGFuZC9vciBtYXhpbXVtIG9yZGVyIGxpbWl0LiA8YnIvPjxici8+VGhlIHJhbmdlIG9mIHlvdXIgYWQgc2hvdWxkIG5vdCBvdmVybGFwIHdpdGggYW55IG9mIHlvdXIgYWN0aXZlIGFkcy4nIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBoYXNfZWZmZWN0IHRleHQ9e2xvY2FsaXplKCdVcGRhdGUgYWQnKX0gb25DbGljaz17KCkgPT4gaGlkZU1vZGFsKCl9IHByaW1hcnkgbGFyZ2UgLz5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwMnAtbXktYWRzX19tb2RhbC1lcnJvcidcbiAgICAgICAgICAgIGlzX29wZW49e2lzX21vZGFsX29wZW59XG4gICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgaGFzX2Nsb3NlX2ljb249e2ZhbHNlfVxuICAgICAgICAgICAgdGl0bGU9e2xvY2FsaXplKFwiU29tZXRoaW5nJ3Mgbm90IHJpZ2h0XCIpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8VGV4dCBhcz0ncCcgY29sb3I9J3Byb21pbmVudCcgc2l6ZT0neHMnPlxuICAgICAgICAgICAgICAgICAgICB7bXlfYWRzX3N0b3JlLmFwaV9lcnJvcl9tZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBoYXNfZWZmZWN0IHRleHQ9e2xvY2FsaXplKCdPaycpfSBvbkNsaWNrPXsoKSA9PiBoaWRlTW9kYWwoKX0gcHJpbWFyeSBsYXJnZSAvPlxuICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyKENyZWF0ZUFkRXJyb3JNb2RhbCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/create-ad-error-modal/create-ad-error-modal.jsx\n')},"./src/components/modal-manager/modals/create-ad-error-modal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_ad_error_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-ad-error-modal.jsx */ "./src/components/modal-manager/modals/create-ad-error-modal/create-ad-error-modal.jsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_create_ad_error_modal_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9jcmVhdGUtYWQtZXJyb3ItbW9kYWwvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3AycC8uL3NyYy9jb21wb25lbnRzL21vZGFsLW1hbmFnZXIvbW9kYWxzL2NyZWF0ZS1hZC1lcnJvci1tb2RhbC9pbmRleC5qcz81OWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDcmVhdGVBZEVycm9yTW9kYWwgZnJvbSAnLi9jcmVhdGUtYWQtZXJyb3ItbW9kYWwuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQWRFcnJvck1vZGFsO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/create-ad-error-modal/index.js\n')}}]);