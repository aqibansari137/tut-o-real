import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar({ routeList }) {
    const [srchText, setSrchText] = useState('')
    const [fltrList, setFltrList] = useState([])
    const [menuList] = useState(routeList)

    useEffect(() => {
        setFltrList(menuList.filter(item => item.title.toLowerCase().includes(srchText.toLowerCase())));

    }, [srchText, menuList])

    return (
        <div className='side-menu'>
            <div className='mob-nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
            <input type="text" placeholder='Search' value={srchText} onChange={(e) => setSrchText(e.target.value)} className='side-srch' />
            <p className='side-title'>Topics:</p>
            {fltrList.map((menu, index) => {
                return <NavLink key={index} to={menu.path}>{menu.title}</NavLink>
            })}
        </div >
    )
}
