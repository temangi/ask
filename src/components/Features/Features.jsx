import React from "react";
import scss from "./Features.module.scss"
import size from "../../../public/size.svg"
import lesaa from "../../../public/lesaa.svg"
import jeer from "../../../public/jeer.svg"
import nastr from "../../../public/nastr.svg"
import Vector from "../../../public/Vector.svg"
import Title from "../Title/Title";

const CoreValues = () =>{
    return (
      <section className={scss.features}>
        <div>
          <Title title={"Growing with our Clients"} />
          <h1>Our core values & principles</h1>
          <article>
            <button className={scss.touch}>Get in touch</button>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity beta test. <br /> Override the digital divide with
              additional from DevOps.
            </p>
          </article>

          <main className={scss.featuresMain}>
            <div>
              <img src={size} alt="" />
              <h4>Creative Ideas</h4>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
                <br /> Mauris eget accumsan augue <br /> Donec aliquam.
              </p>
              <h3>
                Read More <img src={Vector} alt="" />{" "}
              </h3>
            </div>
            <div>
              <img src={lesaa} alt="" />
              <h4>Best Features</h4>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
              <h3>
                Read More <img src={Vector} alt="" />{" "}
              </h3>
            </div>
            <div>
              <img src={jeer} alt="" />
              <h4>Experience</h4>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
                <br /> Mauris eget accumsan augue <br /> Donec aliquam.
              </p>
              <h3>
                Read More <img src={Vector} alt="" />{" "}
              </h3>
            </div>
            <div>
              <img src={nastr} alt="" />
              <h4>Easy Solutions</h4>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
              </p>
              <h3>
                Read More <img src={Vector} alt="" />{" "}
              </h3>
            </div>
          </main>
        </div>
      </section>
    );
}

export default CoreValues;
