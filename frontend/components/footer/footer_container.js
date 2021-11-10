import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Footer from './footer';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    // closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);