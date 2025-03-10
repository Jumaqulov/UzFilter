import React, { Fragment } from 'react'
import Navbar from '../../Components/Navbar/Navbar'

export default function HomePage() {
    return (
        <Fragment>
            <div className='home-main'>
                <Navbar />

                <section className='intro mx-auto flex justify-between items-center own_container'>
                    <div className='intro_left'>
                        <h1>Expert in Filtration <br /> and Purification</h1>
                        <p>Our goal is not only to provide your company with clean air but also to create a healthier environment for future generations.</p>
                        <a href="/about">ABOUT US</a>
                    </div>
                    <div className='intro_right'>
                        <div className='intro_right_card'>

                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}