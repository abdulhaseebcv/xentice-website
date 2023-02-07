import React from 'react'
import './AdsPoster.css'

function AdsPoster() {
  return (
    <div className='container'>
      <div className="row mt-4">
        <div className="col-8">
          <img className='img-fluid ads-image' src="/images/large add poster.png" alt="" />
        </div>
        <div className="col-4">
          <img className='img-fluid ads-image' src="/images/small add poster.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AdsPoster