import React, { Component } from 'react'

class ProfileShow extends Component {
    constructor(props) {
        super(props)
        // console.log(props.history)
        // this.state = {

        // }
    }

    componentDidMount() {
        // const { userId, fetchUser } = this.props
        // if (userId) {
        //     fetchUser(this.props.userId)
        // }
    }

    render() {
        const { currentUser } = this.props
        // console.log(currentUser)
        return (
            <div className="profile-container">
                <section className="profile-header">
                    <div className="ph-main">
                        <div className="profile-pic-container">
                            {currentUser.photoUrl ? <img src={currentUser.photoUrl} /> : <img src={window.userIcon} />}
                        </div>
                        <div className="profile-username">
                            <h2>@{currentUser.username}</h2>
                        </div>
                        <div className="profile-following">
                            <span className="profile-followers">
                                # followers (modal)
                            </span>
                            <span className="profile-following">
                                # following (modal)
                            </span>
                        </div>
                    </div>
                </section>
                <section className="profile-content">
                    Boards go here
                    First board is "All Pins" board
                    Each board should show the number of pins
                    {/* open create board or pin modal */}
                    {/* profile board display */}
                </section>
            </div>
        )
    }
}


import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
// import { openModal } from '../../actions/modal_actions';

// const mapStateToProps = (state, ownProps) => {
//     console.log(state.entities.users[state.session.id])
//     return{
//         currentUser: state.entities.users[state.session.id],
//         userId: ownProps.match.params.userId
//     }
// }
const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    users: ownProps.match.params.userId
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);