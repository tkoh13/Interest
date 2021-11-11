import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import ProfileShow from './profile_show';
// import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);