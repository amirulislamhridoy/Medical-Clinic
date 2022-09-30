import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import Header from '../Shared/Header';
import './Login.css'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        sUser,
        sLoading,
        sError,
    ] = useSignInWithEmailAndPassword(auth);
    const [
        createUserWithEmailAndPassword,
        rUser,
        rLoading,
        rError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const loginFormSubmit = (e) => {
        e.preventDefault()
        const mail = e.target.mail.value
        const pass = e.target.password.value
        signInWithEmailAndPassword(mail, pass)
    }
    const registerFormSubmit = (e) => {
        e.preventDefault()
        const mail = e.target.mail.value
        const pass = e.target.password.value
        createUserWithEmailAndPassword(mail, pass)
    }

    useEffect(() => {
        if (sUser || rUser || user) {
            navigate('/')
        }
    }, [sUser, rUser, user])
    if(sLoading || loading || rLoading){
        return <Loading></Loading>
    }
    return (
        <section className='login'>
            <Header location={location}></Header>
            <div className='login-div'>
                <form onSubmit={loginFormSubmit}>
                    <h2>Login</h2>
                    <input name='mail' type='email' placeholder='example@gmail.com'></input>
                    <input name='password' type='password' placeholder='******'></input>
                    <input type='submit' value='Login'></input>
                </form>
                <form onSubmit={registerFormSubmit}>
                    <h2>Register</h2>
                    <input name='mail' type='email' placeholder='example@gmail.com'></input>
                    <input name='password' type='password' placeholder='******'></input>
                    <input type='submit' value='Register'></input>
                </form>
                <div>
                    <h2>Social Login</h2>
                    {/* <button>Facebook Login</button> */}
                    <button onClick={() => signInWithGoogle()}>Google Login</button>
                </div>
            </div>
        </section>
    );
};

export default Login;