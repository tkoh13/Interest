import React, { Component } from 'react';



class UpdatePicture extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <div className="sfc">

                <h1>Change your picture</h1>
                <button id="login-button">Choose photo</button>
                {/* need to make button fatter */}

            </div>
        );
    }   
}

import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
    state


})

const mapDispatchToProps = dispatch => ({
    updateUser: (userId, user) => dispatch(updateUser(userId, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePicture);