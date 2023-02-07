import React from 'react'
import './Footer.css'

function Footer() {

  return (
    <div className='footer-section text-white mt-4'>
      <div className="row p-3">
        <div className="col-md-12">
          <div className='d-flex justify-content-center align-items-center'>
            <i className="fa-solid fa-copyright"></i>
            <p className='ms-2 mt-3'>Xentice Group of Companies 2023 . All Rights Reserved </p>
          </div>
        </div>
      </div>

      <div className="row">
        <ul className='d-flex justify-content-center'>
          <li className='footer-list'>About Us</li>
          <li className='footer-list'>Contact Us</li>
          <li className='footer-list'>Privacy Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer