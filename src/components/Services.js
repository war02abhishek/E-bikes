import React from "react";
import { FaBook, FaLeaf, FaTools, FaIdCard } from "react-icons/fa";

import Title from "./Title";

export default function Services() {
  //Array
  const services = [
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },
    {
      icon: <FaTools />,
      title: "Low Maintainance",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },
    {
      icon: <FaIdCard />,
      title: "No License",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },
    {
      icon: <FaBook />,
      title: "No Registartion",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },
  ];

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
