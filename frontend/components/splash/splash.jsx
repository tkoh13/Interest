// import React from 'react';
import React, { Component } from 'react';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // scrollPosition: 0
        }
    }

    componentDidMount() {
        this.props.fetchPins();
        // this.props.fetchPin(510);
        // window.addEventListener("scroll", this.handleScroll)
    }

    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.handleScroll);
    // }

    // handleScroll = (event) => {
    //     console.log(event)
    //     let scrollTop = event.srcElement.body.scrollTop
    //     let itemScroll = 100
    //     this.setState({scroll: scrollTop})
    // }
// const Splash = ({ loggedIn }) => {
    renderSplash = () => {
    // const renderSplash = () => {
        const { pins, openModal } = this.props;
        if (!pins || !pins.length) return null
        // if (pins.every(!pin)) return null
        // console.log(pins)
        return(
            <div className='splash-body' onScroll={() => openModal('login')}>
                <h1>Get your next</h1>
                <h2>travel idea</h2>
                {/* <div className='splash-content'> */}
                    <div className='splash-column1'>
                        <img src={pins[35].photoUrl} alt="" />
                        <img src={pins[36].photoUrl} alt="" />
                        <img src={pins[37].photoUrl} alt="" />
                        <img src={pins[38].photoUrl} alt="" />
                    </div>
                    <div className='splash-column2'>
                        <img src={pins[39].photoUrl} alt="" />
                        <img src={pins[40].photoUrl} alt="" />
                        <img src={pins[51].photoUrl} alt="" />
                        <img src={pins[35].photoUrl} alt="" />
                    </div>
                    <div className='splash-column3'>
                        <img src={pins[43].photoUrl} alt="" />
                        <img src={pins[44].photoUrl} alt="" />
                        <img src={pins[42].photoUrl} alt="" />
                        <img src={pins[50].photoUrl} alt="" />
                    </div>
                    <div className='splash-column4'>
                        <img src={pins[41].photoUrl} alt="" />
                        <img src={pins[38].photoUrl} alt="" />
                        <img src={pins[19].photoUrl} alt="" />
                        <img src={pins[20].photoUrl} alt="" />
                    </div>
                    <div className='splash-column5'>
                        <img src={pins[36].photoUrl} alt="" />
                        <img src={pins[35].photoUrl} alt="" />
                        <img src={pins[42].photoUrl} alt="" />
                        <img src={pins[45].photoUrl} alt="" />
                    </div>
                {/* </div> */}
                <div className='footer-gradient'></div>
            </div>
        )
    }

    render() {
        const { loggedIn } = this.props
        return (
            <div className='splash-container'>
                {loggedIn ? null : this.renderSplash()}
            </div>
        )
    }
}

import { connect } from 'react-redux';
import { fetchPins, fetchPin } from "../../actions/pin_actions";
import { fetchBoard } from "../../actions/board_actions"
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id),
    pins: Object.values(state.entities.pins)
});

const mapDispatchToProps = (dispatch) => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    openModal: (modal) => dispatch(openModal(modal)),
});

// export default connect(mapStateToProps)(Splash);
export default connect(mapStateToProps, mapDispatchToProps)(Splash);