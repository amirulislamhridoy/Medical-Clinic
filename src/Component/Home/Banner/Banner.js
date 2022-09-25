import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Shared/Header';
import './Banner.css'
import bg1 from '../../../photos/bg-1.jpg'
import bg2 from '../../../photos/bg-2-1-1.jpg'
import bg3 from '../../../photos/bg-3-1.jpg'
import bg4 from '../../../photos/bg-4.jpg'

const Banner = () => {
    const data = [bg1, bg2, bg3, bg4]
    const [dataCount, setDataCount] = useState(bg1)
    let [count, setCount] = useState(0)

    useEffect(() => {
        const slider = setInterval(() => {
            ++count
            if(count >= data.length){
                count = 0
            }
            setDataCount(data[count])
            setCount(count)
        }, 3000)
        return () => clearInterval(slider)
    }, [])

    return (
        <section className='banner' style={{backgroundImage: `url(${dataCount})`}}>
            <div>
                <Header></Header>
            </div>
        </section>
    );
};

export default Banner;