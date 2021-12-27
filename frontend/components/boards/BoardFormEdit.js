import { connect } from 'react-redux';
import { fetchBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import BoardForm from './BoardForm';

const mapStateToProps = ({ session, errors, entities: { users, boards } }, ownProps) => {
    // debugger
    return ({
        board: boards[parseInt(location.hash.slice(9))],
        currentUser: users[session.id],
        error: errors.boards,
        formType: 'Edit',
        boardId: parseInt(location.hash.slice(9)),
        ownProps
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    submitBoard: board => dispatch(updateBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);