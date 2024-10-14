import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Userdata = () => {
    const [userData, setUserData] = useState([]);
    const [username, setUsername] = useState(null)

    useEffect(() => {
    //   getUserData();
      getData2();
      setUsername(localStorage.getItem('username')); 
      
    }, []);
    
    // async function getUserData() {
    //     await fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then((json) => setUserData(json));        
    // }

    const navigate = useNavigate();

    
    async function getData2() {
        await fetch("https://localhost:7233/api/User")
        .then((response) => response.json())
        .then((json) => setUserData(json));    
    }

    function logOut() {
        setUsername(localStorage.removeItem('username'));
        navigate('/',true);
    }
    


    
  return (
    <>
    <div className="container mx-auto">
        <h1>{username}</h1>
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Fullname
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Username
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    userData.map((data)=>(
                        <tr key={data.id} className="bg-white border-b ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {data.id}
                            </th>
                            <td className="px-6 py-4">
                                {data.email}
                            </td>
                            <td className="px-6 py-4">
                                {data.userName}
                            </td>
                        </tr>
                    ))
                }
                                
            </tbody>
        </table>
    </div>
    <div>
        <button onClick={logOut}>Logout</button>
    </div>
</div>
         
    </>
  )
}

export default Userdata