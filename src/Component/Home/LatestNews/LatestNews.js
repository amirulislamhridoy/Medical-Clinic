import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LatestNews.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import slideImg from './../../../photos/latest-news.jpg'

const LatestNews = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('latestNews.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <section className='home-latestNews'>
            <div className='left'>
                <div>
                    <span>Latest News</span>
                    <h2>Be the first to read</h2>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    // modules={[Pagination, Navigation]}
                    modules={[Autoplay, Navigation]}
                    className="slider-container"
                    breakpoints={{
                        550: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1201: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {news?.map(n => <SwiperSlide key={n._id}>
                        <img src={n.img} alt=''></img>
                        <p>{n.date}</p>
                        <hr />
                        <h3><Link to=''>{n.name}</Link></h3>
                        <article>{n?.description.slice(0, 150)}...</article>
                    </SwiperSlide>)}
                </Swiper>
            </div>
            <div className='right'>
                <img src={slideImg} alt=''></img>
            </div>
        </section>
    );
};

export default LatestNews;