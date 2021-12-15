import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BoardIndex from '../boards/BoardIndex'

class ProfileShow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchUser, fetchBoards, fetchFollows, userId } = this.props
        fetchFollows(userId);
        fetchBoards(userId);
        fetchUser(userId);
    }

    componentDidUpdate(prevProps) {
        console.log("update")
        const { fetchUser, fetchBoards, fetchFollows, userId, follows } = this.props;
        if (prevProps.userId !== userId) {
            fetchFollows(userId); 
            fetchBoards(userId);
            fetchUser(userId);
        } 
        if (prevProps.follows.length !== follows.length) {
            console.log("update follows")
            fetchFollows(userId); 
        }
    }

    renderFollowButton() {
        const { follows, userId, currentUser } = this.props
        if (follows.some(x => x.follower_id === currentUser.id)) {
            const followId = follows.filter(e => e.followee_id === userId || e.follower_id === currentUser.id)[0]["id"]
            return <button onClick={() => this.handleUnFollow(followId)} id='signup-button'>Following</button> 
        } else {
            return <button onClick={() => this.handleFollow()}  id='signup-button'>Follow</button>
        }
    }

    handleFollow() {
        const { createFollow, currentUser, user } = this.props;
        const follow = {
            follower_id: currentUser.id,
            followee_id: user.id,
        }
        createFollow(follow);
    }

    handleUnFollow(followId) {
        const { deleteFollow } = this.props;
        deleteFollow(followId);
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
                            { user === currentUser ? 
                            <Link to={`/settings`}><button id='signup-button'>Edit Profile</button></Link> : 
                            <div>{this.renderFollowButton()}</div> }
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
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';
import { openModal } from '../../actions/modal_actions';

// const mapStateToProps = (state, ownProps) => {
//     console.log(state.entities.users[state.session.id])
//     return{
//         currentUser: state.entities.users[state.session.id],
//         userId: ownProps.match.params.userId
//     }
// }
const mapStateToProps = ({ session, entities: { users, boards, follows } }, {match}) => ({
    currentUser: users[session.id],
    user: users[match.params.userId],
    userId: match.params.userId,
    boards: Object.values(boards),
    follows: Object.values(follows),
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    fetchFollows: (userId) => dispatch(fetchFollows(userId)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);