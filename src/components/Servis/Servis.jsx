import scss from "./Servis.module.scss";
import ServicCard from "./ServiceCard/ServiceCard";
import Icon from "../../../public/Icon.svg";
import Icon_a from "../../../public/Icon_a.svg";
import Icon_b from "../../../public/Icon_b.svg";
import Icon_v from "../../../public/Icon_v.svg";
import Icon_c from "../../../public/Icon_c.svg";
import Icon_e from "../../../public/Icon_e.svg";

const Servic_ai = [
  {
    img: Icon,
    p: "Audit & Evaluation",
    span: "Get help from Alex Moore, a professional  business coach with advanced experience on growth and business scaling.",
  },
  {
    img: Icon_a,
    p: "Financial Projections",
    span: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
  },
  {
    img: Icon_b,
    p: "Funds and investments",
    span: "Get help from Alex Moore, a professional  business coach with advanced experience on growth and business scaling.",
  },
  {
    img: Icon_v,
    p: "Finance & Restructuring",
    span: "Get help from Alex Moore, a professional  business coach with advanced experience on growth and business scaling.",
  },
  {
    img: Icon_c,
    p: "Taxes & Efficiency",
    span: "Get help from Alex Moore, a professional  business coach with advanced experience on growth and business scaling.",
  },
  {
    img: Icon_e,
    p: "Investment banking",
    span: "Get help from Alex Moore, a professional  business coach with advanced experience on growth and business scaling.",
  },
];

function Servis() {
    
    const cards = Servic_ai.map((el,index) => <ServicCard key={index} {...el}/>)

  return (
    <section className={scss.Servis}>
      <h1>
        Get Control Over Your Business I take <br /> your finance to next level
      </h1>
      <div className={scss.conteiner}>
        {cards}
      </div>
    </section>
  );
}

export default Servis;
