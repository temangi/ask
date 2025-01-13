import React from "react";
import scss from "./Features.module.scss"

const CoreValues = () => {
  const values = [
    {
      icon: "🖌️",
      title: "Creative Ideas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue.",
    },
    {
      icon: "📊",
      title: "Best Features",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue.",
    },
    {
      icon: "🎓",
      title: "Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue.",
    },
    {
      icon: "⚙️",
      title: "Easy Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue.",
    },
  ];

  return (
    <div className="core-values-container">
      <div className="header">
        <h2>Growing with Our Clients</h2>
        <h3>Our core values & principles</h3>
        <p>
          Capitalize on low hanging fruit to identify a ballpark value added
          activity beta test.
        </p>
        <p>Override the digital divide with additional from DevOps.</p>
      </div>
      <div className="values-grid">
        {values.map((value, index) => (
          <div key={index} className="card">
            <div className="icon">{value.icon}</div>
            <h4 className="card-title">{value.title}</h4>
            <p className="card-description">{value.description}</p>
            <a href="#" className="read-more">
              Read More →
            </a>
          </div>
        ))}
      </div>
      <button className="get-in-touch">Get in touch</button>
    </div>
  );
};

export default CoreValues;
