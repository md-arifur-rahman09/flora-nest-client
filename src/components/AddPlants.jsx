import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

const AddPlants = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const treeData = Object.fromEntries(formData.entries());

    fetch('https://flora-nest-server.vercel.app/plants', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(treeData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Plant added successfully!',
            showConfirmButton: false,
            timer: 2500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full mt-6 max-w-2xl mx-auto shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-green-900">
          Add New Flower Plant
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">🌿 Plant Name</label>
              <input type="text" name="plantName" placeholder="Plant Name" required className="input input-bordered w-full" />
            </div>

            <div>
              <label className="label">🔍 Species / Type</label>
              <input type="text" name="species" placeholder="Species or Type" required className="input input-bordered w-full" />
            </div>

            <div>
              <label className="label">📅 Added Date</label>
              <input type="date" name="date" defaultValue={new Date().toISOString().split('T')[0]} readOnly className="input input-bordered w-full" />
            </div>

            <div>
              <label className="label">💧 Watering (ml/day)</label>
              <input type="text" name="water" placeholder="e.g. 500" required className="input input-bordered w-full" />
            </div>

            <div>
              <label className="label">☀️ Sunlight (hrs/day)</label>
              <input type="text" name="sunlight" placeholder="e.g. 6" required className="input input-bordered w-full" />
            </div>

            <div>
              <label className="label">🪴 Soil Type</label>
              <input type="text" name="soil" placeholder="e.g. Clay, Sandy" required className="input input-bordered w-full" />
            </div>
          </div>

          <div>
            <label className="label">📝 Notes / Special Instructions</label>
            <textarea name="notes" rows="2" placeholder="e.g. Water every morning" required className="textarea textarea-bordered w-full" />
          </div>

          <div>
            <label className="label">📸 Photo URL</label>
            <input type="text" name="photo" placeholder="Image link" required className="input input-bordered w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">📧 User Email</label>
              <input type="email" name="email" defaultValue={user?.email} readOnly className="input input-bordered w-full bg-gray-100" />
            </div>

            <div>
              <label className="label">👤 Name</label>
              <input type="text" name="name" defaultValue={user?.displayName} readOnly className="input input-bordered w-full bg-gray-100" />
            </div>
          </div>

          <button className="btn bg-green-600 hover:bg-green-700 text-white w-full mt-4">
            ➕ Add Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlants;
