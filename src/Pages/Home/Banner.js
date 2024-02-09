import React from "react";
import bgImage from '../../Assets/bgImage.jpg';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero py-24 bg-gradient-to-r from-accent to-primary text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="w-full" src={bgImage} alt="" />
        <div>
          <h1 className="text-6xl font-bold">It's the food and groceries you love, delivered</h1>
          <p className="py-6 text-2xl font-semibold">
            Leading online automotive foods in Bangladesh
          </p>
          <Link to='/all-foods' className="btn btn-primary text-white">View All Foods</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
