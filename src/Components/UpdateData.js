import React, {useState} from 'react'
import { IoMdClose } from "react-icons/io";

const UpdateData = ({ onClose, data }) => {
    const [dataItem, setDataItem] = useState(data);
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        age:0,
        describeYou:"",
        recommendFriend:"",
        frameworks:"",
        suggestions:""
    });
    
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const frameworks =[
        {id:1, name : "React", forId : "react", definition: "A JavaScript library htmlFor building user interfaces.", value:"React", imgLink : "https://img.icons8.com/office/50/react.png"},
        {id:2, name : "C", forId : "c", definition: "C is an imperative procedural language.", value:"C", imgLink : "https://img.icons8.com/color/48/c-programming.png"},
        {id:3, name : "Angular", forId : "angular", definition: "A TypeScript-based web application framework.", value:"Angular", imgLink:"https://img.icons8.com/color/48/angularjs.png"},
        {id:4, name : "Java", forId : "java", definition: "A programming language and computing platform.", value:"Java", imgLink:"https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"},
        {id:5, name : "C++", forId : "C++", definition: "A programming language and computing platform.", value:"C++", imgLink:"https://img.icons8.com/color/48/c-plus-plus-logo.png"},
        {id:6, name : "Python", forId : "Python", definition: "A programming language and computing platform.", value:"Python", imgLink:"https://img.icons8.com/color/48/python.png"},
        {id:7, name : "Javascript", forId : "Javascript", definition: "A programming language and computing platform.", value:"Javascript", imgLink:"https://img.icons8.com/color/48/javascript.png"},
        {id:8, name : "C#", forId : "Spring", definition: "A programming language and computing platform.", value:"C#", imgLink:"https://img.icons8.com/color/48/c-sharp-logo-2.png"},
        {id:9, name : "Spring", forId : "Spring", definition: "A programming language and computing platform.", value:"Spring", imgLink:"https://img.icons8.com/color/48/spring-logo.png"},
        {id:10, name : "django", forId : "django", definition: "A programming language and computing platform.", value:"django", imgLink:"https://img.icons8.com/color/48/django.png"},
    ]

    
    function handleChange(e) {
        // const newData = [...dataItems];
        // newData[index][field] = value;
        // setDataItems(newData);
        setDataItem({...dataItem,[e.target.name]:e.target.value});
    }

    function handleCheckboxChange(e) {
        const { name, checked } = e.target;
        if (checked) {
            setFormData((prev)=>({
                ...prev,
                frameworks: prev.frameworks ? `${prev.frameworks}, ${name}` : name
            }));
        } else {
            setFormData((prev)=>({
                ...prev,
                frameworks : prev.frameworks
                .split(", ")
                .filter(item => item !== name)
                .join(", ")
            }))
        }
    }

    const handleRadioChange = (e) => {
        const { value } = e.target;
        setFormData({
          ...formData,
          recommendFriend: value
        });
      };

    const [describeYou] = useState(["Student", "Intern", "Professonal"]);
    const [recommendFriend] = useState(["Yes ", "No ", "Maybe"]);

    async function updateEmployee(e) {
        e.preventDefault();
        console.log(dataItem);
        
        // try {            
        //     const res = await fetch("https://localhost:7279/api/Employee/Update",{
        //         method : "PUT",
        //         body : JSON.stringify(formData),
        //         headers:{
        //             'Content-type' : 'application/json'
        //         }
        //     });            
        //     if (res.ok) {
        //         setSuccess("data submitted");
        //         setFormData({
        //             name:"",
        //             email:"",
        //             age:0,
        //             describeYou:"",
        //             recommendFriend:"",
        //             frameworks:"",
        //             suggestions:""
        //         });                                
        //     }
        //     else{
        //         setError("something went wrong");                
        //     }            
        // } catch (error) {
        //     setError(error);
        // }
        // setTimeout(() => {
        //     setSuccess("");
        //     setError("");
        // }, 3000); 
    }
    


  return (
    <>
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-screen bg-black/40 backdrop-blur-sm">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Update Data
                    </h3>
                    <button onClick={onClose}>
                        <IoMdClose size={20}/>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5">
                   
                        
                    <form className="space-y-4" onSubmit={updateEmployee}>
                    <div className="mb-5">
                        <label htmlFor="empname" className="block mb-2 text-sm font-medium text-gray-900 ">Employee Name</label>
                        <input type="text" id="empname" 
                        name="name"
                        value={dataItem.name}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input type="email" id="email" 
                        name="email"
                        value={dataItem.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 ">Age</label>
                        <input type="number" id="age" name='age' 
                        value={dataItem.age}
                        onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="describeyou" className="block mb-2 text-sm font-medium text-gray-900 ">Describe You</label>
                        <select id="countries" name='describeYou' onChange={handleChange} value={dataItem.describeYou} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="">Select</option>
                            {
                                describeYou.map((d, id)=>(
                                    <option key={id} value={d}>{d}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mb-5">
                        <h3 className="block mb-2 text-sm font-medium text-gray-900 ">Recommend Friend</h3>                
                        <div className="flex">
                            {
                                recommendFriend.map((d,id)=>(
                                    <div key={id} className="flex items-center me-4">
                                        <input id={id} type="radio" value={d} checked={dataItem.recommendFriend === d} onChange={handleRadioChange} name="recommendFriend" className="w-4 h-4  cursor-pointer text-blue-600 bg-gray-100 border-gray-300 "/>
                                        <label htmlFor={id} className="ms-2 text-sm font-medium  cursor-pointer text-gray-900 ">{d}</label>
                                    </div>
                                ))
                            }                    
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3 className="block mb-2 text-sm font-medium text-gray-900 ">Frameworks/libraries/Languages</h3>
                        <div className='grid w-full gap-6 md:grid-cols-3'>
                        {
                            frameworks.map((items)=>(                            
                            <div key={items.id}>
                                <input type="checkbox" id={items.forId} name="frameworks" 
                                value={items.value} checked={dataItem.frameworks === items.value} onChange={handleCheckboxChange} className="hidden peer" required=""/>
                                <label htmlFor={items.forId} className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-slate-50 border-2 border-gray-300 rounded-lg cursor-pointer  peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-100">                           
                                    <div className="block"> 
                                        <img className='w-7 h-7 mb-2' src={items.imgLink} alt="react"/> 
                                        <div className="text-sm font-medium">{items.name}</div>
                                        <div className="text-xs">{items.definition}</div>
                                    </div>
                                </label>
                            </div>
                            ))
                        }
                        </div>
                    </div>

                    
                    <div className="mb-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                        <textarea id="message" rows="4" name='suggestions' value={dataItem?.suggestions} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your suggestions here..."></textarea>
                    </div>


                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default UpdateData