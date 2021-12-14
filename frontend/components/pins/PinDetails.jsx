import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PinDetails extends Component{
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const { fetchPin, pinId } = this.props;
        fetchPin(pinId)
        console.log(this.props.ownProps)
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
                        <div>follower_count</div>
                        <div>Follow Button</div>
                    </div>
                </div>
            {/* </div>
            </Link> */}
            </div>
        )
        }
    }
}

import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchPin } from '../../actions/pin_actions';

const mapStateToProps = ({ session, entities: { users, pins } }, ownProps) => ({
    currentUser: users[session.id],
    pinId: ownProps.match.params.pinId,
    pin: pins[ownProps.match.params.pinId],
    users,
    ownProps
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPin: (pinId) => dispatch(fetchPin(pinId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinDetails)