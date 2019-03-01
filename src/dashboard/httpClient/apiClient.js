import client from "../../lib/apiClient";

export const requestAllEvents = () => {
    return client().get("/events");
};
