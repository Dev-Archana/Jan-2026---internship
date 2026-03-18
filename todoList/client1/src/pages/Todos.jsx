import { useEffect, useState } from 'react'


function Todos() {
 const [title,setTitle]=useState("");
 const [todos,setTodos]=useState([]);
 const [page,setPage]=useState(1);
 const loadTodos=async()=>{
    const res=await API.get(`/todos? page=${page}`);
    setTodos(res.data);
    useEffect(()=>{
        loadTodos();
    },[page]);
 };
 const addTodo=async()=>{
    await API.post("/todos",{title});
    setTitle("");
         loadTodos();
 };
 const deleteTodo=async (id)=>{
    await API.delete(`/todos/{id}`);
    loadTodos();
};
const toggeleTodo=async(id)=>{
    await API.patch(`/todos/${id}/toggle`);
    loadTodos();

 }
  return (
    <div>
      <h2>Todos</h2>
      <input type="text"
      value={title} 
      placeholder='Enter Todo'
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
      /><br/>
      <button onClick={addTodo}>Add</button>
{todos.map((todo)=>{
    <div key={todo._id}>
        <span style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.title}</span>
        <button onClick={()=>{
            toggeleTodo(todo._id)
        }}>Toggle</button>
        <button onClick={()=>
            deleteTodo(todo._id)
        }>Delete</button>
    </div>
})}<br/>
<button onClick={()=>setPage(page-1)}>Prev</button>
<button onClick={()=>setPage(page+1)}>Next</button>
    </div>
  )
}

export default Todos
