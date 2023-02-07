import React from 'react'
import './Banner.css'


function Banner() {
    return (
        <div className='banner-section'>
            <div className="row text-center text-white p-3 icon-section">
                <div className="col-md-12">
                    <ul className='d-flex'>
                        <div className='icons'>
                            <img className='banner-list-image' src='/images/commercial shop.png' />
                            <li className='icon-list mt-1'>Commercial Shop</li>
                        </div>

                        <div className='icons'>
                            <img className='banner-list-image' src='/images/commercial office.png' alt="" />
                            <li className='icon-list mt-1'>Commercial Office</li>
                        </div>

                        <div className='icons'>
                            <img className='banner-list-image' src="/images/commercial land.png" alt="" />
                            <li className='icon-list mt-1'>Commercial Land</li>
                        </div>

                        <div className='icons'>
                            <img className='banner-list-image' src="/images/commercial building.png" alt="" />
                            <li className='icon-list mt-1'>Commercial Building</li>
                        </div>

                        <div className='icons'>
                            <img className='banner-list-image' src="/images/industrial building.png" alt="" />
                            <li className='icon-list mt-1'>Industrial Building</li>
                        </div>

                        <div className='icons'>
                            <img className='banner-list-image' src="/images/industrial land.png" alt="" />
                            <li className='icon-list mt-1'>Industrial Land</li>
                        </div>

                        <div className='icons'>
                            <img className='banner-list-image' src="/images/co-working space.png" alt="" />
                            <li className='icon-list mt-1'>Co-working Space</li>
                        </div>

                        <div className='icons'>
                            <img className='banner-list-image' src="/images/private office.png" alt="" />
                            <li className='icon-list mt-1'>Private Office</li>
                        </div>

                        <div className='icons'>
                            <img className='banner-list-image' src="/images/meeting room.png" alt="" />
                            <li className='icon-list mt-1'>Meeting Room</li>
                        </div>
                    </ul>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-12 banner">
                    <div className='search-card'>
                        <p className='card-text-banner'>Choose from 25,00+ <br /> Spaces for your <br /> Business</p>
                        <p>Get inspired and find your perfect place</p>
                        <div className='dropdown'>
                            <select>
                                <option>Looking For</option>
                                <option>Commercial Shop</option>
                                <option>Commercial Office</option>
                                <option>Commercial Land</option>
                                <option>Commercial Building</option>
                                <option>Industrial Building</option>
                                <option>Industrial Land</option>
                                <option>Co-working Space</option>
                                <option>Private Office</option>
                                <option>Meeting Room</option>
                            </select>

                            <select className='mt-2'>
                                <option>Select City</option>
                                <option>Delhi</option>
                                <option>Noida</option>
                                <option>Hyderabad</option>
                                <option>Mumbai</option>
                                <option>Bangalore</option>
                                <option>Cochin</option>
                                <option>Chennai</option>
                            </select>
                        </div>
                        <div>
                            <button className='search-button'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner