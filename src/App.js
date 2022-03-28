import Home from './pages/Home/Home';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useEffect, useState } from 'react';
import appStyles from './App.module.css';

function App() {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='App'>
      <Home></Home>
      <MessengerCustomerChat pageId='110189644873126' appId='324266099592426' />
      {showBtn && (
        <button onClick={scrollToTop} className={`${appStyles.backToTop} btn`}>
          {' '}
          <i class='fa-solid fa-arrow-up fa-2x'></i>
        </button>
      )}
    </div>
  );
}

export default App;
