import scss from "./style.module.scss"
import Title from "../Title/Title"
import phone from "../../assets/contacts/phone.svg"
import clock from "../../assets/contacts/clokc.svg"
import loc from "../../assets/contacts/loc.svg"

const infos = [
    {
        img : phone,
        title : "Call Today",
        desc : "+1 800 100 900"
    },
    {
        img : clock,
        title : "Monday To Friday",
        desc : "9AM - 5PM"
    },
    {
        img : loc ,
        title : "USA Office",
        desc : "195 Devonshire St Boston, MA 02110"
    },
]

function Contacts(){
    return(
        <section className={scss.contacts} >
            <Title title={"procces"} />
            <h1>Contact Us. It’s Easy.</h1>
            <span>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</span>
            <main>
                
            </main>
        </section>
    )
}

export default Contacts