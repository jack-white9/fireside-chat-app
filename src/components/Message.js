import React from 'react'
import { formatRelative } from 'date-fns'

const Message = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = ''
}) => {
    return (
        <div className="chatroom__message">
            {photoURL ? (
                <img 
                    src={photoURL} 
                    alt="Avatar"
                    className="chatroom__message--photo"
                />
            ) : null}
            
            <div className="chatroom__message--right">
                <div className="chatroom__message--name-time">
                    {displayName ? <p className="chatroom__message--name">{displayName}</p> : null}

                    {createdAt?.seconds ? (
                        <span className="chatroom__message--time">
                            {formatRelative(new Date(createdAt.seconds * 1000),  new Date())[0].toUpperCase()
                            + formatRelative(new Date(createdAt.seconds * 1000),  new Date()).slice(1)}
                        </span>
                    ) : null}
                </div>

                <p className="chatroom__message--text">{text}</p>
            </div>
        </div>
    )
}

export default Message
