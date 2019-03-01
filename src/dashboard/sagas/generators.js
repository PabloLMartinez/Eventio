import { takeLatest, throttle } from "redux-saga/effects";
import { requestAllEvents } from "./dashboard";

import constants from "../constants";

export default [
    takeLatest(constants.REQUEST_ALL_EVENTS, requestAllEvents)
];
