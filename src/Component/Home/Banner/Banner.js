import React, { useEffect, useState } from 'react';
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
                <div className='header-first-div'>
                    <p>Entrust your health our doctors.</p>
                    <h1>{dataCount.firstTitle}</h1>
                    <h1>{dataCount.secondTitle}</h1>
                    <a href='/features'><button>Make an Appointment</button></a>
                    <a href='/departments'><button>View Departments</button></a>
                </div>
                <div className='header-slider-btn'>
                    <button><i className="fa-solid fa-chevron-right"></i></button>
                    <button onClick={() => setDataCount(data[0])}><i className="fa-solid fa-o"></i></button>
                    <button onClick={() => setDataCount(data[1])}><i className="fa-solid fa-o"></i></button>
                    <button onClick={() => setDataCount(data[2])}><i className="fa-solid fa-o"></i></button>
                    <button onClick={() => setDataCount(data[3])}><i className="fa-solid fa-o"></i></button>
                    <button><i className="fa-solid fa-exclamation"></i><i className="fa-solid fa-exclamation"></i></button>
                </div>
            </div>
        </section>
    );
};

export default Banner;