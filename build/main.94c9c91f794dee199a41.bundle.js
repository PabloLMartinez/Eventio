(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/auth/styles/auth.scss":
/*!***********************************!*\
  !*** ./src/auth/styles/auth.scss ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/dashboard/styles/dashboard.scss":
/*!*********************************************!*\
  !*** ./src/dashboard/styles/dashboard.scss ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/dashboard/styles/eventAdd.scss":
/*!********************************************!*\
  !*** ./src/dashboard/styles/eventAdd.scss ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/dashboard/styles/eventListList.scss":
/*!*************************************************!*\
  !*** ./src/dashboard/styles/eventListList.scss ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/dashboard/styles/eventListPanel.scss":
/*!**************************************************!*\
  !*** ./src/dashboard/styles/eventListPanel.scss ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/index.js":
/*!***********************************!*\
  !*** ./src/index.js + 42 modules ***!
  \***********************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/history/createHashHistory.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-redux/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-redux/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/redux-logger/dist/redux-logger.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/redux-saga/es/effects.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/redux-saga/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/redux/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/sha.js/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-polyfill/lib/index.js
var lib = __webpack_require__("./node_modules/babel-polyfill/lib/index.js");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__("./node_modules/react-redux/es/index.js");

// EXTERNAL MODULE: ./node_modules/redux/es/index.js + 15 modules
var redux_es = __webpack_require__("./node_modules/redux/es/index.js");

// EXTERNAL MODULE: ./node_modules/react-router-redux/es/index.js + 5 modules
var react_router_redux_es = __webpack_require__("./node_modules/react-router-redux/es/index.js");

// EXTERNAL MODULE: ./node_modules/redux-logger/dist/redux-logger.js
var redux_logger = __webpack_require__("./node_modules/redux-logger/dist/redux-logger.js");

// EXTERNAL MODULE: ./node_modules/redux-saga/es/index.js + 4 modules
var redux_saga_es = __webpack_require__("./node_modules/redux-saga/es/index.js");

// EXTERNAL MODULE: ./node_modules/history/createHashHistory.js
var createHashHistory = __webpack_require__("./node_modules/history/createHashHistory.js");
var createHashHistory_default = /*#__PURE__*/__webpack_require__.n(createHashHistory);

// CONCATENATED MODULE: ./src/auth/constants/index.js
/* harmony default export */ var constants = ({
  REQUEST_LOGIN: "REQUEST_LOGIN",
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_FAIL: "AUTH_FAIL",
  VERIFY_AUTH: "VERIFY_AUTH",
  VERIFY_AUTH_SUCCESS: "VERIFY_AUTH_SUCCESS",
  VERIFY_AUTH_FAIL: "VERIFY_AUTH_FAIL",
  LOGOUT: "LOGOUT"
});
// CONCATENATED MODULE: ./src/auth/reducers/auth.js
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var initialState = {
  isVerifingAuth: false,
  isAuthenticated: !!localStorage.getItem("jwtToken"),
  isAttemptingLogin: false,
  result: null,
  profile: null
};

var auth_authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants.VERIFY_AUTH:
      return _objectSpread({}, state, {
        isVerifingAuth: true,
        result: null
      });

    case constants.VERIFY_AUTH_SUCCESS:
      return _objectSpread({}, state, {
        isVerifingAuth: false,
        isAuthenticated: true,
        profile: action.data,
        result: null
      });

    case constants.VERIFY_AUTH_FAIL:
      return _objectSpread({}, state, {
        isVerifingAuth: false,
        isAuthenticated: false,
        result: null
      });

    case constants.REQUEST_LOGIN:
      return _objectSpread({}, state, {
        isAttemptingLogin: true,
        result: null
      });

    case constants.AUTH_SUCCESS:
      return _objectSpread({}, state, {
        isAuthenticated: true,
        isAttemptingLogin: false,
        result: null,
        profile: action.data
      });

    case constants.AUTH_FAIL:
      return _objectSpread({}, state, {
        isAuthenticated: false,
        isAttemptingLogin: false,
        profile: null,
        result: {
          success: false,
          text: action.error
        }
      });

    case constants.LOGOUT:
      return _objectSpread({}, state, {
        isAuthenticated: false,
        isAttemptingLogin: false,
        profile: null
      });

    default:
      return state;
  }
};

/* harmony default export */ var auth = (auth_authReducer);
// CONCATENATED MODULE: ./src/dashboard/constants/index.js
/* harmony default export */ var dashboard_constants = ({
  CHANGE_VIEW: "CHANGE_VIEW",
  REQUEST_ALL_EVENTS: "REQUEST_ALL_EVENTS",
  REQUEST_ALL_EVENTS_SUCCEEDED: "REQUEST_ALL_EVENTS_SUCCEEDED",
  REQUEST_ALL_EVENTS_ERROR: "REQUEST_ALL_EVENTS_ERROR",
  CHANGE_FILTER: "CHANGE_FILTER",
  SAVE_EVENT: "SAVE_EVENT",
  EVENT_SAVED: "EVENT_SAVED",
  EVENT_SAVE_ERROR: "EVENT_SAVE_ERROR",
  EVENT_CLEAR: "EVENT_CLEAR"
});
// CONCATENATED MODULE: ./src/dashboard/reducers/dashboard.js
function dashboard_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      dashboard_defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function dashboard_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var common = {
  list: {
    data: [],
    isFetching: false
  }
};
var dashboard_initialState = {
  listView: "",
  activeFilter: 0,
  events: dashboard_objectSpread({}, common),
  form: {
    editing: false,
    data: null,
    isFetching: false,
    result: null
  }
};

var dashboard_dashboardReducer = function dashboardReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dashboard_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case dashboard_constants.REQUEST_ALL_EVENTS:
      return dashboard_objectSpread({}, state, {
        events: {
          list: dashboard_objectSpread({}, state.events.list, {
            isFetching: true
          })
        }
      });

    case dashboard_constants.REQUEST_ALL_EVENTS_SUCCEEDED:
      return dashboard_objectSpread({}, state, {
        events: {
          list: {
            data: action.data,
            isFetching: false
          }
        }
      });

    case dashboard_constants.REQUEST_ALL_EVENTS_ERROR:
      return dashboard_objectSpread({}, state, {
        events: {
          list: {
            data: [],
            isFetching: false
          }
        }
      });

    case dashboard_constants.SAVE_EVENT:
      return dashboard_objectSpread({}, state, {
        form: dashboard_objectSpread({}, state.form, {
          data: action.data,
          isFetching: true,
          result: null
        })
      });

    case dashboard_constants.EVENT_SAVED:
      return dashboard_objectSpread({}, state, {
        form: {
          editing: true,
          data: action.data,
          isFetching: false,
          result: {
            success: true,
            text: "Event saved"
          }
        }
      });

    case dashboard_constants.EVENT_SAVE_ERROR:
      return dashboard_objectSpread({}, state, {
        form: dashboard_objectSpread({}, state.form, {
          editing: true,
          isFetching: false,
          result: {
            success: false,
            text: action.error
          }
        })
      });

    case dashboard_constants.EVENT_CLEAR:
      return dashboard_objectSpread({}, state, {
        form: {
          editing: false,
          data: null,
          isFetching: false,
          result: null
        }
      });

    case dashboard_constants.CHANGE_VIEW:
      return dashboard_objectSpread({}, state, {
        listView: action
      });

    case dashboard_constants.CHANGE_FILTER:
      return dashboard_objectSpread({}, state, {
        activeFilter: action
      });

    default:
      return state;
  }
};

/* harmony default export */ var dashboard = (dashboard_dashboardReducer);
// EXTERNAL MODULE: ./node_modules/redux-saga/es/effects.js + 1 modules
var effects = __webpack_require__("./node_modules/redux-saga/es/effects.js");

// CONCATENATED MODULE: ./src/auth/actions/index.js

var actions_requestLogin = function requestLogin(email, password) {
  return {
    email: email,
    password: password,
    type: constants.REQUEST_LOGIN
  };
};
var actions_authSuccess = function authSuccess(data) {
  return {
    data: data,
    type: constants.AUTH_SUCCESS
  };
};
var actions_authFail = function authFail(error) {
  return {
    error: error,
    type: constants.AUTH_FAIL
  };
};
var actions_verifyAuth = function verifyAuth() {
  return {
    type: constants.VERIFY_AUTH
  };
};
var actions_verifyAuthSuccess = function verifyAuthSuccess(data) {
  return {
    data: data,
    type: constants.VERIFY_AUTH_SUCCESS
  };
};
var actions_verifyAuthFail = function verifyAuthFail(error) {
  return {
    error: error,
    type: constants.VERIFY_AUTH_FAIL
  };
};
var actions_logout = function logout() {
  return {
    type: constants.LOGOUT
  };
};
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("./node_modules/axios/index.js");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/lib/apiClient.js

function client() {
  return axios_default.a.create({
    baseURL: "https://testproject-api-v2.strv.com",
    timeout: 3000,
    headers: {
      "APIKey": "185399d4c202c010e094646e17b1fca0f2a74472"
    }
  });
}
function clientAuth() {
  return axios_default.a.create({
    baseURL: "https://testproject-api-v2.strv.com",
    timeout: 3000,
    headers: {
      "APIKey": "185399d4c202c010e094646e17b1fca0f2a74472",
      "Authorization": localStorage.getItem("authorization")
    }
  });
}
// CONCATENATED MODULE: ./src/auth/httpClient/apiClient.js

var apiClient_refreshTokenAuth = function refreshTokenAuth(refreshToken) {
  return client().post("/auth/native", {
    refreshToken: refreshToken
  });
};
var apiClient_login = function login(email, password) {
  return client().post("/auth/native", {
    email: email,
    password: password
  });
};
// CONCATENATED MODULE: ./src/lib/errors.js


var errorList = {
  SERVICE_400: "Service not currently available. Please retry later."
};
function errors_errorMessage(error) {
  if (error.response) {
    if (error.response.data) {
      if (error.response.data.error) {
        if (error.response.data.error.error) {
          return error.response.data.error.error;
        } else {
          return errorList.SERVICE_400;
        }
      } else if (error.response.data.message) {
        return error.response.data.message;
      } else {
        return JSON.stringify(error.response.data);
      }
    } else if (error.response.statusText) {
      return error.response.statusText;
    } else {
      return JSON.stringify(error.response);
    }
  } else if (error.message) {
    return error.message;
  } else {
    return JSON.stringify(error);
  }

  return "Unknown API error";
}
// CONCATENATED MODULE: ./src/auth/sagas/auth.js
var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(auth_requestLogin),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(auth_verifyAuth),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(auth_logout);






function auth_requestLogin(payload) {
  var response;
  return regeneratorRuntime.wrap(function requestLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return apiClient_login(payload.email, payload.password);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return Object(effects["put"])(actions_authSuccess(response.data));

        case 6:
          // Set up localStorage after login.
          localStorage.setItem("authorization", response.headers.authorization);
          localStorage.setItem("jwtToken", response.headers["refresh-token"]); // redirect to dashboard

          _context.next = 10;
          return Object(effects["put"])(Object(react_router_redux_es["push"])("/"));

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          _context.next = 16;
          return Object(effects["put"])(actions_authFail(errors_errorMessage(_context.t0)));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 12]]);
}
function auth_verifyAuth(payload) {
  var token, response;
  return regeneratorRuntime.wrap(function verifyAuth$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          token = localStorage.getItem("jwtToken");

          if (token) {
            _context2.next = 6;
            break;
          }

          _context2.next = 5;
          return Object(effects["put"])(actions_verifyAuthFail(""));

        case 5:
          return _context2.abrupt("return", _context2.sent);

        case 6:
          _context2.next = 8;
          return apiClient_refreshTokenAuth(token);

        case 8:
          response = _context2.sent;
          _context2.next = 11;
          return Object(effects["put"])(actions_verifyAuthSuccess(response.data));

        case 11:
          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 17;
          return Object(effects["put"])(actions_verifyAuthFail(errors_errorMessage(_context2.t0)));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 13]]);
}
function auth_logout() {
  return regeneratorRuntime.wrap(function logout$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          localStorage.removeItem("authorization");
          localStorage.removeItem("jwtToken");

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
// CONCATENATED MODULE: ./src/auth/sagas/generators.js



/* harmony default export */ var generators = ([Object(effects["takeLatest"])(constants.VERIFY_AUTH, auth_verifyAuth), Object(effects["takeLatest"])(constants.REQUEST_LOGIN, auth_requestLogin), Object(effects["takeLatest"])(constants.LOGOUT, auth_logout)]);
// CONCATENATED MODULE: ./src/dashboard/actions/index.js

var actions_changeView = function changeView(view) {
  return {
    view: view,
    type: dashboard_constants.CHANGE_VIEW
  };
};
var actions_requestAllEvents = function requestAllEvents() {
  return {
    type: dashboard_constants.REQUEST_ALL_EVENTS
  };
};
var actions_requestAllEventsSucceeded = function requestAllEventsSucceeded(data) {
  return {
    data: data,
    type: dashboard_constants.REQUEST_ALL_EVENTS_SUCCEEDED
  };
};
var actions_requestAllEventsError = function requestAllEventsError(error) {
  return {
    error: error,
    type: dashboard_constants.REQUEST_ALL_EVENTS_ERROR
  };
};
var actions_changeFilter = function changeFilter(activeFilter) {
  return {
    activeFilter: activeFilter,
    type: dashboard_constants.CHANGE_FILTER
  };
};
var actions_saveEvent = function saveEvent(data) {
  return {
    data: data,
    type: dashboard_constants.SAVE_EVENT
  };
};
var actions_eventSaved = function eventSaved(data) {
  return {
    data: data,
    type: dashboard_constants.EVENT_SAVED
  };
};
var actions_eventSaveError = function eventSaveError(error) {
  return {
    error: error,
    type: dashboard_constants.EVENT_SAVE_ERROR
  };
};
var actions_eventClear = function eventClear() {
  return {
    type: dashboard_constants.EVENT_CLEAR
  };
};
// CONCATENATED MODULE: ./src/dashboard/httpClient/apiClient.js

var apiClient_requestAllEvents = function requestAllEvents() {
  return client().get("/events");
};
var apiClient_saveEvent = function saveEvent(data) {
  return clientAuth().post("/events/", data);
};
var apiClient_updateEvent = function updateEvent(id, data) {
  return clientAuth().put("/events/".concat(id, "/"), data);
};
// CONCATENATED MODULE: ./src/dashboard/sagas/dashboard.js
var dashboard_marked =
/*#__PURE__*/
regeneratorRuntime.mark(dashboard_requestAllEvents),
    dashboard_marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(dashboard_saveEvent);






function dashboard_requestAllEvents(payload) {
  var result;
  return regeneratorRuntime.wrap(function requestAllEvents$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return apiClient_requestAllEvents();

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(effects["put"])(actions_requestAllEventsSucceeded(result.data));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(effects["put"])(actions_requestAllEventsError(errors_errorMessage(_context.t0)));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, dashboard_marked, null, [[0, 8]]);
}
function dashboard_saveEvent(_ref) {
  var data, response;
  return regeneratorRuntime.wrap(function saveEvent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = _ref.data;
          _context2.prev = 1;
          _context2.next = 4;
          return data._id ? apiClient_updateEvent(data._id, data) : apiClient_saveEvent(data);

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return Object(effects["put"])(actions_eventSaved(response.data));

        case 7:
          _context2.next = 9;
          return Object(effects["put"])(actions_eventClear());

        case 9:
          _context2.next = 11;
          return Object(effects["put"])(Object(react_router_redux_es["goBack"])());

        case 11:
          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 17;
          return Object(effects["put"])(actions_eventSaveError(errors_errorMessage(_context2.t0)));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, dashboard_marked2, null, [[1, 13]]);
}
// CONCATENATED MODULE: ./src/dashboard/sagas/generators.js



/* harmony default export */ var sagas_generators = ([Object(effects["takeLatest"])(dashboard_constants.REQUEST_ALL_EVENTS, dashboard_requestAllEvents), Object(effects["takeLatest"])(dashboard_constants.SAVE_EVENT, dashboard_saveEvent)]);
// CONCATENATED MODULE: ./src/sagas.js
var sagas_marked =
/*#__PURE__*/
regeneratorRuntime.mark(root);




function root() {
  return regeneratorRuntime.wrap(function root$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects["all"])([generators, sagas_generators]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, sagas_marked);
}
// EXTERNAL MODULE: ./node_modules/sha.js/index.js
var sha_js = __webpack_require__("./node_modules/sha.js/index.js");
var sha_js_default = /*#__PURE__*/__webpack_require__.n(sha_js);

// CONCATENATED MODULE: ./src/lib/commons.js
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}


function sha512(str) {
  return sha_js_default()("sha512").update(str).digest("hex");
}
var customStringify = function customStringify(json) {
  var cache = new Set();
  return JSON.stringify(json, function (key, value) {
    if (_typeof(value) === "object" && value !== null) {
      if (cache.has(value)) {
        return;
      }

      cache.add(value);
    }

    return value;
  });
};
// CONCATENATED MODULE: ./src/persist-auth-locally.js


var persist_auth_locally_persistAuthLocally = function persistAuthLocally(store) {
  return function (next) {
    return function (action) {
      next(action);
      localStorage.setItem("authStore", customStringify({
        authReducer: store.getState().authReducer
      }));
    };
  };
};

/* harmony default export */ var persist_auth_locally = (persist_auth_locally_persistAuthLocally);
// CONCATENATED MODULE: ./src/store.js








var loggerMiddleware = Object(redux_logger["createLogger"])();
var sagaMiddleware = Object(redux_saga_es["default"])();
var store_history = createHashHistory_default()({
  queryKey: false
});
var historyRouterMiddleware = Object(react_router_redux_es["routerMiddleware"])(store_history);

var retrievedState;

try {
  retrievedState = localStorage.getItem("authStore");

  if (retrievedState === null) {
    retrievedState = {};
  }

  retrievedState = JSON.parse(retrievedState);
} catch (err) {
  retrievedState = {};
}

var store_store = Object(redux_es["createStore"])(Object(redux_es["combineReducers"])({
  authReducer: auth,
  dashboardReducer: dashboard,
  router: react_router_redux_es["routerReducer"]
}), retrievedState, Object(redux_es["applyMiddleware"])(sagaMiddleware, loggerMiddleware, historyRouterMiddleware, persist_auth_locally));
sagaMiddleware.run(root);
// EXTERNAL MODULE: ./node_modules/react-router/es/index.js
var react_router_es = __webpack_require__("./node_modules/react-router/es/index.js");

// CONCATENATED MODULE: ./src/serviceWorker.js
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}
// EXTERNAL MODULE: ./src/main/styles/slide.scss
var slide = __webpack_require__("./src/main/styles/slide.scss");

// CONCATENATED MODULE: ./src/main/components/SlideComponent.js
function SlideComponent_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    SlideComponent_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    SlideComponent_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return SlideComponent_typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (SlideComponent_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}




var SlideComponent_SlideComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(SlideComponent, _Component);

  function SlideComponent(props) {
    _classCallCheck(this, SlideComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(SlideComponent).call(this, props));
  }

  _createClass(SlideComponent, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "slide-image"
      });
    }
  }]);

  return SlideComponent;
}(react["Component"]);

/* harmony default export */ var components_SlideComponent = (SlideComponent_SlideComponent);
// EXTERNAL MODULE: ./src/auth/styles/auth.scss
var styles_auth = __webpack_require__("./src/auth/styles/auth.scss");

// CONCATENATED MODULE: ./src/auth/components/LoginComponent.js
function LoginComponent_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    LoginComponent_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    LoginComponent_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return LoginComponent_typeof(obj);
}

function LoginComponent_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function LoginComponent_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function LoginComponent_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) LoginComponent_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) LoginComponent_defineProperties(Constructor, staticProps);
  return Constructor;
}

function LoginComponent_possibleConstructorReturn(self, call) {
  if (call && (LoginComponent_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return LoginComponent_assertThisInitialized(self);
}

function LoginComponent_getPrototypeOf(o) {
  LoginComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return LoginComponent_getPrototypeOf(o);
}

function LoginComponent_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function LoginComponent_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) LoginComponent_setPrototypeOf(subClass, superClass);
}

function LoginComponent_setPrototypeOf(o, p) {
  LoginComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return LoginComponent_setPrototypeOf(o, p);
}





var LoginComponent_LoginComponent =
/*#__PURE__*/
function (_Component) {
  LoginComponent_inherits(LoginComponent, _Component);

  function LoginComponent(props) {
    var _this;

    LoginComponent_classCallCheck(this, LoginComponent);

    _this = LoginComponent_possibleConstructorReturn(this, LoginComponent_getPrototypeOf(LoginComponent).call(this, props));
    _this.state = {
      width: window.innerWidth,
      isAuthenticated: true
    };
    _this.handleSubmit = _this.handleSubmit.bind(LoginComponent_assertThisInitialized(_this));
    return _this;
  }

  LoginComponent_createClass(LoginComponent, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      this.props.login(this.email.value, this.password.value);
      this.setState({
        isAuthenticated: this.props.isAuthenticated
      });
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          width = _this$state.width,
          isAuthenticated = _this$state.isAuthenticated;
      var isMobile = width <= 500;
      var errorMessage = isAuthenticated ? react_default.a.createElement("span", null, "Enter your details below.") : react_default.a.createElement("span", {
        className: "errorMessage"
      }, "Oops! That email and password combination is not valid.");

      if (isMobile) {
        return react_default.a.createElement("div", {
          className: "login-wrapper-mobile"
        }, react_default.a.createElement("div", {
          className: "logo-mobile"
        }), react_default.a.createElement("div", {
          className: "login-form"
        }, react_default.a.createElement("h2", null, "Sign in to Eventio."), errorMessage, react_default.a.createElement("form", {
          onSubmit: this.handleSubmit
        }, react_default.a.createElement("div", {
          className: isAuthenticated ? "wrap-input" : "wrap-input-error"
        }, react_default.a.createElement("input", {
          type: "text",
          placeholder: "Email",
          ref: function ref(email) {
            return _this2.email = email;
          }
        })), react_default.a.createElement("div", {
          className: isAuthenticated ? "wrap-input" : "wrap-input-error"
        }, react_default.a.createElement("input", {
          type: "password",
          placeholder: "Password",
          ref: function ref(password) {
            return _this2.password = password;
          }
        }), react_default.a.createElement("span", {
          className: "btn-show-pass"
        }, react_default.a.createElement("i", {
          className: "fas fa-eye"
        }))), react_default.a.createElement("div", {
          className: "sign-up"
        }, react_default.a.createElement("span", null, "Don't have account?"), react_default.a.createElement("a", {
          href: "#"
        }, "SIGN UP")), react_default.a.createElement("button", {
          className: "sign-in-button"
        }, " SIGN IN"))));
      } else {
        return react_default.a.createElement("div", {
          className: "login-wrapper-desktop"
        }, react_default.a.createElement("div", {
          className: "login-slide"
        }, react_default.a.createElement(components_SlideComponent, null)), react_default.a.createElement("div", {
          className: "login-form"
        }, react_default.a.createElement("h2", null, "Sign in to Eventio."), errorMessage, react_default.a.createElement("form", {
          onSubmit: this.handleSubmit
        }, react_default.a.createElement("div", {
          className: isAuthenticated ? "wrap-input" : "wrap-input-error"
        }, react_default.a.createElement("input", {
          type: "text",
          placeholder: "Email",
          ref: function ref(email) {
            return _this2.email = email;
          }
        })), react_default.a.createElement("div", {
          className: isAuthenticated ? "wrap-input" : "wrap-input-error"
        }, react_default.a.createElement("input", {
          type: "password",
          placeholder: "Password",
          ref: function ref(password) {
            return _this2.password = password;
          }
        }), react_default.a.createElement("span", {
          className: "btn-show-pass"
        }, react_default.a.createElement("i", {
          className: "fas fa-eye"
        }))), react_default.a.createElement("button", {
          className: "sign-in-button"
        }, " SIGN IN"))), react_default.a.createElement("div", {
          className: "sign-up"
        }, react_default.a.createElement("span", null, "Don't have account?"), react_default.a.createElement("a", {
          href: "#"
        }, "SIGN UP")));
      }
    }
  }]);

  return LoginComponent;
}(react["Component"]);

/* harmony default export */ var components_LoginComponent = (LoginComponent_LoginComponent);
// CONCATENATED MODULE: ./src/auth/containers/LoginContainer.js




var mapStateToProps = function mapStateToProps(state) {
  return state.authReducer;
};

var LoginContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(email, password) {
      dispatch(actions_requestLogin(email, password));
    }
  };
};

var LoginContainer = Object(es["connect"])(mapStateToProps, LoginContainer_mapDispatchToProps)(components_LoginComponent);
/* harmony default export */ var containers_LoginContainer = (LoginContainer);
// EXTERNAL MODULE: ./node_modules/react-router-dom/es/index.js + 14 modules
var react_router_dom_es = __webpack_require__("./node_modules/react-router-dom/es/index.js");

// CONCATENATED MODULE: ./src/auth/routes/PrivateRoute.js
function PrivateRoute_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    PrivateRoute_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    PrivateRoute_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return PrivateRoute_typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function PrivateRoute_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function PrivateRoute_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function PrivateRoute_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) PrivateRoute_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) PrivateRoute_defineProperties(Constructor, staticProps);
  return Constructor;
}

function PrivateRoute_possibleConstructorReturn(self, call) {
  if (call && (PrivateRoute_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return PrivateRoute_assertThisInitialized(self);
}

function PrivateRoute_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function PrivateRoute_getPrototypeOf(o) {
  PrivateRoute_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return PrivateRoute_getPrototypeOf(o);
}

function PrivateRoute_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) PrivateRoute_setPrototypeOf(subClass, superClass);
}

function PrivateRoute_setPrototypeOf(o, p) {
  PrivateRoute_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return PrivateRoute_setPrototypeOf(o, p);
}





var PrivateRoute_PrivateRoute =
/*#__PURE__*/
function (_Component) {
  PrivateRoute_inherits(PrivateRoute, _Component);

  function PrivateRoute() {
    PrivateRoute_classCallCheck(this, PrivateRoute);

    return PrivateRoute_possibleConstructorReturn(this, PrivateRoute_getPrototypeOf(PrivateRoute).apply(this, arguments));
  }

  PrivateRoute_createClass(PrivateRoute, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isAuthenticated = _this$props.isAuthenticated,
          Component = _this$props.component,
          props = _objectWithoutProperties(_this$props, ["isAuthenticated", "component"]);

      return react_default.a.createElement(react_router_es["Route"], _extends({}, props, {
        render: function render(props) {
          return isAuthenticated ? react_default.a.createElement(Component, props) : react_default.a.createElement(react_router_dom_es["Redirect"], {
            to: {
              pathname: "/login",
              state: {
                from: props.location
              }
            }
          });
        }
      }));
    }
  }]);

  return PrivateRoute;
}(react["Component"]);

/* harmony default export */ var routes_PrivateRoute = (PrivateRoute_PrivateRoute);
// CONCATENATED MODULE: ./src/auth/containers/PrivateRouteContainer.js



var PrivateRouteContainer_mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

var PrivateRouteContainer = Object(es["connect"])(PrivateRouteContainer_mapStateToProps)(routes_PrivateRoute);
/* harmony default export */ var containers_PrivateRouteContainer = (PrivateRouteContainer);
// EXTERNAL MODULE: ./src/main/styles/header.scss
var header = __webpack_require__("./src/main/styles/header.scss");

// CONCATENATED MODULE: ./src/main/components/HeaderComponent.js
function HeaderComponent_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    HeaderComponent_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    HeaderComponent_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return HeaderComponent_typeof(obj);
}

function HeaderComponent_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function HeaderComponent_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function HeaderComponent_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) HeaderComponent_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) HeaderComponent_defineProperties(Constructor, staticProps);
  return Constructor;
}

function HeaderComponent_possibleConstructorReturn(self, call) {
  if (call && (HeaderComponent_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return HeaderComponent_assertThisInitialized(self);
}

function HeaderComponent_getPrototypeOf(o) {
  HeaderComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return HeaderComponent_getPrototypeOf(o);
}

function HeaderComponent_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function HeaderComponent_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) HeaderComponent_setPrototypeOf(subClass, superClass);
}

function HeaderComponent_setPrototypeOf(o, p) {
  HeaderComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return HeaderComponent_setPrototypeOf(o, p);
}




var HeaderComponent_HeaderComponent =
/*#__PURE__*/
function (_Component) {
  HeaderComponent_inherits(HeaderComponent, _Component);

  function HeaderComponent(props) {
    var _this;

    HeaderComponent_classCallCheck(this, HeaderComponent);

    _this = HeaderComponent_possibleConstructorReturn(this, HeaderComponent_getPrototypeOf(HeaderComponent).call(this, props));
    _this.state = {
      width: window.innerWidth,
      userName: ""
    };
    _this.handleLogout = _this.handleLogout.bind(HeaderComponent_assertThisInitialized(_this));
    return _this;
  }

  HeaderComponent_createClass(HeaderComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var profile = this.props.profile;
      var fullName = profile.firstName + " " + profile.lastName;
      this.setState({
        userName: fullName ? fullName : ""
      });
    }
  }, {
    key: "handleLogout",
    value: function handleLogout(event) {
      this.props.logout();
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          width = _this$state.width,
          userName = _this$state.userName;
      var isMobile = width <= 500;

      if (isMobile) {
        return react_default.a.createElement("header", {
          className: "header-mobile"
        }, react_default.a.createElement("div", {
          className: "logo"
        }), react_default.a.createElement("div", {
          className: "profile-settings"
        }, react_default.a.createElement("div", {
          className: "avatar"
        }, react_default.a.createElement("span", null, "TM")), react_default.a.createElement("div", {
          className: "username"
        }, react_default.a.createElement("span", {
          className: "logout",
          onClick: this.handleLogout
        }, "Logout"))));
      } else {
        return react_default.a.createElement("header", {
          className: "header-desktop"
        }, react_default.a.createElement("div", {
          className: "logo"
        }), react_default.a.createElement("div", {
          className: "profile-settings"
        }, react_default.a.createElement("div", {
          className: "avatar"
        }, react_default.a.createElement("span", null, "TM")), react_default.a.createElement("div", {
          className: "username"
        }, react_default.a.createElement("span", {
          className: "user"
        }, userName), react_default.a.createElement("span", {
          className: "logout",
          onClick: this.handleLogout
        }, "Logout"))));
      }
    }
  }]);

  return HeaderComponent;
}(react["Component"]);

/* harmony default export */ var components_HeaderComponent = (HeaderComponent_HeaderComponent);
// CONCATENATED MODULE: ./src/main/containers/HeaderContainer.js





var HeaderContainer_mapStateToProps = function mapStateToProps(state) {
  return state.authReducer;
};

var HeaderContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      dispatch(actions_logout());
      dispatch(Object(react_router_redux_es["push"])("/login"));
    }
  };
};

var HeaderContainer = Object(es["connect"])(HeaderContainer_mapStateToProps, HeaderContainer_mapDispatchToProps)(components_HeaderComponent);
/* harmony default export */ var containers_HeaderContainer = (HeaderContainer);
// EXTERNAL MODULE: ./src/main/styles/nav.scss
var nav = __webpack_require__("./src/main/styles/nav.scss");

// CONCATENATED MODULE: ./src/main/components/NavComponent.js
function NavComponent_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    NavComponent_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    NavComponent_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return NavComponent_typeof(obj);
}

function NavComponent_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function NavComponent_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function NavComponent_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) NavComponent_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) NavComponent_defineProperties(Constructor, staticProps);
  return Constructor;
}

function NavComponent_possibleConstructorReturn(self, call) {
  if (call && (NavComponent_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return NavComponent_assertThisInitialized(self);
}

function NavComponent_getPrototypeOf(o) {
  NavComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return NavComponent_getPrototypeOf(o);
}

function NavComponent_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function NavComponent_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) NavComponent_setPrototypeOf(subClass, superClass);
}

function NavComponent_setPrototypeOf(o, p) {
  NavComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return NavComponent_setPrototypeOf(o, p);
}




var NavComponent_NavComponent =
/*#__PURE__*/
function (_Component) {
  NavComponent_inherits(NavComponent, _Component);

  function NavComponent(props) {
    var _this;

    NavComponent_classCallCheck(this, NavComponent);

    _this = NavComponent_possibleConstructorReturn(this, NavComponent_getPrototypeOf(NavComponent).call(this, props));
    _this.state = {
      viewListMode: "panel",
      width: window.innerWidth,
      activeFilter: 0
    };
    _this.handleModeView = _this.handleModeView.bind(NavComponent_assertThisInitialized(_this));
    _this.handleFilter = _this.handleFilter.bind(NavComponent_assertThisInitialized(_this));
    return _this;
  }

  NavComponent_createClass(NavComponent, [{
    key: "handleModeView",
    value: function handleModeView(e) {
      e.stopPropagation();
      var className = e.target.className;
      var view = className.substr(0, className.indexOf('-'));
      this.setState({
        viewListMode: view
      });
      this.props.changeView(view);
    }
  }, {
    key: "handleFilter",
    value: function handleFilter(index, e) {
      e.stopPropagation();
      this.setState({
        activeFilter: index
      });
      this.props.changeFilter(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          width = _this$state.width,
          viewListMode = _this$state.viewListMode;
      var isMobile = width <= 500;

      if (isMobile) {
        return react_default.a.createElement("nav", {
          className: "nav-mobile"
        }, react_default.a.createElement("div", {
          className: "navigator"
        }, react_default.a.createElement("label", null, "SHOW:"), react_default.a.createElement("select", {
          className: "select-view-mode"
        }, react_default.a.createElement("option", null, "ALL EVENTS"))), react_default.a.createElement("div", {
          className: "view-mode"
        }, react_default.a.createElement("span", {
          className: "".concat(viewListMode === "panel" ? 'panel-icon-dark' : 'panel-icon-ligh'),
          onClick: this.handleModeView
        }), react_default.a.createElement("span", {
          className: "".concat(viewListMode === "list" ? 'list-icon-dark' : 'list-icon-light'),
          onClick: this.handleModeView
        })));
      } else {
        return react_default.a.createElement("nav", {
          className: "nav-desktop"
        }, react_default.a.createElement("div", {
          className: "navigator"
        }, react_default.a.createElement("ul", null, react_default.a.createElement("li", {
          className: this.state.activeFilter === 0 ? 'active' : null,
          onClick: this.handleFilter.bind(this, 0)
        }, "ALL EVENTS"), react_default.a.createElement("li", {
          className: this.state.activeFilter === 1 ? 'active' : null,
          onClick: this.handleFilter.bind(this, 1)
        }, "FUTURE EVENTS"), react_default.a.createElement("li", {
          className: this.state.activeFilter === 2 ? 'active' : null,
          onClick: this.handleFilter.bind(this, 2)
        }, "PAST EVENTS"))), react_default.a.createElement("div", {
          className: "view-mode"
        }, react_default.a.createElement("span", {
          className: "".concat(viewListMode === "panel" ? 'panel-icon-dark' : 'panel-icon-ligh'),
          onClick: this.handleModeView
        }), react_default.a.createElement("span", {
          className: "".concat(viewListMode === "list" ? 'list-icon-dark' : 'list-icon-light'),
          onClick: this.handleModeView
        })));
      }
    }
  }]);

  return NavComponent;
}(react["Component"]);

/* harmony default export */ var components_NavComponent = (NavComponent_NavComponent);
// CONCATENATED MODULE: ./src/main/containers/NavContainer.js




var NavContainer_mapStateToProps = function mapStateToProps(state) {
  return state.authReducer;
};

var NavContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeView: function changeView(view) {
      dispatch(actions_changeView(view));
    },
    changeFilter: function changeFilter(activeFilter) {
      dispatch(actions_changeFilter(activeFilter));
    }
  };
};

var NavContainer = Object(es["connect"])(NavContainer_mapStateToProps, NavContainer_mapDispatchToProps)(components_NavComponent);
/* harmony default export */ var containers_NavContainer = (NavContainer);
// EXTERNAL MODULE: ./src/main/styles/footer.scss
var footer = __webpack_require__("./src/main/styles/footer.scss");

// CONCATENATED MODULE: ./src/main/components/FooterComponent.js
function FooterComponent_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    FooterComponent_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    FooterComponent_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return FooterComponent_typeof(obj);
}

function FooterComponent_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function FooterComponent_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function FooterComponent_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) FooterComponent_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) FooterComponent_defineProperties(Constructor, staticProps);
  return Constructor;
}

function FooterComponent_possibleConstructorReturn(self, call) {
  if (call && (FooterComponent_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return FooterComponent_assertThisInitialized(self);
}

function FooterComponent_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function FooterComponent_getPrototypeOf(o) {
  FooterComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return FooterComponent_getPrototypeOf(o);
}

function FooterComponent_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) FooterComponent_setPrototypeOf(subClass, superClass);
}

function FooterComponent_setPrototypeOf(o, p) {
  FooterComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return FooterComponent_setPrototypeOf(o, p);
}




var FooterComponent_FooterComponent =
/*#__PURE__*/
function (_Component) {
  FooterComponent_inherits(FooterComponent, _Component);

  function FooterComponent(props) {
    var _this;

    FooterComponent_classCallCheck(this, FooterComponent);

    _this = FooterComponent_possibleConstructorReturn(this, FooterComponent_getPrototypeOf(FooterComponent).call(this, props));
    _this.state = {
      width: window.innerWidth
    };
    return _this;
  }

  FooterComponent_createClass(FooterComponent, [{
    key: "render",
    value: function render() {
      var width = this.state.width;
      var isMobile = width <= 500;

      if (isMobile) {
        return react_default.a.createElement("footer", {
          className: "footer-mobile"
        }, react_default.a.createElement("button", {
          onClick: this.props.onAddEventClick
        }, "+"));
      } else {
        return react_default.a.createElement("footer", {
          className: "footer-desktop"
        }, react_default.a.createElement("button", {
          onClick: this.props.onAddEventClick
        }, "+"));
      }
    }
  }]);

  return FooterComponent;
}(react["Component"]);

/* harmony default export */ var components_FooterComponent = (FooterComponent_FooterComponent);
// CONCATENATED MODULE: ./src/main/containers/FooterContainer.js




var FooterContainer_mapStateToProps = function mapStateToProps(state) {
  return state.authReducer;
};

var FooterContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAddEventClick: function onAddEventClick() {
      dispatch(Object(react_router_redux_es["push"])("/event/add"));
    }
  };
};

var FooterContainer = Object(es["connect"])(FooterContainer_mapStateToProps, FooterContainer_mapDispatchToProps)(components_FooterComponent);
/* harmony default export */ var containers_FooterContainer = (FooterContainer);
// EXTERNAL MODULE: ./src/dashboard/styles/eventListPanel.scss
var eventListPanel = __webpack_require__("./src/dashboard/styles/eventListPanel.scss");

// CONCATENATED MODULE: ./src/dashboard/components/list/EventListPanelComponent.js
function EventListPanelComponent_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    EventListPanelComponent_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    EventListPanelComponent_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return EventListPanelComponent_typeof(obj);
}

function EventListPanelComponent_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function EventListPanelComponent_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function EventListPanelComponent_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) EventListPanelComponent_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) EventListPanelComponent_defineProperties(Constructor, staticProps);
  return Constructor;
}

function EventListPanelComponent_possibleConstructorReturn(self, call) {
  if (call && (EventListPanelComponent_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return EventListPanelComponent_assertThisInitialized(self);
}

function EventListPanelComponent_getPrototypeOf(o) {
  EventListPanelComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return EventListPanelComponent_getPrototypeOf(o);
}

function EventListPanelComponent_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function EventListPanelComponent_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) EventListPanelComponent_setPrototypeOf(subClass, superClass);
}

function EventListPanelComponent_setPrototypeOf(o, p) {
  EventListPanelComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return EventListPanelComponent_setPrototypeOf(o, p);
}




var EventListPanelComponent_EventListPanelComponent =
/*#__PURE__*/
function (_Component) {
  EventListPanelComponent_inherits(EventListPanelComponent, _Component);

  function EventListPanelComponent(props) {
    var _this;

    EventListPanelComponent_classCallCheck(this, EventListPanelComponent);

    _this = EventListPanelComponent_possibleConstructorReturn(this, EventListPanelComponent_getPrototypeOf(EventListPanelComponent).call(this, props));
    _this.state = {
      width: window.innerWidth,
      activeFilter: 0,
      eventList: []
    };
    _this.handleLeave = _this.handleLeave.bind(EventListPanelComponent_assertThisInitialized(_this));
    _this.handleJoin = _this.handleJoin.bind(EventListPanelComponent_assertThisInitialized(_this));
    return _this;
  }

  EventListPanelComponent_createClass(EventListPanelComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        activeFilter: this.props.dashboardReducer.activeFilter.activeFilter,
        eventList: this.props.dashboardReducer.events.list.data
      });
    } // Check any updates from props (Filter)

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.dashboardReducer.activeFilter.activeFilter !== prevProps.dashboardReducer.activeFilter.activeFilter) {
        this.setState({
          activeFilter: this.props.dashboardReducer.activeFilter.activeFilter
        });
      }

      if (this.props.dashboardReducer.events.list.data !== prevProps.dashboardReducer.events.list.data) {
        this.setState({
          eventList: this.props.dashboardReducer.events.list.data
        });
      }
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(index, e) {
      e.preventDefault();
      var eventList = this.state.eventList;

      for (var i = 0; i < eventList.length; i++) {
        if (eventList[i]._id === index) {
          var attendees = eventList[i].attendees;

          for (var j = 0; j < attendees.length; j++) {
            if (attendees[j]._id === this.props.profile._id) {
              attendees.splice(j, 1);
            }
          }
        }
      }

      this.setState({
        eventList: eventList
      });
    }
  }, {
    key: "handleJoin",
    value: function handleJoin(index, e) {
      e.preventDefault();
      var eventList = this.state.eventList;

      for (var i = 0; i < eventList.length; i++) {
        if (eventList[i]._id === index) {
          var attendees = eventList[i].attendees;
          attendees.push(this.props.profile);
        }
      }

      this.setState({
        eventList: eventList
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          width = _this$state.width,
          eventList = _this$state.eventList;
      var isMobile = width <= 500;
      var data = eventList || [];
      var today = new Date();

      if (this.state.activeFilter === 1) {
        // Return only future events
        data = data.filter(function (event) {
          return new Date(event.startsAt) >= today;
        });
      } else if (this.state.activeFilter === 2) {
        // Return only past events
        data = data.filter(function (event) {
          return new Date(event.startsAt) <= today;
        });
      }

      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var article = data.map(function (event, key) {
        var eventDate = new Date(event.startsAt);
        var buttonAction = "";
        var dateFull = monthNames[eventDate.getMonth()] + ' ' + eventDate.getDate() + ', ' + eventDate.getFullYear() + ' - ' + eventDate.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }); // Check if logged user is an attendee

        var attendee = event.attendees.filter(function (attendee) {
          return _this2.props.profile._id === attendee._id;
        });

        if (_this2.props.profile._id === event.owner._id) {
          buttonAction = react_default.a.createElement("button", {
            className: "edit-button"
          }, "EDIT");
        } else if (attendee.length >= 1) {
          buttonAction = react_default.a.createElement("button", {
            onClick: _this2.handleLeave.bind(_this2, event._id),
            className: "leave-button"
          }, "LEAVE");
        } else if (attendee.length <= 0) {
          buttonAction = react_default.a.createElement("button", {
            onClick: _this2.handleJoin.bind(_this2, event._id),
            className: "join-button"
          }, "JOIN");
        }

        return react_default.a.createElement("article", {
          className: "event-box",
          key: key
        }, react_default.a.createElement("span", {
          className: "event-date"
        }, dateFull), react_default.a.createElement("h3", null, event.title), react_default.a.createElement("span", {
          className: "event-owner"
        }, event.owner.firstName + " " + event.owner.lastName), react_default.a.createElement("p", {
          className: "event-description"
        }, event.description.substring(0, 56) + "..."), react_default.a.createElement("div", {
          className: "event-footer"
        }, react_default.a.createElement("div", {
          className: "counter"
        }, react_default.a.createElement("i", {
          className: "fas fa-user-alt"
        }), event.attendees.length + ' of ' + event.capacity), buttonAction));
      });

      if (isMobile) {
        return react_default.a.createElement("section", {
          className: "events-container-panel-mobile"
        }, article);
      } else {
        return react_default.a.createElement("section", {
          className: "events-container-panel-desktop"
        }, article);
      }
    }
  }]);

  return EventListPanelComponent;
}(react["Component"]);

/* harmony default export */ var list_EventListPanelComponent = (EventListPanelComponent_EventListPanelComponent);
// CONCATENATED MODULE: ./src/dashboard/containers/list/EventListPanelContainer.js



var EventListPanelContainer_mapStateToProps = function mapStateToProps(state) {
  return {
    dashboardReducer: state.dashboardReducer,
    profile: state.authReducer.profile
  };
};

var EventListPanelContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var EventListPanelContainer = Object(es["connect"])(EventListPanelContainer_mapStateToProps, EventListPanelContainer_mapDispatchToProps)(list_EventListPanelComponent);
/* harmony default export */ var list_EventListPanelContainer = (EventListPanelContainer);
// EXTERNAL MODULE: ./src/dashboard/styles/eventListList.scss
var eventListList = __webpack_require__("./src/dashboard/styles/eventListList.scss");

// CONCATENATED MODULE: ./src/dashboard/components/list/EventListListComponent.js
function EventListListComponent_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    EventListListComponent_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    EventListListComponent_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return EventListListComponent_typeof(obj);
}

function EventListListComponent_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function EventListListComponent_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function EventListListComponent_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) EventListListComponent_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) EventListListComponent_defineProperties(Constructor, staticProps);
  return Constructor;
}

function EventListListComponent_possibleConstructorReturn(self, call) {
  if (call && (EventListListComponent_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return EventListListComponent_assertThisInitialized(self);
}

function EventListListComponent_getPrototypeOf(o) {
  EventListListComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return EventListListComponent_getPrototypeOf(o);
}

function EventListListComponent_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function EventListListComponent_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) EventListListComponent_setPrototypeOf(subClass, superClass);
}

function EventListListComponent_setPrototypeOf(o, p) {
  EventListListComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return EventListListComponent_setPrototypeOf(o, p);
}




var EventListListComponent_EventListListComponent =
/*#__PURE__*/
function (_Component) {
  EventListListComponent_inherits(EventListListComponent, _Component);

  function EventListListComponent(props) {
    var _this;

    EventListListComponent_classCallCheck(this, EventListListComponent);

    _this = EventListListComponent_possibleConstructorReturn(this, EventListListComponent_getPrototypeOf(EventListListComponent).call(this, props));
    _this.state = {
      width: window.innerWidth,
      activeFilter: 0,
      eventList: []
    };
    _this.handleLeave = _this.handleLeave.bind(EventListListComponent_assertThisInitialized(_this));
    _this.handleJoin = _this.handleJoin.bind(EventListListComponent_assertThisInitialized(_this));
    return _this;
  }

  EventListListComponent_createClass(EventListListComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        activeFilter: this.props.dashboardReducer.activeFilter.activeFilter,
        eventList: this.props.dashboardReducer.events.list.data
      });
    } // Check any updates from props (Filter)

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.dashboardReducer.activeFilter.activeFilter !== prevProps.dashboardReducer.activeFilter.activeFilter) {
        this.setState({
          activeFilter: this.props.dashboardReducer.activeFilter.activeFilter
        });
      }

      if (this.props.dashboardReducer.events.list.data !== prevProps.dashboardReducer.events.list.data) {
        this.setState({
          eventList: this.props.dashboardReducer.events.list.data
        });
      }
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(index, e) {
      e.preventDefault();
      var eventList = this.state.eventList;

      for (var i = 0; i < eventList.length; i++) {
        if (eventList[i]._id === index) {
          var attendees = eventList[i].attendees;

          for (var j = 0; j < attendees.length; j++) {
            if (attendees[j]._id === this.props.profile._id) {
              attendees.splice(j, 1);
            }
          }
        }
      }

      this.setState({
        eventList: eventList
      });
    }
  }, {
    key: "handleJoin",
    value: function handleJoin(index, e) {
      e.preventDefault();
      var eventList = this.state.eventList;

      for (var i = 0; i < eventList.length; i++) {
        if (eventList[i]._id === index) {
          var attendees = eventList[i].attendees;
          attendees.push(this.props.profile);
        }
      }

      this.setState({
        eventList: eventList
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          width = _this$state.width,
          eventList = _this$state.eventList;
      var isMobile = width <= 500;
      var data = eventList || [];
      var today = new Date();

      if (this.state.activeFilter === 1) {
        // Return only future events
        data = data.filter(function (event) {
          return new Date(event.startsAt) >= today;
        });
      } else if (this.state.activeFilter === 2) {
        // Return only past events
        data = data.filter(function (event) {
          return new Date(event.startsAt) <= today;
        });
      }

      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var articleDesktop = data.map(function (event, key) {
        var eventDate = new Date(event.startsAt);
        var buttonAction = "";
        var dateFull = monthNames[eventDate.getMonth()] + ' ' + eventDate.getDate() + ', ' + eventDate.getFullYear() + ' - ' + eventDate.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }); // Check if logged user is an attendee

        var attendee = event.attendees.filter(function (attendee) {
          return _this2.props.profile._id === attendee._id;
        });

        if (_this2.props.profile._id === event.owner._id) {
          buttonAction = react_default.a.createElement("button", {
            className: "edit-button"
          }, "EDIT");
        } else if (attendee.length >= 1) {
          buttonAction = react_default.a.createElement("button", {
            onClick: _this2.handleLeave.bind(_this2, event._id),
            className: "leave-button"
          }, "LEAVE");
        } else if (attendee.length <= 0) {
          buttonAction = react_default.a.createElement("button", {
            onClick: _this2.handleJoin.bind(_this2, event._id),
            className: "join-button"
          }, "JOIN");
        }

        return react_default.a.createElement("article", {
          className: "event-box",
          key: key
        }, react_default.a.createElement("h3", null, event.title), react_default.a.createElement("p", {
          className: "event-description"
        }, event.description.substring(0, 31) + "..."), react_default.a.createElement("span", {
          className: "event-owner"
        }, event.owner.firstName + ' ' + event.owner.lastName), react_default.a.createElement("span", {
          className: "event-date"
        }, dateFull), react_default.a.createElement("div", {
          className: "counter"
        }, event.attendees.length + ' of ' + event.capacity), buttonAction);
      });
      var articleMobile = data.map(function (event, key) {
        var eventDate = new Date(event.startsAt);
        var buttonAction = "";
        var dateFull = monthNames[eventDate.getMonth()] + ' ' + eventDate.getDate() + ', ' + eventDate.getFullYear() + ' - ' + eventDate.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }); // Check if logged user is an attendee

        var attendee = event.attendees.filter(function (attendee) {
          return _this2.props.profile._id === attendee._id;
        });

        if (_this2.props.profile._id === event.owner._id) {
          buttonAction = react_default.a.createElement("button", {
            className: "edit-button"
          }, "EDIT");
        } else if (attendee.length >= 1) {
          buttonAction = react_default.a.createElement("button", {
            onClick: _this2.handleLeave.bind(_this2, event._id),
            className: "leave-button"
          }, "LEAVE");
        } else if (attendee.length <= 0) {
          buttonAction = react_default.a.createElement("button", {
            onClick: _this2.handleJoin.bind(_this2, event._id),
            className: "join-button"
          }, "JOIN");
        }

        return react_default.a.createElement("article", {
          className: "event-box",
          key: key
        }, react_default.a.createElement("h3", null, event.title), react_default.a.createElement("p", {
          className: "event-description"
        }, event.description.substring(0, 31) + "..."), react_default.a.createElement("div", null, react_default.a.createElement("span", {
          className: "event-date"
        }, dateFull), react_default.a.createElement("br", null), react_default.a.createElement("span", {
          className: "counter"
        }, event.attendees.length + ' of ' + event.capacity), buttonAction));
      });

      if (isMobile) {
        return react_default.a.createElement("section", {
          className: "events-container-list-mobile"
        }, articleMobile);
      } else {
        return react_default.a.createElement("section", {
          className: "events-container-list-desktop"
        }, articleDesktop);
      }
    }
  }]);

  return EventListListComponent;
}(react["Component"]);

/* harmony default export */ var list_EventListListComponent = (EventListListComponent_EventListListComponent);
// CONCATENATED MODULE: ./src/dashboard/containers/list/EventListListContainer.js



var EventListListContainer_mapStateToProps = function mapStateToProps(state) {
  return {
    dashboardReducer: state.dashboardReducer,
    profile: state.authReducer.profile
  };
};

var EventListListContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var EventListListContainer = Object(es["connect"])(EventListListContainer_mapStateToProps, EventListListContainer_mapDispatchToProps)(list_EventListListComponent);
/* harmony default export */ var list_EventListListContainer = (EventListListContainer);
// EXTERNAL MODULE: ./src/dashboard/styles/dashboard.scss
var styles_dashboard = __webpack_require__("./src/dashboard/styles/dashboard.scss");

// CONCATENATED MODULE: ./src/dashboard/components/DashboardComponent.js
function DashboardComponent_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    DashboardComponent_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    DashboardComponent_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return DashboardComponent_typeof(obj);
}

function DashboardComponent_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function DashboardComponent_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function DashboardComponent_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) DashboardComponent_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) DashboardComponent_defineProperties(Constructor, staticProps);
  return Constructor;
}

function DashboardComponent_possibleConstructorReturn(self, call) {
  if (call && (DashboardComponent_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return DashboardComponent_assertThisInitialized(self);
}

function DashboardComponent_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function DashboardComponent_getPrototypeOf(o) {
  DashboardComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return DashboardComponent_getPrototypeOf(o);
}

function DashboardComponent_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) DashboardComponent_setPrototypeOf(subClass, superClass);
}

function DashboardComponent_setPrototypeOf(o, p) {
  DashboardComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return DashboardComponent_setPrototypeOf(o, p);
}









var DashboardComponent_DashboardComponent =
/*#__PURE__*/
function (_Component) {
  DashboardComponent_inherits(DashboardComponent, _Component);

  function DashboardComponent(props) {
    var _this;

    DashboardComponent_classCallCheck(this, DashboardComponent);

    _this = DashboardComponent_possibleConstructorReturn(this, DashboardComponent_getPrototypeOf(DashboardComponent).call(this, props));
    _this.state = {
      viewListMode: "panel"
    };
    return _this;
  }

  DashboardComponent_createClass(DashboardComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.requestAllEvents();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.listView.view !== prevProps.listView.view) {
        this.setState({
          viewListMode: this.props.listView.view
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var viewListMode = this.state.viewListMode;
      var viewListEvents = viewListMode === "panel" ? react_default.a.createElement(list_EventListPanelContainer, null) : react_default.a.createElement(list_EventListListContainer, null);
      return react_default.a.createElement("div", {
        className: "dashboard-wrapper"
      }, react_default.a.createElement(containers_HeaderContainer, null), react_default.a.createElement(containers_NavContainer, null), viewListEvents, react_default.a.createElement(containers_FooterContainer, null));
    }
  }]);

  return DashboardComponent;
}(react["Component"]);

/* harmony default export */ var components_DashboardComponent = (DashboardComponent_DashboardComponent);
// CONCATENATED MODULE: ./src/dashboard/containers/DashboardContainer.js




var DashboardContainer_mapStateToProps = function mapStateToProps(state) {
  return state.dashboardReducer;
};

var DashboardContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    requestAllEvents: function requestAllEvents() {
      dispatch(actions_requestAllEvents());
    }
  };
};

var DashboardContainer = Object(es["connect"])(DashboardContainer_mapStateToProps, DashboardContainer_mapDispatchToProps)(components_DashboardComponent);
/* harmony default export */ var containers_DashboardContainer = (DashboardContainer);
// EXTERNAL MODULE: ./src/dashboard/styles/eventAdd.scss
var eventAdd = __webpack_require__("./src/dashboard/styles/eventAdd.scss");

// CONCATENATED MODULE: ./src/dashboard/components/form/EventAddComponent.js
function EventAddComponent_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    EventAddComponent_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    EventAddComponent_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return EventAddComponent_typeof(obj);
}

function EventAddComponent_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function EventAddComponent_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function EventAddComponent_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) EventAddComponent_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) EventAddComponent_defineProperties(Constructor, staticProps);
  return Constructor;
}

function EventAddComponent_possibleConstructorReturn(self, call) {
  if (call && (EventAddComponent_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return EventAddComponent_assertThisInitialized(self);
}

function EventAddComponent_getPrototypeOf(o) {
  EventAddComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return EventAddComponent_getPrototypeOf(o);
}

function EventAddComponent_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function EventAddComponent_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) EventAddComponent_setPrototypeOf(subClass, superClass);
}

function EventAddComponent_setPrototypeOf(o, p) {
  EventAddComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return EventAddComponent_setPrototypeOf(o, p);
}




var EventAddComponent_EventListListComponent =
/*#__PURE__*/
function (_Component) {
  EventAddComponent_inherits(EventListListComponent, _Component);

  function EventListListComponent(props) {
    var _this;

    EventAddComponent_classCallCheck(this, EventListListComponent);

    _this = EventAddComponent_possibleConstructorReturn(this, EventAddComponent_getPrototypeOf(EventListListComponent).call(this, props));
    _this.state = {
      width: window.innerWidth,
      fields: {},
      errors: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(EventAddComponent_assertThisInitialized(_this));
    _this.handleCloseButton = _this.handleCloseButton.bind(EventAddComponent_assertThisInitialized(_this));
    return _this;
  } // Validate all fields


  EventAddComponent_createClass(EventListListComponent, [{
    key: "handleValidation",
    value: function handleValidation() {
      var fields = this.state.fields;
      var errors = {};
      var formIsValid = true; // Validate title empty

      if (!fields["title"]) {
        formIsValid = false;
        errors["title"] = "Title has to be filled up";
      } // Validate description empty


      if (!fields["description"]) {
        formIsValid = false;
        errors["description"] = "Description has to be filled up";
      } // Validate date empty


      if (!fields["date"]) {
        formIsValid = false;
        errors["date"] = "Date has to be filled up";
      } // Validate title empty


      if (!fields["time"]) {
        formIsValid = false;
        errors["time"] = "Time has to be filled up";
      } // Validate title empty


      if (!fields["capacity"]) {
        formIsValid = false;
        errors["capacity"] = "Capacity has to be filled up";
      }

      this.setState({
        errors: errors
      });
      return formIsValid;
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var fields = this.state.fields;

      if (this.handleValidation()) {
        var startsAt = new Date(fields["date"] + ' ' + fields["time"]);
        var data = {
          title: fields["title"],
          description: fields["description"],
          startsAt: startsAt.toISOString(),
          capacity: fields["capacity"]
        };
        this.props.saveEvent(data);
      }
    }
  }, {
    key: "handleCloseButton",
    value: function handleCloseButton(e) {
      this.props.goBack();
      e.preventDefault();
    }
  }, {
    key: "handleChange",
    value: function handleChange(field, e) {
      var fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({
        fields: fields
      });
    }
  }, {
    key: "render",
    value: function render() {
      var width = this.state.width;
      var isMobile = width <= 500;

      if (isMobile) {
        return react_default.a.createElement("div", {
          className: "event-add-container-mobile"
        }, react_default.a.createElement("header", {
          className: "header-mobile"
        }, react_default.a.createElement("div", {
          className: "logo"
        }), react_default.a.createElement("div", {
          className: "close-button",
          onClick: this.handleCloseButton
        })), react_default.a.createElement("div", {
          className: "event-add-form"
        }, react_default.a.createElement("div", {
          className: "form-header"
        }, react_default.a.createElement("h2", null, "Create new event"), react_default.a.createElement("span", null, "Enter details below.")), react_default.a.createElement("form", {
          onSubmit: this.handleSubmit
        }, react_default.a.createElement("div", {
          className: "wrap-input"
        }, react_default.a.createElement("input", {
          ref: "title",
          type: "text",
          placeholder: "Title",
          onChange: this.handleChange.bind(this, "title"),
          value: this.state.fields["title"],
          className: this.state.errors["title"] ? "error" : "valid"
        }), react_default.a.createElement("span", {
          className: "error"
        }, this.state.errors["title"])), react_default.a.createElement("div", {
          className: "wrap-input"
        }, react_default.a.createElement("input", {
          ref: "description",
          type: "text",
          placeholder: "Description",
          onChange: this.handleChange.bind(this, "description"),
          value: this.state.fields["description"],
          className: this.state.errors["description"] ? "error" : "valid"
        }), react_default.a.createElement("span", {
          className: "error"
        }, this.state.errors["description"])), react_default.a.createElement("div", {
          className: "wrap-input"
        }, react_default.a.createElement("input", {
          ref: "date",
          type: "date",
          placeholder: "Date",
          onChange: this.handleChange.bind(this, "date"),
          value: this.state.fields["date"],
          className: this.state.errors["date"] ? "error" : "valid"
        }), react_default.a.createElement("span", {
          className: "error"
        }, this.state.errors["date"])), react_default.a.createElement("div", {
          className: "wrap-input"
        }, react_default.a.createElement("input", {
          ref: "time",
          type: "time",
          placeholder: "Time",
          onChange: this.handleChange.bind(this, "time"),
          value: this.state.fields["time"],
          className: this.state.errors["time"] ? "error" : "valid"
        }), react_default.a.createElement("span", {
          className: "error"
        }, this.state.errors["time"])), react_default.a.createElement("div", {
          className: "wrap-input"
        }, react_default.a.createElement("input", {
          ref: "capacity",
          type: "capacity",
          placeholder: "Capacity",
          onChange: this.handleChange.bind(this, "capacity"),
          value: this.state.fields["capacity"],
          className: this.state.errors["capacity"] ? "error" : "valid"
        }), react_default.a.createElement("span", {
          className: "error"
        }, this.state.errors["capacity"])), react_default.a.createElement("button", {
          className: "create-event-button"
        }, "CREATE NEW EVENT"))));
      } else {
        return react_default.a.createElement("div", {
          className: "event-add-container-desktop"
        }, react_default.a.createElement("header", {
          className: "header-desktop"
        }, react_default.a.createElement("div", {
          className: "logo"
        }), react_default.a.createElement("div", {
          className: "close-button",
          onClick: this.handleCloseButton
        })), react_default.a.createElement("div", {
          className: "event-add-form"
        }, react_default.a.createElement("div", {
          className: "form-header"
        }, react_default.a.createElement("h2", null, "Create new event"), react_default.a.createElement("span", null, "Enter details below.")), react_default.a.createElement("form", {
          onSubmit: this.handleSubmit
        }, react_default.a.createElement("div", {
          className: "wrap-input"
        }, react_default.a.createElement("input", {
          ref: "title",
          type: "text",
          placeholder: "Title",
          onChange: this.handleChange.bind(this, "title"),
          value: this.state.fields["title"],
          className: this.state.errors["title"] ? "error" : "valid"
        }), react_default.a.createElement("span", {
          className: "error"
        }, this.state.errors["title"])), react_default.a.createElement("div", {
          className: "wrap-input"
        }, react_default.a.createElement("input", {
          ref: "description",
          type: "text",
          placeholder: "Description",
          onChange: this.handleChange.bind(this, "description"),
          value: this.state.fields["description"],
          className: this.state.errors["description"] ? "error" : "valid"
        }), react_default.a.createElement("span", {
          className: "error"
        }, this.state.errors["description"])), react_default.a.createElement("div", {
          className: "wrap-input"
        }, react_default.a.createElement("input", {
          ref: "date",
          type: "date",
          placeholder: "Date",
          onChange: this.handleChange.bind(this, "date"),
          value: this.state.fields["date"],
          className: this.state.errors["date"] ? "error" : "valid"
        }), react_default.a.createElement("span", {
          className: "error"
        }, this.state.errors["date"])), react_default.a.createElement("div", {
          className: "wrap-input"
        }, react_default.a.createElement("input", {
          ref: "time",
          type: "time",
          placeholder: "Time",
          onChange: this.handleChange.bind(this, "time"),
          value: this.state.fields["time"],
          className: this.state.errors["time"] ? "error" : "valid"
        }), react_default.a.createElement("span", {
          className: "error"
        }, this.state.errors["time"])), react_default.a.createElement("div", {
          className: "wrap-input"
        }, react_default.a.createElement("input", {
          ref: "capacity",
          type: "capacity",
          placeholder: "Capacity",
          onChange: this.handleChange.bind(this, "capacity"),
          value: this.state.fields["capacity"],
          className: this.state.errors["capacity"] ? "error" : "valid"
        }), react_default.a.createElement("span", {
          className: "error"
        }, this.state.errors["capacity"])), react_default.a.createElement("button", {
          className: "create-event-button"
        }, "CREATE NEW EVENT"))));
      }
    }
  }]);

  return EventListListComponent;
}(react["Component"]);

/* harmony default export */ var EventAddComponent = (EventAddComponent_EventListListComponent);
// CONCATENATED MODULE: ./src/dashboard/containers/form/EventAddContainer.js





var EventAddContainer_mapStateToProps = function mapStateToProps(state) {
  return state.dashboardReducer;
};

var EventAddContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveEvent: function saveEvent(data) {
      dispatch(actions_saveEvent(data));
    },
    goBack: function goBack() {
      dispatch(Object(react_router_redux_es["goBack"])());
    }
  };
};

var EventAddContainer = Object(es["connect"])(EventAddContainer_mapStateToProps, EventAddContainer_mapDispatchToProps)(EventAddComponent);
/* harmony default export */ var form_EventAddContainer = (EventAddContainer);
// EXTERNAL MODULE: ./src/main/styles/error.scss
var styles_error = __webpack_require__("./src/main/styles/error.scss");

// CONCATENATED MODULE: ./src/main/components/ErrorNotFound.js
function ErrorNotFound_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    ErrorNotFound_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    ErrorNotFound_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return ErrorNotFound_typeof(obj);
}

function ErrorNotFound_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function ErrorNotFound_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function ErrorNotFound_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) ErrorNotFound_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) ErrorNotFound_defineProperties(Constructor, staticProps);
  return Constructor;
}

function ErrorNotFound_possibleConstructorReturn(self, call) {
  if (call && (ErrorNotFound_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return ErrorNotFound_assertThisInitialized(self);
}

function ErrorNotFound_getPrototypeOf(o) {
  ErrorNotFound_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return ErrorNotFound_getPrototypeOf(o);
}

function ErrorNotFound_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function ErrorNotFound_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) ErrorNotFound_setPrototypeOf(subClass, superClass);
}

function ErrorNotFound_setPrototypeOf(o, p) {
  ErrorNotFound_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return ErrorNotFound_setPrototypeOf(o, p);
}





var ErrorNotFound_ErrorNotFoundComponent =
/*#__PURE__*/
function (_Component) {
  ErrorNotFound_inherits(ErrorNotFoundComponent, _Component);

  function ErrorNotFoundComponent(props) {
    var _this;

    ErrorNotFound_classCallCheck(this, ErrorNotFoundComponent);

    _this = ErrorNotFound_possibleConstructorReturn(this, ErrorNotFound_getPrototypeOf(ErrorNotFoundComponent).call(this, props));
    _this.state = {
      width: window.innerWidth
    };
    _this.handleRefreshButton = _this.handleRefreshButton.bind(ErrorNotFound_assertThisInitialized(_this));
    return _this;
  }

  ErrorNotFound_createClass(ErrorNotFoundComponent, [{
    key: "handleRefreshButton",
    value: function handleRefreshButton(e) {
      this.props.goBack();
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var width = this.state.width;
      var isMobile = width <= 500;

      if (isMobile) {
        return react_default.a.createElement("div", {
          className: "error-page-wrapper-mobile"
        }, react_default.a.createElement("div", {
          className: "error-message"
        }, react_default.a.createElement("div", {
          className: "error-box"
        }, react_default.a.createElement("h2", null, "404 Error - page not found"), react_default.a.createElement("p", {
          className: "not-found-desc"
        }, "Seems like Darth Vader just hits our website and drops it down. Please press the refresh button and everything should be fine again."), react_default.a.createElement("button", {
          className: "refresh-button",
          onClick: this.handleRefreshButton
        }, "REFRESH"))), react_default.a.createElement("div", {
          className: "sign-up"
        }, react_default.a.createElement("span", null, "Don't have account?"), react_default.a.createElement("a", {
          href: "#"
        }, "SIGN UP")));
      } else {
        return react_default.a.createElement("div", {
          className: "error-page-wrapper-desktop"
        }, react_default.a.createElement("div", {
          className: "slide"
        }, react_default.a.createElement(components_SlideComponent, null)), react_default.a.createElement("div", {
          className: "error-message"
        }, react_default.a.createElement("div", {
          className: "trooper-helm"
        }), react_default.a.createElement("div", {
          className: "error-box"
        }, react_default.a.createElement("h2", null, "404 Error - page not found"), react_default.a.createElement("p", {
          className: "not-found-desc"
        }, "Seems like Darth Vader just hits our website and drops it down. Please press the refresh button and everything should be fine again."), react_default.a.createElement("button", {
          className: "refresh-button",
          onClick: this.handleRefreshButton
        }, "REFRESH"))), react_default.a.createElement("div", {
          className: "sign-up"
        }, react_default.a.createElement("span", null, "Don't have account?"), react_default.a.createElement("a", {
          href: "#"
        }, "SIGN UP")));
      }
    }
  }]);

  return ErrorNotFoundComponent;
}(react["Component"]);

/* harmony default export */ var ErrorNotFound = (ErrorNotFound_ErrorNotFoundComponent);
// CONCATENATED MODULE: ./src/main/containers/ErrorNotFoundContainer.js




var ErrorNotFoundContainer_mapStateToProps = function mapStateToProps(state) {
  return {};
};

var ErrorNotFoundContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    goBack: function goBack() {
      dispatch(Object(react_router_redux_es["goBack"])());
    }
  };
};

var ErrorNotFoundContainer = Object(es["connect"])(ErrorNotFoundContainer_mapStateToProps, ErrorNotFoundContainer_mapDispatchToProps)(ErrorNotFound);
/* harmony default export */ var containers_ErrorNotFoundContainer = (ErrorNotFoundContainer);
// CONCATENATED MODULE: ./src/main/components/ApplicationComponent.js
function ApplicationComponent_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    ApplicationComponent_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    ApplicationComponent_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return ApplicationComponent_typeof(obj);
}

function ApplicationComponent_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function ApplicationComponent_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function ApplicationComponent_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) ApplicationComponent_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) ApplicationComponent_defineProperties(Constructor, staticProps);
  return Constructor;
}

function ApplicationComponent_possibleConstructorReturn(self, call) {
  if (call && (ApplicationComponent_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return ApplicationComponent_assertThisInitialized(self);
}

function ApplicationComponent_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function ApplicationComponent_getPrototypeOf(o) {
  ApplicationComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return ApplicationComponent_getPrototypeOf(o);
}

function ApplicationComponent_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) ApplicationComponent_setPrototypeOf(subClass, superClass);
}

function ApplicationComponent_setPrototypeOf(o, p) {
  ApplicationComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return ApplicationComponent_setPrototypeOf(o, p);
}







var ApplicationComponent_App =
/*#__PURE__*/
function (_Component) {
  ApplicationComponent_inherits(App, _Component);

  function App(props) {
    ApplicationComponent_classCallCheck(this, App);

    return ApplicationComponent_possibleConstructorReturn(this, ApplicationComponent_getPrototypeOf(App).call(this, props));
  }

  ApplicationComponent_createClass(App, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", null, react_default.a.createElement(react_router_es["Switch"], null, react_default.a.createElement(react_router_es["Route"], {
        exact: true,
        path: "/",
        component: containers_DashboardContainer
      }), react_default.a.createElement(react_router_es["Route"], {
        exact: true,
        path: "/event/add",
        component: form_EventAddContainer
      }), react_default.a.createElement(react_router_es["Route"], {
        path: "*",
        component: containers_ErrorNotFoundContainer
      })));
    }
  }]);

  return App;
}(react["Component"]);

/* harmony default export */ var ApplicationComponent = (ApplicationComponent_App);
// CONCATENATED MODULE: ./src/main/containers/ApplicationContainer.js



var ApplicationContainer_mapStateToProps = function mapStateToProps(state) {
  return state.authReducer;
};

var ApplicationContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var Application = Object(es["connect"])(ApplicationContainer_mapStateToProps, ApplicationContainer_mapDispatchToProps)(ApplicationComponent);
/* harmony default export */ var ApplicationContainer = (Application);
// EXTERNAL MODULE: ./src/main/styles/main.scss
var main = __webpack_require__("./src/main/styles/main.scss");

// CONCATENATED MODULE: ./src/index.js















react_dom_default.a.render(react_default.a.createElement(es["Provider"], {
  store: store_store
}, react_default.a.createElement(react_router_redux_es["ConnectedRouter"], {
  history: store_history
}, react_default.a.createElement(react_router_dom_es["HashRouter"], null, react_default.a.createElement(react_router_es["Switch"], null, react_default.a.createElement(react_router_es["Route"], {
  exact: true,
  path: "/login",
  component: containers_LoginContainer
}), react_default.a.createElement(containers_PrivateRouteContainer, {
  path: "/",
  onEnter: store_store.dispatch(actions_verifyAuth()),
  component: ApplicationContainer
}), react_default.a.createElement(react_router_es["Route"], {
  component: ErrorNotFound
}))))), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

unregister();

/***/ }),

/***/ "./src/main/styles/error.scss":
/*!************************************!*\
  !*** ./src/main/styles/error.scss ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/main/styles/footer.scss":
/*!*************************************!*\
  !*** ./src/main/styles/footer.scss ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/main/styles/header.scss":
/*!*************************************!*\
  !*** ./src/main/styles/header.scss ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/main/styles/main.scss":
/*!***********************************!*\
  !*** ./src/main/styles/main.scss ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/main/styles/nav.scss":
/*!**********************************!*\
  !*** ./src/main/styles/nav.scss ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/main/styles/slide.scss":
/*!************************************!*\
  !*** ./src/main/styles/slide.scss ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime","vendor"]]]);