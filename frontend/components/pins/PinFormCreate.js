import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { createPin } from '../../actions/pin_actions';
import { closeModal } from '../../actions/modal_actions';
import PinForm from './PinForm';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    pin: {
        title: '',
        description: '',
    },
    userId: state.session.id,
    errors: state.errors.pins,
    formType: 'Create'
})

const mapDispatchToProps = dispatch => ({
    createPin: formData => dispatch(createPin(formData)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinForm);