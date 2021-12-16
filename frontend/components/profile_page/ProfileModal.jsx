import React from 'react';
import { createPortal } from "react-dom";
import { closeModalOnEscape } from '../../utils/close_util';
import FollowingModal from './FollowingModal';
import FollowerModal from './FollowerModal';

const ProfileModal = ({ modal, closeModal, user }) => {
    if (!modal) return null;

    let component;
    switch (modal) {
        case 'followingModal':
            component = <FollowingModal user={user} />;
            break;
        case 'followerModal':
            component = <FollowerModal user={user} />;
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
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);