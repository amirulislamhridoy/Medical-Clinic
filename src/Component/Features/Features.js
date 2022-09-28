import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import './Features.css'
import Feature_Left from './Feature_Left';
import Feature_Right from './Feature_Right';

const Features = () => {
    const location = useLocation()

    return (
        <main>
            <Header location={location}></Header>
            <section className='features-section'>
                <div>
                    <Feature_Left></Feature_Left>
                    <Feature_Right></Feature_Right>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default Features;