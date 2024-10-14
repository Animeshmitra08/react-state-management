import React from 'react'

const Card = (props) => {
  return (
    <>
    <div>
        <input type="checkbox" id="react-option" value="" className="hidden peer" required=""/>
        <label htmlFor="react-option" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-slate-50 border-2 border-gray-300 rounded-lg cursor-pointer  peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-100">                           
            <div className="block"> 
                <img className='w-7 h-7 mb-2' src={props.imgLink} alt="react"/> 
                <div className="text-sm font-medium">{props.Hname}</div>
                <div className="text-xs">{props.definition}</div>
            </div>
        </label>
    </div>
    </>
  )
}

export default Card