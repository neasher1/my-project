import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllSingleFood = ({ food }) => {
  const { _id, productName, description, img, ratings, price } = food;

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/all-foods/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
          toast.success("Delete Successfully");
      });
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-16">
      <figure>
        <img src={img} alt="pizza" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{productName}</h2>
        <p>
          {description.length > 100 ? (
            <>{description.slice(0, 100) + "..."}</>
          ) : (
            <>{description}</>
          )}
        </p>
        <div className="card-actions flex-row justify-between mt-2">
          <h2 className="text-2xl font-semibold text-primary">
            Price: ${price}
          </h2>
          <h2 className="text-2xl font-semibold text-primary">
            ratings: ${ratings}
          </h2>
        </div>
        <Link to={`/food/${_id}`} className="btn btn-primary">
          See Details
        </Link>
        <Link onClick={() => handleDelete(_id)} className="btn btn-warning">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default AllSingleFood;
