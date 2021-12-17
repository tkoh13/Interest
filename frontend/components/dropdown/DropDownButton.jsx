import React from 'react';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import { FaChevronDown } from 'react-icons/fa'

const DropDownButton = (props) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const toggleDropDown = () => setShowDropDown(!showDropDown);
    const { type, actions } = props
    let component;
    switch (type) {
        case 'nav':
            component = 
            <div className={`dropdown-button ${type}`} onClick={toggleDropDown}>
                <FaChevronDown size={13} />
                {showDropDown ? <DropDownMenu type={type} actions={actions} setShowDropDown={setShowDropDown} /> : null}
            </div>
            break;
        case 'board':
            component = 
            <div className={`dropdown-button ${type}`} onClick={toggleDropDown}>
                Save to board <FaChevronDown size={13} />
                {showDropDown ? <DropDownMenu type={type} actions={actions} setShowDropDown={setShowDropDown} /> : null}
            </div>
            break;
        default:
            break;
    }
    return (
        <div>
            {component}
        </div>
    )
};

export default DropDownButton
