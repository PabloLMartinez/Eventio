import { connect } from "react-redux";
import { goBack } from "react-router-redux";
import EventAddComponent from "../components/event.add.component";

import * as actions from "../actions";

const mapStateToProps = (state) => {
    return state.dashboardReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        goBack: () => {
            dispatch(goBack());
        }
    };
};

const EventAddContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventAddComponent);

export default EventAddContainer;
