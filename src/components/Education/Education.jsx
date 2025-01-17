import scss from "./Education.module.scss";
import Title from "../Title/Title";
import { data } from "react-router-dom";

const Resume = [
  {
    title: "Financial Projections",
    desc: "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.",
    data: "Finance Сourse - New York (2018 - 2019)",
  },
  {
    title: "Corporate Finance",
    desc: "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.",
    data: "Finance Сourse - New York (2018 - 2019)",
  },
  {
    title: "Finance Consultant",
    desc: "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.",
    data: "Finance Сourse - New York (2018 - 2019)",
  },
  {
    title: "Financial Projections",
    desc: "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.",
    data: "Finance Сourse - New York (2018 - 2019)",
  },
];
function Education() {
  const cards = Resume.map(({ title, desc, data }, index) => (
    <div>
      <p>{data}</p>
      <h2>{title}</h2>
      <span>
       {desc}
      </span>
    </div>
  ));

  return (
    <section className={scss.education}>
      <Title title={"Information"} />
      <h1>My Resume</h1>
      <article>
       <aside>
       <Title title={"Education"} />
       <Title title={"Education"} />
       </aside>
       <main>{cards}</main>
      </article>
    </section>
  );
}

export default Education;
