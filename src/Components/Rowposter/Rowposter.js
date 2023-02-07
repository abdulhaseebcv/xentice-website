import React, { useEffect, useState } from 'react'
import './Rowposter.css'
import axios from 'axios'

function Rowposter({ title }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://api.xentice.com/api/postadSelect').then((res) => {
            setProducts(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-between'>
                <h2 className='d-inline fs-5 fw-bold'>{title}</h2>
                <div>
                    <a href="" className='text-decoration-none'>Explore More</a>
                </div>
            </div>
            <div className="row mt-2">
                <div className='d-flex flex-row overflow-auto'>

                    {products.map((obj, index) => {
                        return <div key={index} className="card poster-card">
                            <img className='img-fluid poster-image' src={JSON.parse(obj.images)} alt="poster" />
                            <div className="card-body">
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">{JSON.parse(obj.details).title}</h5>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                                <i className="fa-solid fa-location-dot"></i>
                                <p className="card-text d-inline ms-2">{JSON.parse(obj.location).city}</p>
                                <p className='text-danger'>Rs 12000/Sqr.ft</p>
                                <div className='text-end'>
                                    <a href="#" className='text-decoration-none fw-bold'>Explore Now</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Rowposter