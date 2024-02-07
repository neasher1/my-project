import React from "react";
import foodpandab from "../../Assets/foodpandab.webp";

const FoodPandaBusineess = () => {
  return (
    <div className="hero py-24 bg-gradient-to-">
     <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="w-1/2" src={foodpandab} alt="" />
        <div>
          <h1 className="text-6xl font-bold">foodpanda for business

</h1>
          <p className="py-6 text-2xl font-semibold">
          Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodPandaBusineess;
