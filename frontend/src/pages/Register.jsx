import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
        <section className="bg-gray-900 py-24 w-full h-full md:py-40">
       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link to="#" className="flex items-center mb-6 text-2xl font-semibold  text-white">
          <img className="w-54 h-54 mr-2" src="/logo.svg" alt="logo"/>
            
      </Link>
      <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" method='POST' action="">
                  <div className='flex flex-row justify-between gap-2'>
                  <div>
                      <label for="first_name" className="block mb-2 text-sm font-medium  text-white">First name</label>
                      <input type="text" name="first_name" id="first_name" className="border  block text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="John" required=""/>
                  </div>
                  <div>
                      <label for="last_name" className="block mb-2 text-sm font-medium  text-white">Last name</label>
                      <input type="text" name="last_name" id="last_name" className="border  block  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Deo" required=""/>
                  </div>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium  text-white">Your email</label>
                      <input type="email" name="email" id="email" className="border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  {/* <div>
                      <label for="phone_no" className="block mb-2 text-sm font-medium  text-white">Phone no.</label>
                      <input type="text" name="phone_no" id="phone_no" className="border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div> */}
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium  text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className=" border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" className="block mb-2 text-sm font-medium  text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className=" border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""/>
                  </div>
                  
                  <button type="submit" className="w-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-700">Create an account</button>
                  <p className="text-sm font-light  text-gray-400">
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