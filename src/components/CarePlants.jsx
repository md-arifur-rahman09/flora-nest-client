import React from 'react';

const CarePlants = () => {
    return (
        <div className="py-10 px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl font-bold text-center mb-10 text-green-900">🌸 Easy-Care Flowering Plants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { name: "Rose", description: "Classic beauty with stunning blooms, easy to maintain." },
                    { name: "Jasmine", description: "Fragrant blossoms that thrive with minimal care." },
                    { name: "Marigold", description: "Bright and cheerful flowers, great for any garden." },
                    { name: "Hibiscus", description: "Tropical charm with large, eye-catching blooms." },
                    { name: "Lavender", description: "Aromatic, calming, and resilient in various climates." }
                ].map((flower, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md w-full text-center hover:shadow-lg transition-all duration-300"
                    >
                        <h3 className="font-semibold text-xl text-green-800">{flower.name}</h3>
                        <p className="mt-3 text-gray-700">{flower.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarePlants;
