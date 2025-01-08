import scss from "./Footer.module.scss";
import mesage from "../../../public/mesage.svg";
import background from "../../../public/background.svg";
import { Link } from "react-router-dom";

function Footer() {
  const infos = ["Service", "FAQ", "Single Service", "Get Quote", "Prices"];
  const links = infos.map((el, index) => (
    <Link className={scss.link} to="" key={index}>
      {el}
    </Link>
  ));
  const text = [
    "About",
    "News",
    "Contacts",
    "Testimonials",
    "Our team",
    "Our approach",
  ];
  const textonu = text.map((el, index) => (
    <Link className={scss.texttwo} to="" key={index}>
      {el}
    </Link>
  ));

  return (
    <>
      <section className={scss.footername}>
        <header>
          <div className={scss.footerAskExperts}>
            <h1>
              <img src={mesage} alt="" /> AskExperts
            </h1>
            <p>Fb. / Ig. / Tw. /Be.</p>
          </div>
          <main>
            <div className={scss.linksten}>
              <div className={scss.Linkend}>
                <h1>Product</h1>
                <hr />
                <main>{links}</main>
              </div>
              <div className={scss.About}>
                <h1>Company</h1>
                <hr />
                <main className={scss.abouttext}>{textonu}</main>
              </div>
            </div>
            <div className={scss.Address}>
              <h1>Address</h1>
              <hr />
              <p>
                1700 W Blancke St, kiyev port <br /> south USA, America
              </p>
              <Link className={scss.LinkButton} to={""}>
                Book an Appoinment
              </Link>
            </div>
          </main>
        </header>
        <p>
          ©2022 Consultalk. All rights reserved | Terms of Service | Privacy
          Policy
        </p>
      </section>
    </>
  );
}
export default Footer;
