import { connect } from "react-redux";
import NavComponent from "../components/nav.component";

import * as actions from "../../dashboard/actions";

const mapStateToProps = (state) => {
    return state.authReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeView: (view) => {
            dispatch(actions.changeView(view));
        },
        changeFilter: (activeFilter) => {
            dispatch(actions.changeFilter(activeFilter));
        }
    };
};

const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavComponent);

export default NavContainer;
