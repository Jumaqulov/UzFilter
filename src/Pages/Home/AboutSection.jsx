import React, { Fragment } from 'react'
import calendar from '../../assets/svg/Vector.svg'
import icon2 from '../../assets/svg/Vector (1).svg'
import group from '../../assets/svg/Vector (2).svg'
import location from '../../assets/svg/Group.svg'

export default function AboutSection() {
    return (
        <Fragment>
            <h3>ABOUT <span>US</span></h3>
            <div className='about_section_box'>
                <div className='about_section_boxes right_border'>
                    <div className='about_section_box_img'>
                        <img src={calendar} alt="calendar logo" />
                    </div>
                    <p>10 years of <br /> stable operation</p>
                </div>
                <div className='about_section_boxes right_border'>
                    <div className='about_section_box_img'>
                        <img src={icon2} alt="icon2 logo" />
                    </div>
                    <p>More than <br /> 800 types of <br /> proven filters</p>
                </div>
                <div className='about_section_boxes right_border'>
                    <div className='about_section_box_img'>
                        <img src={group} alt="group logo" />
                    </div>
                    <p>More than <br /> 2,500 signed <br /> contracts</p>
                </div>
                <div className='about_section_boxes'>
                    <div className='about_section_box_img'>
                        <img src={location} alt="location logo" />
                    </div>
                    <p>We operate in all <br /> regions of Uzbekistan <br /> and the CIS.</p>
                </div>
            </div>
        </Fragment>
    )
}