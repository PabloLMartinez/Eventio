import { connect } from "react-redux";
import { push } from "react-router-redux";
import FooterComponent from "../components/footer.component";

const mapStateToProps = (state) => {
    return state.authReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddEventClick: () => {
            dispatch(push("/event/add"));
        }
    };
};

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterComponent);

export default FooterContainer;
