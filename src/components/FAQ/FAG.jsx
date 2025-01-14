import scss from "./FAG.module.scss";
import Card from "./Card/Card";
import Title from "../Title/Title";

const Fagmain = [
  {
    title: "What will happen when I ve sent my application?",
    spantitle:
      "Ippsum is the result of synergy between our teams and our customers. Our company  culture is focused on excellent productivity, customer satisfaction, respect for team and  individual achievements",
  },
  {
    title: "What will happen when I ve sent my application?",
    spantitle:
      "Ippsum is the result of synergy between our teams and our customers. Our company  culture is focused on excellent productivity, customer satisfaction, respect for team and  individual achievements",
  },
  {
    title: "Will membership plans be charged automatically?",
    spantitle:
      "Ippsum is the result of synergy between our teams and our customers. Our company  culture is focused on excellent productivity, customer satisfaction, respect for team and  individual achievements",
  },
  {
    title: "What will happen when I’ve sent my application?",
    spantitle:
      "Ippsum is the result of synergy between our teams and our customers. Our company  culture is focused on excellent productivity, customer satisfaction, respect for team and  individual achievements",
  },
  {
    title: "Can I get a free trial before I purchase?",
    spantitle:
      "Ippsum is the result of synergy between our teams and our customers. Our company  culture is focused on excellent productivity, customer satisfaction, respect for team and  individual achievements",
  },
];

function FAG() {
  const middlepart = Fagmain.map((el, index) => <Card key={index} {...el} />);

  return (
    <>
      <section className={scss.FAGstart}>
        <Title title={"FAQ"}/>
        <h1>Customer Questions</h1>
        <main>{middlepart}</main>
      </section>
    </>
  );
}
export default FAG;
