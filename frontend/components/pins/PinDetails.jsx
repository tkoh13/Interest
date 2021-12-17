import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FollowButton from '../profile_page/FollowButton';

class PinDetails extends Component{
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const { fetchPin, fetchFollows, pinId, currentUser } = this.props;
        fetchPin(pinId)
        // fetchUser(currentUser.id)
        // fetchFollows(currentUser.id) 
        // console.log(this.props.ownProps)
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { fetchUser, fetchFollows, pin, users, follows } = this.props;
        if (prevProps.pin !== pin) {
            fetchFollows(pin.creator_id)
            fetchUser(pin.creator_id)
                // .then(() => this.setState({ user: users[pin.creator_id] }))
        }
        if (prevProps.users !== users) {
            this.setState({ user: users[pin.creator_id] })
        }
        if (prevProps.follows.length !== follows.length) {
            fetchUser(pin.creator_id);
        }
    }

    renderFollows() {
        const { user } = this.state;
        const { followers } = user;
        let followerCount = followers ? followers.length : '0'
        return (
            <div>
                {followerCount} followers
            </div>
        )
    }

    renderFollowButton() {
        const { fetchUser, currentUser } = this.props;
        const { user } = this.state;
        if (currentUser.following && user) {
            return <FollowButton user={user} />
        } else {
            fetchUser(currentUser.id)
                .then(() => this.renderFollowButton())
        }
    }

    render() {
        const { pin } = this.props;
        
        if(!pin || !this.state.user) {
            return null
        } else {
            const date = new Date(pin.created_at);
            const { user } = this.state;

        return(
            <div>
                <Link to='/'>
                    <div className='pin-details-overlay'></div>
                </Link>
                <div className='pin-details-container'>
                    <div className='pin-details-left'>
                            <img src={pin.photoUrl} alt={pin.title} 
                            className='pin-details-img'/>
                    </div>
                    <div className='pin-details-right'>
                        <h1>{pin.title}</h1>
                        <h2>Published on {date.toDateString()}</h2>
                        <h2>{pin.description}</h2>
                        <img src={user.photoUrl} alt="user-photo"
                        style={{ width: "30px", height: "30px", borderRadius: "100%", objectFit: "cover" }}/>
                        <h3>{user.username}</h3> 
                        <div>{this.renderFollows()}</div>
                        <div>{this.renderFollowButton()}</div>
                        {/* {!user ?
                        <div>no user</div> :
                        <FollowButton user={user} /> } */}
                        
                    </div>
                </div>
            </div>
        )
        }
    }
}

import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchPin } from '../../actions/pin_actions';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = ({ session, entities: { users, pins, boards, follows } }, ownProps) => ({
    currentUser: users[session.id],
    pinId: ownProps.match.params.pinId,
    pin: pins[ownProps.match.params.pinId],
    boards: Object.values(boards),
    follows: Object.values(follows),
    // following: Object.values(follows).map(follow => follow.following),
    // followers: Object.values(follows).map(follow => follow.follower),
    users,
    ownProps
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    fetchFollows: (userId) => dispatch(fetchFollows(userId)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinDetails)