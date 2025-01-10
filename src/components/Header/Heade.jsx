import { Link } from "react-router-dom";
import scss from "./Header.module.scss";
import clock from "../../../public/clock.svg";
import geo from "../../../public/goel.svg";
import inst from "../../../public/inst.svg";
import fes from "../../../public/fes.svg";
import twi from "../../../public/twi.svg";
import int from "../../../public/in.svg";
import sms from "../../../public/Logo.svg";
import telefon from "../../../public/tele.svg";

const imgs = [inst, fes, twi, int];
const menu = [
  {
    str: "Home",
    link: "/"
  },
  {
    str: "Pages",
    link: "/pages"
  },
  {
    str: "Services",
    link: "/service"
  },
  {
    str:  "Work",
    link: "/work"
  },
  {
    str: "Pages",
    link: "/page"
  },
  {
    str: "Contact",
    link: "/contact"
  }
];

const Header = () => {

  const img = imgs.map((el, index) => (
    <a key={index}>
      <img src={el} alt="" />
    </a>
  ));
  const li = menu.map((el, index) => (
    <Link
    to={el.link}
      key={index}
      className={scss.linck}
    >
      <p></p>
      {el.str}
    </Link>
  ));
  return (
    <section>
      <div className={scss.topBar}>
        <div className={scss.container}>
          <p>
            <img src={clock} alt="" />
            Monday - Friday8AM - 9PM
          </p>
          <p>
            <img src={geo} alt="" />
            725 Park Ave, New York
          </p>
          <main>{img}</main>
        </div>
      </div>
      <div className={scss.Header}>
        <div className={scss.container}>
          <h2>
            <img src={sms} alt="" />
            AskExperts
          </h2>
          <main>{li}</main>
          <button><img src={telefon} alt="" /><span>+ (888) 452 1505</span></button>
        </div>
      </div>
    </section>
  );
};

export default Header;
