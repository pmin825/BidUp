import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            return dispatch(logout());
        },
        openModal: (modal) => {
            return dispatch(openModal(modal));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
