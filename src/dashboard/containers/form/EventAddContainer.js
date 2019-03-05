import { connect } from "react-redux";
import { goBack } from "react-router-redux";
import EventAddComponent from "../../components/form/EventAddComponent";

import * as actions from "../../actions";

const mapStateToProps = (state) => {
    return state.dashboardReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveEvent: data => {
            dispatch(actions.saveEvent(data));
        },
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
