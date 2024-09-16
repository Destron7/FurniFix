import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gimg from './images/google.png'
import fimg from './images/Facebook_Logo_(2019).png.webp';
import github from './images/github.png';
import eye from './images/eye-white.svg';
import eye_crossed from './images/eye-white-crossed.svg';
import './LoginSignup.css';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const passwordInputRef = useRef(null);
    const eyeButtonRef = useRef(null);

    const handleClickGoogle = () => {
        window.location.href = 'https://www.google.com';
    };
    const handleClickGit = () => {
        window.location.href = 'https://github.com/Destron7/FurniFix';
    };
    const handleClickFacebook = () => {
        window.location.href = 'https://www.facebook.com/';
    };


    const revealPassword = () => {
        const passwordInput = passwordInputRef.current;
        const eyeButton = eyeButtonRef.current;

        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        eyeButton.src = passwordInput.type !== 'password' ? eye_crossed : eye;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="custom-form-page">
        <section className="main-form">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Login Form</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <div id="password-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="passwordInp" value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordInputRef} />
                    <button type="button" id="eye-button" onClickCapture={revealPassword} ref={eyeButtonRef}>
                        <img src={eye} alt="" id="eye-img"/>
                    </button>
                </div>

                <button type="submit">Log In</button>

                <label id="noAcct">Don&apos;t have a account? <Link to="/signup">Create Account</Link></label>

                <div className="logos">
                    <Link onClick={() => handleClickFacebook()}><img src={fimg} alt="facebook" className='img1' /></Link>
                    <Link onClick={() => handleClickGoogle()}><img src={gimg} alt="google" className='img1'></img></Link>
                    <Link className="githubl" onClick={() => handleClickGit()}><img src={github} alt="github" className='img1'/></Link>
                </div>
            </form>
        </section>
        </div>
    );
}
