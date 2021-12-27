import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const signOut = () => {
    return firebase.auth().currentUser && (
        <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
    )
}

export default signOut
