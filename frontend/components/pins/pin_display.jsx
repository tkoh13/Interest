import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PinDisplay extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, creator_id, title, photoUrl } = this.props.content;

        return (
            // <Link to={`/pins/${id}`}>
                <div className={`pd pin-${this.props.size}`}> 
                    <div className="pd-action-container">
                        <div className="pd-action-head">
                            <div className="save-pin">Save</div>
                        </div>

                        <div className="pd-action-footer">
                            <div className="destination">
                                <div className="pd-icon-container">
                                    <img src={window.arrowUpRight} alt="destination" className="pd-icon"/>
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
                    <div className="pd-image">
                        <img src={photoUrl} alt={title} />
                    </div>
                </div>
            // {/* </Link> */}
        )
    }
}

export default PinDisplay;