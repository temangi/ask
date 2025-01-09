import React from "react";
import scss from "./Client.module.scss";
import img1 from "../../../public/img1.svg"
import img2 from "../../../public/img2.svg"
import img3 from "../../../public/img3.svg"
import img4 from "../../../public/img4.svg"
import img5 from "../../../public/img5.svg"
import img6 from "../../../public/img6.svg"
import plus from "../../../public/Plus.svg"

const imgs = [
  {
    back: img1,
    btn: plus,
    title: "Taxes & Efficiency",
    str:"Business"
  },
  {
    back: img2,
    btn: plus,
    title: "Taxes & Efficiency",
    str:"Business"
  },
  {
    back: img3,
    btn: plus,
    title: "Taxes & Efficiency",
    str:"Business"
  },
  {
    back: img4,
    btn: plus,
    title: "Taxes & Efficiency",
    str:"Business"
  },
  {
    back: img5,
    btn: plus,
    title: "Taxes & Efficiency",
    str:"Business"
  },
  {
    back: img6,
    btn: plus,
    title: "Taxes & Efficiency",
    str:"Business"
  }
]
console.log(imgs);
const data = [
  {
    num:1128,
    str:"Successful Work"
  },
  {
    num:908,
    str:"Team member"
  },
  {
    num:258,
    str:"Happy Customers"
  },
  {
    num:564,
    str:"Creative Idea"
  }
]


export default function Client() {
  const li = imgs.map((el, index)=>(
    <li key={index} style={{backgroundImage:`url(${el.back})`}} >
      <p className={scss.bgr}></p>
      <div>
      <button><img src={el.btn} alt="" /></button>
      <span>{el.title}</span>
      <p>{el.str}</p>
      
      </div>
      
    </li>
  ));
  console.log({li});

  const dt = data.map((el, index)=> <li key={index}><p>{el.num}+</p><span>{el.str}</span></li>)
  return (
    <section className={scss.Client}>
      <section>
        <div className={scss.container}>
        <span className={scss.title}>Proccess</span>
        <aside>
        <h3>
          Our client, global analytical techno company, wanted to build market.
        </h3>
        <button>MoreGallery</button>
        </aside>
        <main className={`${scss.innerClient} ${scss.container}`}>
          <ul className={scss.cart} >
            {li}
          </ul>

          <ul>
            {dt}
          </ul>
        </main>
        </div>
      </section>
        
    </section>
  );
}
