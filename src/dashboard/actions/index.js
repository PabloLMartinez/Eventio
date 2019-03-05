import constants from "../constants";

export const changeView = (view) =>
    ({ view, type: constants.CHANGE_VIEW });

export const requestAllEvents = () =>
    ({ type: constants.REQUEST_ALL_EVENTS });

export const requestAllEventsSucceeded = data =>
    ({ data, type: constants.REQUEST_ALL_EVENTS_SUCCEEDED });

export const requestAllEventsError = error =>
    ({ error, type: constants.REQUEST_ALL_EVENTS_ERROR });

export const changeFilter = (activeFilter) =>
    ({ activeFilter, type: constants.CHANGE_FILTER });

export const saveEvent = data =>
    ({ data, type: constants.SAVE_EVENT });

export const eventSaved = data =>
    ({ data, type: constants.EVENT_SAVED });

export const eventSaveError = error =>
    ({ error, type: constants.EVENT_SAVE_ERROR });

export const eventClear = () =>
    ({ type: constants.EVENT_CLEAR });
