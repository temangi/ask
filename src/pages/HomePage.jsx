import Procces from "../components/procces/Procces"
import Client from "../components/Clientt/Client"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Heade"
import Servis from "../components/Servis/Servis";
import Main from "../components/Main/Main"
import mainPhoto from "../components/Main/mains.svg"

function HomePage(){
    return(
        <>
        <Procces/>
        <h1>Home Page</h1>
        <p>ADIL , AIDANA, ALINA</p>
        <Header/>
        <Client/>
        <Main photo={mainPhoto}/>
        <Servis/>
      <Footer/>
        </>
    )
}

export default HomePage