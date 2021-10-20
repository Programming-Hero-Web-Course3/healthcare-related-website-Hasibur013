import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../../firebase/firebase.initialize';
initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result);
        })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        const unsubscribed= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else{
                setUser({});
            }
            return ()=> unsubscribed;
        });
    }, [auth])

    return {
        user,
        signInWithGoogle,
        logOut
    }

}

export default useFirebase;