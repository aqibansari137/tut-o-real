import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import menu from './assets/menu-bar.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound404 from './components/404NotFound/404NotFound';
import { useState } from 'react';
import RmvBg from './components/articles/RmvBg/RmvBg';
import arrow from './assets/arrow-up.svg';
import ActivateWin10 from './components/articles/ActivateWin10/ActivateWin10';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PaidSoftFree from './components/articles/PaidSoftFree/PaidSoftFree';
import Home from './components/Home/Home';

function App() {
  const [routeList] = useState([
    {
      path: '/article/rmbg',
      title: 'Remove Image Background',
      element: <RmvBg />,
      active: false,
    },
    {
      path: '/article/activatewindows',
      title: 'Activate Windows 10',
      element: <ActivateWin10 />,
      active: false,
    },
    {
      path: '/article/dwnldsoft',
      title: 'Download Paid Software for Free',
      element: <PaidSoftFree />,
      active: false,
    },
  ])

  const sideCLick = () => {
    let str = window.location.pathname.substring(1, 8)
    let str1 = window.location.pathname
    if (str === 'article' || str1 === '/' || str1 === '/contact' || str1 === '/about')
      if (window.outerWidth < 600)
        document.getElementById('sideDiv').classList.replace('side1', 'side');
  }

  const scrollCheck = (e) => {
    const maxScroll = e.target.scrollHeight / 4;
    if (e.target.scrollTop > maxScroll) {
      document.getElementById('top-arrow').classList.replace('toTop', 'toTop1')
    }
    else
      document.getElementById('top-arrow').classList.replace('toTop1', 'toTop')
  }

  const toggleSidebar = () => {
    document.getElementById('sideDiv').classList.toggle('side1');
    document.getElementById('app-contain').classList.toggle('app-container1');
  }

  const hideSidebar = () => {
    if (window.outerWidth < 600)
      document.getElementById('sideDiv').classList.replace('side1', 'side');
  }
  const toTheTop = () => {
    document.getElementById('dash-ele').scrollTop = 0;
  }

  return (
    <div className='app-container' id='app-contain'>
      <BrowserRouter>
        <div className="nav" >
          <img src={menu} alt="menu" className='menu-btn' onClick={() => toggleSidebar()} />
          <Navbar />
        </div>
        <div className='side' id='sideDiv' onClick={sideCLick}>
          <Sidebar routeList={routeList} />
        </div>
        <div className="dash" onScroll={scrollCheck} id='dash-ele' onClick={() => hideSidebar()}>
          <Routes>
            <Route path='/' element={<Home />} />
            {routeList.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element} />
            })}
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
          <img src={arrow} className="toTop" id='top-arrow' alt="arrow" onClick={() => toTheTop()} />
        </div>
      </BrowserRouter >
    </div >
  );
}

export default App;
