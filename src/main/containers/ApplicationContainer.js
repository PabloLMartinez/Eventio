import { connect } from "react-redux";
import ApplicationComponent from "../components/ApplicationComponent";

const mapStateToProps = (state) => {
    return state.authReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const Application = connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplicationComponent);

export default Application;
