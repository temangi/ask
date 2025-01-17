import scss from "../FAG.module.scss";
import { useEffect, useState } from "react";
import pluss from "../../../../public/pluss.svg";
import minuss from "../../../../public/minuss.svg";


function Card({ title,spantitle }) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => console.log(isVisible), [isVisible]);

  const toggleVisibility = () => {
    if (!isVisible) {
      setShouldRender(true);
      setIsVisible(true); 
    } else {
      setIsVisible(false); 
      setTimeout(() => setShouldRender(false), 500); 
    }
  };
  return (
  
    <main className={scss.FAGstarttitle}>

      <div className={scss.FAGimg} onClick={handleToggle}>
        <p>{title}</p>
        <img  src={isVisible ? minuss : pluss} alt="" />
      </div>
      <span className={`${isVisible ? scss.fadeIn : scss.fadeOut}`}>{spantitle}</span>
    </main>
  );
}

export default Card;
