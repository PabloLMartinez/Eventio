import { all } from "redux-saga/effects";

import authSagas from "./auth/sagas/generators";
import dashboardSagas from "./dashboard/sagas/generators";

export default function * root() {
    yield all([
        authSagas,
        dashboardSagas
    ]);
}
