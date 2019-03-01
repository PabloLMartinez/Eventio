import { connect } from "react-redux";
import EventListPanelComponent from "../components/event.list.panel.component";

const mapStateToProps = (state) => {
    return state.dashboardReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const EventListPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventListPanelComponent);

export default EventListPanelContainer;
