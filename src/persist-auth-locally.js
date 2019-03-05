import { customStringify } from "./lib/commons";

const persistAuthLocally = store => next => action => {
  next(action);
  localStorage.setItem("authStore", customStringify({ authReducer: store.getState().authReducer }));
};

export default persistAuthLocally;
