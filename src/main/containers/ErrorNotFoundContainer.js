import { connect } from "react-redux";
import {goBack} from "react-router-redux";
import ErrorNotFoundComponent from "../components/ErrorNotFound";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        goBack: () => {
            dispatch(goBack());
        }
    };
};

const ErrorNotFoundContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorNotFoundComponent);

export default ErrorNotFoundContainer;
