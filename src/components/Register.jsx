import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router';

const SignUp = () => {
  const { createUser, updateUser } = use(AuthContext);
  const [error, setError] = useState("")
  const navigate = useNavigate();

  // console.log(createUser)

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email,password,name,photo)
    const profile = {
      displayName: name,
      photoURL: photo
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        navigate('/')
        updateUser(profile)
          .then(() => { })
          .catch(error => console.log(error.message))
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message)
      })
  }
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Please Register</h1>
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label" >Name</label>
          <input type="text" name='name' className="input" placeholder="Name" required />
          <label className="label">PhotoURL</label>
          <input type="text" name='photo' className="input" placeholder="PhotoURL" required />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password"
            required />
          <p className='text-red-500'>{error}</p>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>Already have an account.<Link className='text-blue-400 underline' to='/login'> Login </Link> now</p>
      </div>
    </div>
  );
};

export default SignUp;