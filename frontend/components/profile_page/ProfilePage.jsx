import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BoardIndex from '../boards/BoardIndex'

class ProfileShow extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount({ fetchUser, fetchBoards, userId } = this.props) {
        // debugger
        // console.log(this.props.ownProps.match)
        fetchUser(userId);
        fetchBoards(userId);
    }

    componentDidUpdate(prevProps) {
        const { fetchUser, userId } = this.props
        if (prevProps.userId !== userId) {
            fetchUser(userId);
            fetchBoards(userId);
        }
    }

    render() {
        const { user, currentUser, userId, boards } = this.props
        if (!user) return null; 
        return (
            <div className="profile-container">
                <section className="profile-header">
                    <div className="ph-main">
                        <div className="profile-pic-container">
                            {user.photoUrl ? <img src={user.photoUrl} /> : <img src={window.userIcon} />}
                        </div>
                        <div className="profile-username">
                            <h2>@{user.username}</h2>
                        </div>
                        <div className="profile-following">
                            <span className="profile-followers">
                                # followers (modal)
                            </span>
                            <span className="profile-following">
                                # following (modal)
                            </span>
                        </div>
                            {user === currentUser ? 
                            <Link to={`/settings`}><button id='signup-button'>Edit Profile</button></Link> : null}
                            {/* need to make button fatter */}
                    </div>
                </section>
                <section className="profile-content">
                    <BoardIndex currentUser={currentUser} user={user} userId={userId} boards={boards}/>
                    {/* open create board or pin modal */}
                    {/* profile board display */}
                </section>
            </div>
        )
    }
}


import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchBoards } from '../../actions/board_actions';
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
    user: state.entities.users[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    boards: Object.values(state.entities.boards),
    ownProps,
    state
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchBoards: (userId) => dispatch(fetchBoards(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);