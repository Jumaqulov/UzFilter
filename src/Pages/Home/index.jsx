import React, { Fragment } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { FaSearch } from "react-icons/fa";
import ExploreProduct from './ExploreProduct';
import AboutSection from './AboutSection';

export default function HomePage() {
    return (
        <Fragment>
            <div className='home-main'>
                <Navbar />
                <section className='intro mx-auto flex gap-30 items-center own_container'>
                    <div className='intro_left'>
                        <h1>Expert in Filtration <br /> and Purification</h1>
                        <p>Our goal is not only to provide your company with clean air but also to create a healthier environment for future generations.</p>
                        <a href="/about">ABOUT US</a>
                    </div>
                    <div className='intro_right'>
                        <div className='intro_right_card'>
                            <h4>Product Type</h4>
                            <hr />
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search with product type..."
                                    className="px-4 py-2 pl-10 w-full"
                                />
                            </div>
                            <button>Search</button>
                        </div>
                    </div>
                </section>
            </div>
            <section className='own_container explore_prod'>
                <ExploreProduct />
            </section>
            <section className='own_container about_section'>
                <AboutSection />
            </section>
        </Fragment>
    )
}