import React from 'react'
import { NavLink } from 'react-router-dom'
import giphy from '../../assets/giphy.webp'
import './About.css'
export default function About() {
    return (
        <div className='main-container'>
            <h1>About</h1>
            <img src={giphy} alt="Pirate boat" className='pirate-boat' />
            <div className="about-body">
                <p>Hi there 😊, Welcome to TUT-O-REAL.</p>
                <p>It's a website where you will find various Tutorials which would come very handy.</p>
                <p>I am not the all knowing 🤭. So, Please Let me know which tutorial you are looking for. I would be very happy to add it on my website.</p>
                <p>Let us know what more we can add <NavLink to='/contact'>Contact Us</NavLink>.</p>
            </div>
            <footer style={{ marginTop: '0.5em' }}>!! Don't Leave without Exploring !!</footer>
        </div>
    )
}
