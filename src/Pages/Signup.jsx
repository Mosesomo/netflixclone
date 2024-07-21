import { Link, useNavigate } from "react-router-dom";
import requests  from "../Request";
import { useState } from "react";
import axios from "axios";
import { useAuth } from '../Components/AuthContext';

const Signup = () => {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState(null);
  const [alert, setAlert] = useState({ message: "", type: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${requests.requestAuthentication}/auth/register`, register);
      const { data } = response;
      login(data.user, data.token);
      setAlert({ message: response.data.message, type: "success" });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      console.error(err);
      setAlert({ message: err.response?.data?.message || "An error occured!!", type: "error" });
    }
  }

  return (
    <>
      <div className="w-full h-full">
            <img className="w-full h-full object-cover absolute" src="https://www.whats-on-netflix.com/wp-content/uploads/2022/08/netflix-logos-cancelations-renewals.webp" alt="" />
            <div className="fixed w-full h-full top-0 left-0 bg-black/70"></div>
            <div className="w-[100%] absolute flex justify-center py-24 mt-10">
                <div className="w-[300px] lg:w-[450px] md:w-[400px] h-[610px] mb-5 bg-black/75 py-10 lg:px-7 md:px-8">
                    {alert.message && (
                        <div className={` p-1 mt-3 mb-3 text-center rounded ${alert.type === 'success' ? 'border-[1px] border-green-700 font-bold text-sm' : 'border-[1px] border-red-700 text-red-600 text-sm'}`}>
                            {alert.message}
                        </div>
                    )}
                    <h1 className="text-bold text-3xl text-center">Sign Up</h1>
                    <form className="flex flex-col p-5" onSubmit={handleSubmit}>
                        <input
                          className="p-1 mb-5 text-[14px] bg-gray-700 outline-none rounded"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={register.firstName} onChange={handleChange}
                        />
                        <input
                          className="p-1 mb-5 text-[14px] bg-gray-700 outline-none rounded"
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={register.lastName}
                          onChange={handleChange}
                        />
                        <input
                          className="p-1 mb-5 text-[14px] bg-gray-700 outline-none rounded"
                          type="phone"
                          name="phone"
                          placeholder="Phone"
                          value={register.phone}
                          onChange={handleChange}
                        />
                        <input
                          className="mb-5 p-1 text-[14px] bg-gray-700 outline-none rounded"
                          type="Email" name="email"
                          id="" placeholder="Enter Email Address"
                          value={register.email}
                          onChange={handleChange}
                        />
                        <input
                          className="p-1 bg-gray-700 outline-none rounded"
                          type="password"
                          name="password"
                          placeholder="password"
                          value={register.password}
                          onChange={handleChange}
                        />
                        <button type="submit" className="bg-red-600 mt-7 py-2 rounded font-bold hover:scale-105 duration-300">Sign up</button>
                        <div className="flex justify-between items-center text-sm text-gray-500 py-5">
                            <small className=""><input className="mr-2" type="checkbox" name="" id="" />Remember me</small>
                            <small>Need help?</small>
                        </div>
                        <small><span className="text-gray-500 mb-7">Already a Netflix Mamber?</span>{' '}
                        <Link to='/login'>Sign In</Link>
                        </small>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup
