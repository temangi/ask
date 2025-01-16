import scss from "./Blog.module.scss";
import kolegi from "../../../public/kolegi.svg";
import man from "../../../public/man.svg";
import woman from "../../../public/woman.svg";
import Growthhackin from "../../../public/Growthhackin.svg";
import { Link } from "react-router-dom";

const infos = [
  {
    img: kolegi,
    untitle: "Consulting Fees Study 2019 (And How To Raise Your Rates)",
    desc: "Leverage agile frameworks to provide a robust synopsis  for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    imgLogo: man,
    name: "Aidana",
  },
  {
    img: Growthhackin,
    untitle: "What is growth hacking and how to apply it to your startup",
    desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    imgLogo: woman,
    name: "Temirlan",
  },
];

function Blog() {
  const card = infos.map(
    ({ img, desc, imgLogo, name, untitle,}, index) => (
      <div className={scss.Resources} key={index}>
        <img src={img} alt="" />
        <p>{untitle}</p>
        <span>{desc}</span>
        <div className={scss.ReadMore}>
          <aside>
            <img src={imgLogo} alt="" />
            <p>{name} | September 1, 2022</p>
          </aside>
          <Link className={scss.more} to={""}>
            Read More
          </Link>
        </div>
        
      </div>

    )
  );

  return (
    <>
      <section className={scss.blog}>
        <header className={scss.News} >
            <h1>Take a look at our latest <br /> articles & resources</h1>
            <button>More News</button>
        </header>
        <main>{card}</main>
      </section>
    </>
  );
}
export default Blog;
