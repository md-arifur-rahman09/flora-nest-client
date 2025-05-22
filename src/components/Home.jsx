import React, { use } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Slider from './Slider';

const Home = () => {
    const { dark } = use(AuthContext);
    const plants = useLoaderData();






    return (
        <div className={dark ? "bg-gray-700 text-white" : "bg-white text-black"} >



            {/* Banner / Slider */}
            <Slider></Slider>

            {/* New Plants */}
            <section className="py-8 px-4">
                <h2 className="text-3xl font-semibold text-center mb-6">🌿 New Plants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plants.map(plant => (
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

 



        </div>
    );
};

export default Home;
