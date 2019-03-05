import { takeLatest, throttle } from "redux-saga/effects";
import { requestAllEvents, saveEvent } from "./dashboard";

import constants from "../constants";

export default [
    takeLatest(constants.REQUEST_ALL_EVENTS, requestAllEvents),
    takeLatest(constants.SAVE_EVENT, saveEvent)
];
