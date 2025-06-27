import React, { useState } from 'react';

const GardeningTips = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const blogs = [
        {
            title: "5 Indoor Plants That Purify Your Air",
            desc: "Learn which plants help clean the air inside your home and how to care for them easily.",
            fullContent: "Some of the best indoor plants for purifying air include Spider Plant, Snake Plant, Peace Lily, Aloe Vera, and Rubber Plant. These are low-maintenance and improve air quality. Ensure bright indirect light and water only when the top soil feels dry.",
            image: "https://cielowigle.com/wp-content/uploads/2021/08/Houseplants.jpg"
        },
        {
            title: "Make a Balcony Garden",
            desc: "Even with limited space, your balcony can be a green haven. Here's how!",
            fullContent: "Choose railing planters, hanging pots, and vertical shelves to maximize space. Use herbs, succulents, and flowering plants that grow well in containers. Make sure to assess sunlight exposure and water drainage properly.",
            image: "https://bluestem.ca/wp-content/uploads/2025/02/organized-balcony-garden-setup.jpg"
        },
        {
            title: "Watering Schedules for Beginners",
            desc: "A beginner’s guide to knowing when and how much to water your plants.",
            fullContent: "Water early in the morning or late in the afternoon. Stick your finger 1 inch into the soil—if it’s dry, it’s time to water. Use a moisture meter for better accuracy and group plants with similar watering needs together.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_kpVGEflE9D5Np1MzGxx9NWd3JsBGxPXoA&s"
        }
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-green-900">📚 Gardening Tips Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-green-800 mb-2">{blog.title}</h3>
                            <p className="text-gray-700 text-sm">{blog.desc}</p>

                            {expandedIndex === index && (
                                <p className="text-gray-600 text-sm mt-3 border-t pt-3">{blog.fullContent}</p>
                            )}

                            <button
                                onClick={() => toggleExpand(index)}
                                className="mt-4 text-green-600 hover:underline"
                            >
                                {expandedIndex === index ? "Show Less ↑" : "Read More →"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GardeningTips;
