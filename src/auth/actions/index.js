import constants from "../constants";

export const requestLogin = (email, password) => {
    return {
        type: constants.REQUEST_LOGIN,
        email, password
    };
};
export const authSuccess = (data) => {
    return {
        type: constants.AUTH_SUCCESS,
        data
    };
};
export const authFail = (error) => {
    return {
        type: constants.AUTH_FAIL,
        error
    };
};
export const verifyAuth = () => {
    return {
        type: constants.VERIFY_AUTH
    };
};
export const verifyAuthSuccess = (data) => {
    return {
        type: constants.VERIFY_AUTH_SUCCESS,
        data
    };
};
export const verifyAuthFail = (error) => {
    return {
        type: constants.VERIFY_AUTH_FAIL,
        error
    };
};
export const logout = () => {
    return {
        type: constants.LOGOUT
    };
};
