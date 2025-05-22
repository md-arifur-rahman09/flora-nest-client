import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PlantDetails = () => {
    const treeDetails = useLoaderData();
    const navigate=useNavigate();
    const { photo, plantName, notes, soil, species, sunlight, water, email } = treeDetails;

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center py-10 px-4">
            <div className="bg-white bg-opacity-70 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full flex flex-col lg:flex-row p-6 lg:p-10 gap-8">
                <div className="flex-shrink-0 w-full lg:w-1/2">
                    <img
                        src={photo}
                        alt={plantName}
                        className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
                    />
                </div>
                <div className="flex-grow w-full lg:w-1/2">
                    <h1 className="text-4xl lg:text-5xl font-bold text-green-700 mb-2">{plantName}</h1>
                    <p className="text-lg font-medium text-gray-600 mb-4">{species}</p>
                    <p className="text-gray-700 mb-4">{notes}</p>

                    <div className="space-y-2 text-gray-800">
                        <p>
                            <span className="font-semibold">🌱 Soil Type:</span> {soil}
                        </p>
                        <p>
                            <span className="font-semibold">☀️ Sunlight:</span> {sunlight} hrs/day
                        </p>
                        <p>
                            <span className="font-semibold">💧 Water:</span> {water} ml/day
                        </p>
                    </div>

                    <div className="mt-6 text-sm text-gray-600">
                        <p>Added by: <span className="font-semibold text-green-800">{email}</span></p>
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={()=>navigate(-1)}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            ⬅ Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
