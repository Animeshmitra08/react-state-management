import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";
import { AiOutlineFullscreen } from "react-icons/ai";
import UpdateData from '../Components/UpdateData';
import Alert from '../Components/Alert';
import { FaCode } from "react-icons/fa6";

const Employee = () => {

    const [employeeData, setEmployeeData] = useState([]);
    const [singleEmployeeData, setsingleEmployeeData] = useState([]);
    const [show, setShow] = useState(false);
    const [success, setsuccess] = useState("");
    const [error, setError] = useState("");

    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");

    useEffect(() => {
      getEmployeeData();
    }, []);

    async function getEmployeeData() {
        await fetch("https://localhost:7279/api/Employee")
        .then(res => res.json())
        .then(data => setEmployeeData(data));
    }

    async function deleteOperation(id) {
        try {
            const res = await fetch(`https://localhost:7279/api/Employee/Delete/${id}`);
            if (res.ok) {
                setsuccess("Data deleted Successfully"); 
                getEmployeeData();           
                
            }
            else{
                setError("Something went wrong");
            }
        } catch (error) {
            setError(error.message)           
        } 
        setTimeout(() => {
            setsuccess("");
            setError("");
        }, 2000);       
    }

    function onEditClick(id) {
        setShow(true);
        const results = employeeData.find(item => item.id === id);
        setsingleEmployeeData(results);      
    }
    
    
    function closeClick() {
        setShow(false);
    };

    // search and filters...........................................

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleFilterChange = (e) => {
        setFilter(e.target.value);
      };
    
      const filteredData = employeeData
        .filter((item) => {
          if (filter === "All") {
            return true;
          }
          return item.name === filter;
        })
        .filter((item)=>{
            if (filter === "All") {
                return true;
              }
            return item.email === filter;
        })
        .filter((item) => {
          return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .filter((item)=>{
            return item.email.toLowerCase().includes(searchTerm.toLowerCase());
        });


        

  return (
    <>
        <div className='container py-5'>
            {
                success && 
                <Alert head="Alert" textcolor="text-emerald-800" background="bg-emerald-50" bordercolor = "border-emerald-300" message={success}/>
            }
            {
                error && 
                <Alert head="Error" textcolor="text-red-800" background="bg-red-50" bordercolor = "border-red-300" message={error}/>
            }
            <div className="bg-slate-500 flex justify-end items-center gap-4 p-4 mb-2 rounded-lg">
                <div>
                    <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="mr-4 p-2 rounded-lg"
                    />
                    <select value={filter} className="p-2 rounded-lg bg-white" onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="ascendng">Ascendng</option>
                    <option value="descending">Descending</option>
                    </select>
                </div>
                <div>
                    <button className="bg-white p-3 rounded-lg"><FaCode/></button>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Employee Name
                                <button><RiExpandUpDownFill /></button>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                                <button><RiExpandUpDownFill /></button>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                                <button><RiExpandUpDownFill /></button>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Describe You
                                <button><RiExpandUpDownFill /></button>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Recomend Friend
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Frameworks
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Suggestions
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.map((data)=>(
                                <tr key={data.id} className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {data.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {data.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.age}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.describeYou}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.recommendFriend}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.frameworks}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.suggestions}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='text-blue-800' onClick={()=>onEditClick(data.id)}><FaRegEdit size={20}/></button>
                                        <button className='text-red-600' onClick={()=>deleteOperation(data.id)}><MdDelete size={20}/></button>
                                        {/* <button className='text-emerald-600'><AiOutlineFullscreen size={20}/></button> */}
                                    </td>
                                </tr>
                            ))
                        }                        
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
        {
            show ?          
                <UpdateData onClose={closeClick} data={singleEmployeeData || []}/> 
            :null
        }
    </>
  )
}

export default Employee











// <tbody>
//                         {
//                             employeeData.map((data)=>(
//                                 <tr key={data.id} className="bg-white border-b ">
//                                     <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
//                                         {data.name}
//                                     </th>
//                                     <td className="px-6 py-4">
//                                         {data.email}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         {data.age}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         {data.describeYou}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         {data.recommendFriend}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         {data.frameworks}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         {data.suggestions}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         <button className='text-blue-800' onClick={()=>onEditClick(data.id)}><FaRegEdit size={20}/></button>
//                                         <button className='text-red-600' onClick={()=>deleteOperation(data.id)}><MdDelete size={20}/></button>
//                                         {/* <button className='text-emerald-600'><AiOutlineFullscreen size={20}/></button> */}
//                                     </td>
//                                 </tr>
//                             ))
//                         }                        
//                     </tbody>