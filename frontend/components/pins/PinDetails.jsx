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
            user: null,
            selectedBoard: null,
        }
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        const { fetchPin, fetchBoards, fetchSaves, fetchFollows, pinId, currentUser, boards } = this.props;
        fetchPin(pinId)
        fetchBoards(currentUser.id) //.then(() => this.setState({board: boards[0].id}))
        fetchSaves(currentUser.id)
        // fetchUser(currentUser.id)
        // fetchFollows(currentUser.id) 
        // console.log(this.props.ownProps)
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { fetchUser, fetchFollows, pin, users, follows, boards, currentUser } = this.props;
        // debugger
        if (prevProps.pin !== pin) {
            fetchFollows(pin.creator_id)
            fetchUser(pin.creator_id)
                // .then(() => this.setState({ user: users[pin.creator_id] }))
        }
        if (prevProps.users !== users) {
            this.setState({ user: users[pin.creator_id], board: boards[0].id });
            // this.setState({ board: boards[0].id });
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
        const { saves, pin, boards, currentUser, openModal, createSave } = this.props;
        // debugger
        // const _boardTitle = boards.filter(board => board.id === _save.board_id)
        if (saves.filter(save => save.pin_id === pin.id).length) {
            return (
                <div className='save-actions' onClick={() => this.handleUnSave()} >
                    {`Remove from ${boards.filter((board) => board.id === saves.filter(save => save.pin_id === pin.id)[0].board_id)[0].title} board`}
                    <div className='icon-container'>
                        <BsTrash />
                    </div>
                </div>
            )
        } else if (boards.length){
            // debugger
            return (
                <div className='save-actions'>
                    {boards.filter(b => b.id === this.state.board)[0].title}
                    <DropDownButton type='boardSave' boards={boards} pin={pin} actions={{ boards, currentUser, openModal, createSave }} />
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

    renderDeletePin() {
        const { saves, pin, boards, currentUser, deletePin } = this.props;
        if (pin.creator_id === currentUser.id) {
            return <Link to={`/users/${currentUser.id}/pins`}><div onClick={() => deletePin(pin.id)}>Delete Pin</div></Link> 
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
            board_id: this.state.board,
            // board_id: boards[0].id,
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
                                {/* <FaEllipsisH></FaEllipsisH>
                                <FiShare></FiShare> */}
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
                        {this.renderDeletePin()}
                    </div>
                </div>
            </div>
        )
        }
    }
}

import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchPin, deletePin } from '../../actions/pin_actions';
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
    deletePin: (pinId) => dispatch(deletePin(pinId)),
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