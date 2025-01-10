import scss from "./Procces.module.scss";
import clock from  "../../../public/clock.svg"
import lesa from "../../../public/lesa.svg"
import jer from "../../../public/jer.svg"
import afafaf from "../../../public/afafaf.svg"
import bir from "../../../public/bir.svg"
import eki from "../../../public/eki.svg"
import uch from "../../../public/uch.svg"

const Procces = () => {
  return (
    <div className={scss.container}>
      <div className={scss.content}>
        <div className={scss.section}>
          <div className={scss.left}>
            <h1>
              There have some easy <br /> steps to join with us!
            </h1>
            <p>
              Leverage agile frameworks to provide a robust synopsis for hig
              <br />
              level overviews. Iterative approaches to corporate strategy foster
              <br />
              collaborative thinking to further the overall value proposition.
            </p>
            <ol>
              <span>
                <img src={bir} alt="" />
                <h4>
                  Setup Account
                  <p>
                    We understand the importance of approaching <br /> each work
                    integrally.
                  </p>
                </h4>
              </span>
              <span>
                <img src={eki} alt="" />
                <h4>
                  Setup Account
                  <p>
                    We understand the importance of approaching <br /> each work
                    integrally.
                  </p>
                </h4>
              </span>
              <span>
                <img src={uch} alt="" />
                <h4>
                  Setup Account
                  <p>
                    We understand the importance of approaching <br /> each work
                    integrally.
                  </p>
                </h4>
              </span>
            </ol>
          </div>
          <div className={scss.right}>
            <h1>30 Years of Experience</h1>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity beta <br />
              test. Override the digital divide with additional from DevOps.{" "}
              <br />
              <span>
                Leverage agile frameworks to provide a robust synopsis for high
                level <br />
                overviews. Iterative approaches to corporate strategy foster
                collaborative <br />
                thinking to further the overall value proposition.
              </span>
            </p>
            <div className={scss.grid}>
              <div>
                <img src={clock} alt="" />
                <h4>Consistency</h4>
                <p>
                  Podcasting operational change <br /> management workflow.
                </p>
              </div>
              <div>
                <img src={lesa} alt="" />
                <h4>Improvement</h4>
                <p>
                  Podcasting operational change <br /> management workflow.
                </p>
              </div>
              <div>
                <img src={jer} alt="" />
                <h4>Branching</h4>
                <p>
                  Podcasting operational change <br /> management workflow.
                </p>
              </div>
              <div>
                <img src={afafaf} alt="" />
                <h4>Company Growth</h4>
                <p>
                  Podcasting operational change <br /> management workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procces;
