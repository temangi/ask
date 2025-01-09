import scss from "./ServicCard.module.scss";

function ServicCard({img,p,span}) {
  return (
    <div className={scss.cub}>
      <img className={scss.svg} src={img} alt="icon" />
      <p>{p}</p>
      <span>
       {span}
      </span>
    </div>
  );
}

export default ServicCard;
