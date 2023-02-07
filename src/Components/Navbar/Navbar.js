import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 overflow-hidden">
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img className='header-logo img-fluid' src="/images/xentice.png" alt="logo" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <i className="fa-solid fa-user text-secondary"></i>
                    <a className="ms-1 text-decoration-none d-inline" aria-current="page" href="#">Post Ad</a>
                  </li>
                  <li className="nav-item ms-2">
                    <i className="fa-solid fa-location-dot text-secondary"></i>
                    <a className="ms-1 text-decoration-none d-inline" href="#">Near Me</a>
                  </li>
                  <li className="nav-item ms-2">
                    <i className="fa-solid fa-arrow-right-to-bracket text-secondary"></i>
                    <a className="ms-1 text-decoration-none d-inline" href="#">Login/Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar