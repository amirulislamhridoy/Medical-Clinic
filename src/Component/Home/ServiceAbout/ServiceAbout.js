import React from 'react';
import SingleServiceAbout from './SingleServiceAbout';
import './ServiceAbout.css'

const ServiceAbout = () => {
    const data = [
        {   
            "_id": '01',
            title: 'Top Doctors',
            text: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.',
            bgColor: '#3eb8d7'
        },{
            "_id": "02",
            title: "24 Hours Service",
            text: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.',
            bgColor: '#0392ce'
        }
    ]
    return (
        <section className='service-about'>
            {data.map(d => <SingleServiceAbout d={d} key={d._id}></SingleServiceAbout>)}
        </section>
    );
};

export default ServiceAbout;