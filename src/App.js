import './App.css';
import Dashboard from './components/Dashbard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import menu from './assets/menu-bar.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound404 from './components/404NotFound/404NotFound';
import { useState } from 'react';
import RmvBg from './components/articles/RmvBg/RmvBg';
import arrow from './assets/arrow-up.svg';
import ActivateWin10 from './components/articles/ActivateWin10/ActivateWin10';

function App() {
  const [routeList] = useState([
    {
      path: '/rmbg',
      title: 'Remove Image Background',
      element: <RmvBg />,
      active: false,
    },
    {
      path: '/activatewindows',
      title: 'Activate Windows 10',
      element: <ActivateWin10 />,
      active: false,
    },
  ])

  const scrollCheck = (e) => {
    const maxScroll = e.target.scrollHeight / 2;
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
        <div className='side' id='sideDiv'>
          <Sidebar routeList={routeList} />
        </div>
        <div className="dash" onScroll={scrollCheck} id='dash-ele' onClick={() => hideSidebar()}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            {routeList.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element} />
            })}
            <Route path='*' element={<NotFound404 />} />
          </Routes>
          <img src={arrow} className="toTop" id='top-arrow' alt="arrow" onClick={() => toTheTop()} />
        </div>
      </BrowserRouter >
    </div >
  );
}

export default App;
