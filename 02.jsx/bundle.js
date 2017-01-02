webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Profile = __webpack_require__(178);
	
	var _Profile2 = _interopRequireDefault(_Profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Container = function (_Component) {
	    _inherits(Container, _Component);
	
	    function Container() {
	        _classCallCheck(this, Container);
	
	        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	    }
	
	    _createClass(Container, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.children
	            );
	        }
	    }]);
	
	    return Container;
	}(_react.Component);
	
	var props = {
	    name: 'Mike',
	    age: 19
	};
	_reactDom2.default.render(_react2.default.createElement(
	    Container,
	    null,
	    _react2.default.createElement(_Profile2.default, props)
	), document.getElementById('root'));

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _antd = __webpack_require__(179);
	
	__webpack_require__(921);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_Component) {
	    _inherits(Profile, _Component);
	
	    function Profile(props) {
	        _classCallCheck(this, Profile);
	
	        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
	
	        _this.likeFunc = _this.likeFunc.bind(_this);
	        _this.addHobby = _this.addHobby.bind(_this);
	        _this.delHobby = _this.delHobby.bind(_this);
	        _this.state = {
	            liked: 0,
	            hobbies: ['唱歌', '跳舞', '洗碗'],
	            isLoading: false
	        };
	        return _this;
	    }
	
	    _createClass(Profile, [{
	        key: 'likeFunc',
	        value: function likeFunc() {
	            var liked = this.state.liked;
	            liked++;
	            this.setState({
	                liked: liked
	            });
	        }
	    }, {
	        key: 'addHobby',
	        value: function addHobby() {
	            var _this2 = this;
	
	            this.setState({ isLoading: true });
	            var txt = this.refs.hobby.value;
	            if (!txt) {
	                this.setState({ isLoading: false }, function () {
	                    return _antd.notification.error({
	                        message: '提醒',
	                        description: '添加失败,数据为空!'
	                    });
	                });
	                return;
	            }
	            var hobbies = this.state.hobbies;
	            hobbies = [].concat(_toConsumableArray(hobbies), [txt]);
	            this.setState({
	                hobbies: hobbies
	            });
	            setTimeout(function () {
	                return _this2.setState({ isLoading: false });
	            }, 500);
	            _antd.notification.success({
	                message: '提醒',
	                description: '已添加成功!'
	            });
	            txt = '';
	        }
	    }, {
	        key: 'delHobby',
	        value: function delHobby(e) {
	            var hobbies = this.state.hobbies;
	            hobbies.splice(hobbies.indexOf(e.target.innerText), 1);
	            this.setState({
	                hobbies: hobbies
	            });
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(date, str) {
	            console.log(date);
	            console.log('当前时间为:' + str);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    '\u6211\u7684\u540D\u5B57:',
	                    this.props.name
	                ),
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    '\u6211\u7684\u5E74\u9F84:',
	                    this.props.age
	                ),
	                _react2.default.createElement(
	                    _antd.Button,
	                    { onClick: this.likeFunc },
	                    '\u7ED9\u6211\u70B9\u8D5E'
	                ),
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    '\u603B\u70B9\u8D5E\u6570:',
	                    this.state.liked
	                ),
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    '\u6211\u7684\u7231\u597D:'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    this.state.hobbies.map(function (x) {
	                        return _react2.default.createElement(
	                            'li',
	                            { key: x, onClick: function onClick(e) {
	                                    return _this3.delHobby(e);
	                                } },
	                            x
	                        );
	                    })
	                ),
	                _react2.default.createElement('input', { type: 'text', ref: 'hobby' }),
	                _react2.default.createElement(
	                    _antd.Button,
	                    { onClick: this.addHobby, type: 'primary', icon: 'plus', loading: this.state.isLoading },
	                    '\u6DFB\u52A0\u7231\u597D'
	                ),
	                _react2.default.createElement('br', null),
	                _react2.default.createElement(_antd.DatePicker, { onChange: this.onChange })
	            );
	        }
	    }]);
	
	    return Profile;
	}(_react.Component);
	
	Profile.propTypes = {
	    name: _react.PropTypes.string.isRequired,
	    age: _react.PropTypes.number.isRequired
	};
	
	exports.default = Profile;

/***/ },

/***/ 921:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=bundle.js.map