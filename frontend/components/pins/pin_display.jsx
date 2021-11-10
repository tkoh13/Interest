import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PinDisplay extends Component {
    constructor(props) {
        super(props)
    

    }
    
    render() {
        const { id, creator_id, title, photoUrl, created_at } = this.props.content;

        return (
            <Link to={`/pins/${id}`}>
                {/* key date conversion? */}
                <div className="pin-display"> 
                    <img className="pin-display-image" src={photoUrl} alt={title}/>
                </div>
            </Link>
        )
    }
}

export default PinDisplay;