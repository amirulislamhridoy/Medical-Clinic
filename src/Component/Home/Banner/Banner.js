import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Shared/Header';
import './Banner.css'

const Banner = () => {
    // const [data, setData] = useState([])
    // const [dataCount, setDataCount] = useState({})
    // let [count, setCount] = useState(0)

    // useEffect(() => {
    //     fetch('banner.json')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])

    // useEffect(() => {
    //     setInterval(() => {
    //         ++count
    //         console.log(count)
    //         if(count >= data.length){
    //             count = 0
    //         }
    //         setCount(count)
    //         setDataCount(data[count])
    //     }, 5000)
    // }, [])
    
    const a = 'https://medical-clinic.cmsmasters.net/wp-content/uploads/2016/09/bg-1.jpg'

    return (
        <section className='banner' style={{backgroundImage: `url(${a})`}}>
            <div>
                <Header></Header>
            </div>
        </section>
    );
};

export default Banner;