import React, { useState } from "react";
import { useLoaderData, useLocation, Link } from "react-router";
import { FaSearch } from "react-icons/fa";

const AllPlants = () => {
    const trees = useLoaderData();
    const location = useLocation();

    const [sortOrder, setSortOrder] = useState("asc");
    const [filterText, setFilterText] = useState("");

    const filteredTrees = trees
        ?.filter(tree =>
            tree.plantName.toLowerCase().includes(filterText.toLowerCase())
        )
        ?.sort((a, b) =>
            sortOrder === "asc"
                ? a.plantName.localeCompare(b.plantName)
                : b.plantName.localeCompare(a.plantName)
        );

    return (
        <div className="px-4 md:px-10 py-10">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-6">🌿 All Plants</h2>

            {/* Search and Sorting */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                {/* Search with button */}
                <div className="relative w-full md:w-[250px]">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input input-bordered w-full pr-10 text-sm"
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                    <button className="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-green-700">
                        <FaSearch />
                    </button>
                </div>

                {/* Sorting */}
                <select
                    className="select select-bordered text-sm"
                    onChange={(e) => setSortOrder(e.target.value)}
                    value={sortOrder}
                >
                    <option value="asc">Sort A-Z</option>
                    <option value="desc">Sort Z-A</option>
                </select>
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTrees?.map((tree) => (
                    <div
                        key={tree._id}
                        className="card bg-white shadow-md rounded-lg flex flex-col justify-between min-h-[470px]"
                    >
                        <img
                            src={tree.photo}
                            alt={tree.plantName}
                            className="h-52 w-full object-cover rounded-t-lg"
                        />
                        <div className="p-4 flex flex-col flex-grow justify-between">
                            <h3 className="text-2xl font-bold mb-2 text-green-700">{tree.plantName}</h3>

                            <p className="text-sm text-gray-600 mb-3">
                                📝 {tree.notes?.slice(0, 80)}...
                            </p>

                            <div className="text-sm text-gray-700 space-y-1 mb-4">
                                <p>
                                    <span className="font-semibold">🌱 Species:</span>{" "}
                                    <span className="capitalize">{tree.species}</span>
                                </p>
                                <p>
                                    <span className="font-semibold">💧 Water Needed:</span>{" "}
                                    {tree.water} ml/day
                                </p>
                                <p>
                                    <span className="font-semibold">☀️ Sunlight:</span>{" "}
                                    {tree.sunlight} hrs/day
                                </p>
                            </div>

                            <Link state={location.pathname} to={`/plantDetails/${tree._id}`}>
                                <button className="btn btn-md bg-green-600 text-white w-full mt-auto">
                                    See More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default AllPlants;
