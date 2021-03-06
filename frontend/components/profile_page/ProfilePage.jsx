import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BoardIndex from '../boards/BoardIndex'
import FollowButton from './FollowButton';
// import ProfileModal from './ProfileModal';

class ProfileShow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchUser, fetchBoards, fetchFollows, fetchSaves, userId, currentUser } = this.props
        if (userId !== currentUser.id) fetchUser(currentUser.id);
        fetchFollows(userId);
        fetchBoards(userId);
        fetchSaves(userId);
        fetchUser(userId);
    }
    
    componentDidUpdate(prevProps) {
        const { fetchUser, fetchBoards, fetchFollows, fetchSaves, user, userId, boards, follows } = this.props;
        if (prevProps.userId !== userId) {
            fetchFollows(userId); 
            fetchBoards(userId);
            fetchUser(userId);
            fetchSaves(userId);
        } 
        if (prevProps.follows.length !== follows.length) {
            fetchUser(userId);
        }
    }

    renderFollows() {
        const { user, openModal } = this.props
        const { followers, following } = user
        let followerCount = followers ? followers.length : '0'
        let followingCount = following ? following.length : '0'
        return (
            <div className="profile-follow-container">
                <span className="profile-followers" onClick={() => openModal("followers")}
                    >{followerCount} followers ·
                </span>
                <span className="profile-following" onClick={() => openModal("following")}
                    > {followingCount} following
                </span>
            </div>
        );
    }

    renderFollowButton() {
        const { fetchUser, currentUser, user } = this.props;
        if (currentUser.following && user) {
            return <FollowButton user={user} />
        } else {
            fetchUser(currentUser.id)
                .then(() => this.renderFollowButton())
        }

        // const { follows, userId, currentUser } = this.props
        // const { following } = currentUser
        // // debugger
        // // if (!currentUser.following || currentUser.following === undefined) {
        // //     return null
        // // } else if (following.filter(user => user[0].id === userId)) {
        // //     return <button onClick={() => this.handleUnFollow(followId)} id='signup-button'>Following</button> 
        // // } else {
        // //     return <button onClick={() => this.handleFollow()} id='signup-button'>Follow</button>
        // // }
        // if (follows.some(x => x.follower_id === currentUser.id)) {
        //     // const followId = follows.filter(e => e.followee_id === userId || e.follower_id === currentUser.id)[0]["id"]
        //     const followId = follows.filter(e => e.follower_id === currentUser.id)[0]["id"]
        //     return <button onClick={() => this.handleUnFollow(followId)} id='signup-button'>Following</button> 
        // } else {
        //     return <button onClick={() => this.handleFollow()}  id='signup-button'>Follow</button>
        // }
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
        // debugger
        const { user, currentUser, userId, boards, saves, openModal } = this.props
        if (!user) return null; 

        // let followerCount, followingCount
        // if (!user.followers || !user) {
        //     followerCount = 0
        // } else {
        //     followerCount = user.followers.length
        // }
        // if (!user.following || !user) {
        //     followingCount = 0
        // } else {
        //     followingCount = user.following.length
        // }
// debugger
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
                        {/* <div className="profile-following"> */}
                            {this.renderFollows()}
                            {/* <span className="profile-followers" onClick={() => openModal('followerModal')}>
                                {followerCount} followers -
                            </span>
                            <span className="profile-following" onClick={() => openModal('followingModal')}>
                                - {followingCount} following
                            </span> */}
                        {/* </div> */}
                            { user === currentUser ? 
                            <Link to={`/settings`}><button id='signup-button'>Edit Profile</button></Link> : 
                            <div>{this.renderFollowButton()}</div> }
                    </div>
                </section>
                <section className="profile-content">
                    <BoardIndex currentUser={currentUser} user={user} userId={userId} boards={boards} saves={saves} openModal={openModal}/>
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
import { fetchSaves, createSave, deleteSave } from '../../actions/save_actions';
import { createBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';


const mapStateToProps = ({ session, entities: { users, boards, follows, saves } }, {match}) => ({
    currentUser: users[session.id],
    user: users[match.params.userId],
    userId: parseInt(match.params.userId),
    boards: Object.values(boards),
    follows: Object.values(follows),
    saves: Object.values(saves),
    users
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    fetchFollows: (userId) => dispatch(fetchFollows(userId)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
    fetchSaves: (userId) => dispatch(fetchSaves(userId)),
    createSave: (save) => dispatch(createSave(save)),
    deleteSave: (saveId) => dispatch(deleteSave(saveId)),
    openModal: (modal) => dispatch(openModal(modal)),
    createBoard: board => dispatch(createBoard(board)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileShow));