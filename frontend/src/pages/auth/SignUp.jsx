import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css'; // Assuming you're using the same CSS file for both pages

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Implement logic for signup form submission here
        // You can access the form values using:
        const username = username;
        const email = email;
        const password1 = password1;
        const password2 = password2;

        // Perform validation or other actions as needed
        console.log('Signup submitted:', { username, email, password1, password2 });
    };

    return (
        <section className="main-form">
            <form onSubmit={handleSubmit}>
                <h3>Signup Form</h3>

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password1">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password1"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    required
                />

                <label htmlFor="password2">Confirm Password</label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    id="password2"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                />

                <button type="submit">Sign Up</button>

                <label id="noAcct">
                    Already have an account? <Link to="/login">Log In</Link>
                </label>
            </form>
        </section>
    );
};