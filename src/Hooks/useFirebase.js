import firebaseInitialize from "../components/Firebase/Firebase.init";
import {
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
    signOut
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

firebaseInitialize()

const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    //google sing in
    const singInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    };

    //Log out
    const LogOut = () => {
        signOut(auth)
            .then(() => { })
    }

    //Observe user state change
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribed;
    }, [auth])

    return {

        isLoading,
        setIsLoading,
        singInWithGoogle,
        setUser,
        LogOut,
        user
    }
}
export default useFirebase;