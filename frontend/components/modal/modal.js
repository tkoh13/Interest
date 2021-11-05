import React from "react";
import ReactDOM from 'react-dom';
import { createPortal } from "react-dom";

const Modal = ({ open, children, onClose }) => {
    if (!open) return null; 
    return createPortal( // for CSS stacking context issue
        <>
            <div className="modal-overlay"/>
            <div className="modal">
                <button onClick={onClose} id="modal-close-button">&times;</button>
                {children}

            </div>
        </>,
        document.getElementById('portal')
    )

}

export default Modal;