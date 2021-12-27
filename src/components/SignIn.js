import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
    }



    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

export default SignIn
