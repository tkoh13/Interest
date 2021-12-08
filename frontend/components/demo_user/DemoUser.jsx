import React, { Component } from 'react'

class DemoUser extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.login(this.props.demoUser).then(() => this.props.closeModal());
    }
    
    render() {
        return (
            <button
                onClick={this.handleClick}
                className="demo-user-button">
                Try the Demo 
            </button>
        )
    }
}

import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session }) => {
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
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoUser);
