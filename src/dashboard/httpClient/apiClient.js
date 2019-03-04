import {client, clientAuth} from "../../lib/apiClient";

export const requestAllEvents = () => {
    return client().get("/events");
};

export const saveEvent = (data) => {
    return clientAuth().post("/events/", data);
};

export const updateEvent = (id, data) => {
    return clientAuth().put(`/events/${id}/`, data);
};
