import React, { use, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Login = () => {
  const { loginUser, forgetPassword } = use(AuthContext);
  const navigate = useNavigate()
  const emailRef = useRef();


  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // login user
    loginUser(email, password)
      .then(result => {
        console.log(result.user);
        navigate("/")
      })
      .catch(error => {
        console.log(error.message)
      })

  }


  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    forgetPassword(email)
      .then(() => {
        // console.log("Password reset email sent.");


       Swal.fire("Password reset email sent.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (

    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label" >Email</label>
          <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />
          <div><a onClick={handleForgetPassword} className="link link-hover underline text-blue-500">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>Don't have an account. Please <Link className='text-blue-400 underline' to='/register'>register</Link></p>
      </div>
    </div>

  );
};

export default Login;