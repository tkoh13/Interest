import React, { Component } from 'react'

class ProfileShow extends Component {

    render() {
        return (
            <div className="profile-container">
                <section className="profile-header">
                    <div className="ph-main">
                        <div className="profile-pic">
                            <div className="profile-pic-container">
                                <img src={currentUser.photoUrl}/>
                            </div>
                        </div>
                        <div className="profile-name">
                            <h1>{currentUser.name}</h1>
                        </div>
                        <div className="profile-username">
                            <h2>@{currentUser.userName}</h2>
                        </div>
                        <div className="profile-following">
                            <div className="profile-followers">

                            </div>
                            <div className="profile-following">

                            </div>
                        </div>
                        <div className="profile-actions">
                            <div className="profile-edit">
                                {/* open edit profile modal */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="profile-content">
                    {/* open create board or pin modal */}
                    {/* profile board display */}
                </section>
            </div>
        )
    }
}

export default ProfileShow
