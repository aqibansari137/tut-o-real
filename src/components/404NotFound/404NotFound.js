import React from 'react'
import './404NotFound.css'
import satellite from '../../assets/satellite.svg'

export default function NotFound404() {
    return (
        <div className='nf-container'>
            <div style={{ textAlign: 'center' }}>
                <h1>404 <img src={satellite} alt="satellite" width='100px' /></h1>
                <h2>Page Not Found</h2>
            </div>
        </div>
    )
}
