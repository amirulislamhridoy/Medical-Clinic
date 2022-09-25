import React, { useEffect, useState } from 'react';
import './ClientSay.css'
import SingleClientSay from './SingleClientSay';

const ClientSay = () => {
    const [clients, setClients] = useState([])
    useEffect(() => {
        fetch('client.json')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <section className='client-say'>
            <div>
                <p>Testimonials</p>
                <h1>What Our Clients Say</h1>
                <div className='client-main'>
                    {clients.map(client => <SingleClientSay client={client} key={client._id}></SingleClientSay>)}
                </div>
            </div>
        </section>
    );
};

export default ClientSay;