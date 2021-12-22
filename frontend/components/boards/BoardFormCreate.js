import { connect } from 'react-redux';
import { createBoard, deleteBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import BoardForm from './BoardForm';

const mapStateToProps = ({ session, errors, entities: { users, boards}}) => ({
    board: {
        title: "",
        description: "",
        creator_id: session.id
    },
    currentUser: users[session.id],
    error: errors.boards,
    formType: 'Create'
});

const mapDispatchToProps = (dispatch) => ({
    submitBoard: board => dispatch(createBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);
