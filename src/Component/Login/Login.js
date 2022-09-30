import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Shared/Header';
import './Login.css'

const Login = () => {
    const location = useLocation()
    return (
        <section className='login'>
            <Header location={location}></Header>
            <div className='login-div'>
                <form>
                    <h2>Login</h2>
                    <input type='email' placeholder='example@gmail.com'></input>
                    <input type='password' placeholder='******'></input>
                    <input type='submit' value='Login'></input>
                </form>
                <form>
                    <h2>Register</h2>
                    <input type='email' placeholder='example@gmail.com'></input>
                    <input type='password' placeholder='******'></input>
                    <input type='submit' value='Register'></input>
                </form>
                <div>
                    <h2>Social Login</h2>
                    <button>Facebook Login</button>
                    <button>Google Login</button>
                </div>
            </div>
        </section>
    );
};

export default Login;