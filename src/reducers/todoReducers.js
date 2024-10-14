import { useState } from "react"

const initialData = {
    list : []
}

// const [list, setList] = useState([]);

const todoReducers = (state = initialData, action)=>{
    switch (action.type) {
        case "ADDTODO":
            const { id, data } = action.payload;
            return{
                ...state,
                data : [
                    ...state.list,
                    {
                        id:id,
                        data : data
                    }
                ]
            }
    }
}

export default todoReducers;