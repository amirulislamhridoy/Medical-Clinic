import React from 'react';
import p1 from '../../../photos/1-1.jpg'
import p2 from '../../../photos/2-2.jpg'
import p3 from '../../../photos/3-4.jpg'
import p4 from '../../../photos/4-2.jpg'
import p5 from '../../../photos/5-1.jpg'
import './Partners.css'

const Partners = () => {
    return (
        <section className='partners'>
            <h3>Partners</h3>
            <div>
                <img src={p1} alt=''></img>
                <img src={p2} alt=''></img>
                <img src={p3} alt=''></img>
                <img src={p4} alt=''></img>
                <img src={p5} alt=''></img>
            </div>
            
        </section>
    );
};

export default Partners;