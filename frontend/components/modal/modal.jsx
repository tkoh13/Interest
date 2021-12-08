import React, { Component } from 'react';
import { createPortal } from "react-dom";
import SessionFormSignup from '../session_form/SessionFormSignup'
import SessionFormLogin from '../session_form/SessionFormLogin';
import PinFormCreate from '../pins/PinFormCreate';

const Modal = ({ modal, openModal, closeModal }) => {
    if (!modal) {
        return null;
    }
// on signup welcome to interest (edit username) -> How do you identify? (gender) -> region and language -> topics
    let component;
    switch (modal) {
        case 'login':
            component = <SessionFormLogin />;
            break;
        case 'signup':
            component = <SessionFormSignup />;
            break;
        case 'createPin':
            component = <PinFormCreate />;
            break;
        default:
            return null;

    }
    return createPortal(
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button onClick={closeModal} id="modal-close-button">&times;</button>
                {component}
            </div>
        </div>,
        document.getElementById('portal')
    )
}

import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);