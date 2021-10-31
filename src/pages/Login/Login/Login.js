import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { signInUsingGoogle, error, registerWithEmailPassword, loginWithEmailPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    // console.log(location.state?.from);

    // const { error, registerWithEmailPassword, loginWithEmailPassword } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passError, setPassError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setPassError('password must be 6 characters');
            return;
        }
        else {
            setPassError('');
        }
        isLogin ? registerWithEmailPassword(name, email, password) : loginWithEmailPassword(email, password);
    }
    const toggoleLogin = e => {
        setIsLogin(e.target.checked);
    }

    return (
        <div className="login-form my-5 pt-5 container">
            <center>
                <div className="border border-3 border-info p-3 pb-5 w-25">
                    <h2 className="fw-bold">Please {!isLogin ? 'Login' : 'Register'}</h2>
                    <form onSubmit={handleRegistration}>
                        {isLogin && <div><input type="text" name="name" placeholder="Enter Your Name" onBlur={handleNameChange} required /><br /></div>}
                        <input className="mb-2" type="email" name="email" placeholder="Enter Your Email" onBlur={handleEmailChange} required /><br />
                        <input type="password" name="password" placeholder="Enter Your Password" onBlur={handlePasswordChange} required /><br />
                        <p className="text-danger">{passError}{error}</p><br />

                        <button type="submit" >{!isLogin ? 'Login' : 'Register'}</button><br />
                    </form>
                    <p className="text-success">Create a new account <input type="checkbox" onChange={toggoleLogin} /></p>
                    {/* <div>-------or--------</div> */}
                    <hr className="w-50" />
                    <button onClick={handleGoogleLogin}>Google Sign In</button>
                </div>
            </center>

        </div>
    );
};

export default Login;