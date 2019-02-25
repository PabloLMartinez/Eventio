import client from "../../lib/apiClient";

export const refreshTokenAuth = (refreshToken) => {
    return client().post("/auth/native", {refreshToken});
};

export const login = (email, password) => {
    return client().post("/auth/native", {email, password});
};
