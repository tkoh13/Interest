import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PinDisplay extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, creator_id, title, photoUrl } = this.props.content;

        return (
            <div className={`pd pin-${this.props.size}`}>
                <Link to={`/pins/${id}`} className='pin-url'>
                <div className="pd-action-container">
                    <div className="pd-action-head">
                        <div className="save-pin">Save</div>
                    </div>

                    <div className="pd-action-footer">
                        <div className="destination">
                            <div className="pd-icon-container">
                                <img src={window.arrowUpRight} alt="destination" className="pd-icon" />
                                {/* <span></span> */}
                                {/* span for the destination link that was provided at creation */}
                            </div>
                            <div className="pd-icon-container">
                                <img src={window.share} alt="share" className="pd-icon" />
                            </div>
                            <div className="pd-icon-container">
                                <img src={window.ellipse} alt="more" className="pd-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
                <div className="pd-image">
                    <img src={photoUrl} alt={title} />
                </div>
            </div>
        )
    }
}

import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPin } from '../../actions/pin_actions';

const mapStateToProps = (state, ownProps) => ({
    userId: state.session.id,
})

const mapDispatchToProps = dispatch => ({
    fetchPin: pinId => dispatch(fetchPin(pinId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PinDisplay);
