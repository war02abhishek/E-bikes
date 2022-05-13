import React from "react";
import Title from "./Title";
export default function FeaturedVehicles() {
  const bikes = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSFy3SKzSc7LjQT3Pj3NDLDtE0JJlS3isRQ&usqp=CAU",
      title: "SronZ Electric Scooter-Motorcycle",

      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshFKOqbQ9y_6enNSQf1Ph8r6QD6o4QoiY0pGy7uLzMq6PQqNNJwjZyZStGtoNt29suTo&usqp=CAU",
      title: "Electric Scooter-Motorcycle",

      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6pWKzSlBZsfTyXflxoa5gb7V233CabGKFcrc7zlSVoQp5LvzJg8d8y3Xirwb29xu_XU&usqp=CAU",
      title: "TronZ-Electric Scooter-Motorcycle",

      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSFy3SKzSc7LjQT3Pj3NDLDtE0JJlS3isRQ&usqp=CAU",
      title: "Tr-Electric Scooter-Motorcycle",

      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnL5XTg8K1eoQZacnTdz70xaDN5VJfAS6EbbpDyP5EDf4ecC8DA2AC-wZx4JLgJgreys&usqp=CAU",
      title: "TriEng-Electric Scooter-Motorcycle",

      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAsvRSkTNHCxJVxQsAzNGtHWv_3hZBwxVTnAkNZJO3n7q1Lq4Rla8PoWtU8N3iLI7kHc&usqp=CAU",
      title: "ASKT-Electric-Electricity-Scooter",

      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCda32gnKcvoR9ulQlvFoDkwoyYy6a8MS5yq3f4_l0NKSsvlqcXt6z5fWReWGWtG9n10&usqp=CAU",
      title: "Mahindra-Electric Scooter-Motorcycle",

      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbK1VaqHBdD5rAPY-qfygPrKGI86lHKDTSUg&usqp=CAU",
      title: "Tata-Electric Scooter-Motorcycle",

      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, accusamus.",
    },
  ];

  return (
    <section className="services">
      <Title title="Featured E-Bikes" />
      <br />
      <div className="services-center">
        {bikes.map((item, index) => {
          return (
            <article key={index} className="service">
              <img classname="bikeimg" src={item.img} alt="" />
              <br></br>
              <h6>{item.title}</h6>
              <button className="btn"> View Details</button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
