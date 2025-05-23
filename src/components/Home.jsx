import React, { use } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Slider from './Slider';
// import { format } from 'date-fns';

const Home = () => {
    const { dark } = use(AuthContext);
    const plants = useLoaderData();






    return (
        <div className={dark ? "bg-gray-700 text-white" : "bg-white text-black"} >



            {/* Banner / Slider */}
            <Slider></Slider>

            {/* New Plants */}
            <section className="py-8 px-4">
                <h2 className={`text-3xl  font-bold text-center mb-6${dark? "text-white":"text-green-950"}`}>🌿 New Plants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plants?.slice(0, 6)?.map(plant => (
                        <div key={plant.id} className="card shadow-lg p-4 bg-base-100">
                            <img src={plant.photo} alt={plant.displayName} className="h-64 w-full object-cover rounded" />
                            <h3 className="text-xl font-bold mt-2">{plant.displayName}</h3>
                            <div className="space-y-2 text-gray-800">
                                <p>
                                    <span className="font-semibold">🌱 Soil Type:</span> {plant.soil}
                                </p>
                                <p>
                                    <span className="font-semibold">☀️ Sunlight:</span> {plant.sunlight} hrs/day
                                </p>
                                <p>
                                    <span className="font-semibold">💧 Water:</span> {plant.water} ml/day
                                </p>
                                <p className="text-sm mb-2"> 📝 {plant.notes}</p>
                            </div>
                            <Link to={`/plantDetails/${plant._id}`}>
                                <button className="btn btn-sm bg-green-500 text-white">View Details</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            {/* Section 1: Common Plant Care Pitfalls */}
            <section className="py-10 px-4 bg-green-50 dark:bg-green-900">
                <h2 className="text-3xl font-bold text-center mb-6">🚫 Avoid These Plant Care Mistakes</h2>
                <ul className="list-disc list-inside max-w-xl mx-auto space-y-3 text-lg text-green-700 dark:text-green-200">
                    <li>Watering too much or too little—balance is key!</li>
                    <li>Not enough sunlight—each plant has unique needs.</li>
                    <li>Using incompatible soil that hinders growth.</li>
                    <li>Neglecting pest control—little critters can wreak havoc.</li>
                </ul>
            </section>
            {/* Section: Flourishing Flower Plants for Your Garden */}
            <section className="py-10 px-4">
                <h2 className="text-3xl font-bold text-center mb-6">🌸 Easy-Care Flowering Plants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {[
                        { name: "Rose", description: "Classic beauty with stunning blooms, easy to maintain." },
                        { name: "Jasmine", description: "Fragrant blossoms that thrive with minimal care." },
                        { name: "Marigold", description: "Bright and cheerful flowers, great for any garden." },
                        { name: "Hibiscus", description: "Tropical charm with large, eye-catching blooms." },
                        { name: "Lavender", description: "Aromatic, calming, and resilient in various climates." }
                    ].map((flower, index) => (
                        <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-72 text-center">
                            <h3 className="font-semibold text-xl">{flower.name}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{flower.description}</p>
                        </div>
                    ))}
                </div>
            </section>





        </div>
    );
};

export default Home;
