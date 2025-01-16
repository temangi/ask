import scss from "./Work.module.scss";
import Title from "../Title/Title";
import alina from "../../assets/work/alina.jpg"
import emirchan from "../../assets/work/emirchan.jpg"
import aidana from "../../assets/work/aidana.jpg"
import ramazan from "../../assets/work/ramazan.png"

const photos = [alina,emirchan,aidana,alina,emirchan,aidana,ramazan];

function Work() {
  const photo = photos.map((el, index) => (
    <img key={index} src={el} alt="" />
  ));

  return (
    <section className={scss.work}>
      <Title title={"WORK"} color={"white"} background={"green"} />
      <article>
        <p>My latest project</p>
        <button>More Work</button>
      </article>
      <main>{photo}</main>
    </section>
  );
}

export default Work;
