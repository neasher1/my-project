import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllSingleFood from './AllSingleFood';

const AllFoods = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/all-employee')
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(error => console.log(error))
    }, [])
    console.log(foods);

    return (
        <div className='my-20 max-w-screen-xl mx-auto'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold text-pink-600'>Our All Employee</h2>
        </div>
        <div className='grid md:grid-cols-3'>
            {
                foods.map(food => <AllSingleFood
                    key={food._id}
                    food={food}
                ></AllSingleFood>)
            }
        </div>
    </div>
    );
};

export default AllFoods;