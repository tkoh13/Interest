import React from 'react';
import { useRef } from 'react';
import { closeOnEscape, closeOnOutsideClick } from '../../utils/close_util';

const DropDownMenu = (props) => {
    const { actions, setShowDropDown, type } = props

    const popupRef = useRef();

    closeOnOutsideClick(popupRef, setShowDropDown);
    closeOnEscape(setShowDropDown);

    let values = [];
    let component

    switch (type) {
        case 'nav':          
            Object.values(actions)
            values = ['Settings', 'About', 'Log out'];
            // values = Object.keys(actions);
            break;
    }

    return (
        <div className="dropdown-menu" ref={popupRef} >
            {values.map((val, i) => (
                <div className="dropdown-item" key={i}>{val}</div>
            ))}
        </div>
    )
}

export default DropDownMenu