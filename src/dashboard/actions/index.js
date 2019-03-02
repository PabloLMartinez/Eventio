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
