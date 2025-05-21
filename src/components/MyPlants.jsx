import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const MyPlants = () => {
    const {user}=use(AuthContext)
    const trees=useLoaderData();
  
    console.log(trees)
    const myTrees= trees.filter(tree=> tree.email == user.email);
    console.log(myTrees)
    
    return (
        <div>
          {myTrees.map(t=> <p className='text-4xl font-bold'> {t.plantName}</p>)}
        </div>
    );
};

export default MyPlants;