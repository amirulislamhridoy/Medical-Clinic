import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import Contact from './Contract/Contact';
import Partners from './Partners/Partners';
import ServiceAbout from './ServiceAbout/ServiceAbout';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Contact></Contact>
            <ServiceAbout></ServiceAbout>
            <Partners></Partners>
            <Footer></Footer>
        </main>
    );
};

export default Home;