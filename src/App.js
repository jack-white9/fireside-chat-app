// React/Styles
import React, { useState } from 'react'
import './App.css'

// Firebase
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Components
import ChatRoom from './components/ChatRoom'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import { useEffect } from 'react/cjs/react.development'

firebase.initializeApp({
    apiKey: "AIzaSyDYCoKB-glPUXsPM6xE0aFSKa6Ke86tbFA",
    authDomain: "fireside-dba18.firebaseapp.com",
    projectId: "fireside-dba18",
    storageBucket: "fireside-dba18.appspot.com", 
    messagingSenderId: "738848989655",
    appId: "1:738848989655:web:884224d3195caa022e6b92"
})

function App() {
  const [user, setUser] = useState(() => firebase.auth().currentUser)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  return (
    <div>
      <header>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom user={user} /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
