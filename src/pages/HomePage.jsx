import Header from "../components/Header/Heade"
import Main from "../components/Main/Main"
import Footer from "../components/Footer/Footer"
import Sound from "../components/AboutUs/main/Sound"
import Servis from "../components/Servis/Servis"
import Procces from "../components/procces/Procces"
import Saider from "../components/Saider/Saider"
import Contacts from "../components/Contacts/Contacts"
import Blog from "../components/Blog/Blog";
import mainPhoto from "../components/Main/mains.svg";
import Book from "../components/Book/Book";
import ProcessServise from "../components/ProcessServise/ProcessServise"
import Education from "../components/Education/Education"
function HomePage(){
    return(
        <>
        <Header/>
        <Main photo={mainPhoto}/>
        <Sound/> 
        <Servis/>
        <Book/>
        <Education/>
        <Procces/>
        <ProcessServise/>
        <Saider/>
        <Blog />
        <Contacts/>
        <Footer/>
        </>
    )
}

export default HomePage;
