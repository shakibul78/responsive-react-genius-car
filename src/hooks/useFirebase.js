import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init.js";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()

    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    const signInUsingFacebook = () => {
        setIsLoading(true)
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));

    }

    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    return {
        user,
        isLoading,
        signInUsingGoogle,
        signInUsingFacebook,
        logOut
    }
}
export default useFirebase;