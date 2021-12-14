import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { resetUserErrors } from '../../actions/user_actions';
import SessionForm from './SessionForm';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: 'signup',
    navLinkText: 'Signup Instead'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    resetUserErrors: () => dispatch(resetUserErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
