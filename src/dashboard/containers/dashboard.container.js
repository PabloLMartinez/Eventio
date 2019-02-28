import { connect } from "react-redux";
import DashboardComponent from "../components/dashboard.component";

const mapStateToProps = (state) => {
    return state.dashboardReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardComponent);

export default DashboardContainer;
