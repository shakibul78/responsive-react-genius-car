import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Pages/'

initializeAuthentication();


const useFirebase = () => {
    const [users, setUsers] = useState({});

    const auth = getAuth()

    const singnInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            });
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {

            });
    }

    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user);
            }
            else {
                setUsers({})
            }
        });
        return () => unsubscribed;
    }, [])
    return {
        users,
        singnInUsingGoogle,
        logOut
    }
}
export default useFirebase;