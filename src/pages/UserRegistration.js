import React, { useState } from 'react'

const UserRegistration = () => {
    const [formData, setformData] = useState({
        userName : "",
        email : "",
        passwords : "",
        password2 : ""
    });

    let name, value;
    function OnHandleChange(e) {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setformData({...formData, [name]: value});
    }

    async function PostUserData(e) {
        e.preventDefault();
        try {
            
            const res = await fetch("https://localhost:7233/api/User",{
                method:'POST',
                body: JSON.stringify(formData),
                headers:{
                    'Content-type': 'application/json',
                },
            });
            if (res.ok) {
                console.log("data submitted");                
            }
            else{
                console.log("something went wrong");
                
            }
            console.log(formData);
        } catch (error) {
            console.log(error);            
        }
        
    }

    
  return (
    <>
    <section className='container min-h-screen mx-auto flex flex-col gap-5 justify-center items-center px-10'>
        <div className='bg-slate-200 rounded-xl p-10 shadow-lg'>
            <div>
                <h1 className="text-3xl font-bold">Register</h1>
            </div>
            <form className="md:w-[35rem] w-full mt-4" method='POST' onSubmit={PostUserData}>
            <div className="mb-5">
                <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                <input type="text" id="fullname" 
                name="userName"
                value={formData.userName}
                onChange={OnHandleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="fullname" required />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" id="email" 
                name="email"
                value={formData.email}
                onChange={OnHandleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@example.com" required />
            </div>   
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Set Password</label>
                <input type="password" id="password" 
                name="passwords"
                value={formData.passwords}
                onChange={OnHandleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@example.com" required />
            </div>     
            <div className="mb-5">
                <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                <input type="password" id="password2" 
                name="password2"
                value={formData.password2}
                onChange={OnHandleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@example.com" required />
            </div>      
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default UserRegistration