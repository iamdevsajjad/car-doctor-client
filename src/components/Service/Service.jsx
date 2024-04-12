import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={service.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>
        <p className="font-bold text-orange-600">Price : ${service.price}</p>
        <div className="card-actions ">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
