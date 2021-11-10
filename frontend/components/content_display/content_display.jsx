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
// let height = Math.floor(document.documentElement.clientHeight * .75);
// let width = Math.floor(document.documentElement.clientWidth * .9);

    componentDidMount() {
        const { fetchPins } = this.props;

        fetchPins()
    }

    renderPins() {
        const { pins } = this.props;

        const pinsToDisplay = pins.map((content) => {
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
            <div className="pin-display-container">
                <div className="pin-display">
                    {pinContent}
                </div>

            </div>
        )
    }

    add_pin = pinDetails => {
        this.setState(_state => {
            const new_pins = [
                ..._state.pins
            ]

            new_pins.push(
                <Pin pinDetails={pinDetails} key={_state.pins.length} />
            )

            return {
                pins: new_pins,
                show_modal: false
            }
        });
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
