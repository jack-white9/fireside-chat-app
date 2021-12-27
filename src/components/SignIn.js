import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
    }

    const signOut = () => {
        return firebase.auth().currentUser && (
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
        )
    }

    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

export default SignIn
