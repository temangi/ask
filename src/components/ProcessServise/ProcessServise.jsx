import scss from "./ProcessServise.module.scss";
import computer from "../../../public/computer.svg";
import cosholek from "../../../public/cosholek.svg";
import novostroika from "../../../public/novostroika.svg";
import strelka from "../../../public/strelka.svg";

function ProcessServise() {
  return (
    <section className={scss.processservise}>
    
        <img className={scss.computer} src={computer} alt="" />
      <div className={scss.finance}>
        <h1>
          Our Consuting Service <br /> Development
        </h1>

        <main>
          {" "}
          <div>
            <img src={cosholek} alt="" />
            <aside>
              <h3>Banking and Finance</h3>
              <p>
                Professionally fashion wireless leadership rather than <br />
                prospective experiences my cardinate clicks-and-mortar <br />
                testing whereas.
              </p>
            </aside>
          </div>
          <div>
          <img src={novostroika} alt="" />
            <aside>
            <h3>Logistic and Transportation</h3>
            <p>
              Compellingly embrace empowered e-business after user <br />
              friendly intellectual capital. Interactively actualize front-{" "}
              <br />
              end processes.
            </p>
            </aside>
          </div>
          <div>
          <img src={strelka} alt="" />

            <aside>
            <h3>Trading</h3>
            <p>
              Uniquely matrix economically sound value through <br />
              cooperative technology parallel task fully researched data <br />
              and enterprise.
            </p> 
            </aside>
          </div>
        </main>
      </div>
    </section>
  );
}

export default ProcessServise;
