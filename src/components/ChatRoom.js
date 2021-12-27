import React, { useState, useEffect, useRef } from 'react'
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

    useEffect(() => {
        dummy.current.scrollIntoView({ behaviour: 'smooth' })
    }, [messages])

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

    const dummy = useRef()

    return (
        <div className="chatroom__message--container">
            <ul>
                {messages.map(message => (
                    <li key={message.id}>
                        <Message {...message} />
                    </li>
                ))}
            </ul>

            <div ref={dummy}></div>
            
            <form onSubmit={handleOnSubmit} className="chatroom__form">
                <input
                    type="text"
                    value={newMessage}
                    onChange={handleOnChange}
                    placeholder="Type message..."
                    className="chatroom__text-input"
                />
            </form>
        </div>
    )
}

export default ChatRoom
