import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.init';

const GoogleLogin = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    return (
        <div className=''>
            <button onClick={googleLogin} className='btn w-60'>
                <div className='flex item-center gap-2'>
                    <p>Login with google</p>
                </div>
            </button>
        </div>
    );
};

export default GoogleLogin;