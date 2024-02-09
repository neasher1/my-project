import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../Assets/pizza.png";

const WeeklyOffer = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-20">
            <div className="hero-content grid md:grid-cols-2">
                <div>
                    <img style={{ width: '500px' }} src={img} alt="" />
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-primary">Weekly Offer:</h3>
                    <h1 className="text-6xl font-extrabold text-primary">Pepperoni <br /> Mushroom</h1>
                    <p className="text-3xl font-semibold italic">$10.00</p>
                    <p className="py-6">100 % Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun.</p>

                    <div className='grid grid-cols-2 gap-4'>
                        <ul className="steps steps-vertical">
                            <li className="step step-primary">Cremini Mushrooms</li>
                            <li className="step step-primary">Pepperoni Slices</li>
                            <li className="step step-primary">Homemade Marinara</li>
                        </ul>
                        <ul className="steps steps-vertical">
                            <li className="step step-primary">Cheddar Cheese</li>
                            <li className="step step-primary">Mozzarella Cheese</li>
                            <li className="step step-primary">Salt, paper, italian seasoning</li>
                        </ul>
                    </div>

                    <Link to='/all-foods' className="btn btn-primary">View All Foods</Link>
                </div>
            </div>
        </div>
    );
};

export default WeeklyOffer;