import { connect } from "react-redux";
import { push } from "react-router-redux";
import HeaderComponent from "../components/HeaderComponent";

import * as actions from "../../auth/actions";

const mapStateToProps = (state) => {
    return state.authReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(actions.logout());
            dispatch(push("/login"));
        }
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent);

export default HeaderContainer;
