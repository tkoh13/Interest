import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { resetUserErrors } from '../../actions/user_actions';
import SessionForm from './SessionForm';

const mapStateToProps = ({ sessionErrors }) => {
  return {
    sessionErrors: sessionErrors,
    formType: 'signup',
    navLink: 'login',
    navLinkText: 'Login Instead'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    resetUserErrors: () => dispatch(resetUserErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
