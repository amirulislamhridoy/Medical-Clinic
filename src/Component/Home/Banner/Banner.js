import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header';
import './Banner.css'
import bg1 from '../../../photos/bg-1.jpg'
import bg2 from '../../../photos/bg-2-1-1.jpg'
import bg3 from '../../../photos/bg-3-1.jpg'
import bg4 from '../../../photos/bg-4.jpg'

const Banner = () => {
    const data = [
        {
            _id: "1",
            firstTitle: "Medical services that",
            secondTitle: "you can trust",
            img: bg1
        },
        {
            _id: "2",
            firstTitle: "The Hospital of the ",
            secondTitle: "Future, Today",
            img: bg2
        },
        {
            _id: "3",
            firstTitle: "Medical excellence",
            secondTitle: "every day.",
            img: bg3
        },
        {
            _id: "4",
            firstTitle: "Exceptional people.",
            secondTitle: "Exceptional care.",
            img: bg4
        },
    ]
    const [dataCount, setDataCount] = useState(data[0])
    let [count, setCount] = useState(0)

    useEffect(() => {
        const slider = setInterval(() => {
            ++count
            if (count >= data.length) {
                count = 0
            }
            setDataCount(data[count])
            setCount(count)
        }, 3000)
        return () => clearInterval(slider)
    }, [])

    return (
        <section className='banner' style={{ backgroundImage: `url(${dataCount?.img})` }}>
            <div>
                <Header></Header>
            </div>
        </section>
    );
};

export default Banner;