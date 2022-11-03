import React from 'react'
import "./portfolio.css"
import { Data } from './Data'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio container section">
            <h2 className="section__title">Meu Portifólio</h2>
            <span className="section__subtitle">Projetos Recentes</span>
            
            <Swiper className="portfolio__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  },
                }}
                modules={[Pagination]}
            >
                {Data.map(({id, image, title}) => {
                    return (
                        <SwiperSlide className="portfolio__card" key={id}>
                            <img src={image} alt="i"
                            className='portfolio__img'/>
                        {/*TODO link for project && gif*/}
                            <h3 class="portfolio__name">{title}</h3>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Portfolio
