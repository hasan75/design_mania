import React from 'react';
import FirstNavBar from '../../components/FirstNav/FirstNavBar';
import HomeDiv from '../../components/HomeDiv/HomeDiv';
import Contact from '../../components/Contact/Contact';
import homeStyles from './Home.module.css';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About company/About';
import Service from '../../components/Services/Service';

const Home = () => {
  return (
    <div className={`${homeStyles.home}`}>
      <FirstNavBar className={`${homeStyles.navBar}`}></FirstNavBar>
      <div className={`${homeStyles.polygon1}`}></div>
      <div className={`${homeStyles.polygon2}`}></div>
      <HomeDiv></HomeDiv>
      <About></About>
      <Service></Service>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
