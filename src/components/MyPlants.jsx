import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const MyPlants = () => {
    const { user,dark} = use(AuthContext)
    const initialTrees = useLoaderData();
const[trees,setTrees]=useState(initialTrees) 

    // console.log(trees)
    const myTrees = trees.filter(tree => tree.email == user.email);
    // console.log(myTrees)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/trees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("data after Delete", data);
                        if(data.deletedCount){
                            Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remainingTrees= trees.filter(t=> t._id !== id);
                        setTrees(remainingTrees)
                        }
                    })

            }
        });
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className={dark && "text-white"}>
                        <th>
                            No
                        </th>
                        <th>Name</th>
                        <th>Species</th>
                        <th>Detail</th>
                        <th>Notes</th>
                        <th>Added By</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        myTrees.map((tree, index) => <tr key={tree._id}>
                            <th>
                                <label>
                                    {index + 1}
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
                            <td>
                                {tree.email}
                            </td>


                            <th>
                                <div className="join join-vertical space-y-2 ">

                                    <Link to={`/plantDetails/${tree._id}`}><button className="btn btn-ghost btn-xs  text-sm bg-blue-300">Details</button></Link>

                                    <Link to={`/update/${tree._id}`} ><button className="btn btn-success btn-xs text-sm pr-1 ">Update</button></Link>

                                    <button onClick={() => handleDelete(tree._id)} className="btn btn-error  btn-xs text-sm">Delete</button>


                                </div>
                            </th>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyPlants;