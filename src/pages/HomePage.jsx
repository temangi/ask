import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Heade"
import Servis from "../components/Servis/Servis";
import Main from "../components/Main/Main";
import mainPhoto from "../components/Main/mains.svg";
import Book from "../components/Book/Book";
function HomePage(){
    return(
        <>
        
        <Header/>
        <Main photo={mainPhoto}/>
        <Servis/>
      <Footer/>
      <Book/>
        </>
    )
}

export default HomePage