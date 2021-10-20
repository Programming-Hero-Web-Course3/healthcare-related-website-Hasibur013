
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <div className="login-form">
                <div>
                    <h2>Please Login</h2>
                    <form onSubmit="">
                        <input type="email" placeholder="Your Email" />
                        <input type="password" placeholder="Password" />
                        <input type="submit" value="Submit" className="submit"/>
                    </form>
                    <p> Are you new User? <Link to="/register">Create Account</Link></p>
                    <div>
                        --------------Or---------------
                    </div>
                    <br />
                    <button onClick={signInWithGoogle} className="btn"> Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;