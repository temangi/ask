import scss from "./Audit.module.scss"

function Audit() {
  const Plan = [
    "All",
    "Taxes & Efficiency",
    "Investment banking",
    "Financial Plan",
    "Audit & Evaluation",
  ];
  const plans = Plan.map((el, index) => <p key={index}>{el}</p>);
  return <section className={scss.audit}><main>{plans}</main></section>;

}

export default Audit;
