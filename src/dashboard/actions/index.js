import constants from "../constants";

export const changeView = (view) => {
    return {
        type: constants.CHANGE_VIEW,
        view
    };
};
