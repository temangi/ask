import idol from "../../../public/idol.png";
import radiuc from "../../../public/radiuc.png";
import Norto from "../../../public/Norto.png";
import openmenue from "../../../public/openmenue.png";
import outfit from "../../../public/outfit.png";
import Zero from "../../../public/Zero.png";
 import scss from "./AboutUs.module.scss"
 import React from "react";

 const images = [
    { src: openmenue, alt: 'openmenue' },
    { src: Norto, alt: 'Norto' },
    { src: Zero, alt: 'Zero' },
    { src: outfit, alt: 'Outfit' },
    { src: idol, alt: 'Idol' },
    { src: radiuc, alt: 'radiuc'},
  ];
  
  const AboutUs = () => {
    return (
      <header className={scss.Header}>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </header>
    );
  };
export default AboutUs