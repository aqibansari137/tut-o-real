import './App.css';
import Dashboard from './components/Dashbard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import menu from './assets/menu-bar.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound404 from './components/404NotFound/404NotFound';
import { useState } from 'react';
import RmvBg from './components/articles/RmvBg.js/RmvBg';

function App() {
  const [routeList] = useState([
    {
      path: '/rmbg',
      title: 'Remove Image Background',
      element: <RmvBg />,
      active: false,
    },
  ])

  const toggleSidebar = () => {
    let sidebar = document.getElementById('sideDiv').style.display
    if (sidebar === 'none')
      document.getElementById('sideDiv').style.display = 'inline-block';
    else
      document.getElementById('sideDiv').style.display = 'none';
  }

  const hideSidebar = () => {
    if (window.outerWidth < 600)
      document.getElementById('sideDiv').style.display = 'none';
  }
  return (
    <div className='app-container'>
      <BrowserRouter>
        <div className="nav" >
          <img src={menu} alt="menu" className='menu-btn' onClick={() => toggleSidebar()} />
          <Navbar />
        </div>
        <div className='side' id='sideDiv'>
          <Sidebar routeList={routeList} />
        </div>
        <div className="dash" onClick={() => hideSidebar()}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            {routeList.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element} />
            })}
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </div>
      </BrowserRouter >
    </div >
  );
}

export default App;
