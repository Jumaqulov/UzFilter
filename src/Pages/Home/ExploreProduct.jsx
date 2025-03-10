import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { tabs, products } from '../../Data/Static';
import { FaAngleRight } from "react-icons/fa";

export default function ExploreProduct() {
    const [activeTab, setActiveTab] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({ width: "0px", left: "0px" });
    const tabRefs = useRef([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (tabRefs.current[activeTab]) {
            const { offsetWidth, offsetLeft } = tabRefs.current[activeTab];
            setIndicatorStyle({ width: `${offsetWidth}px`, left: `${offsetLeft}px` });
        };
    }, [activeTab]);
    return (
        <Fragment>
            <div className='text-center py-5'>
                <h3>Explore All Products</h3>
                <div className='flex justify-center'>
                    <div className="w-150 border-b border-gray-300">
                        <div className="relative flex items-center justify-between">
                            <div className="flex space-x-8">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        ref={(el) => (tabRefs.current[index] = el)}
                                        className={`pb-2 text-lg font-medium transition-all ${activeTab === index ? "text-black font-bold" : "text-gray-500"
                                            }`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="relative mt-1 h-[2px] bg-gray-300">
                            <div
                                className="absolute h-[3px] bg-black transition-all duration-300"
                                style={indicatorStyle}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full px-4 mt-10">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={{
                            prevEl: ".prev",
                            nextEl: ".next",
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        modules={[Navigation]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="w-full"
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <div className='swiper_card'>
                                    <div className="swiper_card_img">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className='swiper_card_content'>
                                        <h4>{product.title}</h4>
                                        <p>{product.description}</p>
                                        <p>{product.weight}</p>
                                        <p>Specific Weight g/m²</p>
                                        <p>{product.temp}</p>
                                        <p>Maximum Operating Temperature °C</p>
                                        <div className='buy_more'>
                                            <button>Buy</button>
                                            <a href="#">More <FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex items-center justify-center space-x-4 mt-4">
                        <button className="prev bg-black text-white p-2 rounded-full"><ChevronLeft size={20} /></button>
                        <button className="next bg-black text-white p-2 rounded-full"><ChevronRight size={20} /></button>
                    </div>
                </div>
                <div className='explore_prod_end'>
                    <a href="#">Explore All Products</a>
                    <a href="#">Search Inventory <FaAngleRight /></a>
                </div>
            </div>
        </Fragment>
    )
}
