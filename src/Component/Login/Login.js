import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import Header from '../Shared/Header';
import './Login.css'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
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

    const loginFormSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.password.value
        signInWithEmailAndPassword(email, pass)
    }
    const [token] = useToken(user || sUser )
    useEffect(() => {
        if (sUser || user) {
            navigate('/')
        }
    }, [sUser, user, token])

    if (sLoading || loading ) {
        return <Loading></Loading>
    }
    return (
        <section>
            <Header location={location}></Header>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login" onSubmit={loginFormSubmit}>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="email" name='email' class="login__input" placeholder="User name / Email" required />
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" name='password' class="login__input" placeholder="Password" required />
                            </div>
                            <Link to='/register'>Create an account</Link>
                            <br />
                            <Link to=''>Forgotten Password</Link>
                            <button class="button login__submit">
                                <span class="button__text">Log In Now</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div class="social-login">
                            <h3>log in via</h3>
                            <div class="social-icons">
                                <a onClick={() => signInWithGoogle()} href="#" class="social-login__icon fa-brands fa-google"></a>
                            </div>
                        </div>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;