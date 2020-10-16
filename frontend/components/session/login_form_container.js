import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => {
            return dispatch(login(user));
        },
        otherForm: (
            <div>
                <span className="link-back">Don't have an account?</span>
                <button className="link-butt" onClick={() => dispatch(openModal('signup'))}>
                    Signup
                </button>
            </div>
        ),
        closeModal: () => dispatch(closeModal()),
        demoLogin: (user) => {
            return dispatch(login(user));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);