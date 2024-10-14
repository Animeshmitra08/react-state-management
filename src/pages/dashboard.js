import React, { useEffect, useState } from 'react'
import Sidebar, { SidebarItems } from '../Components/Sidebar';

// icons-------------------------------
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoFolderSharp } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";
import { LuClipboardEdit } from "react-icons/lu";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useUserStore } from '../zustand/store/cartStore';

const Dashboard = () => {  
  const {isAuthenticated} = useUserStore();
  return (
    <>
    {
      isAuthenticated ?
      <section className='flex h-screen'>
        <Sidebar>
          <NavLink to={"employee"}>
            {({isActive})=>(
              <SidebarItems icons={<FaUsers size={20}/>} text="Employee" active={isActive}/>
            )}            
          </NavLink>
          <NavLink to={"register"}>
          {({isActive})=>(
              <SidebarItems active={isActive} icons={<LuClipboardEdit size={20}/>} text="Register"/>
            )}
          </NavLink>
          <NavLink to={"todo"}>
          {({isActive})=>(
              <SidebarItems active={isActive} icons={<LuListTodo size={20}/>} text="Redux Todo"/>
            )}
          </NavLink>  
          <NavLink to={"products"}>
          {({isActive})=>(
              <SidebarItems active={isActive} icons={<TiShoppingCart size={20}/>} text="Zustand Product"/>
            )}
          </NavLink>   
        </Sidebar>
        <div className='bg-gray-200 w-full h-full overflow-y-auto relative'>
            <header className={`p-4 bg-slate-100 w-full h-[4rem] shadow-sm z-20`}>
              <div className="relative w-full h-full flex justify-between px-2 items-center">
                <h1 className="text-blue-600 text-2xl font-bold uppercase">AON Digicon</h1>
                {/* <div className="flex items-center gap-3">
                  <p className="font-semibold">Welcome {user}</p>
                  <button className="border-2 border-blue-500 px-3 py-1 rounded-md hover:bg-blue-200 hover:border-blue-300 font-medium" onClick={logout}>Logout</button>
                </div> */}
              </div>
            </header>
            <main>
              <div className="min-h-screen px-4 overflow-hidden">                
                <Outlet/>
              </div>
            </main>
          </div>
      </section>    
      :
      <section>
        You need to have the access to reach the pages!
      </section>      
    }  
    </>
  )
}

export default Dashboard