import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contract/Contact';
import ServiceAbout from './ServiceAbout/ServiceAbout';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Contact></Contact>
            <ServiceAbout></ServiceAbout>
        </main>
    );
};

export default Home;