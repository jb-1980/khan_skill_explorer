/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0:1
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "1" is the signal for "already loaded"
/******/ 		if(!installedChunks[chunkId]) {
/******/ 			var chunk = require("./" + chunkId + ".server.bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		}
/******/ 		callback.call(null, __webpack_require__);
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _reactRedux = __webpack_require__(4);

	var _routes = __webpack_require__(5);

	var _routes2 = _interopRequireDefault(_routes);

	var _configureStore = __webpack_require__(34);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// server.js
	var express = __webpack_require__(42);
	var path = __webpack_require__(43);
	var compression = __webpack_require__(44);

	var store = (0, _configureStore2.default)();
	var app = express();
	app.use(compression());
	//serve our static stuff like index.css
	app.use(express.static(path.join(__dirname, 'public'), { index: false }));

	function renderPage(appHtml) {
	  return '\n  <!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <!-- Required meta tags always come first -->\n      <meta charset="utf-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n      <meta http-equiv="x-ua-compatible" content="ie=edge">\n\n      <!-- Bootstrap CSS -->\n      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.5.9/css/bootstrap-material-design.min.css">\n      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.5.9/css/ripples.min.css">\n      <link rel="stylesheet" href="/index.css"/>\n    </head>\n    <body>\n      <div id=app>' + appHtml + '</div>\n      <!-- jQuery first, then Tether, then Bootstrap JS. -->\n      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js" integrity="sha384-THPy051/pYDQGanwU6poAc/hOdQxjnOEXzbT+OuUAFqNqFjL+4IGLBgCJC3ZOShY" crossorigin="anonymous"></script>\n      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>\n      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.5.9/js/material.min.js"></script>\n      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.5.9/js/ripples.min.js"></script>\n      <script src="/bundle.js"></script>\n    </body>\n  </html>\n  ';
	}

	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    // in here we can make some decisions all at once
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      // we haven't talked about `onEnter` hooks on routes, but before a
	      // route is entered, it can redirect. Here we handle on the server.
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // if we got props then we matched a route and can render
	      //console.log(props)
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(_reactRouter.RouterContext, props)
	      ));
	      res.send(renderPage(appHtml));
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404).send('Not Found');
	    }
	  });
	});

	var PORT = process.env.PORT || 3000;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// ./modules/routes.js
	module.exports = {
	  path: '/',
	  getComponent: function getComponent(nextState, callback) {
	    __webpack_require__.e/* nsure */(1, function (require) {
	      callback(null, __webpack_require__(6).default);
	    });
	  },
	  getChildRoutes: function getChildRoutes(partialNextState, callback) {
	    __webpack_require__.e/* nsure */(2, function (require) {
	      callback(null, [__webpack_require__(12), __webpack_require__(28)]);
	    });
	  }
	};

/***/ },
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AUTHENTICATE_USER = undefined;
	exports.authenticateUser = authenticateUser;

	var _secrets = __webpack_require__(9);

	var AUTHENTICATE_USER = exports.AUTHENTICATE_USER = 'AUTHENTICATE_USER'; //import fetch from 'isomorphic-fetch'

	var khan = __webpack_require__(10)(_secrets.CONSUMER_KEY, _secrets.CONSUMER_SECRET);

	// TODO make this khan module work. I am currently getting a
	// No 'Access-Control-Allow-Origin' issue, so right now this is a quick
	// hack to just simulate authentication. Authentication is required to view
	// user mission details.
	function authenticateUser() {
	  return {
	    type: AUTHENTICATE_USER
	  };
	  // return function(dispatch){
	  //   return khan.requestToken('http://localhost:3000/')
	  //   .then( response => {
	  //     console.log(response)
	  //   })
	  // }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CONSUMER_KEY = exports.CONSUMER_KEY = "YthqvYKraxHJAG9Z"; //"bEHbvpbSJhVwmHKz"
	var CONSUMER_SECRET = exports.CONSUMER_SECRET = "r2tqYmxJxQd3eudp"; //"jUWAHfqPRLPVdKhU"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("khan");

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RECEIVE_SKILL_LIST = exports.REQUEST_SKILL_LIST = exports.RECEIVE_SKILL = exports.REQUEST_SKILL = exports.SELECT_SKILL = undefined;
	exports.selectSkill = selectSkill;
	exports.requestSkill = requestSkill;
	exports.receiveSkill = receiveSkill;
	exports.requestSkillList = requestSkillList;
	exports.receiveSkillList = receiveSkillList;
	exports.getSkillList = getSkillList;
	exports.fetchSkill = fetchSkill;

	var _isomorphicFetch = __webpack_require__(24);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SELECT_SKILL = exports.SELECT_SKILL = 'SELECT_SKILL';
	var REQUEST_SKILL = exports.REQUEST_SKILL = 'REQUEST_SKILL';
	var RECEIVE_SKILL = exports.RECEIVE_SKILL = 'RECEIVE_SKILL';
	var REQUEST_SKILL_LIST = exports.REQUEST_SKILL_LIST = 'REQUEST_SKILL_LIST';
	var RECEIVE_SKILL_LIST = exports.RECEIVE_SKILL_LIST = 'RECEIVE_SKILL_LIST';

	function selectSkill(e) {
	  return {
	    type: SELECT_SKILL,
	    value: e.target.value
	  };
	}

	function requestSkill(skill) {
	  return {
	    type: REQUEST_SKILL
	  };
	}

	function receiveSkill(json) {
	  return {
	    type: RECEIVE_SKILL,
	    skill_props: json
	  };
	}

	function requestSkillList() {
	  return {
	    type: REQUEST_SKILL_LIST
	  };
	}

	function receiveSkillList(skill_list) {
	  return {
	    type: RECEIVE_SKILL_LIST,
	    skills: skill_list
	  };
	}

	function getSkillList() {
	  return function (dispatch) {
	    dispatch(requestSkillList());

	    var url = 'https://www.khanacademy.org/api/internal/exercises/math_topics_and_exercises';
	    return (0, _isomorphicFetch2.default)(url).then(handleErrors).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      var skill_list = {};
	      json.exercises.forEach(function (skill) {
	        skill_list[skill.name] = skill;
	      });
	      dispatch(receiveSkillList(skill_list));
	    });
	  };
	}

	function fetchSkill(skillname) {
	  return function (dispatch) {
	    dispatch(requestSkill());

	    var url = 'http://www.khanacademy.org/api/v1/exercises/' + skillname;
	    return (0, _isomorphicFetch2.default)(url).then(handleErrors).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(receiveSkill(json));
	    });
	  };
	}

	// Thanks to https://www.tjvantoll.com/2015/09/13/fetch-and-errors/ for this idea
	function handleErrors(response) {
	  if (!response.ok) {
	    throw Error(response.statusText);
	  }
	  return response;
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RECEIVE_MISSION_LIST = exports.REQUEST_MISSION_LIST = exports.RECEIVE_MISSION = exports.REQUEST_MISSION = exports.SELECT_MISSION = undefined;
	exports.selectMission = selectMission;
	exports.requestMission = requestMission;
	exports.receiveMission = receiveMission;
	exports.requestMissionList = requestMissionList;
	exports.receiveMissionList = receiveMissionList;
	exports.getMissionList = getMissionList;

	var _isomorphicFetch = __webpack_require__(24);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SELECT_MISSION = exports.SELECT_MISSION = 'SELECT_MISSION';
	var REQUEST_MISSION = exports.REQUEST_MISSION = 'REQUEST_MISSION';
	var RECEIVE_MISSION = exports.RECEIVE_MISSION = 'RECEIVE_MISSION';
	var REQUEST_MISSION_LIST = exports.REQUEST_MISSION_LIST = 'REQUEST_MISSION_LIST';
	var RECEIVE_MISSION_LIST = exports.RECEIVE_MISSION_LIST = 'RECEIVE_MISSION_LIST';

	function selectMission(mission) {
	  return function (dispatch) {
	    dispatch(fetchMission(mission));
	    dispatch({
	      type: SELECT_MISSION,
	      selected: mission
	    });
	  };
	}

	function requestMission(mission) {
	  return {
	    type: REQUEST_MISSION
	  };
	}

	function receiveMission(json) {
	  return {
	    type: RECEIVE_MISSION,
	    mission_props: json
	  };
	}

	function requestMissionList() {
	  return {
	    type: REQUEST_MISSION_LIST
	  };
	}

	function receiveMissionList(mission_list) {
	  return {
	    type: RECEIVE_MISSION_LIST,
	    missions: mission_list
	  };
	}

	function getMissionList() {
	  return function (dispatch) {
	    dispatch(requestMissionList());

	    var url = 'https://www.khanacademy.org/api/internal/missions';
	    return (0, _isomorphicFetch2.default)(url).then(handleErrors).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      dispatch(receiveMissionList(json));
	    });
	  };
	}

	function fetchMission(mission_name) {
	  return function (dispatch) {
	    dispatch(requestMission());

	    var url = 'http://www.khanacademy.org/api/internal/user/mission/' + mission_name;
	    return (0, _isomorphicFetch2.default)(url).then(handleErrors).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(receiveMission(json));
	    });
	  };
	}

	function handleErrors(response) {
	  if (!response.ok) {
	    throw Error(response.statusText);
	  }
	  return response;
	}

/***/ },
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(35);

	var _reduxThunk = __webpack_require__(36);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(37);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducer = __webpack_require__(38);

	var _reducer2 = _interopRequireDefault(_reducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore() {
	  var store = (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)()));

	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('../reducers', function () {
	      var nextRootReducer = require('../reducers').default;
	      store.replaceReducer(nextRootReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(35);

	var _reducers = __webpack_require__(39);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reducers3 = __webpack_require__(40);

	var _reducers4 = _interopRequireDefault(_reducers3);

	var _reducers5 = __webpack_require__(41);

	var _reducers6 = _interopRequireDefault(_reducers5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  user: _reducers2.default,
	  mission_explorer: _reducers4.default,
	  skill_explorer: _reducers6.default
	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(8);

	function authenticate() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    authenticated: false,
	    oauth_token: '',
	    oauth_token_secret: '',
	    khan_data: {}
	  } : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.AUTHENTICATE_USER:
	      return Object.assign({}, state, {
	        authenticated: true,
	        oauth_token: action.oauth_token,
	        oauth_token_secret: action.oauth_token_secret,
	        khan_data: action.khan_data
	      });

	    default:
	      return state;
	  }
	}

	exports.default = authenticate;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(35);

	var _actions = __webpack_require__(31);

	function mission_list() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    isFetching: true,
	    selected: '',
	    missions: []
	  } : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.SELECT_MISSION:
	      return Object.assign({}, state, {
	        isFetching: false,
	        selected: action.selected
	      });

	    case _actions.REQUEST_MISSION_LIST:
	      return Object.assign({}, state, {
	        isFetching: true
	      });

	    case _actions.RECEIVE_MISSION_LIST:
	      return Object.assign({}, state, {
	        isFetching: false,
	        missions: action.missions
	      });

	    default:
	      return state;
	  }
	}

	function mission() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    isFetching: false,
	    mission_props: {}
	  } : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.REQUEST_MISSION:
	      return Object.assign({}, state, {
	        isFetching: true
	      });

	    case _actions.RECEIVE_MISSION:
	      return Object.assign({}, state, {
	        isFetching: false,
	        mission_props: action.mission_props
	      });

	    default:
	      return state;
	  }
	}

	var rootReducer = (0, _redux.combineReducers)({
	  mission: mission,
	  mission_list: mission_list
	});

	exports.default = rootReducer;

	/**
	  State shape
	{
	  skill: {
	    isFetching: false,
	    skill_props: {...}
	  },
	  skill_list: {
	    isFetching: false,
	    selected: 'skill_name',
	    skills: [
	      {value: 'skill_one', label: 'Skill One'},
	      {value: 'skill_two', label: 'Skill Two'}
	    ]
	  }
	}

	*/

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(35);

	var _actions = __webpack_require__(23);

	function skill_list() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    isFetching: true,
	    value: '',
	    skills: []
	  } : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.SELECT_SKILL:
	      return Object.assign({}, state, {
	        isFetching: false,
	        value: action.value
	      });

	    case _actions.REQUEST_SKILL_LIST:
	      return Object.assign({}, state, {
	        isFetching: true
	      });

	    case _actions.RECEIVE_SKILL_LIST:
	      return Object.assign({}, state, {
	        isFetching: false,
	        skills: action.skills
	      });

	    default:
	      return state;
	  }
	}

	function skill() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    isFetching: false,
	    skill_props: null
	  } : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.REQUEST_SKILL:
	      return Object.assign({}, state, {
	        isFetching: true,
	        skill_name: action.skill_name
	      });

	    case _actions.RECEIVE_SKILL:
	      return Object.assign({}, state, {
	        isFetching: false,
	        skill_props: action.skill_props
	      });

	    default:
	      return state;
	  }
	}

	var rootReducer = (0, _redux.combineReducers)({
	  skill: skill,
	  skill_list: skill_list
	});

	exports.default = rootReducer;

	/**
	  State shape
	{
	  skill: {
	    isFetching: false,
	    skill_props: {...}
	  },
	  skill_list: {
	    isFetching: false,
	    selected: 'skill_name',
	    skills: [
	      {value: 'skill_one', label: 'Skill One'},
	      {value: 'skill_two', label: 'Skill Two'}
	    ]
	  }
	}

	*/

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);