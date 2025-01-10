import Contacts from "../components/Contacts/Contacts"
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
        <Header/>
        <Main photo={mainPhoto}/>
        <Procces/>
        <Client/>
        <Servis/>
        <Contacts/>
        <Footer/>
        </>
    )
}

export default HomePage