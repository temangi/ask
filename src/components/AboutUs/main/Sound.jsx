import scss from "./Sound.module.scss"
import React from "react"
import talk from "../../../../public/talk.png";
import mukaltin from "../../../../public/mukaltin.png"
import star from "../../../../public/star.png"
import smail from "../../../../public/smail.png"
import Patter from "../../../../public/Pattern.png";
import AboutUs from "../AboutUs";



function Sound (){
    return(

      <>
        <AboutUs/>
        <section className={scss.aboutSection}>.
        <div className={scss.aboutText}>
          <p className={scss.aboutTitle}>ABOUT US</p>
          <h4>About our Consulting <br /> Agency Team</h4>
          <p className={scss.aboutDescription}>
            <br />
            <strong>We create experiences and build products that <br /> make business grow.</strong>
            <br />
            Get help from Alex Moore, a professional business coach <br /> with advanced 
            experience in growth and business scaling.
          </p>
          <hr  />
          <div className={scss.stats}>
            <div className={scss.stat}>
              <h3> <img src={star} alt="" />  400+</h3>
              <p>Business Services</p>
            </div>
            <br />
            <div className={scss.start}>
              <h4> <img src={smail} alt="" />  100+</h4> 
              <p>Happy Customer</p>
            </div>
          </div>
          <br />
          <hr />
        </div>
        <div className={scss.aboutImage}>
          <img src={talk} alt="" className={scss.teamImage}/>
          <img src={Patter} alt="" className={scss.loi}/>
          <div className={scss.experienceBadge}>
            <p> <img src={mukaltin} alt="" /></p>
            
          </div>
        </div>
      </section>
      </>
  );
}

export default Sound
