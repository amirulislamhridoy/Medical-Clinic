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
    const [token] = useToken(user || sUser)
    useEffect(() => {
        if (sUser || user) {
            navigate('/')
        }
    }, [sUser, user, token])

    if (sLoading || loading) {
        return <Loading></Loading>
    }
    return (
        <section>
            <Header location={location}></Header>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={loginFormSubmit}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="email" name='email' className="login__input" placeholder="User name / Email" required />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" name='password' className="login__input" placeholder="Password" required />
                            </div>
                            <Link to='/register'>Create an account</Link>
                            <br />
                            <Link to=''>Forgotten Password</Link>
                            <button className="button login__submit">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div className="social-login">
                            <h3>log in via</h3>
                            <div className="social-icons">
                                <a onClick={() => signInWithGoogle()} href="#" className="social-login__icon fa-brands fa-google"></a>
                            </div>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;