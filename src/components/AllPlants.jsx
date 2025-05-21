import React from 'react';
import { Link, useLoaderData } from 'react-router';


const AllPlants = () => {
    const trees = useLoaderData();
    // console.log(trees);
   
    return (

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            No
                        </th>
                        <th>Name</th>
                        <th>Species</th>
                        <th>Detail</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        trees.map((tree,index) => <tr key={tree._id}>
                            <th>
                                <label>
                                    {index+1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={tree.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{tree.plantName}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                {tree.species}
                            </td>
                            <td>Water : {tree.water}/Day
                                <br />
                                Required soil : {tree.soil}
                                <br />
                                Sunlight required : {tree.sunlight} / Day
                            </td>
                            <td>
                                {tree.notes}
                            </td>


                            <th>
                                <Link to={`/plantDetails/${tree._id}`}><button  className="btn btn-ghost btn-xs bg-blue-300">Details</button></Link>
                            </th>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>

    );
};

export default AllPlants;