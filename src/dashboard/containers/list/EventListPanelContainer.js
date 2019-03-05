import { connect } from "react-redux";
import EventListPanelComponent from "../../components/list/EventListPanelComponent";

const mapStateToProps = (state) => {
    return {
        dashboardReducer: state.dashboardReducer,
        profile: state.authReducer.profile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const EventListPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventListPanelComponent);

export default EventListPanelContainer;
