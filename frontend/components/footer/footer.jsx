import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import DropDownButton from '../dropdown/DropDownButton';

const Footer = ({ currentUser, openModal }) => {

    const footer = currentUser ? (
        <div  className="create-pin">
        {/* <div onClick={() => openModal('createPin')} className="create-pin"> */}
            {/* <BsPlusLg className="create-pin-icon"/> */}

            <div className='pin-create'><DropDownButton type="pinCreate" actions={{ openModal, currentUser }} /></div>
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