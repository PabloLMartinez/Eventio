import { connect } from "react-redux";
import EventListListComponent from "../components/event.list.list.component";

const mapStateToProps = (state) => {
    return state.dashboardReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const EventListListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventListListComponent);

export default EventListListContainer;
