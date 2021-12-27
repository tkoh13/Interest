import React from 'react';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import { FaChevronDown } from 'react-icons/fa'
import { BsPlusLg } from 'react-icons/bs';

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
        case 'boardSave':
            component = 
            <div className={`dropdown-button ${type}`} onClick={toggleDropDown}>
                <FaChevronDown size={13} />
                {/* {props.boards[0].title} <FaChevronDown size={13} /> */}
                {showDropDown ? <DropDownMenu type={type} actions={actions} boards={props.boards} pin={props.pin} setShowDropDown={setShowDropDown} /> : null}
            </div>
            break;
        case 'profileCreate':
            component = 
            <div className={`dropdown-button ${type}`} onClick={toggleDropDown}>
                <BsPlusLg size={20} />
                {showDropDown ? <DropDownMenu type={type} actions={actions} setShowDropDown={setShowDropDown} /> : null}
            </div>
            break;
        case 'pinCreate':
            component = 
            <div className={`dropdown-button-${type}`} onClick={toggleDropDown}>
                <BsPlusLg size={20} />
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
