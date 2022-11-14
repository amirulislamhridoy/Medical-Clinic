import React from 'react';
import PercentItem from '../PercentItem/PercentItem';
import './Percentage.css';

const Percentage = () => {
    const percentages = [
        {
            _id: '01',
            num: 100,
            message: 'Quantity',
            mark: '%'
        },
        {
            _id: '02',
            num: 2480,
            message: 'Patients a year'
        },
        {
            _id: '03',
            num: 26,
            message: 'People working'
        },
        {
            _id: '04',
            num: 38,
            message: 'Years of experience'
        },
        {
            _id: '05',
            num: 7856,
            message: 'Happy Smiles'
        },
    ];
    
    return (
        <section className='percentage'>
            <div>
                {percentages.map(item => <PercentItem item={item}></PercentItem>)}
            </div>
        </section>
    );
};

export default Percentage;