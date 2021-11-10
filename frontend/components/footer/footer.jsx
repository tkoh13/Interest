import React from 'react'

const Footer = ({ currentUser, openModal }) => {
    const footer = currentUser ? (
        <div className="no-session-footer">

        </div>
    ) : (
        <div onClick = { () => openModal('createPin') } className = "create-pin">
            <img src = {window.plus} alt = "create-pin" className = "create-pin-icon" />
        </div >
    )

    return (
        <div className="footer-container">
            {footer}
        </div>
    )
}

export default Footer
