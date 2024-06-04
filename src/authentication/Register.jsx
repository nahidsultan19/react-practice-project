import { createUserWithEmailAndPassword } from "firebase/auth";
import GoogleLogin from "../Shared/GoogleLogin";
import app from "../firebase/firebase.init";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [registerError, setRegisterError]=useState('');
    const [success, setSuccess]=useState('');
    const auth = getAuth(app)

    const handleRegister =(event)=>{
        event.preventDefault();
        const form= event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const data = {name, email, password}

        setRegisterError('');
        setSuccess('');

        if(password.length <6){
            setRegisterError('Passoword should be at least 6 characters or longer');
            return;
        }
       
       

        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user);
            setSuccess('User created successfully')
            
        })
        .catch(error=>{
            console.error(error);
            setRegisterError(error.message);
        })

    }

    return (
        <div className="min-h-screen">
            <div className="mx-auto mt-10 mb-12  card w-96 bg-base-100 shadow-xl">
            <h2 className='pt-2 mx-auto'>Login your account</h2>
                <div className="card-body items-center text-center">
                    <form onSubmit={handleRegister}>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" name='name'  className="grow" placeholder="Name" />
                        </label> 
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="email" name='email'  className="grow" placeholder="Email" />
                        </label> 
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                            <input type="password" name="password" className="grow" placeholder='Password' />
                        </label>
                        <p className='w-full max-w-sm'>Already have an Account?<Link to='/login' className='btn btn-link'>Login</Link></p>
                        {
                        registerError && <p className="text-red-500 mt-2 pb-2">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-500 pb-2">{success}</p>
                        }
                            <button className="btn btn-primary w-60 mb-3">Register</button>
                    </form>
                    <GoogleLogin/>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;