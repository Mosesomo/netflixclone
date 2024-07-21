import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../Components/AuthContext';
import axios from 'axios';
import requests from "../Request";


const Login = () => {
    const [signin, setLogin ] = useState({
        email: "",
        password: ""
    });

    const [alert, setAlert] = useState({ message: "", type: "" });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLogin({ ...signin, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${requests.requestAuthentication}/auth/login`, signin);
            login(response.data);
            setAlert({ message: response.data.message, type: "success" });
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (err) {
            console.error(err);
            setAlert({ message: err.response?.data?.message || "An error occured!!", type: "error" });
        }
    }

  return (
    <>
        <div className="w-full h-screen">
            <img className="w-full h-full object-cover absolute" src="https://www.whats-on-netflix.com/wp-content/uploads/2022/08/netflix-logos-cancelations-renewals.webp" alt="" />
            <div className="fixed w-full h-screen top-0 left-0 bg-black/70"></div>
            <div className="w-[100%] absolute flex justify-center py-24 mt-12">
                <div className="w-[300px] lg:w-[450px] md:w-[400px] h-[480px] bg-black/75 p-4 py-10 md:px-9">
                    {alert.message && (
                        <div className={` p-1 mt-3 mb-3 text-center rounded ${alert.type === 'success' ? 'border-[1px] border-green-700 font-bold text-sm' : 'border-[1px] border-red-700 text-red-600 text-sm'}`}>
                            {alert.message}
                        </div>
                    )}
                    <h1 className="text-bold text-3xl text-center">Sign In</h1>
                    <form className="flex flex-col p-5" onSubmit={handleSubmit}>
                        <input
                            className="mb-5 p-1 bg-gray-700 outline-none rounded text-[14px]"
                            type="Email" name="email" id=""
                            placeholder="Enter Email Address"
                            value={signin.email}
                            onChange={handleChange}
                        />
                        <input
                            className="p-1 bg-gray-700 outline-none rounded text-[14px]"
                            type="password"
                            placeholder="password"
                            name="password"
                            value={signin.password}
                            onChange={handleChange}
                        />
                        <button type="submit" className="bg-red-600 mt-7 p-1 rounded font-bold hover:scale-105 duration-300 text-[13px]">Sign In</button>
                        <div className="flex justify-between items-center text-sm text-gray-500 py-5">
                            <small className=""><input className="mr-2" type="checkbox" name="" id="" />Remember me</small>
                            <small className="">Need help?</small>
                        </div>
                        <small><span className="text-gray-500">Not a Netflix Member?</span>{' '}
                        <Link to='/signup'>Sign up</Link>
                        </small>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
