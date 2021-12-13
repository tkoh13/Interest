import React from 'react';
import BoardPreview from './BoardPreview';

const BoardIndex = (props) => {
    const { currentUser, user, userId, boards } = props

    return (
        <div className='board-index-container'>
            board-index-container!
            {boards.map((board) => (
                <BoardPreview board={board} key={board.id}/>
            ))}
        </div>
    )

}

export default BoardIndex;

// import { connect } from 'react-redux';
// import { fetchBoards } from '../../actions/board_actions';

// const mapStateToProps = (state, ownProps) => ({
//     currentUser: state.entities.users[state.session.id],
//     user: state.entities.users[ownProps.match.params.userId],
//     userId: ownProps.match.params.userId,
//     ownProps,
//     state
// });

// const mapDispatchToProps = (dispatch) => ({
//     fetchBoards: () => dispatch(fetchBoards())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex)