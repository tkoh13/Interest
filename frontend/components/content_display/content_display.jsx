import React, { Component } from 'react';
import PinDisplayContainer from '../pins/pin_display_container';

class ContentDisplay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pinContent: null,
             boardContent: null,
        }
    }

    componentDidMount() {
        const { fetchPins } = this.props;

        fetchPins()
    }

    renderPins() {
        const { pins } = this.props;

        const pinsToDisplay = pins.map((content) =>{
            return (
                <PinDisplayContainer content={content}/>
                // key and location?
            )
        })

        this.setState({
            pinContent: pinsToDisplay
        })

        if (!pinContent) return null
        return (
            <div className="home-pin-index">
                {pinContent}
            </div>
        )
    }

    
    render() {
        return (
            <div className="content-display">
                {this.renderPins()}
            </div>
        )
    }
}

export default ContentDisplay;
