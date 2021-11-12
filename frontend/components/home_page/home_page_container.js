import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPins } from '../../actions/pin_actions';
import HomePage from './home_page';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login()),
    signup: () => dispatch(signup()),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchPins: () => dispatch(fetchPins())
    // closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
