import scss from "./style.module.scss";
import Title from "../Title/Title";
import phone from "../../assets/contacts/phone.svg";
import clock from "../../assets/contacts/clokc.svg";
import loc from "../../assets/contacts/loc.svg";

const infos = [
  {
    img: phone,
    title: "Call Today",
    desc: "+1 800 100 900",
  },
  {
    img: clock,
    title: "Monday To Friday",
    desc: "9AM - 5PM",
  },
  {
    img: loc,
    title: "USA Office",
    desc: "195 Devonshire St Boston, MA 02110",
  },
];

const inputsInfos = [
  {
    title: "First name",
    placeholder: "Baktybekov Temirlan",
    type: "text",
  },
  {
    title: "Email ",
    placeholder: "example@gmail.com",
    type: "email",
  },
  {
    title: "Phone",
    placeholder: "+996 700 700 700",
    type: "tel",
  },
  {
    title: "Company",
    placeholder: "your-company.com",
    type: "text",
  },
];

function Contacts() {
  const info = infos.map(({ img, title, desc }, index) => (
    <div>
      <img src={img} alt="" />
      <aside>
        <span>{title}</span>
        <p>{desc}</p>
      </aside>
    </div>
  ));

  const inputs = inputsInfos.map(({ title, placeholder, type }, id) => (
    <div key={id}>
      <label>{title}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  ));

  return (
    <section className={scss.contacts}>
      <article>
        <Title title={"procces"} />
        <h1>Contact Us. It’s Easy.</h1>
        <span>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative.
        </span>
        <main>{info}</main>
      </article>
      <form>
        {inputs}
        <div>
          <label >Message</label>
          <textarea  placeholder={"Briefly tell us about your project and your current goals. How can we help you?"} />
        </div>
      </form>
    </section>
  );
}

export default Contacts;
