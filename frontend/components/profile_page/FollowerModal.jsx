import React from 'react';
// import React, { Component } from 'react'

// class FollowerModal extends Component {
    // constructor(props) {
    //     super(props);
    // }
const FollowerModal = (props) => {
    // render() {
        // let user, username
        // if (!user) {
        //     user = null
        //     username = null
        // } else{
        //     user = this.props.user
        //     username = user.username
        // }
        console.log(props.user)
        const { user } = props
        const userList = user.followers.map(user => {
            return(
                <div>
                    {user.photoUrl ?
                        <img src={user.photoUrl} style={{ width: "30px", height: "30px", borderRadius: "100%", objectFit: "cover" }} /> :
                        <img src={window.userIcon} style={{ width: "30px", height: "30px", borderRadius: "100%", objectFit: "cover" }} />}
                </div>
            )
        })
        return (
            <div>
                {user.followers.length} Followers
                {userList}
            </div>
        )
    }
// export default FollowerModal
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
// const mapStateToProps = ({ session, entities: { users, boards, follows } }, ownProps) => ({
//     currentUser: users[session.id],
//     users,
//     // user: users[match.params.userId],
//     // userId: match.params.userId,
//     boards: Object.values(boards),
//     follows: Object.values(follows),
// })

const mapDispatchToProps = (dispatch) => ({
//     fetchUser: (userId) => dispatch(fetchUser(userId)),
//     fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    fetchFollows: (userId) => dispatch(fetchFollows(userId)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(FollowerModal);
// export default connect(mapStateToProps, mapDispatchToProps)(FollowerModal);