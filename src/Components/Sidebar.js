import { createContext, useContext, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserStore } from '../zustand/store/cartStore';

const SidebarContext = createContext();

const Sidebar = ({ children }) => {    
    const [expanded, setExpanded] = useState(true);
    const [toggle, setToggle] = useState(false);

    const menuRef = useRef();

    const {user, logout } = useUserStore();

    const navi = useNavigate();

    const handleLogout = (e)=>{
        e.preventDefault();
        logout();
    }

  return (
    <>
        <aside className='h-screen'>
            <nav className='h-full flex flex-col border-r shadow-md bg-slate-100'>
                <div className={`p-2 w-full flex justify-between items-center gap-2 ${expanded ? `flex-row` : `flex-col justify-center`}`}>
                    <img src="" alt="logo" className={`overflow-hidden transition-all w-12`} />
                    <p className={expanded ? `text-xl font-bold` : `hidden`}>AON</p>
                    <button onClick={()=>setExpanded(prev => !prev)} className={`p-2 rounded-lg bg-gray-50 hover:bg-gray-100`}>
                        {expanded ? <FaChevronLeft/> : <FaChevronRight/>}                        
                    </button>
                </div>

                <SidebarContext.Provider value={{expanded}}>
                    <ul className='flex-1 px-3'>{children}</ul>
                </SidebarContext.Provider>

                
                <div className='border-t flex items-center justify-center p-2 cursor-pointer'>
                    
                    <img src="" onClick={ !expanded ? ()=>{setToggle(!toggle)} : null} alt="user" className='rounded-full w-10 h-10'/>
                    <div className={`flex max-w-xs justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
                    `}>
                        <div className='leading-4'>
                            <h1 className='font-semibold'>{user.UserName}</h1>
                            <p className='text-xs'>{user.Email}</p>
                        </div>

                        <div ref={menuRef} className="flex flex-1 justify-end gap-1">
                            <button onClick={()=>{setToggle(!toggle)}}>
                                <IoMdMore size={25}/> 
                            </button> 
                            {
                                toggle?
                                <div className={`absolute flex gap-2 items-center ${ expanded ? `left-[120px]` : `left-[80px]`} bottom-[50px] w-[150px] bg-slate-100 rounded-md shadow-lg`}>
                                    <ul className="flex flex-col items-start w-[100%] overflow-hidden rounded-md">                            
                                        <button onClick={()=>{
                                        navi("/");
                                        }} className="px-3 py-2 text-left w-[100%] hover:bg-gradient-to-tr from-indigo-100 to-indigo-200 hover:text-indigo-800 flex gap-2 items-center"><IoHome/> Home</button>
                                    
                                    <button onClick={handleLogout} className="px-3 py-2 text-left w-[100%] hover:bg-gradient-to-tr from-indigo-100 to-indigo-200 hover:text-indigo-800 flex gap-2 items-center"><RiLogoutCircleRLine/> Logout</button>
                                    </ul>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    </>
  )
}

export default Sidebar


export function SidebarItems({icons, text, active, alert}) {
    const { expanded } = useContext(SidebarContext);
  return (
    <li className={`relative flex items-center py-2 px-4 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active? "bg-gradient-to-tr from-indigo-100 to-indigo-200 text-indigo-800":"hover:bg-indigo-50 text-gray-600"}`}>
        {icons}
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 h-7"}`}>{text}</span>
        {alert && (
            <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded?"":"top-2"}`}/>
        )}

        {!expanded && (
            <div 
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6 w-fit z-50
            bg-indigo-100 text-indigo-800 text-sm invisible opacity-30 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}>{text}</div>
        )}
    </li>
  )
}

SidebarItems.propTypes = {
    icons : PropTypes.any.isRequired,
    text : PropTypes.string.isRequired,
    active : PropTypes.bool.isRequired,
}