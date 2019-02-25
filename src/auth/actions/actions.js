import constants from "../constants";

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

export const logout = (email, password) => {
    return {
        type: constants.LOGOUT
    };
};
