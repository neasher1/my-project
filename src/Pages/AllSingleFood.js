import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllSingleFood = ({ food }) => {
  const { _id, employeeName, employeeEmail, address, img, salary, designation, mbleNumber, date, description } = food;


  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5001/all-employee/${id}`, {
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
        <h2 className="card-title text-primary">{employeeName}</h2>
        <h2 className="card-title text-primary">{employeeEmail}</h2>
        <h2 className="card-title text-primary">{address}</h2>
        <h2 className="card-title text-primary">{salary}</h2>
        <h2 className="card-title text-primary">{designation}</h2>
        <h2 className="card-title text-primary">{mbleNumber}</h2>
        <h2 className="card-title text-primary">{date}</h2>
        <p>
          {description.length > 100 ? (
            <>{description.slice(0, 100) + "..."}</>
          ) : (
            <>{description}</>
          )}
        </p>
        <div className="card-actions flex-row justify-between mt-2">
          <h2 className="text-2xl font-semibold text-primary">
            Price: ${salary}
          </h2>
        </div>
        <Link to={`/employee/${_id}`} className="btn btn-primary">
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
