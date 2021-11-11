import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import { closeModal } from '../../actions/modal_actions';
import PinForm from './pin_form';

const mapStateToProps = (state) => ({
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
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinForm);