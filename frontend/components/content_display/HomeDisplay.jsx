import React, { Component } from 'react';
import PinDisplay from '../pins/PinDisplay';

class ContentDisplay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pinContent: null,
        }
    }

    componentDidMount() {
        const { fetchPins, fetchBoards, fetchSaves, currentUser } = this.props
        fetchPins()
        fetchBoards(currentUser.id)
        fetchSaves(currentUser.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pins.length !== this.props.pins.length) {
            this.buildPinsDisplay();
        }
    }

    buildPinsDisplay() {
        const shuffle = (array) => {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
            return array;
        }

        if (!this.props.pins.length) return null;
        const { pins, boards, saves } = this.props;
        const size = ["small", "medium", "large"]
        const pinsToDisplay = shuffle(pins).map((content) => {
            return (
                <PinDisplay content={content} key={content.id} size={size[Math.floor(Math.random() * size.length)]} boards={boards} saves={saves}/>
            )
        })
        this.setState({
            pinContent: pinsToDisplay
        })
    }

    renderPins() {
        if (!this.state.pinContent) return null
        return (
            <div className="pin-display-container">
                    {this.state.pinContent}
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

import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards } from "../../actions/board_actions";
import { fetchSaves, createSave, deleteSave } from "../../actions/save_actions";

const mapStateToProps = (state) => ({
    pins: Object.values(state.entities.pins),
    boards: Object.values(state.entities.boards),
    saves: Object.values(state.entities.saves),
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    fetchSaves: (userId) => dispatch(fetchSaves(userId)),
    createSave: (save) => dispatch(createSave(save)),
    deleteSave: (saveId) => dispatch(deleteSave(saveId)),
    // openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentDisplay);
