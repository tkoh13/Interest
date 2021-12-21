import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BoardShow extends Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {

    // }

    render() {
        const { board } = this.props;
        if (!board) return null
        return(
            <div>
                <h1>{board.title}</h1>
            </div>
        )
    }
}

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchBoard } from '../../actions/board_actions'
import { openModal } from '../../actions/modal_actions'


const mapStateToProps = ({ session, entities: { boards }}, { match }) => {
    return ({
        board: boards[match.params.boardId],
        userId: session.id
    })
};

const mapDispatchToProps = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    openModal: modal => dispatch(openModal(modal)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow))