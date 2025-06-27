import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlants = () => {
    const treeDetails = useLoaderData();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTreeData = Object.fromEntries(formData.entries());

        fetch(`https://flora-nest-server.vercel.app/plants/${treeDetails._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedTreeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Plant updated successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            });
    };

    return (
        <div className="card bg-base-100 w-full mt-6 max-w-2xl mx-auto shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-green-800">
                    🌱 Update Flower Plant
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="label">🌿 Plant Name</label>
                            <input type="text" name="plantName" defaultValue={treeDetails.plantName} required className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="label">🔍 Species / Type</label>
                            <input type="text" name="species" defaultValue={treeDetails.species} required className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="label">📅 Planted Date</label>
                            <input type="date" name="date" defaultValue={treeDetails.date} required className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="label">💧 Watering (ml/day)</label>
                            <input type="text" name="water" defaultValue={treeDetails.water} required className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="label">☀️ Sunlight (hrs/day)</label>
                            <input type="text" name="sunlight" defaultValue={treeDetails.sunlight} required className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="label">🪴 Soil Type</label>
                            <input type="text" name="soil" defaultValue={treeDetails.soil} required className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div>
                        <label className="label">📝 Notes / Special Instructions</label>
                        <textarea name="notes" rows="2" defaultValue={treeDetails.notes} required className="textarea textarea-bordered w-full" />
                    </div>

                    <div>
                        <label className="label">📸 Photo URL</label>
                        <input type="text" name="photo" defaultValue={treeDetails.photo} required className="input input-bordered w-full" />
                    </div>

                    <button className="btn bg-green-600 hover:bg-green-700 text-white w-full mt-4">
                        ✅ Update Plant
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePlants;
