import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createPortal } from "react-dom";
import SignUpFormContainer from '../session_form/signup_form_container'
import LogInFormContainer from '../session_form/login_form_container';

const Modal = ({ modal, openModal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LogInFormContainer />;
            break;
        case 'signup':
            component = <SignUpFormContainer />; 
            break;
        default:
            return null;

    }
    return createPortal( 
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button onClick={closeModal} id="modal-close-button">&times;</button>
                { component }
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;