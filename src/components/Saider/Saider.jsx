import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scss from "./Saider.module.scss";
import Men from "../../../public/sigma.svg"
import Blec from "../../../public/Icon_blec.svg";
import Ico from "../../../public/Icon.png"



const Saider = () => {

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={scss.div_b} onClick={onClick}>
        <div className={scss.cub}>
        <p>Next</p>
        <img src={Ico} alt="" />
        </div>
      </div>
    );
  };
  
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    console.log("Prev arrow clicked"); 
    return (
      <div className={scss.div_a} onClick={onClick}>
        <div className={scss.cub}>
        <img src={Blec} alt="" />
        <p>Prev</p>
        </div>
      </div>

    );
  };
  const profiles = [
    {
      img: Men,
      name: "John Doe",
      role: "Developer",
    },
    {
      img: Men,
      name: "Jane Smith",
      role: "Designer",
    },
    {
      img: Men,
      name: "Alice Brown",
      role: "Manager",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className={scss.slider}>
      <h1>“Lorem ipsum dolor sit amet, <br /> consectetur <span>adipiscing elit, sed do <br />  eiusmod </span> tempor incididunt ut <br /> labore et dolore”</h1> 
      <Slider {...settings}>
        {profiles.map((profile, index) => (
          <div key={index}>
            <img className={scss.sigma}
              src={profile.img}
              alt={profile.name}
            />
            <div className={scss.slei}>
            <h3>{profile.name}</h3>
            <p className={scss.pa}>{profile.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};



export default Saider;



