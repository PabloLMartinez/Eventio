import { put } from "redux-saga/effects";
import * as dashboardActions from "../actions";
import * as apiClient from "../httpClient/apiClient";

import { errorMessage } from "lib/errors";

export function* requestAllEvents(payload) {
    try {
        const result = yield apiClient.requestAllEvents();
        yield put(dashboardActions.requestAllEventsSucceeded(result.data));
    } catch(error){
        yield put(dashboardActions.requestAllEventsError(errorMessage(error)));
    }
}
