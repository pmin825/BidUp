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
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demoLogin: (user) => {
            return dispatch(login(user));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);