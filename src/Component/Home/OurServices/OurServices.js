import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurServices.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

const OurServices = () => {
    const [services, setServices] = useState([])
    console.log(services)
    let [count, setCount] = useState(3)

    useEffect(() => {
        fetch('departments.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        // const slider = setInterval(() => {
        //     ++count
        //     if (count >= services.length) {
        //         count = 0
        //     }
        //     setDataCount(services[count])
        //     setCount(count)
        // }, 3000)
        // return () => clearInterval(slider)
    }, [])
    return (
        <section className='home-services'>
            <div className='left'>
                <h2>Departments</h2>
                <Link to=''>Outpatient Surgery</Link>
                <Link to=''>Cardiac Clinicy</Link>
                <Link to=''>Ophthlmology Clinic</Link>
                <Link to=''>Gynaecological Clinic</Link>
                <Link to=''>Outpatient Rehabilitation</Link>
                <Link to=''>Laryngological Clinic</Link>
                <Link to=''>Pediatric Clinic</Link>
                <button>View all</button>
            </div>
            <div className='right'>
                <div>
                    <span>Innovation</span>
                    <h2>Our Services</h2>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    // modules={[Pagination, Navigation]}
                    modules={[ Navigation]}
                    className="slider-container"
                >
                    {services.map(service => <SwiperSlide key={service._id}>
                        <img src={service.img} alt=''></img>
                        <h3><Link to=''>{service.name}</Link></h3>
                        <hr />
                        <p>{service?.description.slice(0,150)}...</p>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    );
};

export default OurServices;