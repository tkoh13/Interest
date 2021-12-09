import { useState, useRef, useEffect } from 'react';

const UserSettings = () => {

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
                <div>profile-img</div> <span>Change</span>
            </section>
        </div>
    )
}

import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';

// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps = (dispatch) => ({
    updateUser: (userId, user) => dispatch(updateUser(userId, user))
})

export default connect(null, mapDispatchToProps)(UserSettings);
