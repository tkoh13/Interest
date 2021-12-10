import React, { Component } from 'react';



class UpdatePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoFile: null,
            photoUrl: null,
            errors: null
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.photoFile) {
            return this.setState({ errors: 'No picture' })
        } else {
            const formData = new FormData();
            const { photoFile } = this.state;
            formData.append('user[photo]', photoFile)

            this.props.updateUser(formData)
            this.props.closeModal()
        }
    }
    
    render() {
        return (
            <div className="change-photo-container">
                <h1 className="cpc-h1">Change your picture</h1>
                <label id="change-photo-button" onSubmit={this.handleSubmit}>
                    <span>Choose Photo</span>
                    <input 
                        type="file" 
                        id="change-photo-input" 
                        style={{display:"none"}}
                        onChange={this.handleFile} />
                </label>
            </div>
        );
    }   
}

import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
    updateUser: (userId, user) => dispatch(updateUser(userId, user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePicture);