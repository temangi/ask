import scss from "./Main.module.scss";
// import zametki from "../../../public/zametki.svg"


function Main ({photo}){
    return(
      <section className={scss.main} style={{background : `url(${photo})`}} >
        <div className={scss.text}>
          <h1>Your small business <br /> growth advisors</h1>
          <p>Get help from Alex Moore, a professional business coach with <br />
           advanced experience on growth and business scaling.</p>
           <div className={scss.cnopka}>
            <button>Our Services</button>
            <button className={scss.cnopka2}> <img src={""} alt="" />  Book a Meeting</button>
           </div>
        </div>
      </section>
    )
}

export default Main