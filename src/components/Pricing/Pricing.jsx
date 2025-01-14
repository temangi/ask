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
    titla: "MONTHLY",
  },
  {
    image: Cetka,
    title: "Standard Plan",
    description: "The argument in favor of using filler text goes something.",
    priceImage: Lini,
    price: "$56",
    titla: "MONTHLY",
  },
  {
    image: Cetka,
    title: "Standard Plan",
    description: "The argument in favor of using filler text goes something.",
    priceImage: Lini,
    price: "$75",
    titla: "MONTHLY",
  },

];

function Pricing() {
  return (
    <div className={scss.Pricing}>
  <h2>Our Pricing Plan</h2>
  <div className={scss.colum}>
    {Carta.map((item, index) => (
      <div key={index} className={scss.container}>
        <div className={scss.container_a}>
        <h3>{item.title}</h3>
        <img className={scss.Cetca} src={item.image} alt="" />
          <p>{item.description}</p>
          <div className={scss.Mon}>
            <h1>{item.price}</h1>
            <span>{item.titla}</span>
          </div>
        </div>
        <div className={scss.container_b}>
          {Foto.map((feature, featureIndex) => (
            <div key={featureIndex} className={scss.feature}>
              <img src={feature.image} alt="Feature Icon" />
              <p>{feature.p}</p>
            </div>
          ))}
        </div>
        <button>Get This Plan</button>
      </div>
    ))}
  </div>
</div>

  );
}

export default Pricing;
