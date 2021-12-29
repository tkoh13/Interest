import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FollowButton from './FollowButton';

class FollowerModal extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchFollows, fetchUser, user, currentUser } = this.props;
        // debugger
        if (currentUser.id !== user.id) {
            fetchFollows(currentUser.id)
        }
    }

    renderUserList() {
        const { user, closeModal } = this.props
        const userList = Object.values(user.followers).map((user, idx) => {
            return (
                <li key={`${user.id}-${idx}`}>
                    <Link to={`/users/${user.id}`} onClick={() => closeModal()}>
                        {user.photoUrl ?
                            <img src={user.photoUrl} style={{ width: "50px", height: "50px", borderRadius: "100%", objectFit: "cover" }} /> :
                            <img src={window.userIcon} style={{ width: "50px", height: "50px", borderRadius: "100%", objectFit: "cover" }} />}
                        <span>@{user.username}</span>
                    </Link>
                    <FollowButton user={user} />
                </li>
            )
        })
        return userList

    }

    render() {
        return (
            <div>
                Followers
                <ul>{this.renderUserList()}</ul>
            </div>
        )
    }

}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users, boards, follows } }, { location }) => ({
    currentUser: users[session.id],
    user: users[parseInt(location.pathname.slice(7))],
    userId: parseInt(location.pathname.slice(7)),
    boards: Object.values(boards),
    follows: Object.values(follows),
})

const mapDispatchToProps = (dispatch) => ({
    fetchFollows: (userId) => dispatch(fetchFollows(userId)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowerModal));