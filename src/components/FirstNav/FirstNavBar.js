import React from 'react';
import logo from '../../images/kajkamlogo.png';
import navStyles from './FirstNavBar.module.css';

const FirstNavBar = () => {
  return (
    <div>
      <nav
        className={`${navStyles.navbar} navbar navbar-expand-lg navbar-light bg-white`}
      >
        <div className='container'>
          <a className='navbar-brand' href='/'>
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
          <div
            className={`${navStyles.navbarCollapse} collapse navbar-collapse `}
            id='navbarSupportedContent'
          >
            <ul
              className={`${navStyles.navbarNav} navbar-nav ms-auto mb-2 mb-lg-0`}
            >
              <li className={`${navStyles.navItem} nav-item mx-3 `}>
                <a
                  className={`${navStyles.navLinkItem} nav-link active `}
                  aria-current='page'
                  href='#homeSection'
                >
                  Home
                </a>
              </li>
              <li className={`${navStyles.navItem} nav-item mx-3 `}>
                <a className={`${navStyles.navLinkItem} nav-link`} href='#home'>
                  Service
                </a>
              </li>
              <li className={`${navStyles.navItem} nav-item mx-3 `}>
                <a className={`${navStyles.navLinkItem} nav-link`} href='#home'>
                  About
                </a>
              </li>
              <li className={`${navStyles.navItem} nav-item mx-3 `}>
                <a className={`${navStyles.navLinkItem} nav-link`} href='#home'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FirstNavBar;
