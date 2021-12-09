import React from 'react';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import { FaChevronDown } from 'react-icons/fa'

const DropDownButton = (props) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const toggleDropDown = () => setShowDropDown(!showDropDown);

    return (
        <div className={`dropdown-button ${props.type}`} onClick={toggleDropDown}>
            <FaChevronDown size={13} />
            {showDropDown ? <DropDownMenu type={props.type} actions={props.actions} setShowDropDown={setShowDropDown} /> : null}
        </div>
    )
};

export default DropDownButton
