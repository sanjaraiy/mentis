import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function LogIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
   
  const getTokenFromLocalStorage = () => {
    return localStorage.getItem("token");
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const userLoginHandler = async (e) => {
    e.preventDefault();
     
    console.log(formData);
    
   
    try {
      
      const token = getTokenFromLocalStorage();

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`  
          },
          withCredentials: true  
        }
      );

      
      if (res.status === 200) {
        toast.success(res.data.message);
        setFormData({
          email: '',
          password: '',
        });
         navigate('/dashboard');
      }
    } catch (error) {
      toast.error("Login failed! Please check your credentials.");
      
    }
  };

  return (
    <>
      <section className="bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="#"
            className="flex items-center mb-6 text-2xl font-semibold text-white"
          >
            <img className="w-54 h-54 mr-2" src="/logo.svg" alt="logo" />
          </Link>
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={userLoginHandler}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

               

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-700"
                >
                  Login
                </button>

                <p className="text-sm font-light text-gray-400">
                  Don't have an account?{' '}
                  <Link to={'/register'} className="font-medium hover:underline text-primary-500">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogIn;
