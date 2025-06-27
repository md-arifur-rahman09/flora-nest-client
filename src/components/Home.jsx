import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Slider from './Slider';
import GardeningTips from './GardeningTips';
import CarePlants from './CarePlants';
import PlantsCareMistakes from './PlantsCareMistakes';

const Home = () => {
    const plants = useLoaderData();
    console.log(plants)

    return (
        <div className="bg-white text-black">
            {/* Banner / Slider */}
            <Slider />

            {/* New Plants */}
            {/* <section className="py-10 px-8 md:px-16 lg:px-20">
                <h2 className="text-3xl font-bold text-center mb-8 text-green-950">🌿 New Plants</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {plants?.slice(0, 9)?.map(plant => (
                        <div
                            key={plant._id}
                            className="card bg-base-100 shadow-lg rounded-lg flex flex-col justify-between min-h-[430px]"
                        >
                            <img
                                src={plant.photo}
                                alt={plant.plantName}
                                className="h-52 w-full object-cover rounded-t-lg"
                            />
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <h3 className="text-xl font-bold mb-2">{plant.plantName}</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    📝 {plant.notes?.slice(0, 80)}...
                                </p>
                                <p> Species : {plant.species}</p>
                                <p> Water needed : {plant.water}</p>
                                <p> sunlight needed : {plant.sunlight}</p>
                                <Link to={`/plantDetails/${plant._id}`}>
                                    <button className="btn btn-sm bg-green-600 text-white w-full">See More</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}
            <section className="py-10 px-8 md:px-16 lg:px-20">
                <h2 className="text-3xl font-bold text-center mb-8 text-green-900">🌿 New Plants</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {plants?.slice(0, 9)?.map(plant => (
                        <div
                            key={plant._id}
                            className="card bg-base-100 shadow-lg rounded-lg flex flex-col justify-between min-h-[470px]"
                        >
                            <img
                                src={plant.photo}
                                alt={plant.plantName}
                                className="h-52 w-full object-cover rounded-t-lg"
                            />
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <h3 className="text-2xl font-bold mb-2 text-green-700">{plant.plantName}</h3>

                                <p className="text-sm text-gray-600 mb-3">
                                    📝 {plant.notes?.slice(0, 80)}...
                                </p>

                                <div className="text-sm text-gray-700 space-y-1 mb-4">
                                    <p><span className="font-semibold">🌱 Species:</span> <span className="capitalize">{plant.species}</span></p>
                                    <p><span className="font-semibold">💧 Water Needed:</span> {plant.water} ml/day</p>
                                    <p><span className="font-semibold">☀️ Sunlight:</span> {plant.sunlight} hrs/day</p>
                                </div>

                                <Link to={`/plantDetails/${plant._id}`}>
                                    <button className="btn btn-md bg-green-600 text-white w-full mt-auto">
                                        See More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Section 1: Plant Care Tips */}
            <section className="py-10 px-8 md:px-16 lg:px-20 bg-green-50">
                <PlantsCareMistakes></PlantsCareMistakes>
            </section>

            {/* Flower Plants */}
            <section className="py-10 px-8 md:px-16 lg:px-20 bg-green-100 border-green-300">
                <CarePlants></CarePlants>
            </section>

            {/* gardening tips */}
            < section className="py-10 px-8 md:px-16 lg:px-20 bg-green-50" >
                <GardeningTips></GardeningTips>
            </section>
        </div>
    );
};

export default Home;
