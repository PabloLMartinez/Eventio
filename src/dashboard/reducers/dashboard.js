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
