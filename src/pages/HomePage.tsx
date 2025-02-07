import './HomePage.css';
import { useEffect } from 'react';
import Header from '../containers/Header/Header';
import Body from '../containers/Body/Body';
import Footer from '../containers/Footer/Footer';

import { useSelector } from 'react-redux';


function HomePage() {
  //theme
  const theme = useSelector((state: any) => state.theme.value);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className='HomePage'>
    <Header />
    <Body />
    <Footer />
    </div>
  )
}

export default HomePage;