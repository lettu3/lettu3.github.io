import './AboutPage.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import NHeader from '../containers/NewHeader/NHeader';
import About from '../containers/About/About';
import Footer from '../containers/Footer/Footer';

function AboutPage () {
    //apply theme
    const theme = useSelector((state: RootState) => state.theme.value);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className='AboutPage'>
            <NHeader/>
            <About/>
            <Footer/>
        </div>
    );
}

export default AboutPage;