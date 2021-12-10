import React, { Component } from 'react';



class UpdatePicture extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <div className="change-photo-container">

                <h1 className="cpc-h1">Change your picture</h1>
                <label id="change-photo-button">
                    <span>Choose Photo</span>
                    <input 
                        type="file" 
                        id="change-photo-input" 
                        style={{display:"none"}}
                        onChange={this.handleFile} />
                </label>

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