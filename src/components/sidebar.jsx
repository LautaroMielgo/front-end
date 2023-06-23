import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom"

const SideBar = () => {
  const [selectedField, setSelectedField] = useState('tech-news');

  return (
    <div className="container-fluid bg-transparent">
      <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-1 position-fixed vh-100 p-0 align-to mt-5 bg-transparent">
          <div className="navbar-nav flex-column h-200 d-flex ml-6 ">
            <a href='front-end-beige-two.vercel.app/home' className={`nav-link ${selectedField === 'tech-news' ? 'active' : ''}`} onClick={() => setSelectedField('tech-news')}>
              <i className="bi bi-newspaper fs-4  text-success" ></i>
            </a>
    
            <a href='/community' className={`nav-link ${selectedField === 'community' ? 'active' : ''}`} onClick={() => setSelectedField('community')}>
              <i className="bi bi-people fs-4 text-success"></i>
            </a>

            <a href='/JobsOffers' className={`nav-link ${selectedField === 'job-applications' ? 'active' : ''}`} onClick={() => setSelectedField('job-applications')}>
              <i className="bi bi-briefcase fs-4 text-success "></i>
            </a>

            <a className={`nav-link ${selectedField === 'settings' ? 'active' : ''}`} onClick={() => setSelectedField('settings')}>
              <i className="bi bi-gear fs-4 text-success"></i>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;

