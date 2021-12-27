import React from 'react'
import './App.css'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyDYCoKB-glPUXsPM6xE0aFSKa6Ke86tbFA",
    authDomain: "fireside-dba18.firebaseapp.com",
    projectId: "fireside-dba18",
    storageBucket: "fireside-dba18.appspot.com",
    messagingSenderId: "738848989655",
    appId: "1:738848989655:web:884224d3195caa022e6b92"
})

const auth = firebase.auth()
const firestore = firebase.firestore()


function App() {
  return (
    <div>
    </div>
  );
}

export default App;
