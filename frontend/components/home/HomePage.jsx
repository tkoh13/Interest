import React, { Component } from 'react'
import HomeDisplay from '../content_display/HomeDisplay'
import { Route, Switch, Redirect } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props)
    // console.log(props.history)
        // this.state = {
             
        // }
    }
    
    render() {
        return (
            <div>
                {/* <Switch>
                    <Redirect to='/home' />
                </Switch> */}
                <HomeDisplay />
            </div>
        )
    }
}

import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPins } from '../../actions/pin_actions';

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

