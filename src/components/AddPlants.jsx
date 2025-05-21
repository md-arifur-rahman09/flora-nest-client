import React from 'react';

const AddPlants = () => {
     const handleSubmit=e=> {
        e.preventDefault();
        const form=e.target;
        const fromData= new FormData(form);
        const treeDetaits= Object.fromEntries(fromData.entries());
        console.log(treeDetaits)


        
     }
    return (
   
    <div className="card bg-base-100 w-full  mt-6 max-w-2xl mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold mb-10 text-center text-gray-700">Add new Flower</h1>
        <form onSubmit={handleSubmit} className="fieldset text-sm ">
            
        <div className='grid grid-cols-2 gap-6' >
             <div>
             <label className="label">Plant Name</label>
          <input type="text" className="input" placeholder="Plant Name" name='plantName' />
         </div>

        
        
          
          <div>
            <label className="label">Species / Type</label>
          <input type="text" className="input" placeholder="Species / Type" name='species' />
          </div>

          <div>
            <label className="label">Date Added / Planted</label>
          <input type="text" className="input" placeholder="Date Added / Planted" name='date' />
          </div>
      
         <div>
             <label className="label">Watering Frequency / Day</label>
          <input type="text" className="input" placeholder="Watering Frequency" name='water' />
         </div>

        <div>
              <label className="label">Sunlight Requirement / Day</label>
            <input type="text" className="input" placeholder="Sunlight Requirement" name='sunlight' />
        </div>

          <div>
            <label className="label">Soil Type</label>
            <input type="text" className="input" placeholder="Soil Type" name='soil' />
          </div>

         <div className='col-span-2'>
            
                <label className="label">Notes / Special Instructions</label>
          <input type="text" className="input w-full" placeholder="Notes / Special Instructions" name='notes' />
             </div>

       
         <div className='col-span-2'>
          <label className="label ">Upload PhotoURL</label>
          <br />
          <input type="text" className="input w-full" placeholder="Upload PhotoURL" name='photo' />
       </div>

        </div>
          <button className="btn bg-blue-500 text-white w-full mt-4">Add tree</button>
        </form>
      </div>
    </div>
 
    );
};

export default AddPlants;