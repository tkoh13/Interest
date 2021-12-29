import { useState, useRef, useEffect } from 'react';
// import { openModal } from '../../actions/modal_actions';
import React from 'react';

const UserSettings = ({currentUser, ownProps, openModal}) => {
    return (
        <div className="setting-container">
            <section>
                <div>Public profile</div>
                <div>Notifications</div>
                <div>under construction</div>
            </section>
            <section>
                <div>Public profile</div>
                <div>People visiting your profile will see the following info</div>
                <div>Photo</div>
                <div className="profile-pic-container">
                    {currentUser.photoUrl ? <img src={currentUser.photoUrl} /> : <img src={window.userIcon} />}
                    <button onClick={() => openModal('updatePicture')} id="signup-button">Change</button>
                    {/* need to make button fatter */}
                </div>

                <div>
                    {currentUser.username}, {currentUser.email}
                </div>
            </section>
        </div>
    )
}

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    ownProps
})

const mapDispatchToProps = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
