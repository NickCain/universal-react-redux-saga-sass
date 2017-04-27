module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** external "redux-connect" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = require("redux-connect");

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./src/app/config/index.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 12);

var _extends3 = _interopRequireDefault(_extends2);

var _default = __webpack_require__(/*! ./default */ 25);

var _default2 = _interopRequireDefault(_default);

var _environment = __webpack_require__(/*! ./environment */ 26);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, _default2.default, _environment2.default);
module.exports = exports['default'];

/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./src/app/containers/Landing/index.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Landing = __webpack_require__(/*! ../../components/Landing */ 23);

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LandingContainer = function (_Component) {
  (0, _inherits3.default)(LandingContainer, _Component);

  function LandingContainer() {
    (0, _classCallCheck3.default)(this, LandingContainer);
    return (0, _possibleConstructorReturn3.default)(this, (LandingContainer.__proto__ || (0, _getPrototypeOf2.default)(LandingContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(LandingContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Landing2.default, this.props);
    }
  }]);
  return LandingContainer;
}(_react.Component);

LandingContainer.propTypes = {
  children: _propTypes2.default.element.isRequired
};

exports.default = LandingContainer;
module.exports = exports['default'];

/***/ }),
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./src/server/SSR/createSSR.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 12);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createSSR;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reduxConnect = __webpack_require__(/*! redux-connect */ 9);

var _server = __webpack_require__(/*! react-dom/server */ 13);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 8);

var _reactRouter = __webpack_require__(/*! react-router */ 42);

var _html = __webpack_require__(/*! ./html */ 36);

var _html2 = _interopRequireDefault(_html);

var _routes = __webpack_require__(/*! ../../app/routes */ 31);

var _routes2 = _interopRequireDefault(_routes);

var _store = __webpack_require__(/*! ../../app/redux/store */ 30);

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(/*! ../../app/utils */ 35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSSR(assets) {
  return function (req, res) {
    var memoryHistory = (0, _reactRouter.createMemoryHistory)(req.url);
    var store = (0, _store2.default)(memoryHistory);
    var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store, {
      selectLocationState: (0, _utils.createSelectLocationState)('routing')
    });

    (0, _reactRouter.match)({ history: history, routes: (0, _routes2.default)(), location: req.url }, function (err, redirectLocation, renderProps) {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        (0, _reduxConnect.loadOnServer)((0, _extends3.default)({}, renderProps, { store: store })).then(function () {
          var content = (0, _server.renderToString)(_react2.default.createElement(_html2.default, { renderProps: renderProps, store: store, assets: assets }));

          res.send('<!doctype html>\n' + content);
        });
      } else {
        res.status(404).send('Not found');
      }
    });
  };
}
module.exports = exports['default'];

/***/ }),
/* 15 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 16 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 19 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./src/app/components/App/index.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _App = __webpack_require__(/*! ./App.scss */ 38);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        { className: _App2.default.appContainer },
        children
      );
    }
  }]);
  return App;
}(_react.Component);

App.propTypes = {
  children: _propTypes2.default.element.isRequired
};

exports.default = App;
module.exports = exports['default'];

/***/ }),
/* 20 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./src/app/components/Footer/index.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      var githubUrl = 'https://github.com/krasevych/english-school';

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          'Have questions? Contact with me for help on '
        ),
        _react2.default.createElement(
          'a',
          {
            href: githubUrl,
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          'Github'
        )
      );
    }
  }]);
  return Footer;
}(_react.Component);

Footer.PropTypes = {};

exports.default = Footer;
module.exports = exports['default'];

/***/ }),
/* 21 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./src/app/components/Header/index.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(/*! ./Header.scss */ 39);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_PureComponent) {
  (0, _inherits3.default)(Header, _PureComponent);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _Header2.default.header },
        _react2.default.createElement(
          'span',
          null,
          'Header'
        )
      );
    }
  }]);
  return Header;
}(_react.PureComponent);

exports.default = Header;
module.exports = exports['default'];

/***/ }),
/* 22 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./src/app/components/Home/index.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_PureComponent) {
  (0, _inherits3.default)(Home, _PureComponent);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Home'
        )
      );
    }
  }]);
  return Home;
}(_react.PureComponent);

exports.default = Home;
module.exports = exports['default'];

/***/ }),
/* 23 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./src/app/components/Landing/index.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(/*! ../Header */ 21);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(/*! ../Footer */ 20);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Landing = function (_PureComponent) {
  (0, _inherits3.default)(Landing, _PureComponent);

  function Landing() {
    (0, _classCallCheck3.default)(this, Landing);
    return (0, _possibleConstructorReturn3.default)(this, (Landing.__proto__ || (0, _getPrototypeOf2.default)(Landing)).apply(this, arguments));
  }

  (0, _createClass3.default)(Landing, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);
  return Landing;
}(_react.PureComponent);

Landing.propTypes = {};

Landing.propTypes = {
  children: _propTypes2.default.element.isRequired
};
exports.default = Landing;
module.exports = exports['default'];

/***/ }),
/* 24 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./src/app/components/NotFound/index.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function (_PureComponent) {
  (0, _inherits3.default)(NotFound, _PureComponent);

  function NotFound() {
    (0, _classCallCheck3.default)(this, NotFound);
    return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || (0, _getPrototypeOf2.default)(NotFound)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          'Not Found'
        )
      );
    }
  }]);
  return NotFound;
}(_react.PureComponent);

exports.default = NotFound;
module.exports = exports['default'];

/***/ }),
/* 25 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/app/config/default.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  server: {
    host: 'http://localhost',
    port: 3005
  },

  webpack: {
    server: {
      host: 'http://localhost',
      port: 3001
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 26 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./src/app/config/environment.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  development: {
    isProd: false
  },
  production: {
    isProd: true
  }
}[process.env.NODE_ENV || 'development'];
module.exports = exports['default'];

/***/ }),
/* 27 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./src/app/containers/App/index.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _App = __webpack_require__(/*! app/components/App */ 19);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContainer = function (_Component) {
  (0, _inherits3.default)(AppContainer, _Component);

  function AppContainer() {
    (0, _classCallCheck3.default)(this, AppContainer);
    return (0, _possibleConstructorReturn3.default)(this, (AppContainer.__proto__ || (0, _getPrototypeOf2.default)(AppContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(AppContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_App2.default, this.props);
    }
  }]);
  return AppContainer;
}(_react.Component);

AppContainer.propTypes = {
  children: _propTypes2.default.element.isRequired
};

exports.default = AppContainer;
module.exports = exports['default'];

/***/ }),
/* 28 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/app/redux/reducer.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReducer;

var _immutable = __webpack_require__(/*! immutable */ 7);

var _reduxImmutablejs = __webpack_require__(/*! redux-immutablejs */ 44);

var _reduxConnect = __webpack_require__(/*! redux-connect */ 9);

var _routing = __webpack_require__(/*! ./routing */ 29);

var _routing2 = _interopRequireDefault(_routing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reduxConnect.setToImmutableStateFunc)(function (mutableState) {
  return (0, _immutable.fromJS)(mutableState);
});
(0, _reduxConnect.setToMutableStateFunc)(function (immutableState) {
  return immutableState.toJS();
});

function createReducer() {
  return (0, _reduxImmutablejs.combineReducers)({
    reduxAsyncConnect: _reduxConnect.immutableReducer,
    routing: _routing2.default
  });
}
module.exports = exports['default'];

/***/ }),
/* 29 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/app/redux/routing.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routeReducer;

var _immutable = __webpack_require__(/*! immutable */ 7);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 8);

var routeInitialState = (0, _immutable.fromJS)({
  locationBeforeTransitions: null
});

function routeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : routeInitialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _reactRouterRedux.LOCATION_CHANGE:
      return state.merge({ locationBeforeTransitions: payload });
    default:
      return state;
  }
}
module.exports = exports['default'];

/***/ }),
/* 30 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./src/app/redux/store.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _reduxSaga = __webpack_require__(/*! redux-saga */ 45);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _immutable = __webpack_require__(/*! immutable */ 7);

var _redux = __webpack_require__(/*! redux */ 43);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 8);

var _reducer = __webpack_require__(/*! ./reducer */ 28);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(history) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var reducer = (0, _reducer2.default)();

  var sagaMiddleware = (0, _reduxSaga2.default)();

  var middlewares = [sagaMiddleware, (0, _reactRouterRedux.routerMiddleware)(history)];

  var composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) || _redux.compose;

  var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares));

  var store = (0, _redux.createStore)(reducer, (0, _immutable.fromJS)(initialState), enhancer);

  if (false) {
    module.hot.accept('./reducer', function () {
      var createNextReducer = require('./reducer');
      var nextReducer = createNextReducer();

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
module.exports = exports['default'];

/***/ }),
/* 31 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./src/app/routes/index.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _App = __webpack_require__(/*! ../containers/App */ 27);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes() {
  return {
    component: _App2.default,
    childRoutes: [__webpack_require__(/*! ./landing */ 32), __webpack_require__(/*! ./notFound */ 33)]
  };
}
module.exports = exports['default'];

/***/ }),
/* 32 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/app/routes/landing.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(/*! ../components/Home */ 22);

var _Home2 = _interopRequireDefault(_Home);

var _Landing = __webpack_require__(/*! ../../app/containers/Landing */ 11);

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  path: '/',
  component: _Landing2.default,
  indexRoute: { component: _Home2.default }
};
module.exports = exports['default'];

/***/ }),
/* 33 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./src/app/routes/notFound.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Landing = __webpack_require__(/*! ../containers/Landing */ 11);

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  path: '*',
  component: _Landing2.default,
  getIndexRoute: function getIndexRoute(partialNextState, cb) {
    Promise.resolve().then((function (require) {
      cb(null, { component: __webpack_require__(/*! ../components/NotFound */ 24) });
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
};
module.exports = exports['default'];

/***/ }),
/* 34 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./src/app/utils/createSelectLocationState.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSelectLocationState;
function createSelectLocationState(reducerName) {
  var prevRoutingState = void 0;
  var prevRoutingStateJS = void 0;

  return function (state) {
    var routingState = state.get(reducerName);

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
}
module.exports = exports["default"];

/***/ }),
/* 35 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./src/app/utils/index.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSelectLocationState = __webpack_require__(/*! ./createSelectLocationState */ 34);

var _createSelectLocationState2 = _interopRequireDefault(_createSelectLocationState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createSelectLocationState: _createSelectLocationState2.default
};
module.exports = exports['default'];

/***/ }),
/* 36 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./src/server/SSR/html.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 40);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ 41);

var _server = __webpack_require__(/*! react-dom/server */ 13);

var _reduxConnect = __webpack_require__(/*! redux-connect */ 9);

var _config = __webpack_require__(/*! ../../app/config */ 10);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function (_Component) {
  (0, _inherits3.default)(Html, _Component);

  function Html() {
    (0, _classCallCheck3.default)(this, Html);
    return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).apply(this, arguments));
  }

  (0, _createClass3.default)(Html, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          renderProps = _props.renderProps,
          assets = _props.assets;
      var isProd = _config2.default.isProd;

      var initialState = 'window.__INITIAL_STATE__ = ' + (0, _stringify2.default)(store.getState());

      var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_reduxConnect.ReduxAsyncConnect, renderProps)
      ));

      return _react2.default.createElement(
        'html',
        { lang: 'en' },
        _react2.default.createElement('head', null),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement('div', { id: 'root', dangerouslySetInnerHTML: { __html: content } }),
          _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: initialState } }),
          isProd && _react2.default.createElement('script', { src: assets.javascript.vendor }),
          _react2.default.createElement('script', { src: assets.javascript.main })
        )
      );
    }
  }]);
  return Html;
}(_react.Component);

Html.propTypes = {
  store: _react.PropTypes.object.isRequired,
  renderProps: _react.PropTypes.object.isRequired,
  assets: _react.PropTypes.object.isRequired
};

exports.default = Html;
module.exports = exports['default'];

/***/ }),
/* 37 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (parameters) {
  if (_config2.default.isProd) {
    app.use((0, _compression2.default)());
    app.use('/', _express2.default.static('static'));
  }

  app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '..', 'favicon.ico')));
  app.get('*', (0, _createSSR2.default)(parameters.chunks()));

  app.listen(port, function (err) {
    if (err) {
      return console.error(err);
    }

    console.info('Listening at ' + host + ':' + port);
  });
};

var _path = __webpack_require__(/*! path */ 17);

var _path2 = _interopRequireDefault(_path);

var _compression = __webpack_require__(/*! compression */ 15);

var _compression2 = _interopRequireDefault(_compression);

var _express = __webpack_require__(/*! express */ 16);

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = __webpack_require__(/*! serve-favicon */ 18);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _createSSR = __webpack_require__(/*! ./SSR/createSSR */ 14);

var _createSSR2 = _interopRequireDefault(_createSSR);

var _config = __webpack_require__(/*! ../app/config */ 10);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _appConfig$server = _config2.default.server,
    host = _appConfig$server.host,
    port = _appConfig$server.port;

var app = (0, _express2.default)();

module.exports = exports['default'];

/***/ }),
/* 38 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./src/app/components/App/App.scss ***!
  \*****************************************/
/***/ (function(module, exports) {

module.exports = {
	"appContainer": "App__appContainer"
};

/***/ }),
/* 39 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./src/app/components/Header/Header.scss ***!
  \***********************************************/
/***/ (function(module, exports) {

module.exports = {
	"header": "Header__header"
};

/***/ }),
/* 40 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 41 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 42 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 43 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 44 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** external "redux-immutablejs" ***!
  \************************************/
/***/ (function(module, exports) {

module.exports = require("redux-immutablejs");

/***/ }),
/* 45 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map