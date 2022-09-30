import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import Header from '../Shared/Header';
import './Login.css'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../hook/useToken';

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
        const email = e.target.email.value
        const pass = e.target.password.value
        signInWithEmailAndPassword(email, pass)
    }
    const registerFormSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.password.value
        createUserWithEmailAndPassword(email, pass)
    }
    
    const [token] = useToken(user || sUser || rUser)
    useEffect(() => {
        if (sUser || rUser || user) {
            navigate('/')
        }
    }, [sUser, rUser, user, token])
    
    if(sLoading || loading || rLoading){
        return <Loading></Loading>
    }
    return (
        <section className='login'>
            <Header location={location}></Header>
            <div className='login-div'>
                <form onSubmit={loginFormSubmit}>
                    <h2>Login</h2>
                    <input name='email' type='email' placeholder='example@gmail.com'></input>
                    <input name='password' type='password' placeholder='******'></input>
                    <input type='submit' value='Login'></input>
                </form>
                <form onSubmit={registerFormSubmit}>
                    <h2>Register</h2>
                    <input name='email' type='email' placeholder='example@gmail.com'></input>
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