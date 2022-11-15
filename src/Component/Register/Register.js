import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import Header from '../Shared/Header';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../hook/useToken';

const Register = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        rUser,
        rLoading,
        rError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const registerFormSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.password.value
        createUserWithEmailAndPassword(email, pass)
    }
    const [token] = useToken(user || rUser)
    useEffect(() => {
        if ( rUser || user) {
            navigate('/')
        }
    }, [ rUser, user, token])

    if ( loading || rLoading) {
        return <Loading></Loading>
    }
    return (
        <section>
            <Header location={location}></Header>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login" onSubmit={registerFormSubmit}>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="email" name='email' class="login__input" placeholder="User name / Email" required />
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" name='password' class="login__input" placeholder="Password" required />
                            </div>
                            <Link to='/login'>Already have an account.</Link>
                            <button class="button login__submit">
                                <span class="button__text">Register In Now</span>
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

export default Register;