import scss from "./Pricing.module.scss";
import Cetka from "../../../public/Cetka.svg";
import Lini from "../../../public/Lini.png";
import Arrow from "../../../public/arrow.svg";

const Foto = [
  {
    image: Arrow,
    p: "24/7 system monitoring",
  },
  {
    image: Arrow,
    p: "Security management",
  },
  {
    image: Arrow,
    p: "Secure finance backup",
  },
  {
    image: Arrow,
    p: "Remote support",
  },
];

const Carta = [
  {
    image: Cetka,
    title: "Basic Plan",
    description: "The argument in favor of using filler text goes something.",
    priceImage: Lini,
    price: "$35",
  },
];

function Pricing() {
  return (
    <section className={scss.Pricing}>
      <h1>Our Pricing Plan</h1>
      <div className={scss.container}>

        <div className={scss.container_a}>

          {Carta.map((item, index) => (

            <div key={index} className={scss.card}>

              <img src={item.image} alt="Plan Icon" />

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <img src={item.priceImage} alt="Pricing Icon" />

              <h5>{item.price}</h5>

            </div>

          ))}
        </div>

        <div className={scss.container_b}>

          {Foto.map((item, index) => (

            <div key={index} className={scss.feature}>

              <img src={item.image} alt="Feature Icon" />

              <p>{item.p}</p>

            </div>

          ))}

        </div>

        <button>Get This Plan</button>

      </div>
      
    </section>
  );
}

export default Pricing;


