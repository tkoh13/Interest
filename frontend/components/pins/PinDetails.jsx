import React, { Component } from 'react';

class PinDetails extends Component{
    // setState for user
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const { fetchPin, pinId } = this.props;
        fetchPin(pinId)
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { fetchUser, pin, users } = this.props;
        if (prevProps.pin !== pin) {
            fetchUser(pin.creator_id)
        }
        if (prevProps.users !== users) {
            this.setState({ user: users[pin.creator_id] })
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
                <div className='pin-details-container'>
                    <h1>{pin.title}</h1>
                    <h2>Published on {date.toDateString()}</h2>
                    <h2>{pin.description}</h2>
                    <img src={user.photoUrl} alt="user-photo" style={{ width: "30px", height: "30px", borderRadius: "100%", objectFit: "cover" }} />
                    <h3>{user.username}</h3> 
                    <div>follower_count</div>
                    <div>Follow Button</div>
                    <img src={pin.photoUrl} alt={pin.title} />
                </div>
            )
        }
    }
}

import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchPin } from '../../actions/pin_actions';

const mapStateToProps = ({ session, entities: { users, pins } }, { match }) => ({
    currentUser: users[session.id],
    pinId: match.params.pinId,
    pin: pins[match.params.pinId],
    users
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPin: (pinId) => dispatch(fetchPin(pinId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinDetails)