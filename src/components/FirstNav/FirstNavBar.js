import React from 'react';
import logo from '../../images/kajkamlogo.png';
import navStyles from './FirstNavBar.module.css';

const FirstNavBar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img className={`${navStyles.logo}`} src={logo} alt='kajkamlogo' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a
                  className='nav-link active mx-3'
                  aria-current='page'
                  href='#'
                >
                  Home
                </a>
              </li>
              <li className='nav-item mx-3'>
                <a className='nav-link' href='#'>
                  Service
                </a>
              </li>
              <li className='nav-item mx-3'>
                <a className='nav-link'>About</a>
              </li>
              <li className='nav-item mx-3'>
                <a className='nav-link'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FirstNavBar;