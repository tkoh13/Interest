import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { closeOnEscape, closeOnOutsideClick } from '../../utils/close_util';
import { BsPlusLg } from "react-icons/bs";
// import { createSave } from "../../actions/save_actions";

const DropDownMenu = (props) => {
    const { actions, setShowDropDown, type } = props
    const { currentUser, logout, openModal, createSave } = actions
    // actions.logout(), actions.openModal(modal), actions.currentUser
    const popupRef = useRef();

    closeOnOutsideClick(popupRef, setShowDropDown);
    closeOnEscape(setShowDropDown);

    let values = [];
    let component

    switch (type) {
        case 'nav':          
            // console.log(Object.values(actions)) 
            values = ['Settings', 'About', 'Log out'];
            component =
            <div className="dropdown-menu" ref={popupRef} >
                <Link className="dropdown-item" to={`/settings`}>Settings</Link>
                <div className="dropdown-item" >About</div>
                <div className="dropdown-item" onClick={logout}>Log out</div>
            </div>
            // values = Object.keys(actions);
            break;
        case 'boardSave':
            component = 
            <div className="dropdown-menu" ref={popupRef} >
                {props.boards.map(board => (
                    <div key={board.id}>
                        <div className="dropdown-item" key={board.id}>{board.title}</div>
                        <button id='login-button' onClick={() => createSave({board_id: board.id, pin_id: props.pin.id})}>Save</button>
                    </div>
                ))}
                <div className="dropdown-item" onClick={() => openModal('createBoard')}>
                    <span>Create a board <BsPlusLg /></span> 
                </div>
            </div>
            break;
        case 'profileCreate':
            component =
            <div className="dropdown-menu" ref={popupRef} >
                <div className="dropdown-header">Create</div>
                <div className="dropdown-item" onClick={() => openModal('createPin')}>Pin</div>
                <div className="dropdown-item" onClick={() => openModal('createBoard')}>Board</div>
            </div>
            break;
        case 'pinCreate':
            component =
            <div className="dropdown-menu" ref={popupRef} >
                <div className="dropdown-header">Create</div>
                <div className="dropdown-item" onClick={() => openModal('createPin')}>Pin</div>
                {/* <div className="dropdown-item" onClick={() => openModal('createBoard')}>Board</div> */}
            </div>
            break;
        default: 
            return null;
    }

    return (
        <div>
            {component}
        </div>
        // <div className="dropdown-menu" ref={popupRef} >
        //     {values.map((val, i) => (
        //         <div className="dropdown-item" key={i}>{val}</div>
        //     ))}
        // </div>
    )
}

export default DropDownMenu;