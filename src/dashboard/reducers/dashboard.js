import constants from "../constants";

const initialState = {
    listView: "",
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type){
        case constants.CHANGE_VIEW:
            return {
                ...state,
                listView: action
            };
        default:
            return state;
    }
};

export default dashboardReducer;
