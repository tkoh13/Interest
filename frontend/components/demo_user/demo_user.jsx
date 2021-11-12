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

export default DemoUser
