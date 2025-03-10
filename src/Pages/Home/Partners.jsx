import React, { Fragment } from 'react'
import utg from '../../assets/svg/640a6da4-69f0-4b0f-b4bd-52a2f89a5bfc 1.svg'
import turon from '../../assets/svg/d65e20fc-833b-4017-9252-dd0dbc9c93b2 1.svg'
import ngmk from '../../assets/svg/59d97f37-5b3d-4e76-9193-80404650d3e2 1.svg'
import uzbekneftgaz from '../../assets/svg/887b7cbc-5455-4b7b-b383-71fb128719b5 1.svg'
import uzvtorcvetmet from '../../assets/svg/abaa5b11-a8e2-43cd-a928-33d72d6e382f 1.svg'
import agroximprom from '../../assets/svg/d336e776-a5cb-4e63-8b60-6fb55ea08580 1.svg'
import qizilqum from '../../assets/svg/3c7d7641-34ba-4827-8406-4072dc7b0456 1.svg'

export default function Partners() {
    return (
        <Fragment>
            <h3>OUR <span>PARTNERS</span></h3>
            <div className='partner_section_boxes'>
                <div>
                    <img src={utg} alt="utg" />
                </div>
                <div>
                    <img src={turon} alt="Turon eco cement" />
                </div>
                <div>
                    <img src={ngmk} alt="ngmk" />
                </div>
                <div>
                    <img src={uzbekneftgaz} alt="Uzbekneftgaz" />
                </div>
                <div>
                    <img src={uzvtorcvetmet} alt="uzvtorcvetmet" />
                </div>
                <div>
                    <img src={agroximprom} alt="agroximprom" />
                </div>
                <div>
                    <img src={qizilqum} alt="qizilqum fosforit kompleksi" />
                </div>
            </div>
        </Fragment>
    )
}