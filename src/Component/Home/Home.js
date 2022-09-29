import React from 'react';
import './Home.css'
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Banner from './Banner/Banner';
import ClientSay from './ClientSay/ClientSay';
import Contact from './Contract/Contact';
import Partners from './Partners/Partners';
import Percentage from './Percentage/Percentage';
import ServiceAbout from './ServiceAbout/ServiceAbout';

const Home = () => {
    return (
        <main className='home'>
            <Header></Header>
            <Banner></Banner>
            <Contact></Contact>
            <ServiceAbout></ServiceAbout>
            <ClientSay></ClientSay>
            <Percentage></Percentage>
            <Partners></Partners>
            <Footer></Footer>
        </main>
    );
};

export default Home;