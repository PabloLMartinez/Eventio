import { connect } from "react-redux";
import DashboardComponent from "../components/DashboardComponent";

import * as actions from "../actions";

const mapStateToProps = (state) => {
    return state.dashboardReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestAllEvents: () => {
            dispatch(actions.requestAllEvents());
        }
    };
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardComponent);

export default DashboardContainer;
