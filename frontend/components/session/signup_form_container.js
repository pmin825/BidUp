import { connect } from "react-redux";
import React from "react";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "signup",
});

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => {
            return dispatch(signup(user));
        },
        otherForm: (
            <div>
                <span className="link-back">Already have an account?</span>
                <button
                    className="link-butt"
                    onClick={() => dispatch(openModal("login"))}
                >
                    Login
                </button>
            </div>
        ),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
