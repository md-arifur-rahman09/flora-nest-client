import React from 'react';
import { Link, useLoaderData } from 'react-router';

const PlantDetails = () => {
    const treeDetails = useLoaderData();
 
    const {photo,plantName,notes, soil,species,sunlight,water,email}=treeDetails;

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={photo}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{plantName}</h1>
                    <p className='mt-1'>{species}</p>
                    <p className="py-6">
                       {notes}
                    </p>
                    <p><span className='font-semibold text-md'>Soil required : </span>{soil}</p>
                    <p><span className='font-semibold text-md'> Sunlight needed : </span>min {sunlight}/Day</p>
                    <p><span className='font-semibold text-md'> Water needed </span>min {water}/Day</p>

                    <br />
                    <p>Add From <span className='text-md font-medium'> {email}</span></p>
                   <Link to='/allplants'>  <button className="btn btn-primary  mt-3">Go Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;