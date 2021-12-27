import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const SignIn = () => {
    const handleClick = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
    }

    return (
        <button onClick={handleClick} className="main__login--button">Sign in with Google</button>
    )
}

export default SignIn
