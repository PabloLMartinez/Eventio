import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {store, history} from "./store";
import { Route, Switch } from "react-router";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";

import * as serviceWorker from './serviceWorker';

import Login from "./auth/containers/LoginContainer";
import PrivateRoute from "./auth/containers/PrivateRouteContainer";
import Application from "./main/containers/ApplicationContainer";
import ErrorNotFound from './main/components/ErrorNotFound';

import { verifyAuth } from "./auth/actions";
import { HashRouter } from "react-router-dom";

import "./main/styles/main.scss";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute path="/" onEnter={store.dispatch(verifyAuth())} component={Application} />
                    <Route component={ErrorNotFound} />
                </Switch>
            </HashRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
