import React, { useState, useEffect } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import Message from './Message'

const ChatRoom = ({user = null, db = null}) => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    db = firebase.firestore()
    const { uid, displayName, photoURL } = user

    useEffect(() => {
        if (db) {
            const unsubscribe = db
                .collection('messages')
                .orderBy('createdAt')
                .limit(100)
                .onSnapshot(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                    setMessages(data)
                })
            return unsubscribe
        }
    }, [db])

    const handleOnChange = (event) => {
        setNewMessage(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        if (db) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL
            })
        }
    }

    return (
        <div>
            <ul className="chatroom__message--container">
                {messages.map(message => (
                    <li key={message.id}>
                        <Message {...message} />
                    </li>
                ))}
            </ul>
            
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={handleOnChange}
                    placeholder="Type message..."
                />
                <button type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChatRoom
