import { connect } from "react-redux";
import PrivateRoute from "../routes/PrivateRoute";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    };
};

const PrivateRouteContainer = connect(
    mapStateToProps
)(PrivateRoute);

export default PrivateRouteContainer;
