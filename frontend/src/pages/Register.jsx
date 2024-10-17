import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

function Register() {
    const [formData, setFormData] = useState({
        email: "",
        password1: "",
        password2: ""
    });

  
    const navigate = useNavigate();

    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    
    const userRegisterHandler = async (e) => {
        e.preventDefault();
         
        console.log(formData);
        

       
        // if (password1 !== password2) {
        //     // setErrorMessage("Passwords do not match!");
        //     toast.error("Passwords do not match!");
        //     return;
        // }

        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/register`, formData);

            console.log(res);
            
            if (res.status === 201) {
                toast.success(res.data.message);
                setFormData({
                    email: "",
                    password1: "",
                    password2: ""
                });
                navigate('/login')
            }
        } catch (error) {
            toast.error("Registration failed! Please try again.");
        }
    }

    return (
        <>
            <section className="bg-gray-900 py-24 w-full h-full md:py-8">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
                        <img className="w-54 h-54 mr-2" src="/logo.svg" alt="logo"/>
                    </Link>
                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={userRegisterHandler}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
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
                                    <label htmlFor="password1" className="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input 
                                        type="password" 
                                        name="password1" 
                                        id="password1" 
                                        className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                                        placeholder="••••••••" 
                                        value={formData.password1} 
                                        onChange={handleChange} 
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password2" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                                    <input 
                                        type="password" 
                                        name="password2" 
                                        id="password2" 
                                        className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                                        placeholder="••••••••" 
                                        value={formData.password2} 
                                        onChange={handleChange} 
                                        required
                                    />
                                </div>
                               

                                <button type="submit" className="w-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-700">
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-400">
                                    Already have an account? <Link to={'/login'} className="font-medium hover:underline text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
