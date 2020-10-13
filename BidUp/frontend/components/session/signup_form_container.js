import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
        formType: 'signup'
})

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => {
            return dispatch(signup(user));
        },
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);