import React, { Component } from 'react'

class FollowButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: null
        }
        this.handleFollow = this.handleFollow.bind(this)
        this.handleUnFollow = this.handleUnFollow.bind(this)
    }

    componentDidMount() {
        const { user, currentUser } = this.props;
        const { following } = currentUser
        if (following.filter(u => u.id === user.id)[0]) {
            this.setState({ status: true })
        }
    }

    handleFollow() {
        const { createFollow, currentUser, user } = this.props;
        const follow = {
            follower_id: currentUser.id,
            followee_id: user.id,
        }
        createFollow(follow)
            .then(() => this.setState({ status: true }));
    }

    handleUnFollow() {
        this.setState({ status: false })
        const { deleteFollow, follows, user, currentUser } = this.props
        const followId = follows.filter(e => e.followee_id === user.id && e.follower_id === currentUser.id)[0]["id"]        
        deleteFollow(followId)
            .then(() => this.setState({ status: false }));
    }

    renderButton() {
        const { user, currentUser } = this.props
        const { status } = this.state
        if (user.id === currentUser.id) return null
        if (status) {
            return (
                <button className="unfollow-button" onClick={() => this.handleUnFollow()}>
                    Unfollow
                </button>
            );
        } else {
            return (
                <button className="follow-button" onClick={() => this.handleFollow()}>
                    Follow
                </button>
            );
        }
    }

    render() {
        return(
            <div className='follow-button'>
                {this.renderButton()}
            </div>
        )
    }
}

import { connect } from 'react-redux';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = ({ session, entities: { users, follows } }, ownProps) => {
    return {
        currentUser: users[session.id],
        user: ownProps.user,
        follows: Object.values(follows),
        // user: users[ownProps.user.id] || ownProps.user.id
    }
};

const mapDispatchToProps = dispatch => ({
    fetchFollows: (userId) => dispatch(fetchFollows(userId)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton)