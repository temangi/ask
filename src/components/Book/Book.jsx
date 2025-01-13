import scss from "./Book.module.scss";
import phone from "../../../public/phone.svg";
import setka from "../../../public/setka.svg";
import photo from "../../../public/ask.jpg";
import Title from "../Title/Title";


function Book() {
  return (
    <article className={scss.main}> 
      <section className={scss.books}>
        <div className={scss.texts}>
            <Title title={"BOOK NOW"} />
          <h1>
            Better Consult, <span>Better</span> <br />
            Results
          </h1>
          <p>
            Our software development agency has a growth up to 30% <br />
            per each year. If you are result-oriented, not afraid to take <br />
            initiative – drop us a note and join our team!
          </p>
          <button className={scss.click_phone}>
            {" "}
            <img src={phone} alt="" />
           +996 700 700
          </button>
        </div>
        <div className={scss.cartinci}>
          <img src={setka} alt="" />
        </div>
        <img className={scss.photo_2} src={photo} alt="" />
      </section>
    </article>
  );
}

export default Book;
