/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input';
import "./style.scss"
import { sendFailureNotification, sendSuccessNotification } from '../../services/notifications';
import navigateToRoute from '../../utils/navigate-validator';
import { GreySphere, PinkSphere } from '../../components/icons';
import mixedbag from "../../resources/mixedbag.png"
import Password from '../../components/password';
import { loginUser } from '../../services/login';
import { setLocalStorageKey } from '../../utils/local-storage';

const MainSection = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await loginUser(email, password);
        if (result.resp_code === 200) {
            console.log(result);
            setLocalStorageKey('email', result.email);
            setLocalStorageKey('name', result.userName);
            setLocalStorageKey('token', result.accessToken);
            navigate('/')
            sendSuccessNotification("Logged In");
        }
    }

    return (
        <div className='login-main-section'>
            <div className="logo-login logo">
                <img src={mixedbag} alt="" />
            </div>
            <PinkSphere className="login-pink-sphere1" />
            <GreySphere className="login-grey-sphere1" />
            <PinkSphere className="login-pink-sphere2" />
            <GreySphere className="login-grey-sphere2" />
            <div className="login-form-container">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Password
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button className='login-btn' type="submit">Sign In</button>
                </form>
                <p>Don't have an account? <span onClick={() => navigate("/signup")}>Register here</span></p>
            </div>
        </div>
    );
}

export default MainSection