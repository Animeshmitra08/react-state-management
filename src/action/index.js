export const addTodo = (data) => {
    return {
        type : "ADDTODO",
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const removeTodo = () => {
    return {
        type : "REMOVETODO"
    }
}

export const deleteAll = () => {
    return {
        type : "DELETEALL"
    }
}