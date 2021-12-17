import React from 'react';
import { createPortal } from "react-dom";
import { closeModalOnEscape } from '../../utils/close_util';
import SessionFormSignup from '../session_form/SessionFormSignup'
import SessionFormLogin from '../session_form/SessionFormLogin';
import PinFormCreate from '../pins/PinFormCreate';
import UpdatePicture from '../settings/UpdatePicture'
import FollowerModal from '../profile_page/FollowerModal';
import FollowingModal from '../profile_page/FollowingModal';

const Modal = ({ modal, closeModal }) => {
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
        case 'updatePicture':
            component = <UpdatePicture />;
            break;
        case 'followers':
            component = <FollowerModal />;
            break;
        case 'following':
            component = <FollowingModal />;
            break;
        default:
            return null;
    }

    closeModalOnEscape(closeModal);

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
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);