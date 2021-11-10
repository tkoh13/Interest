import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPin } from '../../actions/pin_actions';
import PinDisplay from './pin_display';

const mapStateToProps = (state) => ({
    userId: state.session.id,
})

const mapDispatchToProps = dispatch => ({
    fetchPin: pinId => dispatch(fetchPin(pinId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PinDisplay);
