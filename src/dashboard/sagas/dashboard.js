import { put } from "redux-saga/effects";
import { goBack } from "react-router-redux";
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

export function* saveEvent({data}) {
    try {
        const response =
            yield data._id ? apiClient.updateEvent(data._id, data) : apiClient.saveEvent(data);
        yield put(dashboardActions.eventSaved(response.data));
        yield put(dashboardActions.eventClear());
        yield put(goBack());
    } catch(error){
        console.log(error);
        yield put(dashboardActions.eventSaveError(errorMessage(error)));
    }
}
