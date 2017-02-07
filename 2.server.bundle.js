exports.ids = [2];
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _SkillExplorer = __webpack_require__(13);

	var _SkillExplorer2 = _interopRequireDefault(_SkillExplorer);

	var _SkillView = __webpack_require__(27);

	var _SkillView2 = _interopRequireDefault(_SkillView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  path: 'skill_explorer',
	  getChildRoutes: function getChildRoutes(partialNextState, callback) {
	    !/* require.ensure */(function (require) {
	      callback(null, [__webpack_require__(27).routes]);
	    }(__webpack_require__));
	  },
	  getComponent: function getComponent(nextState, callback) {
	    !/* require.ensure */(function (require) {
	      callback(null, __webpack_require__(13).default);
	    }(__webpack_require__));
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Sidebar = __webpack_require__(14);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	var _SkillDisplay = __webpack_require__(26);

	var _SkillDisplay2 = _interopRequireDefault(_SkillDisplay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SkillExplorer = function (_Component) {
	  _inherits(SkillExplorer, _Component);

	  function SkillExplorer() {
	    _classCallCheck(this, SkillExplorer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SkillExplorer).apply(this, arguments));
	  }

	  _createClass(SkillExplorer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Sidebar2.default, null),
	        _react2.default.createElement(_SkillDisplay2.default, null)
	      );
	    }
	  }]);

	  return SkillExplorer;
	}(_react.Component);

	exports.default = SkillExplorer;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Selector = __webpack_require__(15);

	var _Selector2 = _interopRequireDefault(_Selector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SideBar = function (_Component) {
	  _inherits(SideBar, _Component);

	  function SideBar() {
	    _classCallCheck(this, SideBar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SideBar).apply(this, arguments));
	  }

	  _createClass(SideBar, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'col-sm-4 col-md-3 sidebar' },
	        _react2.default.createElement(_Selector2.default, null)
	      );
	    }
	  }]);

	  return SideBar;
	}(_react.Component);

	exports.default = SideBar;

/***/ },
/* 15 */
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

	var _reactVirtualizedSelect = __webpack_require__(16);

	var _reactVirtualizedSelect2 = _interopRequireDefault(_reactVirtualizedSelect);

	__webpack_require__(17);

	__webpack_require__(21);

	var _actions = __webpack_require__(23);

	var _SkillList = __webpack_require__(25);

	var _SkillList2 = _interopRequireDefault(_SkillList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Selector = (_dec = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.skill_explorer.skill_list.isFetching,
	    skill_list: state.skill_explorer.skill_list.skills,
	    value: state.skill_explorer.skill_list.value
	  };
	}, { selectSkill: _actions.selectSkill, getSkillList: _actions.getSkillList }), _dec(_class = function (_Component) {
	  _inherits(Selector, _Component);

	  function Selector(props) {
	    _classCallCheck(this, Selector);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Selector).call(this, props));
	  }

	  _createClass(Selector, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var getSkillList = this.props.getSkillList;

	      getSkillList();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var value = _props.value;
	      var skill_list = _props.skill_list;
	      var isFetching = _props.isFetching;
	      var selectSkill = _props.selectSkill;

	      var hidden = isFetching ? 'hidden' : '';

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'ul',
	          { className: "nav nav-list " + hidden },
	          _react2.default.createElement(
	            'form',
	            null,
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement('input', {
	                  className: 'form-control floating-label',
	                  type: 'text',
	                  name: 'suggestion',
	                  value: value,
	                  id: 'suggestion',
	                  placeholder: 'Type to find an exercise',
	                  onChange: selectSkill
	                })
	              ),
	              _react2.default.createElement('span', { className: 'material-input' })
	            )
	          )
	        ),
	        _react2.default.createElement(_SkillList2.default, null)
	      );
	    }
	  }]);

	  return Selector;
	}(_react.Component)) || _class);
	exports.default = Selector;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("react-virtualized-select");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./react-select.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./react-select.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports


	// module
	exports.push([module.id, "/**\n * React Select\n * ============\n * Created by Jed Watson and Joss Mackison for KeystoneJS, http://www.keystonejs.com/\n * https://twitter.com/jedwatson https://twitter.com/jossmackison https://twitter.com/keystonejs\n * MIT License: https://github.com/JedWatson/react-select\n*/\n.Select {\n  position: relative;\n}\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.Select.is-disabled > .Select-control {\n  background-color: #f9f9f9;\n}\n.Select.is-disabled > .Select-control:hover {\n  box-shadow: none;\n}\n.Select.is-disabled .Select-arrow-zone {\n  cursor: default;\n  pointer-events: none;\n}\n.Select-control {\n  background-color: #fff;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  color: #333;\n  cursor: default;\n  display: table;\n  border-spacing: 0;\n  border-collapse: separate;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.Select-control:hover {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n}\n.Select-control .Select-input:focus {\n  outline: none;\n}\n.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n  border-color: #b3b3b3 #ccc #d9d9d9;\n}\n.is-open > .Select-control > .Select-arrow {\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n.is-focused:not(.is-open) > .Select-control {\n  border-color: #007eff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n}\n.Select-placeholder,\n.Select--single > .Select-control .Select-value {\n  bottom: 0;\n  color: #aaa;\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.has-value.Select--single > .Select-control .Select-value .Select-value-label,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {\n  color: #333;\n}\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n.Select-input {\n  height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n.Select-input > input {\n  width: 100%;\n  background: none transparent;\n  border: 0 none;\n  box-shadow: none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  outline: none;\n  line-height: 14px;\n  /* For IE 8 compatibility */\n  padding: 8px 0 12px;\n  /* For IE 8 compatibility */\n  -webkit-appearance: none;\n}\n.is-focused .Select-input > input {\n  cursor: text;\n}\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n.Select-loading {\n  -webkit-animation: Select-animation-spin 400ms infinite linear;\n  -o-animation: Select-animation-spin 400ms infinite linear;\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #333;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.Select-clear-zone {\n  -webkit-animation: Select-animation-fadeIn 200ms;\n  -o-animation: Select-animation-fadeIn 200ms;\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n}\n.Select-clear-zone:hover {\n  color: #D0021B;\n}\n.Select-clear {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 1;\n}\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 25px;\n  padding-right: 5px;\n}\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n.is-open .Select-arrow,\n.Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n.Select--multi .Select-multi-value-wrapper {\n  display: inline-block;\n}\n.Select .Select-aria-only {\n  display: inline-block;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n}\n@-webkit-keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1;\n  -webkit-overflow-scrolling: touch;\n}\n.Select-menu {\n  max-height: 198px;\n  overflow-y: auto;\n}\n.Select-option {\n  box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n}\n.Select-option:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Select-option.is-selected {\n  background-color: #f5faff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.04);\n  color: #333;\n}\n.Select-option.is-focused {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  color: #333;\n}\n.Select-option.is-disabled {\n  color: #cccccc;\n  cursor: default;\n}\n.Select-noresults {\n  box-sizing: border-box;\n  color: #999999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n.Select--multi .Select-input {\n  vertical-align: middle;\n  margin-left: 10px;\n  padding: 0;\n}\n.Select--multi.has-value .Select-input {\n  margin-left: 5px;\n}\n.Select--multi .Select-value {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  line-height: 1.4;\n  margin-left: 5px;\n  margin-top: 5px;\n  vertical-align: top;\n}\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Select--multi .Select-value-label {\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n}\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px 3px;\n}\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: #d8eafd;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n.Select--multi .Select-value-icon:active {\n  background-color: #c2e0ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.24);\n}\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #333;\n}\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@-webkit-keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports


	// module
	exports.push([module.id, ".VirtualSelectGrid {\n  z-index: 1;\n}\n\n.VirtualizedSelectOption {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n  padding: 0 .5rem;\n}\n.VirtualizedSelectFocusedOption {\n  background-color: rgba(0, 126, 255, 0.1);\n}\n.VirtualizedSelectDisabledOption {\n  opacity: 0.5;\n}\n", ""]);

	// exports


/***/ },
/* 23 */,
/* 24 */,
/* 25 */
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

	var _NavLink = __webpack_require__(11);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _actions = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Selector = (_dec = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.skill_explorer.skill_list.isFetching,
	    skill_list: state.skill_explorer.skill_list.skills,
	    value: state.skill_explorer.skill_list.value
	  };
	}, { fetchSkill: _actions.fetchSkill }), _dec(_class = function (_Component) {
	  _inherits(Selector, _Component);

	  function Selector(props) {
	    _classCallCheck(this, Selector);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Selector).call(this, props));
	  }

	  _createClass(Selector, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var isFetching = _props.isFetching;
	      var skill_list = _props.skill_list;
	      var value = _props.value;
	      var fetchSkill = _props.fetchSkill;


	      var skills = Object.keys(skill_list).filter(function (name) {
	        return (
	          // check that the skill name is starts with the input box value
	          // and return the first 10 matches
	          skill_list[name].display_name.toLowerCase().startsWith(value.toLowerCase())
	        );
	      }).slice(0, 10);

	      var list = skills.map(function (name, key) {
	        return _react2.default.createElement(
	          'li',
	          { key: key, className: 'withripple' },
	          _react2.default.createElement(
	            _NavLink2.default,
	            {
	              to: "/skill_explorer/" + name,
	              onClick: fetchSkill.bind(_this2, name) },
	            skill_list[name].display_name
	          )
	        );
	      });

	      return _react2.default.createElement(
	        'ul',
	        { className: 'nav nav-list' },
	        list
	      );
	    }
	  }]);

	  return Selector;
	}(_react.Component)) || _class);
	exports.default = Selector;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SkillView = __webpack_require__(27);

	var _SkillView2 = _interopRequireDefault(_SkillView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SkillExplorer = function (_Component) {
	  _inherits(SkillExplorer, _Component);

	  function SkillExplorer() {
	    _classCallCheck(this, SkillExplorer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SkillExplorer).apply(this, arguments));
	  }

	  _createClass(SkillExplorer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main' },
	        _react2.default.createElement(_SkillView2.default, null)
	      );
	    }
	  }]);

	  return SkillExplorer;
	}(_react.Component);

	exports.default = SkillExplorer;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routes = exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(4);

	var _reactRouter = __webpack_require__(3);

	var _actions = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SkillView = (_dec = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.skill_explorer.skill.isFetching,
	    skill: state.skill_explorer.skill.skill_props,
	    skill_name: state.skill_explorer.skill_list.selected,
	    skill_list: state.skill_explorer.skill_list.skills
	  };
	}, { fetchSkill: _actions.fetchSkill }), _dec(_class = function (_Component) {
	  _inherits(SkillView, _Component);

	  function SkillView(props) {
	    _classCallCheck(this, SkillView);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SkillView).call(this, props));
	  }

	  _createClass(SkillView, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var isFetching = _props.isFetching;
	      var skill = _props.skill;
	      var skill_list = _props.skill_list;
	      var fetchSkill = _props.fetchSkill;

	      if (isFetching) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          'Fetching skill data'
	        );
	      } else if (!skill) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          'Select skill from menu'
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          skill.title
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'image', style: { float: 'left', paddingRight: '10px' } },
	          _react2.default.createElement('img', {
	            src: skill.image_url_256,
	            className: 'img-thumbnail',
	            style: {
	              width: "256px",
	              height: "256px",
	              padding: "20px",
	              backgroundColor: "#fff" }
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'info', style: { float: "left" } },
	          _react2.default.createElement(
	            'div',
	            { className: 'panel panel-default' },
	            _react2.default.createElement(
	              'div',
	              { className: 'panel-heading' },
	              _react2.default.createElement(
	                'h3',
	                { className: 'panel-title' },
	                'URL:'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'panel-body' },
	              _react2.default.createElement(
	                'a',
	                { href: skill.ka_url, target: '_blank', style: { fontSize: "1.2em" } },
	                skill.ka_url
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'panel panel-default' },
	            _react2.default.createElement(
	              'div',
	              { className: 'panel-heading' },
	              _react2.default.createElement(
	                'h3',
	                { className: 'panel-title' },
	                'Related Videos:'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'panel-body' },
	              _react2.default.createElement(
	                'ul',
	                { style: { listStyleType: "none" } },
	                skill.related_video_readable_ids.map(function (video, key) {
	                  return _react2.default.createElement(
	                    'li',
	                    { className: 'withripple', key: key },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: video, style: { fontSize: "1.2em" } },
	                      video
	                    )
	                  );
	                })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'panel panel-default' },
	            _react2.default.createElement(
	              'div',
	              { className: 'panel-heading' },
	              _react2.default.createElement(
	                'h3',
	                { className: 'panel-title' },
	                'Prerequisites:'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'panel-body' },
	              _react2.default.createElement(
	                'ul',
	                { style: { listStyleType: "none" } },
	                skill.prerequisites.map(function (prereq, key) {
	                  if (!skill_list[prereq]) {
	                    return _react2.default.createElement(
	                      'li',
	                      { className: 'withripple', key: key },
	                      _react2.default.createElement(
	                        _reactRouter.Link,
	                        {
	                          to: "/skill_explorer/" + prereq,
	                          style: { fontSize: "1.2em" },
	                          onClick: fetchSkill.bind(_this2, prereq) },
	                        prereq
	                      )
	                    );
	                  }
	                  return _react2.default.createElement(
	                    'li',
	                    { className: 'withripple', key: key },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      {
	                        to: "/skill_explorer/" + prereq,
	                        style: { fontSize: "1.2em" },
	                        onClick: fetchSkill.bind(_this2, prereq) },
	                      skill_list[prereq].display_name
	                    )
	                  );
	                })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'panel panel-default' },
	            _react2.default.createElement(
	              'div',
	              { className: 'panel-heading' },
	              _react2.default.createElement(
	                'h3',
	                { className: 'panel-title' },
	                'Commoncore Standards:'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'panel-body' },
	              'TODO: Implement me'
	            )
	          )
	        ),
	        _react2.default.createElement('div', { style: { clear: "both" } }),
	        _react2.default.createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2.default.createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Description:'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-body' },
	            skill.translated_description || "No description given."
	          )
	        )
	      );
	    }
	  }]);

	  return SkillView;
	}(_react.Component)) || _class);
	exports.default = SkillView;
	var routes = exports.routes = {
	  path: ':skill_name',
	  getComponent: function getComponent(nextState, callback) {
	    !/* require.ensure */(function (require) {
	      callback(null, SkillView);
	    }(__webpack_require__));
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _MissionExplorer = __webpack_require__(29);

	var _MissionExplorer2 = _interopRequireDefault(_MissionExplorer);

	var _MissionDisplay = __webpack_require__(32);

	var _MissionDisplay2 = _interopRequireDefault(_MissionDisplay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  path: 'mission_explorer',
	  component: _MissionExplorer2.default,
	  childRoutes: [{
	    path: ':mission_name',
	    component: _MissionDisplay2.default
	  }]
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Sidebar = __webpack_require__(30);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MissionExplorer = function (_Component) {
	  _inherits(MissionExplorer, _Component);

	  function MissionExplorer() {
	    _classCallCheck(this, MissionExplorer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MissionExplorer).apply(this, arguments));
	  }

	  _createClass(MissionExplorer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'col-sm-4 col-md-3 sidebar' },
	          _react2.default.createElement(_Sidebar2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main' },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return MissionExplorer;
	}(_react.Component);

	exports.default = MissionExplorer;

/***/ },
/* 30 */
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

	var _NavLink = __webpack_require__(11);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _actions = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Sidebar = (_dec = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.mission_explorer.mission_list.isFetching,
	    missions: state.mission_explorer.mission_list.missions,
	    mission: state.mission_explorer.mission_list.selected
	  };
	}, { selectMission: _actions.selectMission, getMissionList: _actions.getMissionList }), _dec(_class = function (_Component) {
	  _inherits(Sidebar, _Component);

	  function Sidebar(props) {
	    _classCallCheck(this, Sidebar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Sidebar).call(this, props));
	  }

	  _createClass(Sidebar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var getMissionList = this.props.getMissionList;

	      getMissionList();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var missions = _props.missions;
	      var isFetching = _props.isFetching;
	      var selectMission = _props.selectMission;


	      var mission_list = missions.map(function (mission, i) {
	        return _react2.default.createElement(
	          'li',
	          { key: i, className: 'withripple' },
	          _react2.default.createElement(
	            _NavLink2.default,
	            {
	              to: "/mission_explorer/" + mission.slug,
	              onClick: selectMission.bind(_this2, mission.slug) },
	            mission.title
	          )
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { id: 'units' },
	        _react2.default.createElement(
	          'div',
	          { style: { width: "100%", borderBottom: "thin solid #009688" } },
	          _react2.default.createElement(
	            'span',
	            { style: { fontWeight: "bold", color: "#009688", fontSize: "1.2em" } },
	            'Khan Missions'
	          )
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'nav nav-list' },
	          mission_list
	        )
	      );
	    }
	  }]);

	  return Sidebar;
	}(_react.Component)) || _class);
	exports.default = Sidebar;

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _MissionTable = __webpack_require__(33);

	var _MissionTable2 = _interopRequireDefault(_MissionTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MissionDisplay = function (_Component) {
	  _inherits(MissionDisplay, _Component);

	  function MissionDisplay() {
	    _classCallCheck(this, MissionDisplay);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MissionDisplay).apply(this, arguments));
	  }

	  _createClass(MissionDisplay, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_MissionTable2.default, null)
	      );
	    }
	  }]);

	  return MissionDisplay;
	}(_react.Component);

	exports.default = MissionDisplay;

/***/ },
/* 33 */
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

	var _actions = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MissionTable = (_dec = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.mission_explorer.mission_list.isFetching,
	    missions: state.mission_explorer.mission_list.missions,
	    mission: state.mission_explorer.mission
	  };
	}, { selectMission: _actions.selectMission, getMissionList: _actions.getMissionList }), _dec(_class = function (_Component) {
	  _inherits(MissionTable, _Component);

	  function MissionTable() {
	    _classCallCheck(this, MissionTable);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MissionTable).apply(this, arguments));
	  }

	  _createClass(MissionTable, [{
	    key: 'render',
	    value: function render() {
	      var mission = this.props.mission;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          mission.translated_title
	        ),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(
	          'p',
	          null,
	          mission.translated_description
	        )
	      );
	    }
	  }]);

	  return MissionTable;
	}(_react.Component)) || _class);
	exports.default = MissionTable;

/***/ }
];;