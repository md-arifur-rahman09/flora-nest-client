import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlants = () => {
    const treeDetails = useLoaderData();
    // console.log(treeDetails);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTreeData = Object.fromEntries(formData.entries());
        // console.log(updatedTreeData);
        // update data from mongodb
        fetch(`https://flora-nest-server.vercel.app/plants/${treeDetails._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedTreeData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log("data after update", data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your data is successfully updated",
                        showConfirmButton: false,
                        timer:2000
                    });
                }
            })
    }

    return (
        <div className="card bg-base-100 w-full  mt-6 max-w-2xl mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold mb-10 text-center text-gray-700">Update Flower Tree</h1>
                <form onSubmit={handleSubmit} className="fieldset text-sm ">

                    <div className='grid grid-cols-2 gap-6' >
                        <div>
                            <label className="label">Plant Name</label>
                            <input type="text" className="input" placeholder="Plant Name" name='plantName' defaultValue={treeDetails.plantName} required />
                        </div>




                        <div>
                            <label className="label">Species / Type</label>
                            <input type="text" className="input" placeholder="Species / Type" name='species' defaultValue={treeDetails.species} required />
                        </div>

                        <div>
                            <label className="label">Date Added / Planted</label>
                            <input type="text" className="input" placeholder="Date Added / Planted" name='date' defaultValue={treeDetails.date} required />
                        </div>

                        <div>
                            <label className="label">Watering Frequency / Day</label>
                            <input type="text" className="input" placeholder="Watering Frequency" name='water' defaultValue={treeDetails.water} required />
                        </div>

                        <div>
                            <label className="label">Sunlight Requirement / Day</label>
                            <input type="text" className="input" placeholder="Sunlight Requirement" name='sunlight' defaultValue={treeDetails.sunlight} required />
                        </div>

                        <div>
                            <label className="label">Soil Type</label>
                            <input type="text" className="input" placeholder="Soil Type" name='soil' defaultValue={treeDetails.soil} required />
                        </div>

                        <div className='col-span-2'>

                            <label className="label">Notes / Special Instructions</label>
                            <input type="text" className="input w-full" placeholder="Notes / Special Instructions" name='notes' defaultValue={treeDetails.notes} required />
                        </div>


                        <div className='col-span-2'>
                            <label className="label ">Upload PhotoURL</label>
                            <br />
                            <input type="text" className="input w-full" placeholder="Upload PhotoURL" name='photo' defaultValue={treeDetails.photo} required />
                        </div>


                    </div>




                    <button className="btn bg-blue-500 text-white w-full mt-4"> Update tree</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePlants;