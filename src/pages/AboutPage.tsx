import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import Header from '../containers/Header/Header';
import About from '../containers/About/About';
import Footer from '../containers/Footer/Footer';

function AboutPage () {
    //apply theme
    const theme = useSelector((state: RootState) => state.theme.value);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div>
            <Header/>
            <About/>
            <Footer/>
        </div>
    );
}

export default AboutPage;