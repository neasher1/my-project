import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleFoodDetails = () => {
  const foods = useLoaderData();
  const { _id, productName, description, img, ratings, price } = foods;

  console.log(foods);

  return (
    <div className="card card-compact bg-base-100 shadow-xl m-16">
      <figure>
        <img src={img} alt="pizza" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{productName}</h2>
        <p>{description}</p>
        <div className="card-actions flex-row justify-between mt-2">
          <h2 className="text-2xl font-semibold text-primary">
            Price: ${price}
          </h2>
          <h2 className="text-2xl font-semibold text-primary">
            ratings: ${ratings}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodDetails;
