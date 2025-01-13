import scss from "./Team.module.scss";
import img1 from "../../../public/team.svg"
import img2 from "../../../public/teamImg2.svg"
import img3 from "../../../public/teamImg3.svg"
import inst from "../../../public/taemI.svg"
import fes from "../../../public/teamF.svg"
import twi from "../../../public/teamT.svg"

const data =[
    {
        img:img1,
        name:"Sarah Jasmine",
        stat: "CEO at Company"
    },
    {
        img:img2,
        name:"John Carter",
        stat: "Manager"
    },
    {
        img:img3,
        name:"Daisy Stella",
        stat: "CEO at Company"
    },
]

function Team() {

    const li = data.map((el, index)=> (
        <li key={index}>
            <img src={el.img} alt="" className={scss.teamImg}/>
            <span>{el.stat}</span>
            <h2>{el.name}</h2>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
            <nav>
                <a href="#"><img src={inst} alt="" /></a>
                <a href="#"><img src={fes} alt="" /></a>
                <a href="#"><img src={twi} alt="" /></a>
            </nav>
        </li>
    ))
  return (
    <section className={scss.Team}>
      <div className={scss.container}>
        <span className={scss.title}>OUR TEAM</span>
        <h3>We champion the bold to achieve the extraordinary</h3>
        <p className={scss.p}>
          Ippsum is the result of synergy between our teams and our customers.
          Our company culture is focused on excellent productivity, customer
          satisfaction, respect for team.
        </p>
        <ul>
            {li}
        </ul>
      </div>
    </section>
  );
}

export default Team;
