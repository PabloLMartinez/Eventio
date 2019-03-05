import { takeLatest, throttle } from "redux-saga/effects";
import { requestLogin, verifyAuth, logout } from "./auth";

import constants from "../constants";

export default [
    takeLatest(constants.VERIFY_AUTH, verifyAuth),
    takeLatest(constants.REQUEST_LOGIN, requestLogin),
    takeLatest(constants.LOGOUT, logout),
];
