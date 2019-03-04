import constants from "../constants";

const common = {
    list: {
        data: [],
        isFetching: false
    }
};

const initialState = {
    listView: "",
    activeFilter: 0,
    events: {
        ...common
    },
    form: {
        editing: false,
        data: null,
        isFetching: false,
        result: null
    }
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type){
        case constants.REQUEST_ALL_EVENTS:
            return {
                ...state,
                events: {
                    list: {
                        ...state.events.list,
                        isFetching: true
                    }
                }
            };
        case constants.REQUEST_ALL_EVENTS_SUCCEEDED:
            return {
                ...state,
                events: {
                    list: {
                        data: action.data,
                        isFetching: false
                    }
                }
            };
        case constants.REQUEST_ALL_EVENTS_ERROR:
            return {
                ...state,
                events: {
                    list: {
                        data: [],
                        isFetching: false
                    }
                }
            };
        case constants.SAVE_EVENT:
            return {
                ...state,
                form: {
                    ...state.form,
                    data: action.data,
                    isFetching: true,
                    result: null
                }
            };
        case constants.EVENT_SAVED:
            return {
                ...state,
                form: {
                    editing: true,
                    data: action.data,
                    isFetching: false,
                    result: {success: true, text: "Event saved"}
                }
            };
        case constants.EVENT_SAVE_ERROR:
            return {
                ...state,
                form: {
                    ...state.form,
                    editing: true,
                    isFetching: false,
                    result: {success: false, text: action.error}
                }
            };
        case constants.EVENT_CLEAR:
            return {
                ...state,
                form: {
                    editing: false,
                    data: null,
                    isFetching: false,
                    result: null
                }
            };
        case constants.CHANGE_VIEW:
            return {
                ...state,
                listView: action
            };
        case constants.CHANGE_FILTER:
            return {
                ...state,
                activeFilter: action
            };
        default:
            return state;
    }
};

export default dashboardReducer;
