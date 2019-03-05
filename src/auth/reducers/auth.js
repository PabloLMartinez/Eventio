import constants from "../constants";

const initialState = {
    isVerifingAuth: false,
    isAuthenticated: !!localStorage.getItem("jwtToken"),
    isAttemptingLogin: false,
    result: null,
    profile : null
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case constants.VERIFY_AUTH:
            return {
                ...state,
                isVerifingAuth: true,
                result: null
            };
        case constants.VERIFY_AUTH_SUCCESS:
            return {
                ...state,
                isVerifingAuth: false,
                isAuthenticated: true,
                profile: action.data,
                result: null
            };
        case constants.VERIFY_AUTH_FAIL:
            return {
                ...state,
                isVerifingAuth: false,
                isAuthenticated: false,
                result: null
            };
        case constants.REQUEST_LOGIN:
            return {
                ...state,
                isAttemptingLogin: true,
                result: null
            };
        case constants.AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isAttemptingLogin: false,
                result: null,
                profile: action.data
            };
        case constants.AUTH_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                isAttemptingLogin: false,
                profile: null,
                result: {success: false, text: action.error}
            };
        case constants.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                isAttemptingLogin: false,
                profile: null
            };

        default:
            return state;
    }
};

export default authReducer;
