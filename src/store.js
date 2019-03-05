import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import createHashHistory from "history/createHashHistory";
import authReducer from "./auth/reducers/auth";
import dashboardReducer from "./dashboard/reducers/dashboard";
import sagas from "./sagas";

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
export const history = createHashHistory({ queryKey: false });
const historyRouterMiddleware = routerMiddleware(history);

import persistAuthLocally from "./persist-auth-locally";

let retrievedState;
try {
  retrievedState = localStorage.getItem("authStore");
  if (retrievedState === null){
    retrievedState = {};
  }
  retrievedState = JSON.parse(retrievedState);
} catch (err){
  retrievedState = {};
}

export const store = createStore(
  combineReducers({
    authReducer,
    dashboardReducer,
    router: routerReducer
  }),
  retrievedState,
  applyMiddleware(sagaMiddleware, loggerMiddleware, historyRouterMiddleware, persistAuthLocally)
);

sagaMiddleware.run(sagas);

