webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hello = function (_Component) {
	    _inherits(Hello, _Component);

	    function Hello() {
	        _classCallCheck(this, Hello);

	        return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
	    }

	    _createClass(Hello, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'h1',
	                null,
	                'Hello'
	            );
	        }
	    }]);

	    return Hello;
	}(_react.Component);

	var World = function (_Component2) {
	    _inherits(World, _Component2);

	    function World() {
	        _classCallCheck(this, World);

	        return _possibleConstructorReturn(this, (World.__proto__ || Object.getPrototypeOf(World)).apply(this, arguments));
	    }

	    _createClass(World, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'h1',
	                null,
	                'World',
	                this.props.params.id
	            );
	        }
	    }]);

	    return World;
	}(_react.Component);

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: Hello }),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/world' },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: Hello })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: '/app/:id', component: World })
	), document.getElementById('root'));

/***/ }
]);