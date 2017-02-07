exports.ids = [1];
exports.modules = {

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRedux = __webpack_require__(4);

	var _User = __webpack_require__(7);

	var _User2 = _interopRequireDefault(_User);

	var _NavLink = __webpack_require__(11);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = (_dec = (0, _reactRedux.connect)(function (state) {
	  return {
	    isAuthenticated: state.user.authenticated,
	    khan_data: state.user.khan_data
	  };
	}, {}), _dec(_class = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var isAuthenticated = _props.isAuthenticated;
	      var khan_data = _props.khan_data;
	      var children = _props.children;

	      // if(!isAuthenticated){
	      //   return <User/>
	      // }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'bs-component' },
	          _react2.default.createElement(
	            'div',
	            { className: 'navbar navbar-default navbar-fixed-top' },
	            _react2.default.createElement(
	              'div',
	              { className: 'container-fluid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'navbar-header' },
	                _react2.default.createElement(
	                  'button',
	                  { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-responsive-collapse' },
	                  _react2.default.createElement('span', { className: 'icon-bar' }),
	                  _react2.default.createElement('span', { className: 'icon-bar' }),
	                  _react2.default.createElement('span', { className: 'icon-bar' })
	                ),
	                _react2.default.createElement(
	                  _NavLink2.default,
	                  { to: '/', className: 'navbar-brand' },
	                  'Mission Control'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'navbar-collapse collapse navbar-responsive-collapse' },
	                _react2.default.createElement(
	                  'ul',
	                  { className: 'nav navbar-nav' },
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      _NavLink2.default,
	                      { to: '/skill_explorer' },
	                      'Skill View'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      _NavLink2.default,
	                      { to: '/mission_explorer' },
	                      'Mission Matrix'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            children
	          )
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component)) || _class);
	exports.default = App;

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(4);

	var _actions = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MissionTable = (_dec = (0, _reactRedux.connect)(function (state) {
	  return {
	    isAuthenticated: state.user.authenticated,
	    khan_data: state.user.khan_data
	  };
	}, { authenticateUser: _actions.authenticateUser }), _dec(_class = function (_Component) {
	  _inherits(MissionTable, _Component);

	  function MissionTable() {
	    _classCallCheck(this, MissionTable);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MissionTable).apply(this, arguments));
	  }

	  _createClass(MissionTable, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var isAuthenticated = _props.isAuthenticated;
	      var khan_data = _props.khan_data;
	      var authenticateUser = _props.authenticateUser;


	      if (isAuthenticated) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          'You are authenticated'
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: authenticateUser },
	          'Authenticate'
	        )
	      );
	    }
	  }]);

	  return MissionTable;
	}(_react.Component)) || _class);
	exports.default = MissionTable;

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ }

};;