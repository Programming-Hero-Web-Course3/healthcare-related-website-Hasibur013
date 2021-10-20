import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div className="container my-5">
            <div className="row justify-content-center g-4">
                <div className="col-12 col-md-4">
                    <h2>Register: Create New Account</h2>
                    <form className="login-form">
                        <input className="my-2 p-2 form-control" type="text" placeholder="Your Email" />
                        <input className="my-2 p-2 form-control" type="password" placeholder="Password" />
                        <input className="my-2 p-2 form-control" type="password" placeholder="re-enter password" />
                        <input className="submit my-2 p-2 btn btn-primary" type="submit" value="Submit" />
                    </form>
                    <br /><br />
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <div>
                        --------------Or---------------
                    </div>
                    <br />
                    <button onClick={signInWithGoogle} className="btn btn-primary"> Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;