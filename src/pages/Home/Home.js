import React from 'react';
import FirstNavBar from '../../components/FirstNav/FirstNavBar';
import homeStyles from './Home.module.css';

const Home = () => {
  return (
    <div className={`${homeStyles.home}`}>
      <FirstNavBar className={`${homeStyles.navBar}`}></FirstNavBar>
      <div className={`${homeStyles.polygon1}`}></div>
      <div className={`${homeStyles.polygon2}`}></div>
    </div>
  );
};

export default Home;
