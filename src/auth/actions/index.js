import constants from "../constants";

export const requestLogin = (email, password) =>
    ({ email, password, type: constants.REQUEST_LOGIN });

export const authSuccess = (data) =>
    ({ data, type: constants.AUTH_SUCCESS });

export const authFail = (error) =>
    ({ error, type: constants.AUTH_FAIL });

export const verifyAuth = () =>
    ({ type: constants.VERIFY_AUTH });

export const verifyAuthSuccess = (data) =>
    ({ data, type: constants.VERIFY_AUTH_SUCCESS });

export const verifyAuthFail = (error) =>
    ({ error, type: constants.VERIFY_AUTH_FAIL });

export const logout = () =>
    ({ type: constants.LOGOUT });
