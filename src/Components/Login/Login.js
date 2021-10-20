
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div className="container my-5">
            <div className="row justify-content-center g-4">
                <div className="col-12 col-md-4">
                    <h2>Please Login</h2>
                    <form className="login-form px-2 py-4">
                        <input className="my-2 p-2 form-control" type="email" placeholder="Your Email" />
                        <input className="my-2 p-2 form-control" type="password" placeholder="Password" />
                        <input className="submit my-2 p-2 btn btn-primary" type="submit" value="Submit" />
                    </form>
                    <p> Are you new User? <Link to="/register">Create Account</Link></p>
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

export default Login;