import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import './Features.css'
import Feature_Left from './Feature_Left';
import Feature_Right from './Feature_Right';
import SingleFeatureAbout from './SingleFeatureAbout';

const Features = () => {
    const location = useLocation()
    const [featuresAbout, setFeaturesAbout] = useState([])

    useEffect(() => {
        fetch('featureAbout.json')
        .then(res => res.json())
        .then(data => setFeaturesAbout(data))
    }, [])

    return (
        <main>
            <Header location={location}></Header>
            <section className='features-section'>
                <div>
                    <Feature_Left></Feature_Left>
                    <Feature_Right></Feature_Right>
                </div>
            </section>
            <section className='features-about'>
                {featuresAbout?.map(feature => <SingleFeatureAbout feature={feature} key={feature._id}></SingleFeatureAbout>)}
            </section>
            <Footer></Footer>
        </main>
    );
};

export default Features;