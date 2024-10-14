import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useUserStore } from '../zustand/store/cartStore';

const LoginPage = () => {

  const [loginData, setLoginData] = useState({
    userName : "",
    passwords : ""
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login } = useUserStore();


  let name,value;
  function OnHandleChange(e) {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;

    setLoginData({...loginData, [name]:value});
  }

  async function postLoginData(e) {
    e.preventDefault();
    try {
      const res = await fetch("https://localhost:7233/api/User/logindata",{
        method:'POST',
        body: JSON.stringify(loginData),
        headers:{
          'Content-type': 'application/json',
        }
      });      

      if (res.ok) {
        const reContent = await res.text();
        if (reContent) {
            const token = Date.now();
            login(reContent, token);
            setSuccess("Login Successfull");    
            setLoginData({
              userName:"",
              passwords : ""
            }) ;            
            setTimeout(() => {
              navigate('/dashboard/products');
            }, 3000);
        }else {
          setError("Credentials Don't match");
        }        
      } else {
        setError("Request error");
      }
    } catch (error) {
      setError(error.message);
    }

    setTimeout(() => {
      setError("");
      setSuccess("");
    }, 2000);
  }




  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {
        success &&
      <div className="flex items-center p-4 mb-4 text-sm text-emerald-800 border border-emerald-300 rounded-lg bg-emerald-50 " role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span className="sr-only">Success</span>
        <div>
          <span className="font-medium">Alert!</span> {success}
        </div>
      </div>
      }

      {
        error && 
        <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 " role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Danger alert!</span> {error}
          </div>
        </div>
      }

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="POST" onSubmit={postLoginData} className="space-y-6">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  required
                  value={loginData.userName}
                  onChange={OnHandleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="passwords" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="passwords"
                  name="passwords"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={loginData.passwords}
                  onChange={OnHandleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div>
              <button
              onClick={()=>{navigate('/userRegistration')}}
                className="flex w-full justify-center rounded-md bg-indigo-100 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage