import { connect } from "react-redux";
import LoginComponent from "../components/login.component";

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => {
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

export default LoginContainer;
