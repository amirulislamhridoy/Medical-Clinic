import React from 'react';
import ContractChild from './ContractChild';
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact'>
            <ContractChild title='Give us a Call' text='1-888-123-4567'><i class="fa-solid fa-mobile-screen-button"></i></ContractChild>
            <ContractChild title='Send us a Message' text='medical-clinic@mail.com'><i class="fa-regular fa-envelope"></i></ContractChild>
            <ContractChild title='Visit our Location' text='3213 Suitland Street'><i class="fa-solid fa-location-dot"></i></ContractChild>
        </section>
    );
};

export default Contact;