import Header from "../components/Header/Heade"
import Main from "../components/Main/Main"
import Footer from "../components/Footer/Footer"
import Sound from "../components/AboutUs/main/Sound"
import Servis from "../components/Servis/Servis"
import Procces from "../components/procces/Procces"
import Saider from "../components/Saider/Saider"
import Contacts from "../components/Contacts/Contacts"
import Blog from "../components/Blog/Blog";
import Pricing from "../components/Pricing/Pricing"

function HomePage(){
    return(
        <>
        <Header/>
        <Main/>
        <Sound/> 
        <Servis/>
        <Procces/>
        <Saider/>
        <Blog />
        <Pricing/>
        <Contacts/>
        <Footer/>
        </>
    )
}

export default HomePage;
