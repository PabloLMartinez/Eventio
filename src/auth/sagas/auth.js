import { put } from "redux-saga/effects";
import { push } from "react-router-redux";
import * as authActions from "../actions/actions";
import * as apiClient from "../httpClient/apiClient";

import { errorMessage } from "lib/errors";

export function* requestLogin(payload) {
    try {
        const response = yield apiClient.login(payload.email, payload.password);
        yield put(authActions.authSuccess(response.data));
        console.log("response login:::", response);
        localStorage.setItem("authorization", response.headers.authorization);
        localStorage.setItem("jwtToken", response.headers);
        yield put(push("/"));
    } catch(error){
        yield put(authActions.authFail(errorMessage(error)));
    }
}

export function* verifyAuth(payload) {
    try {
        const token = localStorage.getItem("authorization");
        if (!token) return yield put(authActions.verifyAuthFail(""));

        const response = yield apiClient.refreshTokenAuth(token);
        yield put(authActions.verifyAuthSuccess(response.data));

    } catch(error){
        yield put(authActions.verifyAuthFail(errorMessage(error)));
    }
}

export function* logout() {
    localStorage.removeItem("authorization");
    localStorage.removeItem("jwtToken");
}
