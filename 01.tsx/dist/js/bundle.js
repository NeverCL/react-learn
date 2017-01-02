webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var DOM = __webpack_require__(32);
	var app_1 = __webpack_require__(178);
	var root = document.createElement('div');
	document.body.appendChild(root);
	DOM.render(React.createElement(app_1.default, { name: " World!你好,世界!" }), root);


/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	;
	;
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        return _super.call(this) || this;
	    }
	    App.prototype.render = function () {
	        // let style = {
	        //     color: "red"
	        // }
	        return (React.createElement("div", null,
	            "Hello",
	            this.props.name));
	    };
	    return App;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = App;


/***/ }

});
//# sourceMappingURL=bundle.js.map