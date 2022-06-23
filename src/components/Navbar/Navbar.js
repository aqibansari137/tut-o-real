import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    useEffect(() => {
    }, []);
    return (
        <div className='nav-container'>
            <NavLink className='nav-link-head' to='/'><img src={logo} alt='Logo' width='250px' style={{ marginLeft: '1em' }} /></NavLink>
            <div className='nav-link'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </div>
    )
}
