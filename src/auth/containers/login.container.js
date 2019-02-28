import { connect } from "react-redux";
import LoginComponent from "../components/login.component";
import * as actions from "../actions";

const mapStateToProps = (state) => {
    return state.authReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(actions.requestLogin(email, password));
        }
    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

export default LoginContainer;
