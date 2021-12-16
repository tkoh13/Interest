import React from 'react';
import { Link } from 'react-router-dom'
// import React, { Component } from 'react'

// class FollowingModal extends Component {
// constructor(props) {
//     super(props);
// }
const FollowingModal = (props) => {
    // render() {
    // let user, username
    // if (!user) {
    //     user = null
    //     username = null
    // } else{
    //     user = this.props.user
    //     username = user.username
    // }
    // console.log(props.user)
    const { user } = props

    const handleFollow = () => {
        const { createFollow, currentUser, user } = props;
        const follow = {
            follower_id: currentUser.id,
            followee_id: user.id,
        }
        createFollow(follow);
    }

    const handleUnFollow = (followId) => {
        props.deleteFollow(followId);
    }
    
    const renderFollowButton = (userId) => {
        const { follows, currentUser } = props
        // console.log(user.id)
        // console.log(currentUser.id)
        // return(
        //     <button>hi</button>
        // )
        if (follows.some(follow => follow.follower_id === currentUser.id)) {
            // debugger
            const followId = follows.filter(follow => follow.followee_id === userId && follow.follower_id === currentUser.id)[0]["id"]
            return <button onClick={() => handleUnFollow(followId)} id='signup-button'>UnFollow</button>
        } else {
            return <button onClick={() => handleFollow()} id='signup-button'>Follow</button>
        }
    }

    const userList = user.following.map(user => {
        return (
            <div key={user.id}>
                <Link to={`/users/${user.id}`} onClick={props.closeModal}>
                {user.photoUrl ?
                    <img src={user.photoUrl} style={{ width: "50px", height: "50px", borderRadius: "100%", objectFit: "cover" }} /> :
                    <img src={window.userIcon} style={{ width: "50px", height: "50px", borderRadius: "100%", objectFit: "cover" }} />}
                <div>{user.username}</div>
                </Link>
                <div>{renderFollowButton(user.id)}</div>
            </div>
        )
    })
    return (
        <div>
            {user.following.length} Following
            {userList}
        </div>
    )
}
// export default FollowingModal
// }

import { connect } from 'react-redux';
// import { fetchUser } from '../../actions/user_actions';
// import { fetchBoards } from '../../actions/board_actions';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';
import { closeModal } from '../../actions/modal_actions';

// const mapStateToProps = (state, ownProps) => {
//     console.log(state.entities.users[state.session.id])
//     return{
//         currentUser: state.entities.users[state.session.id],
//         userId: ownProps.match.params.userId
//     }
// }
const mapStateToProps = ({ session, entities: { users, boards, follows } }) => ({
    currentUser: users[session.id],
    users,
    // user: users[match.params.userId],
    // userId: match.params.userId,
    boards: Object.values(boards),
    follows: Object.values(follows),
})

const mapDispatchToProps = (dispatch) => ({
    //     fetchUser: (userId) => dispatch(fetchUser(userId)),
    //     fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    fetchFollows: (userId) => dispatch(fetchFollows(userId)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
    closeModal: () => dispatch(closeModal())
})

// export default connect(null, mapDispatchToProps)(FollowingModal);
export default connect(mapStateToProps, mapDispatchToProps)(FollowingModal);