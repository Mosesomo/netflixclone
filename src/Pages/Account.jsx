import { useEffect, useState } from 'react';
import profile from '../assets/default.jpg';
import { useAuth } from '../Components/AuthContext';
import requests from '../Request';
import axios from 'axios';

const Account = () => {
  const { user, isAuthenticated } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isAuthenticated()) {
      console.log('Fetching user data for:', user.userId);
      axios.get(`${requests.requestAuthentication}/api/users/${user.userId}`, {
        headers: {
          'Authorization': `Bearer ${user.accessToken}`
        }
      })
      .then(response => {
        console.log('API response:', response.data);
        setUserData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
  }, [isAuthenticated, user]);

  return (
    <div className="w-full h-screen">
      <img className="w-full h-full object-cover absolute" src="https://www.whats-on-netflix.com/wp-content/uploads/2022/08/netflix-logos-cancelations-renewals.webp" alt="" />
      <div className="fixed w-full h-screen top-0 left-0 bg-black/70"></div>
      <div className="w-[100%] absolute flex justify-center py-24 mt-12">
        <div className="w-[300px] lg:w-[500px] md:w-[400px] h-[524px] bg-black/75 p-4 py-10 md:px-9">
          <h1 className="text-bold text-3xl text-center">Update Account</h1>
          <div className="lg:flex gap-5 justify-between items-center">
            <img className="mb-4 mt-6 object-cover h-[196px] rounded" src={profile} alt="default" />
            {userData && (
              <div>
                <p className="font-bold">Email: <small>{userData.email}</small></p>
                <p className="font-bold">Name: <small>{userData.firstName} {userData.lastName}</small></p>
                <p className="font-bold">Phone: <small>{userData.phone}</small></p>
              </div>
            )}
          </div>
          <form className="flex flex-col p-3">
            <input
              className="mb-5 p-1 bg-gray-700 outline-none rounded text-[14px]"
              type="email"
              name="email"
              placeholder="Enter Email Address"
            />
            <input
              className="p-1 bg-gray-700 outline-none rounded text-[14px]"
              type="phone"
              placeholder="Phone"
              name="phone"
            />
            <button type="submit" className="bg-red-600 mt-7 p-1 rounded font-bold hover:scale-105 duration-300 text-[13px]">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
