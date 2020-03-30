/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block.js":
/*!******************!*\
  !*** ./block.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_blocks_wiki_embed_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/blocks/wiki-embed/block */ "./src/blocks/wiki-embed/block.js");
/* harmony import */ var _src_blocks_wiki_embed_editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/blocks/wiki-embed/editor.scss */ "./src/blocks/wiki-embed/editor.scss");
/* harmony import */ var _src_blocks_wiki_embed_editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_wiki_embed_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/**
 * styles and scripts that goes into editor
 */



/***/ }),

/***/ "./src/blocks/wiki-embed/block.js":
/*!****************************************!*\
  !*** ./src/blocks/wiki-embed/block.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/wiki-embed/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/wiki-embed/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/**
 * BLOCK: UBC Wiki Embed.
 */
// Import block dependencies and components.


const __ = wp.i18n.__;
const registerBlockType = wp.blocks.registerBlockType;
registerBlockType('ubc/wiki-embed', {
  title: __('UBC Wiki Embed', 'ubc-wiki-embed'),
  description: __('Adds ability to embed content from select UBC OpenWiki platforms such as "wiki.ubc.ca" and see a live preview in the editor.', 'ubc-wiki-embed'),
  icon: 'book',
  keywords: [__('Wiki', 'ubc-wiki-embed'), __('Embed', 'ubc-wiki-embed')],
  category: 'embed',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: () => null
});

/***/ }),

/***/ "./src/blocks/wiki-embed/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/wiki-embed/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * BLOCK: Tabs
 */
const InspectorControls = wp.blockEditor.InspectorControls;
const _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      Button = _wp$components.Button,
      ButtonGroup = _wp$components.ButtonGroup,
      CheckboxControl = _wp$components.CheckboxControl,
      TextControl = _wp$components.TextControl;
const ServerSideRender = wp.serverSideRender;
const useState = wp.element.useState;
const __ = wp.i18n.__;

const Edit = ({
  attributes,
  setAttributes
}) => {
  const source = attributes.source,
        headingType = attributes.headingType,
        noEditLinks = attributes.noEditLinks,
        noTabContens = attributes.noTabContens,
        noInfoBox = attributes.noInfoBox;

  const _useState = useState(source),
        _useState2 = _slicedToArray(_useState, 2),
        newSource = _useState2[0],
        setNewSource = _useState2[1];

  const headingTypeOptions = {
    Default: 0,
    Tabs: 1,
    Accordions: 2
  };
  /**
   * Render default gray box to insert url when source is empty.
   */

  function renderDefaultView() {
    return React.createElement("div", {
      className: "ubc-wiki-embed-default-view"
    }, React.createElement("h2", {
      className: "ubc-wiki-embed-default-view__heading"
    }, __('Paste URL for OpenWiki resource, i.e. https://wiki.ubc.ca/Course:Math340', 'ubc-wiki-embed')), React.createElement("div", {
      className: "ubc-wiki-embed-default-view__controls"
    }, React.createElement(TextControl, {
      value: newSource,
      onChange: src => setNewSource(src)
    }), React.createElement(Button, {
      isPrimary: true,
      onClick: () => {
        setAttributes({
          source: newSource
        });
      }
    }, "Insert")));
  }

  return React.createElement(React.Fragment, null, source ? React.createElement(ServerSideRender, {
    block: "ubc/wiki-embed",
    attributes: _objectSpread({}, attributes)
  }) : renderDefaultView(), source ? React.createElement(InspectorControls, null, React.createElement(PanelBody, {
    title: "Settings",
    initialOpen: true
  }, React.createElement("h2", null, "Embed Srouce"), React.createElement(TextControl, {
    value: newSource,
    onChange: src => setNewSource(src)
  }), React.createElement(Button, {
    isPrimary: true,
    onClick: () => {
      setAttributes({
        source: newSource
      });
    }
  }, "Update"), React.createElement("hr", null), React.createElement("h2", null, "Heading Type"), React.createElement(ButtonGroup, null, Object.keys(headingTypeOptions).map(key => {
    return React.createElement(Button, {
      key: key,
      isPrimary: headingTypeOptions[key] === headingType,
      isDefault: headingTypeOptions[key] !== headingType,
      onClick: () => {
        setAttributes({
          headingType: headingTypeOptions[key]
        });
      }
    }, key);
  })), React.createElement("hr", null), React.createElement("h2", null, "Options"), React.createElement(CheckboxControl, {
    label: "Remove edit links",
    help: "Often wiki pages have edit links displayed next to sections, which is not always desired.",
    checked: noEditLinks,
    onChange: () => setAttributes({
      noEditLinks: !noEditLinks
    })
  }), React.createElement(CheckboxControl, {
    label: "Remove table of contents",
    help: "Often wiki pages have a table of contents (a list of content) at the top of each page.",
    checked: noTabContens,
    onChange: () => setAttributes({
      noTabContens: !noTabContens
    })
  }), React.createElement(CheckboxControl, {
    label: "Remove infoboxes",
    checked: noInfoBox,
    onChange: () => setAttributes({
      noInfoBox: !noInfoBox
    })
  }))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/blocks/wiki-embed/editor.scss":
/*!*******************************************!*\
  !*** ./src/blocks/wiki-embed/editor.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=block.js.map