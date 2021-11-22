import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import Google from './Google.svg';

function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaeUSn6az3w_sR784pPCdxQGG7R198zd6Tw&usqp=CAU" alt="slack logo" />
                <h2>Sign in to Slack</h2>
                <p>app.slack.com</p>
                <Button onClick={signIn}>Sign In with Google <img className="google-icon" src={Google} alt="google icon"></img></Button>
            </div>
        </div>
    )
}

export default Login
