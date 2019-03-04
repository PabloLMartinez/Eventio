import { connect } from "react-redux";
import EventListListComponent from "../../components/list/EventListListComponent";

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
