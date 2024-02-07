import React from 'react';
import logo from "../Assets/logo.png"

const AboutUs = () => {
    return (
        <div>
            <div className="hero my-8">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 md:gap-16">
                    <div className='w-full'>
                        <img src={logo} className="rounded-lg shadow-xl" alt='logo' />
                        <p className='text-center font-teko mt-2'>Food Panda</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold font-teko text-primary">The Future-Focused Of Food Panda.</h1>
                        <p className="py-6 font-barlow leading-loose">
                        Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Bangladesh is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier. Our online food delivery service has it all, whether you fancy a juicy burger from Takeout, fresh sushi from Samdado or peri peri chicken from Nando's, foodpanda Bangladesh has over 2000 restaurants available from Dhaka to Chittagong through to Sylhet. Did you know you can order your groceries and more from foodpanda, too? Check out foodpanda shops for favourite partners like Unimart, Suborno, Shwapno, Bengal Meat, and much more. Sit back and relax – let foodpanda Bangladesh take the pressure off your shoulders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;