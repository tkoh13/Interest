import React from 'react';
import { BsPlusLg } from 'react-icons/bs';

const Footer = ({ currentUser, openModal }) => {

    const footer = currentUser ? (
        <div onClick={() => openModal('createPin')} className="create-pin">
            <BsPlusLg className="create-pin-icon"/>
            {/* <img src={window.plus} alt="create-pin" className="create-pin-icon" /> */}
        </div >
    ) : (

        <div className="no-session-footer">

        </div>
    )

    return (
        <div className="footer-container">
            {footer}
        </div>
    )
}

import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => {

    return {
        openModal: (modal) => dispatch(openModal(modal)),
        // closeModal: () => dispatch(closeModal()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);