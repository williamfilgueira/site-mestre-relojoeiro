
import HeaderComponent from '../../components/HeaderComponents';
import Banner from '../../components/Banner'
import IconComponent from '../../components/IconComponent';
import Info from '../../components/InfoWatchMaker';
import Jobs from '../../components/JobList';
import Specialties from '../../components/Specialties'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
function Home(){
    return(
        <>
        <HeaderComponent/>
        <Banner/>
        <IconComponent/>
        <Info/>
        <Jobs/>
         <Specialties/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home;