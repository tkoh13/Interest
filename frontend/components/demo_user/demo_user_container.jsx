import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import DemoUser from './demo_user';

const mapStateToProps = ({session}) => {
    return {
        currentUser: Boolean(session.id),
        demoUser: {
            email: 'demo@demo.com',
            password: 'demodemo',
            username: 'demo_user'
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (demoUser) => dispatch(login(demoUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoUser);
