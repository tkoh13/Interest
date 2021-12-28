import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PinDisplay from '../pins/PinDisplay'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { CgLock } from 'react-icons/cg'

class BoardShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: this.props.board,
            user: null,
            pinContent: null
        }
    }

    componentDidMount() {
        const { fetchBoard, fetchUser, fetchSaves, board, currentUser, match: { params} } = this.props
        fetchBoard(params.boardId)
            .then(() => this.setState({ board: this.props.board }))
        fetchSaves(currentUser.id);
            // .then(() => fetchUser(board.creator_id)) // can't do that since board isn't there yet
    }

    componentDidUpdate(prevProps) {
        const { fetchUser, board, users } = this.props
        if (prevProps.board !== board && board) {
            this.setState({ board: board })
            this.buildPinsDisplay();
            // debugger
            // fetchUser(board.creator_id)
            //     .then(() => this.setState({ user: users[board.creator_id]}))
            //     .then(() => this.setState({ board: board}))
            //     .then(() => console.log("updating state"))
                // console.log(this.props)
        }
        if (!this.state.user && this.state.board) {
            // console.log(board.creator_id)
            // this.setState({ user: users[board.creator_id] })
                // .then(() => console.log("updating state"))
            // debugger
            fetchUser(board.creator_id)
                .then(() => this.setState({ user: users[board.creator_id] }))
        }
    }

    buildPinsDisplay() {
        const shuffle = (array) => {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
            return array;
        }
        const { board, boards, saves } = this.props;
        if (!board) return null
        if (!board.pins.length) return null;
        const size = ["small", "medium", "large"]
        const pinsToDisplay = shuffle(board.pins).map((content) => {
            return (
                <PinDisplay content={content} key={content.id} size={size[Math.floor(Math.random() * size.length)] } boards={boards} saves={saves} />
            )
        })
        this.setState({
            pinContent: pinsToDisplay
        })
    }

    renderPins() {
        if (!this.state.pinContent) return null
        return (
            <div className="pin-display-container">
                {this.state.pinContent}
            </div>
        )
    }

    render() {
        const { board, user } = this.state;
        const { openModal } = this.props;
        if (!board || !user ) return null
        return(
            <div className='profile-container'>
                <header className='ph-main'>
                    <h1 className='profile-username'>{board.title} 
                        <span className='bs-edit-icon-container' onClick={() => openModal('editBoard')}>
                            <MdOutlineModeEditOutline className='bs-edit-icon' size={20} />
                        </span>
                            </h1>
                    <Link to={`/users/${board.creator_id}`} className="bs-profile-pic-container">
                        {user.photoUrl ? <img src={user.photoUrl} /> : <img src={window.userIcon} />}
                    </Link>
                    {board.description ? <div className='bs-description'>{board.description}</div> : <div></div>}
                    {board.private ? <div className='bs-secret'><CgLock /> Secret board</div> : <div></div>}
                </header>
                <section>
                    <div className='bs-count'>{board.pins.length === 1 ? `1 Pin` : `${board.pins.length} Pins`}</div>
                    {board.pins.length === 0 ? <div className='bs-none'>There aren't any Pins on this board yet</div> : <div>{this.renderPins()}</div>}
                </section>
            </div>
        )
    }
}

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchBoard } from '../../actions/board_actions'
import { fetchUser } from '../../actions/user_actions'
import { openModal } from '../../actions/modal_actions'
import { fetchSaves, createSave, deleteSave } from "../../actions/save_actions";

const mapStateToProps = ({ session, entities: { boards, users }}, { match }) => {
    return ({
        board: boards[match.params.boardId],
        currentUser: users[session.id],
        users,
        // user: users[boards[match.params.boardId].creator_id],
        // userId: session.id
    })
};

const mapDispatchToProps = (dispatch) => ({
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchSaves: (userId) => dispatch(fetchSaves(userId)),
  createSave: (save) => dispatch(createSave(save)),
  deleteSave: (saveId) => dispatch(deleteSave(saveId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow))