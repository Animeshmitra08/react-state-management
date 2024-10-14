// src/components/TodoList.js
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../reducers/todoSlice';
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <>
    <section className="flex flex-col justify-center items-center h-[90vh]">
      <div className="bg-slate-50 rounded-lg p-3 w-2/4">
        <form onSubmit={handleSubmit} className="flex flex-col">          
          <label className="text-xl font-semibold mb-2">Add your todo here</label>
          <textarea rows="4" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Add task here......."></textarea>
          <button type="submit" className="text-emerald-600">Add<IoMdAdd size={20}/></button>
        </form>
      </div>

      <div className="bg-slate-100 p-3 rounded-lg mt-3">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="flex gap-4" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <p className="flex-1">{todo.text}</p>
              <div>
                <button onClick={() => dispatch(toggleTodo(todo.id))}>
                  {
                    todo.completed ? <FaUndoAlt className="text-indigo-600" size={15}/> : <FaCheck className="text-green-500" size={15}/>
                  }
                </button>
                <button className="ml-2" onClick={() => dispatch(deleteTodo(todo.id))}>
                  <MdDelete className="text-red-600"/>
                </button>
              </div>
            </li>
          ))}
      </ul>
      </div>
    </section>
    </>
  );
};

export default Todo;
