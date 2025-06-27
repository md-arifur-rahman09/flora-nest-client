import React, { use, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Login = () => {
  const { loginUser, forgetPassword, loginWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const location = useLocation();
  // console.log(location)



  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // login user
    loginUser(email, password)
      .then((result) => {
        // console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are successfully logged in.",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location?.state || "/")
      })
      .catch(error => {
        // console.log(error.message)
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
        // console.log(error.message);
      });
  }

  const handleGoogle = () => {
    loginWithGoogle()
      .then(result => {
        // console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are successfully logged in with Google",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/")
      })
      .catch(error => {
        // console.log(error.message)
      })
  }
  return (

    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label" >Email</label>
          <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" required />
          <input
            type="password"
            name="password"
            className="input"
            pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
            placeholder="Password"
            title="Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long."
            required
          />
          <div><a onClick={handleForgetPassword} className="link link-hover underline text-green-500">Forgot password?</a></div>
          <button className="btn btn-primary mt-4">Login</button>
        </form>
        {/* Google */}
        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5] hover:bg-green-200">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
        <p>Don't have an account. Please <Link className='text-green-400 underline' to='/register'>register</Link></p>
      </div>
    </div>

  );
};

export default Login;