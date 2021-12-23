import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FollowButton from '../profile_page/FollowButton';
import DropDownButton from '../dropdown/DropDownButton';
import { FaEllipsisH } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { BsPlusLg } from 'react-icons/bs';

class PinDetails extends Component{
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
        // this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        const { fetchPin, fetchBoards, fetchSaves, fetchFollows, pinId, currentUser } = this.props;
        fetchPin(pinId)
        fetchBoards(currentUser.id)
        fetchSaves(currentUser.id)
        // fetchUser(currentUser.id)
        // fetchFollows(currentUser.id) 
        // console.log(this.props.ownProps)
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { fetchUser, fetchFollows, pin, users, follows } = this.props;
        // debugger
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
        const { fetchUser, currentUser, pin } = this.props;
        const { user } = this.state;
        if (currentUser.following && pin) {
        // if (currentUser.following && user) {
            return <FollowButton user={user} />
        } else {
            fetchUser(currentUser.id)
                .then(() => this.renderFollowButton())
                .then(() => console.log("renderFollowButton"))
        }
    }

    renderSaveActions() {
        const { saves, pin, boards, currentUser, openModal } = this.props;
        if (saves.filter(save => save.pin_id === pin.id).length) {
            return (
                <div className='save-actions'>
                    <div className='icon-container'>
                        <BsTrash onClick={() => this.handleUnSave()} />
                    </div>
                </div>
            )
        } else if (boards.length){
            return (
                <div className='save-actions'>
                    <DropDownButton type='boardSave' boards={boards} actions={{ boards, currentUser }} />
                    <button id='login-button' onClick={() => this.handleSave()}>Save</button>
                </div>
            )
        } else { 
            return (
                <div className='save-actions' onClick={() => openModal('createBoard')}>
                    Create a board
                    <div className='icon-container'>
                        <BsPlusLg />
                    </div>
                </div>
            )
        }
        
    }

    handleBack() {
        this.props.history.goBack()
    }

    handleSave() {
        const { createSave, pin, boards } = this.props; 
        // console.log(boards[0].id)
        // console.log(pin.id)
        const save = {
            board_id: boards[0].id,
            pin_id: pin.id
        }
        createSave(save);
    }

    handleUnSave() {
        const { deleteSave, saves, pin } = this.props; 
        const save = saves.filter(save => save.pin_id === pin.id)[0]
        deleteSave(save.id)
    }

    render() {
        const { pin, currentUser, boards, saves } = this.props;
        // debugger
        
        if(!pin || !this.state.user) {
            return null
        } else {
            const date = new Date(pin.created_at);
            const { user } = this.state;

        return(
            <div>
                {/* <Link to='/'> */}
                    <div className='pin-details-overlay' onClick={() => this.handleBack()}></div>
                {/* </Link> */}
                <div className='pin-details-container'>
                    <div className='pin-details-left'>
                            <img src={pin.photoUrl} alt={pin.title} 
                            className='pin-details-img'/>
                    </div>
                    <div className='pin-details-right'>
                        <div className='pin-details-actions'>
                            <div className='util-actions'>
                                <FaEllipsisH></FaEllipsisH>
                                <FiShare></FiShare>
                                <FaEllipsisH></FaEllipsisH>
                            </div>
                            {this.renderSaveActions()}
                            {/* <div className='save-actions'>
                                <DropDownButton type='boardSave' boards={boards} actions={{ boards, currentUser }} />

                                <button id='login-button' onClick={() => this.handleSave()}>Save</button>

                            </div> */}
                        </div>
                        <h1>{pin.title}</h1>
                        <h2>Published on {date.toDateString()}</h2>
                        <h2>{pin.description}</h2>
                        <Link to={`/users/${user.id}`}><img src={user.photoUrl} alt="user-photo"
                            style={{ width: "30px", height: "30px", borderRadius: "100%", objectFit: "cover" }} /></Link>
                        
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
import { fetchBoards } from '../../actions/board_actions';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';
import { fetchSaves, createSave, deleteSave } from '../../actions/save_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users, pins, boards, follows, saves } }, ownProps) => ({
    currentUser: users[session.id],
    pinId: ownProps.match.params.pinId,
    pin: pins[ownProps.match.params.pinId],
    boards: Object.values(boards),
    follows: Object.values(follows),
    saves: Object.values(saves),
    // following: Object.values(follows).map(follow => follow.following),
    // followers: Object.values(follows).map(follow => follow.follower),
    users,
    ownProps
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    fetchFollows: (userId) => dispatch(fetchFollows(userId)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
    fetchSaves: (userId) => dispatch(fetchSaves(userId)),
    createSave: (save) => dispatch(createSave(save)),
    deleteSave: (saveId) => dispatch(deleteSave(saveId)),
    openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PinDetails)