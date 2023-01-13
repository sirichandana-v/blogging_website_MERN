import React from "react";
import "./Card.css";
import pic1 from "../../assets/pic1.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={pic1} alt="" />
      </div>
      <div className="card__text">
        <h5>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quo
          voluptatibus ipsa obcaecati consequatur architecto quia mollitia?
          Porro magnam amet iusto illo voluptate eaque unde molestias autem
          nobis vel. Sapiente obcaecati exercitationem vitae ipsam soluta,
          quisquam consequuntur earum voluptatibus tempora corrupti labore, eius
          dolorum enim.
        </h5>
      </div>
    </div>
  );
};

export default Card;
