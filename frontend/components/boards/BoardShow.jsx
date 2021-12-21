import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { CgLock } from 'react-icons/cg'

class BoardShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: this.props.board,
            user: null
        }
    }

    componentDidMount() {
        const { fetchBoard, match: { params} } = this.props
        fetchBoard(params.boardId)
            .then(() => this.setState({ board: this.props.board }))
        // console.log(this.state)
    }

    componentDidUpdate(prevProps) {
        const { fetchUser, board, users } = this.props
        if (prevProps.board !== board) {
            // debugger
            fetchUser(board.creator_id)
                .then(() => this.setState({ user: users[board.creator_id] }))
                .then(() => console.log(this.state))
                console.log(this.state)
        }
    }

    render() {
        const { board, user } = this.state;

        if (!board || !user ) return null
        return(
            <div>
                <header>
                    <h1>{board.title} <MdOutlineModeEditOutline /></h1>
                    <div className="profile-pic-container">
                        {user.photoUrl ? <img src={user.photoUrl} /> : <img src={window.userIcon} />}
                    </div>
                    {board.private ? <div></div> : <div><CgLock /> Secret board</div>}
                </header>
                <section>
                    <div>{board.pins.length === 1 ? `1 Pin` : `${board.pins.length} Pins`}</div>
                    <div>{board.pins.length === 0 ? "There aren't any Pins on this board yet" : `${board.pins.length} Pins`}</div>
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


const mapStateToProps = ({ session, entities: { boards, users }}, { match }) => {
    return ({
        board: boards[match.params.boardId],
        currentUser: users[session.id],
        users,
        // user: users[boards[match.params.boardId].creator_id],
        // userId: session.id
    })
};

const mapDispatchToProps = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow))