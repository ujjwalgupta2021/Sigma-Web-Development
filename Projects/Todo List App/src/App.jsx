import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

function App() { 
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      setTodos(JSON.parse(todoString));
    }
  }, [])

  const saveToLS = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  }

  const handleEdit = (e, id) => { 
    const t = todos.find(i => i.id === id);
    setTodo(t.todo);

    const updatedTodos = todos.map(item => 
      item.id === id ? { ...item, todo: t.todo } : item
    );
    setTodos(updatedTodos);
    saveToLS(updatedTodos);
  }

  const handleDelete = (e, id) => {  
    const updatedTodos = todos.filter(item => item.id !== id);
    setTodos(updatedTodos);
    saveToLS(updatedTodos);
  }

  const handleAdd = () => {
    const newTodo = { id: uuidv4(), todo, isCompleted: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setTodo("");
    saveToLS(updatedTodos);
  }

  const handleChange = (e) => { 
    setTodo(e.target.value);
  }

  const handleCheckbox = (e) => { 
    const id = e.target.name;  
    const updatedTodos = todos.map(item => 
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
    saveToLS(updatedTodos);
  }

  return (
    <>
      <Navbar/> 
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2">
        <h1 className='font-bold text-center text-xl'>iTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input 
            onChange={handleChange} 
            value={todo} 
            type="text" 
            className='w-full rounded-full px-5 py-1' 
          />
          <button 
            onClick={handleAdd} 
            disabled={todo.length <= 3} 
            className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-500 p-2 py-1 text-sm font-bold text-white rounded-md'
          >
            Save
          </button>
        </div>
        <input className='my-4' onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to display</div>}
          {todos.map(item => (
            (showFinished || !item.isCompleted) && 
            <div key={item.id} className={"todo flex md:w-1/2 my-3 justify-between"}>
              <div className='flex gap-5'> 
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>
                  <FaEdit />
                </button>
                <button onClick={(e) => handleDelete(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>
                  <AiFillDelete />
                </button>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
