import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    useEffect(() => {
    }, []);
    return (
        <div className='nav-container'>
            <img src={logo} alt='Logo' width='250px' style={{ marginLeft: '1em' }} />
            <div className='nav-link'>
                <NavLink to='/'>Dashboard</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </div>
    )
}
